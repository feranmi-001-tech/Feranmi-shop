import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQuantity, removeItem, clearCart } =
    useCart()

  // Close on Escape and stop the page behind the drawer from scrolling.
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeCart()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeCart])

  const shipping = subtotal > 0 && subtotal < 50000 ? 2500 : 0

  return (
    <div className={`cart ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="cart__overlay" onClick={closeCart} />

      <aside
        className="cart__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
      >
        <header className="cart__head">
          <h2>Bag ({items.length})</h2>
          <button
            type="button"
            className="cart__close"
            onClick={closeCart}
            aria-label="Close bag"
          >
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <div className="cart__empty">
            <p>Your bag is empty.</p>
            <Link to="/shop" className="btn btn-dark" onClick={closeCart}>
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart__items">
              {items.map((item) => (
                <li key={`${item.id}-${item.size}`} className="cart__item">
                  <img src={item.image} alt={item.name} className="cart__thumb" />

                  <div className="cart__details">
                    <p className="cart__name">{item.name}</p>
                    <p className="cart__meta">
                      Size {item.size} · {formatPrice(item.price)}
                    </p>

                    <div className="cart__controls">
                      <div className="cart__qty">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>
                        <span aria-live="polite">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart__remove"
                        onClick={() => removeItem(item.id, item.size)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <span className="cart__line-total">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <footer className="cart__foot">
              <div className="cart__row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="cart__row cart__row--muted">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              <div className="cart__row cart__row--total">
                <span>Total</span>
                <span>{formatPrice(subtotal + shipping)}</span>
              </div>

              <button type="button" className="btn btn-dark cart__checkout">
                Checkout
              </button>
              <button type="button" className="cart__clear" onClick={clearCart}>
                Clear bag
              </button>
              <p className="cart__note">
                Student demo store — no payment is taken.
              </p>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
