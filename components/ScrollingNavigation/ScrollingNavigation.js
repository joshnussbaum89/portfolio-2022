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
      section: 'home',
      color: '#0ca5ab',
    },
    {
      id: 1,
      section: 'about',
      color: '#0ca5ab',
    },
    {
      id: 2,
      section: 'web development',
      color: '#de3726',
    },
    {
      id: 3,
      section: 'music',
      color: '#1e1e1e',
    },
    {
      id: 4,
      section: 'contact',
      color: '#7bc19f',
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
            activeIndex={activeIndex}
            handleClick={handleClick}
          />
        )
      })}
    </div>
  )
}
