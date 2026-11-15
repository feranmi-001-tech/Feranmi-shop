import { createContext, useContext, useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('feranmi-cart', [])
  const [saved, setSaved] = useLocalStorage('feranmi-wishlist', [])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const addItem = (product, size) => {
    setItems((current) => {
      const match = current.find(
        (item) => item.id === product.id && item.size === size,
      )

      if (match) {
        return current.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          quantity: 1,
        },
      ]
    })

    openCart()
  }

  const updateQuantity = (id, size, change) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id, size) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.size === size)),
    )
  }

  const clearCart = () => setItems([])

  const isSaved = (id) => saved.includes(id)

  const toggleSaved = (id) => {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  const count = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = {
    items,
    saved,
    count,
    subtotal,
    isOpen,
    openCart,
    closeCart,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    isSaved,
    toggleSaved,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// A small custom hook so components can read the cart without importing context.
export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside a CartProvider')
  }

  return context
}
