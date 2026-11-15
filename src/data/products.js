// The product catalogue. Every card on the site is rendered from this array.
// Photography lives in public/images/products as transparent PNG cutouts.

export const products = [
  // ---- Women -------------------------------------------------------------
  {
    id: 'tl-w-01',
    name: 'Ivory Slip Dress',
    category: 'Women',
    price: 25500,
    rating: 4.8,
    reviews: 42,
    tag: 'New',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/images/products/women-slip-dress.png',
    description:
      'A bias-cut slip in heavy satin that skims rather than clings, with adjustable straps and a side slit.',
  },
  {
    id: 'tl-w-02',
    name: 'Polka Dot Midi',
    category: 'Women',
    price: 22500,
    rating: 4.6,
    reviews: 28,
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/images/products/women-polkadot-dress.png',
    description:
      'Fit-and-flare cotton with a fitted bodice and a full skirt that holds its shape all day.',
  },
  {
    id: 'tl-w-03',
    name: 'Sage Tiered Dress',
    category: 'Women',
    price: 24000,
    rating: 4.7,
    reviews: 19,
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/images/products/women-sage-dress.png',
    description:
      'Strapless with a layered, softly structured skirt — the kind of dress that needs no accessories.',
  },
  {
    id: 'tl-w-04',
    name: 'Floral Maxi Gown',
    category: 'Women',
    price: 33000,
    rating: 4.9,
    reviews: 64,
    tag: 'Bestseller',
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/images/products/women-floral-maxi.png',
    description:
      'A floor-length floral with a square neckline and boned bodice, lined through the skirt.',
  },
  {
    id: 'tl-w-05',
    name: 'Ivory Spot Dress',
    category: 'Women',
    price: 26500,
    rating: 4.5,
    reviews: 23,
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/images/products/women-ivory-spot-dress.png',
    description:
      'Sheer-spotted cotton with a nipped waist and covered buttons down the front.',
  },
  {
    id: 'tl-w-06',
    name: 'Tartan Pinafore',
    category: 'Women',
    price: 23000,
    rating: 4.4,
    reviews: 15,
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/images/products/women-tartan-pinafore.png',
    description:
      'Brushed wool-blend tartan with a grosgrain bow and a box-pleated skirt.',
  },
  {
    id: 'tl-w-07',
    name: 'Crimson Panel Dress',
    category: 'Women',
    price: 35000,
    rating: 4.7,
    reviews: 31,
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/images/products/women-crimson-suit.png',
    description:
      'Colour-blocked crepe with contrast sleeves and a clean, straight silhouette.',
  },
  {
    id: 'tl-w-08',
    name: 'Leopard Wrap Dress',
    category: 'Women',
    price: 25000,
    rating: 4.6,
    reviews: 12,
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/images/products/women-leopard-wrap.png',
    description:
      'A true wrap in fluid viscose, with a ruffled shoulder and a tie waist.',
  },

  // ---- Men ---------------------------------------------------------------
  {
    id: 'tl-m-01',
    name: 'Blue Check Shirt',
    category: 'Men',
    price: 19500,
    rating: 4.6,
    reviews: 37,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/images/products/men-blue-check-shirt.png',
    description:
      'Mid-weight brushed cotton check with a button-down collar and a single chest pocket.',
  },
  {
    id: 'tl-m-02',
    name: 'Buffalo Check Overshirt',
    category: 'Men',
    price: 21500,
    rating: 4.8,
    reviews: 51,
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/products/men-buffalo-check-shirt.png',
    description:
      'A heavyweight red buffalo check built to be worn open over a tee all winter.',
  },
  {
    id: 'tl-m-03',
    name: 'Floral Resort Shirt',
    category: 'Men',
    price: 19000,
    rating: 4.7,
    reviews: 26,
    tag: 'New',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/products/men-floral-shirt.png',
    description:
      'Crinkle viscose with a relaxed camp collar — the easiest shirt to pack for a warm trip.',
  },
  {
    id: 'tl-m-04',
    name: 'Teal Plaid Shirt',
    category: 'Men',
    price: 20000,
    rating: 4.5,
    reviews: 18,
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/products/men-teal-plaid-shirt.png',
    description:
      'Soft plaid flannel with a curved hem, cut slightly longer at the back.',
  },

  // ---- Shoes -------------------------------------------------------------
  {
    id: 'tl-s-01',
    name: 'Retro Runner Trainer',
    category: 'Shoes',
    price: 31000,
    rating: 4.9,
    reviews: 88,
    tag: 'Bestseller',
    sizes: ['6', '7', '8', '9', '10', '11'],
    image: '/images/products/shoes-retro-runner.png',
    description:
      'Suede and mesh panels on a cushioned EVA sole — a 70s runner shape with modern comfort.',
  },
  {
    id: 'tl-s-02',
    name: 'Court Leather Sneaker',
    category: 'Shoes',
    price: 33000,
    rating: 4.7,
    reviews: 46,
    sizes: ['6', '7', '8', '9', '10', '11'],
    image: '/images/products/shoes-court-sneaker.png',
    description:
      'Full-grain leather court shoe with a gum sole and a contrast heel tab.',
  },
  {
    id: 'tl-s-03',
    name: 'High-Top Court Sneaker',
    category: 'Shoes',
    price: 37000,
    rating: 4.8,
    reviews: 72,
    sizes: ['6', '7', '8', '9', '10', '11'],
    image: '/images/products/shoes-high-top.png',
    description:
      'The classic high-top, rebuilt in tumbled leather with a padded ankle collar.',
  },
  {
    id: 'tl-s-04',
    name: 'Pointed Leather Heel',
    category: 'Shoes',
    price: 27000,
    rating: 4.4,
    reviews: 21,
    sizes: ['4', '5', '6', '7', '8'],
    image: '/images/products/shoes-pointed-heel.png',
    description:
      'A 70mm pointed heel in soft nappa, lined in leather with a cushioned insole.',
  },
  {
    id: 'tl-s-05',
    name: 'Golden Metallic Heel',
    category: 'Shoes',
    price: 26000,
    rating: 4.5,
    reviews: 17,
    sizes: ['4', '5', '6', '7', '8'],
    image: '/images/products/shoes-golden-heel.png',
    description:
      'Liquid-gold metallic leather on a slim heel — made for evenings that run late.',
  },

  // ---- Bags --------------------------------------------------------------
  {
    id: 'tl-b-01',
    name: 'Structured Blue Tote',
    category: 'Bags',
    price: 37000,
    rating: 4.7,
    reviews: 34,
    sizes: ['One size'],
    image: '/images/products/bag-blue-tote.png',
    description:
      'A rigid tote with rolled handles and a suede lining that fits a 13-inch laptop.',
  },
  {
    id: 'tl-b-02',
    name: 'Tan Leather Hobo',
    category: 'Bags',
    price: 44000,
    rating: 4.8,
    reviews: 41,
    tag: 'New',
    sizes: ['One size'],
    image: '/images/products/bag-tan-leather.png',
    description:
      'Vegetable-tanned leather that darkens with wear, with an internal zip pocket.',
  },
  {
    id: 'tl-b-03',
    name: 'Sky Blue Handle Bag',
    category: 'Bags',
    price: 50000,
    rating: 4.9,
    reviews: 29,
    sizes: ['One size'],
    image: '/images/products/bag-sky-handbag.png',
    description:
      'A top-handle bag in structured calf leather with a detachable shoulder strap.',
  },
  {
    id: 'tl-b-04',
    name: 'White Leather Backpack',
    category: 'Bags',
    price: 35000,
    rating: 4.5,
    reviews: 22,
    sizes: ['One size'],
    image: '/images/products/bag-white-backpack.png',
    description:
      'A slim everyday backpack with a magnetic flap and a padded laptop sleeve.',
  },
  {
    id: 'tl-b-05',
    name: 'Black Mini Tote',
    category: 'Bags',
    price: 40500,
    rating: 4.6,
    reviews: 27,
    sizes: ['One size'],
    image: '/images/products/bag-black-tote.png',
    description:
      'Compact, boxy and unlined — the bag that goes from desk to dinner without fuss.',
  },

  // ---- Accessories -------------------------------------------------------
  {
    id: 'tl-a-01',
    name: 'Round Frame Sunglasses',
    category: 'Accessories',
    price: 17500,
    rating: 4.5,
    reviews: 24,
    sizes: ['One size'],
    image: '/images/products/acc-sunglasses-black.png',
    description:
      'Hand-polished acetate frames with polarised lenses and a protective case.',
  },
  {
    id: 'tl-a-02',
    name: 'Aviator Sunglasses',
    category: 'Accessories',
    price: 19000,
    rating: 4.8,
    reviews: 56,
    tag: 'Bestseller',
    sizes: ['One size'],
    image: '/images/products/acc-sunglasses-classic.png',
    description:
      'Gold-tone aviators with a gradient lens — the pair that suits almost everyone.',
  },
  {
    id: 'tl-a-03',
    name: 'Green Lens Sunglasses',
    category: 'Accessories',
    price: 18000,
    rating: 4.3,
    reviews: 11,
    sizes: ['One size'],
    image: '/images/products/acc-glasses-green.png',
    description:
      'Tinted green lenses set in a thin metal frame, with adjustable nose pads.',
  },
  {
    id: 'tl-a-04',
    name: 'Crystal Drop Earring',
    category: 'Accessories',
    price: 16000,
    rating: 4.6,
    reviews: 14,
    sizes: ['One size'],
    image: '/images/products/acc-earring-crystal.png',
    description:
      'A single emerald-cut crystal drop on a gold-plated hook. Sold as a pair.',
  },
  {
    id: 'tl-a-05',
    name: 'Checker Hoop Earring',
    category: 'Accessories',
    price: 15000,
    rating: 4.4,
    reviews: 9,
    sizes: ['One size'],
    image: '/images/products/acc-earring-oval.png',
    description:
      'Hand-painted resin hoops — light enough to forget you are wearing them.',
  },
]

export const categories = ['Women', 'Men', 'Shoes', 'Bags', 'Accessories']

export const formatPrice = (value) =>
  `₦${value.toLocaleString('en-NG', { maximumFractionDigits: 0 })}`

export const getProduct = (id) => products.find((product) => product.id === id)
