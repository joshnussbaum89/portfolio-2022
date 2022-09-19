// Components, hooks
import Head from 'next/head'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import RecentWork from '../components/RecentWork/RecentWork'
import useScroll from '../hooks/useScroll'

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  const [handleScroll, elRef] = useScroll()

  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Nussbaum</title>
        <meta
          name="description"
          content="Josh Nussbaum is a freelance web developer specializing in JavaScript and other front end technologies"
        />
        <link rel="icon" href="/hero-background.jpg" />
      </Head>
      <Header handleScroll={handleScroll} />
      <About elRef={elRef} />
      <RecentWork />
    </div>
  )
}
