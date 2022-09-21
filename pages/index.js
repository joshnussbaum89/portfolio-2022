// Components, hooks
import Head from 'next/head'
import Header from '../components/Header/Header'
import ScrollingNavigation from '../components/ScrollingNavigation/ScrollingNavigation'
import About from '../components/About/About'
import RecentWork from '../components/RecentWork/RecentWork'

export default function Home() {
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
      <ScrollingNavigation />
      <About />
      <RecentWork />
    </>
  )
}
