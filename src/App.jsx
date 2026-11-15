import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Shop from './pages/Shop.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// Resets the scroll position whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
