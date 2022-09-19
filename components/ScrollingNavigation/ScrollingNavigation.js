// Components
import { useState } from 'react'

// Styles
import styles from './ScrollingNavigation.module.css'

export default function ScrollingNavigation() {
  const [activeIndex, setActiveIndex] = useState(null)
  
  const data = [
    {
      id: 0,
      section: 'home',
      color: '#0ca5ab',
      class: `${styles.teal}`,
    },
    {
      id: 1,
      section: 'about',
      color: '#0ca5ab',
      class: `${styles.teal}`,
    },
    {
      id: 2,
      section: 'web development',
      color: '#de3726',
      class: `${styles.red}`,
    },
    {
      id: 3,
      section: 'music',
      color: '#1e1e1e',
      class: `${styles.purple}`,
    },
    {
      id: 4,
      section: 'contact',
      color: '#7bc19f',
      class: `${styles.green}`,
    },
  ]

  const handleClick = (key) => setActiveIndex(key)

  return (
    <div className={styles.container}>
      {data.map((dot) => {
        return (
          <div
            className={
              activeIndex === dot.id ? `${styles.dot} ${dot.class}` : styles.dot
            }
            key={dot.id}
            onClick={() => handleClick(dot.id)}
          ></div>
        )
      })}
    </div>
  )
}
