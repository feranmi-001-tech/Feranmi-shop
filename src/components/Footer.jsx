import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <p className="footer__logo">Feranmi Store</p>
          <p className="footer__tagline">
            Small-batch clothing, made to be worn for years rather than seasons.
          </p>
        </div>

        <div className="footer__column">
          <h3>Shop</h3>
          <ul>
            <li>
              <Link to="/shop?category=Women">Women</Link>
            </li>
            <li>
              <Link to="/shop?category=Men">Men</Link>
            </li>
            <li>
              <Link to="/shop?category=Shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/shop?category=Bags">Bags</Link>
            </li>
            <li>
              <Link to="/shop?category=Accessories">Accessories</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/shop?view=saved">Wishlist</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3>Get in touch</h3>
          <ul>
            <li>
              <a href="mailto:hello@feranmistore.com">hello@feranmistore.com</a>
            </li>
            <li>
              <a href="tel:+23400000000">+234 0000 0000</a>
            </li>
            <li>Mon – Fri, 9am – 5pm</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Feranmi Store. Student project.</p>
        <p>Built with React JS · React Router · CSS</p>
      </div>
    </footer>
  )
}
