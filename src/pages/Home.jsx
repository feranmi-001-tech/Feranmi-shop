import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import './Home.css'

const slides = [
  {
    image: '/images/hero-denim.jpg',
    alt: 'Four models wearing layered denim against a pale studio wall',
    eyebrow: 'The denim edit',
    title: 'Denim, cut for real life.',
    copy: 'Washed, worn and built to last — new denim for every body in the studio.',
    cta: 'Discover now',
    to: '/shop?category=Women',
  },
  {
    image: '/images/hero-red.jpg',
    alt: 'Model in a red suit photographed against a deep blue sky',
    eyebrow: 'Autumn statement',
    title: 'Colour that speaks first.',
    copy: 'A handful of saturated pieces to carry you from late summer into winter.',
    cta: 'Shop the edit',
    to: '/shop?category=Women',
  },
  {
    image: '/images/hero-jackets.jpg',
    alt: 'Two models in leather jackets standing against a sunlit wall',
    eyebrow: 'Urban edge',
    title: 'Jackets for the modern wardrobe.',
    copy: 'Leather, denim and wool outerwear made to be worn three seasons a year.',
    cta: 'Shop outerwear',
    to: '/shop?category=Men',
  },
]

const promises = [
  { title: 'Free shipping over ₦50,000', copy: 'Tracked delivery on every order.' },
  { title: '30-day exchanges', copy: 'Swap sizes without the fuss.' },
  { title: 'Made in small batches', copy: '120 units per style, never more.' },
]

export default function Home() {
  const { addItem, isSaved, toggleSaved } = useCart()
  const [active, setActive] = useState(0)
  const [tab, setTab] = useState('Women')

  const slide = slides[active]
  const tabbedProducts = products
    .filter((product) => product.category === tab)
    .slice(0, 8)

  const go = (direction) => {
    setActive((current) => (current + direction + slides.length) % slides.length)
  }

  return (
    <>
      {/* Hero ---------------------------------------------------- */}
      <section className="hero" aria-roledescription="carousel" aria-label="Featured collections">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`hero__slide ${index === active ? 'is-active' : ''}`}
            aria-hidden={index !== active}
          >
            <img src={item.image} alt={item.alt} />
          </div>
        ))}

        <div className="hero__scrim" />

        <div className="container hero__content">
          <div className="hero__copy" key={active}>
            <span className="hero__eyebrow">{slide.eyebrow}</span>
            <h1>{slide.title}</h1>
            <p>{slide.copy}</p>
            <Link to={slide.to} className="btn btn-light">
              {slide.cta}
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="hero__arrow hero__arrow--prev"
          onClick={() => go(-1)}
          aria-label="Previous collection"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          className="hero__arrow hero__arrow--next"
          onClick={() => go(1)}
          aria-label="Next collection"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div className="hero__dots">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className={`hero__dot ${index === active ? 'is-active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
            />
          ))}
        </div>
      </section>

      {/* Welcome ------------------------------------------------- */}
      <section className="welcome">
        <div className="container welcome__inner">
          <div>
            <span className="eyebrow">Welcome to Feranmi Store</span>
            <h2>Clothing made to be worn, not replaced.</h2>
          </div>
          <div>
            <p>
              We are an independent studio making a deliberately small
              collection of everyday pieces — dresses, shirting, bags and
              footwear — cut from natural fabrics and produced in runs of 120.
            </p>
            <Link to="/about" className="text-link">
              Read our story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* New arrivals ------------------------------------------- */}
      <section className="section new-in" id="new-arrivals">
        <div className="container">
          <h2 className="section-title">New Arrivals</h2>

          <div className="tabs" role="tablist" aria-label="Shop by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={tab === category}
                className={`tabs__tab ${tab === category ? 'is-active' : ''}`}
                onClick={() => setTab(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {tabbedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isSaved={isSaved(product.id)}
                onSave={toggleSaved}
                onAdd={addItem}
              />
            ))}
          </div>

          <div className="new-in__more">
            <Link to={`/shop?category=${tab}`} className="text-link">
              View all {tab.toLowerCase()} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Campaign banners --------------------------------------- */}
      <section className="promos">
        <div className="container promos__grid">
          <Link to="/shop?category=Men" className="promo promo--tall">
            <img
              src="/images/promo-couture.jpg"
              alt="Model in a light grey hoodie against a pale wall"
            />
            <div className="promo__copy">
              <span className="promo__eyebrow">Ethereal elegance</span>
              <h3>Where dreams meet couture</h3>
              <span className="btn btn-light">Shop now</span>
            </div>
          </Link>

          <div className="promos__side">
            <Link to="/shop?category=Women" className="promo promo--wide">
              <img
                src="/images/promo-women.jpg"
                alt="Model in a black shirt photographed against a warm backdrop"
              />
              <div className="promo__copy">
                <span className="promo__eyebrow">Radiant reverie</span>
                <h3>Enchanting styles for every woman</h3>
                <span className="btn btn-light">Shop now</span>
              </div>
            </Link>

            <div className="promos__pair">
              <Link to="/shop?category=Shoes" className="promo">
                <img
                  src="/images/promo-shoes.jpg"
                  alt="Model seated on a white plinth wearing white sneakers"
                />
                <div className="promo__copy">
                  <span className="promo__eyebrow">Urban strides</span>
                  <h3>Chic footwear for city living</h3>
                  <span className="btn btn-light">Shop now</span>
                </div>
              </Link>

              <Link to="/shop?category=Bags" className="promo promo--blue">
                <div className="promo__copy promo__copy--blue">
                  <span className="promo__eyebrow">The bag event</span>
                  <h3>Trendsetting bags for her</h3>
                  <strong className="promo__number">50%</strong>
                  <span className="btn btn-light">Shop now</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service strip ------------------------------------------ */}
      <section className="section promises">
        <div className="container promises__grid">
          {promises.map((promise) => (
            <div key={promise.title} className="promise">
              <h3>{promise.title}</h3>
              <p>{promise.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
