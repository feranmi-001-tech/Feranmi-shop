import { useState } from 'react'
import { formatPrice } from '../data/products.js'
import './ProductCard.css'

/**
 * Reusable product tile. The parent passes the product data, whether it is
 * saved, and the handlers for saving and adding it to the bag.
 */
export default function ProductCard({ product, isSaved, onSave, onAdd }) {
  const [size, setSize] = useState(product.sizes[0])

  return (
    <article className="product">
      <div className="product__tile">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="900"
          height="900"
        />

        {product.tag && <span className="product__tag">{product.tag}</span>}

        <button
          type="button"
          className={`product__save ${isSaved ? 'is-saved' : ''}`}
          onClick={() => onSave(product.id)}
          aria-pressed={isSaved}
          aria-label={isSaved ? `Remove ${product.name} from wishlist` : `Save ${product.name}`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={isSaved ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.5 3c0 5-7.5 9.4-7.5 9.4Z" />
          </svg>
        </button>

        <div className="product__quick">
          <div className="product__sizes" role="group" aria-label="Choose a size">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                className={`product__size ${size === option ? 'is-active' : ''}`}
                onClick={() => setSize(option)}
                aria-pressed={size === option}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="product__add"
            onClick={() => onAdd(product, size)}
          >
            Add to bag
          </button>
        </div>
      </div>

      <div className="product__info">
        <p className="product__category">{product.category}</p>
        <div className="product__line">
          <h3 className="product__name">{product.name}</h3>
          <span className="product__price">{formatPrice(product.price)}</span>
        </div>
        <p className="product__rating">
          <span aria-hidden="true">★★★★★</span>
          <span className="product__reviews">
            {product.rating} ({product.reviews})
          </span>
        </p>
      </div>
    </article>
  )
}
