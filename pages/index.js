// Components
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import ScrollingNavigation from '../components/ScrollingNavigation/ScrollingNavigation'
import About from '../components/About/About'
import RecentWork from '../components/RecentWork/RecentWork'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [aboutPosition, setAboutPosition] = useState(0)
  const [devPosition, setDevPosition] = useState(0)
  const [musicPosition, setMusicPosition] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  // Set scrollY value
  useEffect(() => {
    const updatePosition = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  // Track section locations for scrolling logic + styling updates
  const trackAboutPosition = (element) => {
    if (!element) return
    setAboutPosition(element.getBoundingClientRect().top)
    aboutPosition < 100 ? setActiveIndex(1) : setActiveIndex(0)
  }
  const trackDevPosition = (element) => {
    if (!element) return
    setDevPosition(element.getBoundingClientRect().top)
    if (devPosition < 100) setActiveIndex(2)
  }
  const trackMusicPosition = (element) => {
    if (!element) return
    setMusicPosition(element.getBoundingClientRect().top)
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
      <ScrollingNavigation activeIndex={activeIndex} />
      <About trackAboutPosition={trackAboutPosition} />
      <RecentWork
        trackDevPosition={trackDevPosition}
        trackMusicPosition={trackMusicPosition}
      />
    </>
  )
}
