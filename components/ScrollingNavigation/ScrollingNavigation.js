// Components
import NavigationDot from '../NavigationDot/NavigationDot'

// Styles
import styles from './ScrollingNavigation.module.css'

// Fixed scrolling navigation dots
export default function ScrollingNavigation({ activeIndex, handleClick }) {
  // Dot data
  const data = [
    {
      id: 0,
      section: '/',
    },
    {
      id: 1,
      section: '#about',
    },
    {
      id: 2,
      section: '#dev',
    },
    {
      id: 3,
      section: '#music',
    },
    {
      id: 4,
      section: '#contact',
    },
  ]

  return (
    <div className={styles.container}>
      {data.map((dot) => {
        return (
          <NavigationDot
            key={dot.id}
            dotId={dot.id}
            section={dot.section}
            activeIndex={activeIndex}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}
