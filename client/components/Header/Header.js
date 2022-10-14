// Components
import Link from 'next/link'

// Styles
import styles from './Header.module.css'

export default function Header({ handleScroll }) {
  return (
    <header className={styles.header}>
      <nav>
        <h1 title="Josh Nussbaum">
          <Link href="/">JN</Link>
        </h1>
        <ul>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.greeting}>
        <h2>Hi, I&apos;m Josh</h2>
        <p>
          I&apos;m a web developer and musician with a passion for building
          intuitive web experiences for creative people
        </p>
      </div>
      <Link href="#about">
        <div className={styles.arrow} onClick={handleScroll}></div>
      </Link>
    </header>
  )
}
