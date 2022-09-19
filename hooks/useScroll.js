import { useRef } from 'react'

/**
 * Scroll to specific element on page
 * @returns "handleScroll" callback function and "elRef" ref for the element to scroll to
 */
export default function useScroll() {
  const elRef = useRef(null)
  const handleScroll = () => elRef.current.scrollIntoView()

  return [handleScroll, elRef]
}
