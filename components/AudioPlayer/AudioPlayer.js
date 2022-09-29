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
  const [trackNumber, setTrackNumber] = useState(0)
  const [trackPlaying, setTrackPlaying] = useState(false)
  const [trackChanged, setTrackChanged] = useState(false)
  const audioRef = useRef()

  // Full track list
  const songs = [
    {
      title: 'Rover Rover - Patch of Dirt',
      filePath: '/patch-of-dirt.mp3',
    },
    {
      title: 'Rover Rover - Peace Drink',
      filePath: '/peace-drink.mp3',
    },
    {
      title: "Rover Rover - Anything You've Ever Known",
      filePath: '/anything-youve-ever-known.mp3',
    },
    {
      title: 'Josh Nussbaum - Take Off Your Face',
      filePath: '/take-off-your-face.mp3',
    },
  ]

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

  // Play song
  const play = () => {
    if (audioRef.current) {
      if (!trackPlaying) {
        audioRef.current.play()
        setTrackPlaying(true)
        setTrackChanged(true)
        setTimeout(() => {
          setTrackChanged(false)
        }, 5000)
      }
    }
  }

  // Pause song
  const pause = () => {
    if (audioRef.current) {
      if (trackPlaying) {
        audioRef.current.pause()
        setTrackPlaying(false)
        setTrackChanged(false)
      }
    }
  }

  // Play currently active song (prev + next song updates state)
  const playCurrentlyActiveSong = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
      audioRef.current.play()
      setTrackPlaying(true)
      setTrackChanged(true)
      setTimeout(() => {
        setTrackChanged(false)
      }, 5000)
    }
  }

  // Play previous song
  const previousTrack = () => {
    if (trackNumber > 0) {
      setTrackNumber(trackNumber - 1)
    } else {
      setTrackNumber(3)
    }
    playCurrentlyActiveSong()
  }

  // Play next song
  const skipTrack = () => {
    if (trackNumber < songs.length - 1) {
      setTrackNumber(trackNumber + 1)
    } else {
      setTrackNumber(0)
    }
    playCurrentlyActiveSong()
  }

  return (
    <>
      <div className={`${styles.controls} ${colors[activeIndex]}`}>
        <TiMediaPlay className={iconStylesLogic} onClick={play} />
        <TiMediaPause className={iconStylesLogic} onClick={pause} />
        <TiMediaRewind className={iconStylesLogic} onClick={previousTrack} />
        <TiMediaFastForward className={iconStylesLogic} onClick={skipTrack} />
        <TiNotesOutline
          className={
            trackPlaying
              ? `${styles.expandIcon} ${styles.playing} ${colors[activeIndex]}`
              : styles.expandIcon
          }
          onClick={() => setExpanded(!expanded)}
        />
        <audio ref={audioRef}>
          <source src={songs[trackNumber].filePath} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <p
        className={
          trackPlaying && trackChanged
            ? `${styles.trackTitle} ${styles.show}`
            : `${styles.trackTitle}`
        }
        onAnimationEnd={() => setTrackPlaying(!trackPlaying)}
      >
        {songs[trackNumber].title}
      </p>
    </>
  )
}
