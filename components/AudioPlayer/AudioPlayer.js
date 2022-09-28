// Components, hooks
import { useState } from 'react'

// Styles
import styles from './AudioPlayer.module.css'

// React Icons
import {
  TiMediaPlay,
  TiMediaPause,
  TiMediaFastForward,
  TiMediaRewind,
  TiNotesOutline,
} from 'react-icons/ti'

export default function AudioPlayer({ activeIndex }) {
  const [expanded, setExpanded] = useState(false)

  // TODO: color logic should be connected to activeIndex in index.js
  const colors = [
    `${styles.teal}`,
    `${styles.teal}`,
    `${styles.red}`,
    `${styles.purple}`,
    `${styles.green}`,
  ]

  // Handle icon styles depending on state
  const iconStylesLogic = expanded
    ? `${styles.icon} ${styles.expanded}`
    : styles.icon

  return (
    <div className={`${styles.controls} ${colors[activeIndex]}`}>
      <TiMediaPlay className={iconStylesLogic} />
      <TiMediaPause className={iconStylesLogic} />
      <TiMediaRewind className={iconStylesLogic} />
      <TiMediaFastForward className={iconStylesLogic} />
      <TiNotesOutline
        className={styles.expandIcon}
        onClick={() => setExpanded(!expanded)}
      />
    </div>
  )
}
