"""Build every image used by the Feranmi Store storefront.

    python3 scripts/build-images.py

Lifestyle photography comes from Unsplash (free to use, no attribution
required). Product photography comes from the DummyJSON demo store catalogue,
shot on white; the script cuts the white background away so each garment sits
on the light grey product tile used in the UI.

The generated files live in public/images and are committed, so the app runs
without network access.
"""
import os
import urllib.parse
import urllib.request
from collections import deque

from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "public", "images")
PROD = os.path.join(IMG, "products")
os.makedirs(PROD, exist_ok=True)

UA = {"User-Agent": "Mozilla/5.0"}

LIFESTYLE = [
    # file,                unsplash photo id,          width, height
    ("hero-denim.jpg", "1696392322523-37379e6808ca", 2000, 1150),
    ("hero-red.jpg", "1662532577856-e8ee8b138a8b", 2000, 1150),
    ("hero-jackets.jpg", "1731505103716-7ee6fa96dee5", 2000, 1150),
    ("promo-couture.jpg", "1647218947427-d783309440d2", 900, 1200),
    ("promo-women.jpg", "1612731486606-2614b4d74921", 1100, 720),
    ("promo-shoes.jpg", "1638265499174-62c2cb29137a", 900, 700),
    ("studio-rail.jpg", "1576995853123-5a10305d93c0", 1400, 900),
    ("studio-rail-2.jpg", "1693580847464-ffdd57670827", 800, 1000),
]

# output file name -> dummyjson "category/slug"
PRODUCTS = {
    "women-slip-dress": "tops/gray-dress",
    "women-polkadot-dress": "tops/blue-frock",
    "women-sage-dress": "tops/short-frock",
    "women-floral-maxi": "womens-dresses/black-women's-gown",
    "women-ivory-spot-dress": "womens-dresses/dress-pea",
    "women-tartan-pinafore": "tops/tartan-dress",
    "women-crimson-suit": "womens-dresses/marni-red-&-black-suit",
    "women-leopard-wrap": "tops/girl-summer-dress",
    "men-blue-check-shirt": "mens-shirts/blue-&-black-check-shirt",
    "men-buffalo-check-shirt": "mens-shirts/man-plaid-shirt",
    "men-floral-shirt": "mens-shirts/man-short-sleeve-shirt",
    "men-teal-plaid-shirt": "mens-shirts/men-check-shirt",
    "shoes-retro-runner": "mens-shoes/puma-future-rider-trainers",
    "shoes-court-sneaker": "mens-shoes/sports-sneakers-off-white-&-red",
    "shoes-high-top": "mens-shoes/nike-air-jordan-1-red-and-black",
    "shoes-pointed-heel": "womens-shoes/calvin-klein-heel-shoes",
    "shoes-golden-heel": "womens-shoes/golden-shoes-woman",
    "bag-blue-tote": "womens-bags/blue-women's-handbag",
    "bag-tan-leather": "womens-bags/heshe-women's-leather-bag",
    "bag-sky-handbag": "womens-bags/prada-women-bag",
    "bag-white-backpack": "womens-bags/white-faux-leather-backpack",
    "bag-black-tote": "womens-bags/women-handbag-black",
    "acc-sunglasses-black": "sunglasses/black-sun-glasses",
    "acc-sunglasses-classic": "sunglasses/classic-sun-glasses",
    "acc-glasses-green": "sunglasses/green-and-black-glasses",
    "acc-earring-crystal": "womens-jewellery/green-crystal-earring",
    "acc-earring-oval": "womens-jewellery/green-oval-earring",
}


def download(url, dest):
    if os.path.exists(dest):
        return dest
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as response, open(dest, "wb") as out:
        out.write(response.read())
    return dest


def fetch_lifestyle():
    for name, photo_id, width, height in LIFESTYLE:
        dest = os.path.join(IMG, name)
        url = (
            f"https://images.unsplash.com/photo-{photo_id}"
            f"?w={width}&h={height}&fit=crop&crop=faces,entropy&q=80&fm=jpg"
        )
        download(url, dest)
        image = Image.open(dest).convert("RGB")
        image.save(dest, "JPEG", quality=82, optimize=True, progressive=True)
        print("lifestyle", name, image.size, os.path.getsize(dest) // 1024, "KB")


def strip_white(source, dest, threshold=238):
    """Flood fill the near-white studio background to transparent."""
    image = Image.open(source).convert("RGBA")
    width, height = image.size
    pixels = image.load()
    alpha = Image.new("L", (width, height), 255)
    alpha_px = alpha.load()

    def is_background(x, y):
        r, g, b, _ = pixels[x, y]
        return r > threshold and g > threshold and b > threshold

    seen = bytearray(width * height)
    queue = deque()

    for x in range(width):
        for y in (0, height - 1):
            if is_background(x, y) and not seen[y * width + x]:
                seen[y * width + x] = 1
                queue.append((x, y))
    for y in range(height):
        for x in (0, width - 1):
            if is_background(x, y) and not seen[y * width + x]:
                seen[y * width + x] = 1
                queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        alpha_px[x, y] = 0
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < width and 0 <= ny < height:
                if not seen[ny * width + nx] and is_background(nx, ny):
                    seen[ny * width + nx] = 1
                    queue.append((nx, ny))

    alpha = alpha.filter(ImageFilter.GaussianBlur(0.6))
    image.putalpha(alpha)

    box = alpha.getbbox()
    if box:
        image = image.crop(box)

    side = int(max(image.size) * 1.12)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(image, ((side - image.width) // 2, (side - image.height) // 2), image)
    canvas.resize((900, 900), Image.LANCZOS).save(dest, "PNG", optimize=True)


def fetch_products():
    cache = os.path.join(ROOT, ".cache", "product-source")
    os.makedirs(cache, exist_ok=True)

    for name, path in PRODUCTS.items():
        raw = os.path.join(cache, f"{name}.webp")
        url = (
            "https://cdn.dummyjson.com/product-images/"
            + urllib.parse.quote(path, safe="/")
            + "/1.webp"
        )
        download(url, raw)
        dest = os.path.join(PROD, f"{name}.png")
        strip_white(raw, dest)
        print("product", name, os.path.getsize(dest) // 1024, "KB")


if __name__ == "__main__":
    fetch_lifestyle()
    fetch_products()
    print("done")
