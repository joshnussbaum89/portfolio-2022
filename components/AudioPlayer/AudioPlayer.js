// Components, hooks
import { useState, useRef } from 'react'

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

// TODO: if user selects prev or next, it should only automatically play next song if a song is already playing
export default function AudioPlayer({ activeIndex }) {
  const [expanded, setExpanded] = useState(false)
  const [songNumber, setSongNumber] = useState(0)
  const audioRef = useRef()

  // Playlist
  const songs = [
    '/patch-of-dirt.mp3',
    '/peace-drink.mp3',
    '/anything-youve-ever-known.mp3',
    '/take-off-your-face.mp3',
  ]

  // Play song
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  // Pause song
  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  // Play currently active song (prev + next song updates state)
  const playCurrentlyActiveSong = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
      audioRef.current.play()
    }
  }

  // Play previous song
  const previousTrack = () => {
    if (songNumber > 0) {
      setSongNumber(songNumber - 1)
    } else {
      setSongNumber(3)
    }
    playCurrentlyActiveSong()
  }

  // Play next song
  const skipTrack = () => {
    if (songNumber < songs.length - 1) {
      setSongNumber(songNumber + 1)
    } else {
      setSongNumber(0)
    }
    playCurrentlyActiveSong()
  }

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
      <TiMediaPlay className={iconStylesLogic} onClick={play} />
      <TiMediaPause className={iconStylesLogic} onClick={pause} />
      <TiMediaRewind className={iconStylesLogic} onClick={previousTrack} />
      <TiMediaFastForward className={iconStylesLogic} onClick={skipTrack} />
      <TiNotesOutline
        className={styles.expandIcon}
        onClick={() => setExpanded(!expanded)}
      />
      <audio ref={audioRef}>
        <source src={songs[songNumber]} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
