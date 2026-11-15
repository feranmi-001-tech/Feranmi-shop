import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
]

function Icon({ name }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'user') {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </svg>
    )
  }

  if (name === 'search') {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </svg>
    )
  }

  if (name === 'heart') {
    return (
      <svg {...common}>
        <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.5 3c0 5-7.5 9.4-7.5 9.4Z" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, saved, openCart } = useCart()
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <nav
          id="primary-navigation"
          className={`navbar__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'is-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/" className="navbar__brand" aria-label="Feranmi Store home">
          Feranmi Store
        </Link>

        <div className="navbar__tools">
          <Link to="/contact" className="navbar__icon" aria-label="Account and help">
            <Icon name="user" />
          </Link>
          <Link to="/shop" className="navbar__icon" aria-label="Search the shop">
            <Icon name="search" />
          </Link>
          <Link
            to="/shop?view=saved"
            className="navbar__icon navbar__icon--wish"
            aria-label={`Wishlist, ${saved.length} saved`}
          >
            <Icon name="heart" />
            {saved.length > 0 && (
              <span className="navbar__count">{saved.length}</span>
            )}
          </Link>
          <button
            type="button"
            className="navbar__icon navbar__icon--bag"
            onClick={openCart}
            aria-label={`Shopping bag, ${count} items`}
          >
            <Icon name="bag" />
            <span className="navbar__count">{count}</span>
          </button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`navbar__bar ${menuOpen ? 'is-open' : ''}`} />
          <span className={`navbar__bar ${menuOpen ? 'is-open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
