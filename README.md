# Feranmi Store — Responsive Clothing Store

A responsive React JS storefront for **Feranmi Store**, a small-batch clothing
business. The site introduces the brand, presents its collection with real
product photography, and lets visitors filter, search, save and add items to a
shopping bag.

Built for the New Horizon *React JS Web Development Project Assignment* using
React, React Router and plain external CSS.

## Project Description

Feranmi Store sells womenswear, menswear, shoes, bags and accessories. The
application has four pages:

- **Home** — full-bleed campaign carousel (three slides with previous/next and
  dot controls), a welcome introduction, a tabbed *New Arrivals* grid, a
  four-panel campaign mosaic and a service strip.
- **About** — studio photography, the brand's background, mission/vision/values,
  a milestone timeline and key numbers.
- **Shop** — all 27 products in a filterable grid with category tabs, live
  search, sorting, a wishlist view and a quick-add panel on each product.
- **Contact** — sample contact details and a validated contact form that
  confirms submission on screen.

A slide-out shopping bag (quantity controls, shipping threshold, `localStorage`
persistence) is available from every page, and the wishlist is shared between
the header counter and the shop's saved view.

## Technologies Used

- React 18 (functional components and hooks)
- React Router 6 (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`,
  `useSearchParams`)
- Vite (dev server and build tool)
- Plain external CSS: custom properties, Flexbox, CSS Grid, media queries
- `localStorage` for the bag and wishlist

## React Concepts Demonstrated

| Concept | Where |
| --- | --- |
| Project structure (`src` / `public`) | Code in `src/`; photography and favicon in `public/` |
| Functional components | Everything in `src/components` and `src/pages` |
| Reusable components with props | `ProductCard` (Home + Shop), `Navbar`, `Footer`, `CartDrawer` |
| JSX expressions and `className` | Conditional classes on tabs, nav links, saved hearts |
| `useState` | Carousel index, active category tab, search text, sort order, selected size, form fields and errors |
| `useEffect` | Mobile menu closing on navigation, scroll reset, cart persistence, Escape key and body scroll lock |
| `useContext` | `CartContext` shares bag + wishlist with the header, cards, drawer and shop |
| Custom hooks | `useLocalStorage` (wraps `useState` + `useEffect`) |
| Event handling | `onClick`, `onChange`, `onSubmit` across the carousel, tabs, filters, card quick-add and form |
| Controlled inputs and validation | `Contact` validates name, email, subject and message, then shows feedback |
| `useMemo` | Filters and sorts the product list once per change |
| React Router | Page routing, active nav state, deep links such as `/shop?category=Shoes` and `/shop?view=saved` |
| `.map()` and array methods | Products, categories, slides, banners, cart lines (`filter`, `reduce`, `sort` also used) |
| Responsive design | Grid/Flexbox layouts with breakpoints at 1080/900/860/820/700/640/560/480/420/400 px |

## Installation

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application

```bash
npm run dev
```

Vite prints a local URL (by default <http://localhost:3000>).

Production build and preview:

```bash
npm run build
npm run preview
```

## Project Structure

```
feranmi-store/
├── public/
│   ├── images/
│   │   ├── products/          # 27 transparent product cutouts (PNG)
│   │   ├── hero-*.jpg         # carousel photography
│   │   ├── promo-*.jpg        # campaign mosaic photography
│   │   └── studio-*.jpg       # about-page photography
│   ├── favicon.svg
│   └── _redirects             # Netlify SPA fallback
├── scripts/
│   └── build-images.py        # regenerates the image set (optional)
├── src/
│   ├── components/            # Navbar, Footer, ProductCard, CartDrawer (+ CSS)
│   ├── context/CartContext.jsx
│   ├── data/products.js
│   ├── hooks/useLocalStorage.js
│   ├── pages/                 # Home, Shop, About, Contact, NotFound (+ CSS)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── vite.config.js
```

`public/` holds files served as-is; `src/` holds everything Vite bundles.
`index.html` loads `src/main.jsx`, which mounts `<App />` into `#root`;
`App.jsx` sets up the router, shared layout and cart provider.

## Photography

- **Lifestyle and campaign photos** come from [Unsplash](https://unsplash.com)
  (Unsplash License — free to use). They are downloaded into `public/images`.
- **Product photos** come from the [DummyJSON](https://dummyjson.com) demo
  store catalogue. `scripts/build-images.py` downloads each shot, removes the
  white studio background and saves a transparent PNG sized for the product
  tiles.

All files are committed, so the app needs no network access to run or host.
Re-running the script is only needed if you want to refresh the assets:

```bash
python3 scripts/build-images.py   # requires Pillow
```

## Deployment

The build output is a static site:

- **Netlify** — build `npm run build`, publish `dist`. `public/_redirects`
  keeps React Router routes working on refresh.
- **Vercel** — import the repo; Vite is detected and `vercel.json` adds the
  rewrite for client-side routes.
- **Render** — Static Site with build `npm run build`, publish `dist`.

## Notes

Products, prices, contact details and reviews are sample content created for
this assignment. No payment is processed and the contact form does not send
data anywhere.
