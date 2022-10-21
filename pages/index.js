// Components, Hooks
import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import ScrollingNavigation from '../components/ScrollingNavigation/ScrollingNavigation'
import AudioPlayer from '../components/AudioPlayer/AudioPlayer'
import RecentWork from '../components/RecentWork/RecentWork'
import useScrollPosition from '../hooks/useScrollPosition'
import Footer from '../components/Footer/Footer'

export default function Home() {
  const [workPosition, setWorkPosition] = useState(0)
  const [contactPosition, setContactPosition] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  // Use scrollY value
  useScrollPosition()

  // Track section ref locations for scrolling logic + styling updates
  const trackWorkPosition = (element) => {
    if (!element) return
    setWorkPosition(element.getBoundingClientRect().top)
    workPosition < 300 ? setActiveIndex(1) : setActiveIndex(0)
  }
  const trackContactPosition = (element) => {
    if (!element) return
    setContactPosition(element.getBoundingClientRect().top)
    if (contactPosition < 300) setActiveIndex(2)
  }

  return (
    <>
      <Head>
        <title>Josh Nussbaum</title>
        <meta
          name="description"
          content="Web developer and musician currently residing in Madison, WI"
        />
        <meta
          name="keywords"
          content="web developer, web designer, web development, musician, music, guitarist, guitar"
        />
        <meta property="og:title" content="Josh Nussbaum" />
        <meta
          property="og:url"
          content="https://portfolio-six-theta-30.vercel.app"
        />
        <meta
          property="og:description"
          content="Web developer and musician currently residing in Madison, WI"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://portfolio-six-theta-30.vercel.app/hero-background.jpg"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@Joshnussbaum" />
        <meta property="twitter:creator" content="@Joshnussbaum" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <ScrollingNavigation activeIndex={activeIndex} />
      <AudioPlayer activeIndex={activeIndex} />
      <main>
        <RecentWork trackWorkPosition={trackWorkPosition} />
      </main>
      <Footer trackContactPosition={trackContactPosition} />
    </>
  )
}
