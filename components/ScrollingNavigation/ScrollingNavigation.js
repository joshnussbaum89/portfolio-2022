// Components
import { useState } from 'react'
import NavigationDot from '../NavigationDot/NavigationDot'

// Styles
import styles from './ScrollingNavigation.module.css'

// Fixed scrolling navigation dots
export default function ScrollingNavigation() {
  const [activeIndex, setActiveIndex] = useState(0)

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

  // User clicks dot > update 'activeIndex'
  const handleClick = (key) => setActiveIndex(key)

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
