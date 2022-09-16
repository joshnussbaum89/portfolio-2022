// Components
import Head from 'next/head'
import About from '../components/About/About'
import Header from '../components/Header/Header'

// Styles
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Nussbaum</title>
        <meta
          name="description"
          content="Josh Nussbaum is a freelance web developer specializing in JavaScript and other front end technologies"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <About />
    </div>
  )
}
