// Styles
import styles from './NavigationDot.module.css'

export default function NavigationDot({ dotId, activeIndex, handleClick }) {
  const colors = [
    `${styles.teal}`,
    `${styles.teal}`,
    `${styles.red}`,
    `${styles.purple}`,
    `${styles.green}`,
  ]

  // When user clicks navigation dot, style dot and navigate to section
  return (
    <div
      className={
        activeIndex === dotId ? `${styles.dot} ${colors[dotId]}` : styles.dot
      }
      onClick={() => handleClick(dotId)}
    ></div>
  )
}
