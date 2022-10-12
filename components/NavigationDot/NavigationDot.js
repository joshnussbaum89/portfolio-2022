// Styles
import Link from 'next/link'
import styles from './NavigationDot.module.css'

export default function NavigationDot({ dotId, section, activeIndex }) {
  // When user clicks navigation dot, style dot and navigate to section
  return (
    <Link href={section}>
      <div
        className={
          activeIndex === dotId ? `${styles.dot} ${styles.active}` : styles.dot
        }
      ></div>
    </Link>
  )
}
