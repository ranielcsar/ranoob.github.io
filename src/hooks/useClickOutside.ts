import { RefObject, useEffect } from 'react'

export const useClickOutside = (ref: RefObject<any>, callback: () => void) => {
  const handleClick = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref])
}
