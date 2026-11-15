import { useEffect, useState } from 'react'

/**
 * A custom hook that behaves like useState but persists its value in
 * localStorage, so a shopper's bag survives a page refresh.
 */
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage can be unavailable (private mode); the app still works in memory.
    }
  }, [key, value])

  return [value, setValue]
}
