import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import './Shop.css'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'name', label: 'Name: A to Z' },
]

const tabs = ['All', ...categories]

export default function Shop() {
  const { addItem, saved, isSaved, toggleSaved } = useCart()
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')

  const category = params.get('category') ?? 'All'
  const view = params.get('view') ?? 'all'

  const updateParams = (patch) => {
    const next = new URLSearchParams(params)
    Object.entries(patch).forEach(([key, value]) => {
      if (!value || value === 'All' || value === 'all') next.delete(key)
      else next.set(key, value)
    })
    setParams(next, { replace: true })
  }

  const visibleProducts = useMemo(() => {
    const term = query.trim().toLowerCase()

    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesView = view === 'saved' ? saved.includes(product.id) : true
      const matchesQuery =
        term === '' ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)

      return matchesCategory && matchesView && matchesQuery
    })

    const sorted = [...filtered]
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price)
    if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name))

    return sorted
  }, [category, view, query, sort, saved])

  const reset = () => {
    setQuery('')
    setSort('featured')
    setParams({}, { replace: true })
  }

  return (
    <>
      <section className="page-head">
        <div className="container page-head__inner">
          <span className="eyebrow">{view === 'saved' ? 'Wishlist' : 'The collection'}</span>
          <h1>{view === 'saved' ? 'Saved for later' : 'Shop all pieces'}</h1>
          <p>
            {view === 'saved'
              ? 'Everything you have saved lives here. Tap the heart on any product to add or remove it.'
              : `${products.length} styles across womenswear, menswear, shoes, bags and accessories — produced in small runs and shipped within two days.`}
          </p>
        </div>
      </section>

      <section className="section shop">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Shop by category">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={category === tab}
                className={`tabs__tab ${category === tab ? 'is-active' : ''}`}
                onClick={() => updateParams({ category: tab })}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="shop__toolbar">
            <label className="shop__search">
              <span className="visually-hidden">Search products</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for a dress, shirt, bag…"
              />
            </label>

            <div className="shop__tools">
              <label className="shop__sort">
                <span className="visually-hidden">Sort products</span>
                <select value={sort} onChange={(event) => setSort(event.target.value)}>
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              {view === 'saved' && (
                <button
                  type="button"
                  className="shop__reset"
                  onClick={() => updateParams({ view: null })}
                >
                  View all products
                </button>
              )}
            </div>
          </div>

          <p className="shop__count" aria-live="polite">
            {visibleProducts.length} {visibleProducts.length === 1 ? 'product' : 'products'}
            {saved.length > 0 && ` · ${saved.length} saved`}
          </p>

          {visibleProducts.length === 0 ? (
            <div className="shop__empty">
              <h2>Nothing here yet</h2>
              <p>
                {view === 'saved'
                  ? 'You have not saved anything so far. Tap the heart on a product to keep it here.'
                  : 'No products match that search. Try a different word, or clear the filters.'}
              </p>
              <button type="button" className="btn btn-outline" onClick={reset}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSaved={isSaved(product.id)}
                  onSave={toggleSaved}
                  onAdd={addItem}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
