import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container notfound__inner">
        <span className="eyebrow">Error 404</span>
        <h1>This page has gone out of stock</h1>
        <p>
          The link you followed does not exist. The collection, however, is still
          very much here.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="btn btn-dark">
            Back to home
          </Link>
          <Link to="/shop" className="btn btn-outline">
            Shop the collection
          </Link>
        </div>
      </div>
    </section>
  )
}
