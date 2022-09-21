// Styles
import Link from 'next/link'
import styles from './NavigationDot.module.css'

export default function NavigationDot({ dotId, section, activeIndex }) {
  const colors = [
    `${styles.teal}`,
    `${styles.teal}`,
    `${styles.red}`,
    `${styles.purple}`,
    `${styles.green}`,
  ]

  // When user clicks navigation dot, style dot and navigate to section
  return (
    <Link href={section}>
      <div
        className={
          activeIndex === dotId ? `${styles.dot} ${colors[dotId]}` : styles.dot
        }
      ></div>
    </Link>
  )
}
