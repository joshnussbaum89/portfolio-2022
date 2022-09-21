// Components
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import ScrollingNavigation from '../components/ScrollingNavigation/ScrollingNavigation'
import About from '../components/About/About'
import RecentWork from '../components/RecentWork/RecentWork'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [aboutPosition, setAboutPosition] = useState(0)
  const [devPosition, setDevPosition] = useState(0)
  const [musicPosition, setMusicPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY))
    return () =>
      window.removeEventListener('scroll', () => setScrollY(window.scrollY))
  }, [])

  const handleAboutPosition = (el) => {
    if (!el) return
    setAboutPosition(el.getBoundingClientRect().top)

    if (aboutPosition < 100) {
      setActiveIndex(1)
    } else {
      setActiveIndex(0)
    }
  }

  const handleDevPosition = (el) => {
    if (!el) return
    setDevPosition(el.getBoundingClientRect().top)
    if (devPosition < 100) setActiveIndex(2)
  }

  const handleMusicPosition = (el) => {
    if (!el) return
    setMusicPosition(el.getBoundingClientRect().top)
    if (musicPosition < 100) setActiveIndex(3)
  }

  return (
    <>
      <Head>
        <title>Josh Nussbaum</title>
        <meta
          name="description"
          content="Josh Nussbaum is a freelance web developer specializing in JavaScript and other front end technologies"
        />
        <link rel="icon" href="/hero-background.jpg" />
      </Head>
      <Header />
      <ScrollingNavigation
        activeIndex={activeIndex}
        handleClick={(key) => setActiveIndex(key)}
      />
      <About handleAboutPosition={handleAboutPosition} />
      <RecentWork
        handleDevPosition={handleDevPosition}
        handleMusicPosition={handleMusicPosition}
      />
    </>
  )
}
