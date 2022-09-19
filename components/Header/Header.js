// Components
import Image from 'next/future/image'
import Link from 'next/link'

// Styles
import styles from './Header.module.css'

// Images
import heroImage from '../../public/hero-background.jpg'

export default function Header({ handleScroll }) {
  return (
    <header className={styles.header}>
      <Image
        className={styles.image}
        src={heroImage}
        alt="Birds flying in front of a beautiful sunset"
        placeholder="blur"
        priority="true"
        quality={100}
      />
      <nav>
        <h1 title="Josh Nussbaum">
          <Link href="/">JN</Link>
        </h1>
        <ul>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.greeting}>
        <h2>Hi, I&apos;m Josh</h2>
        <p>
          I&apos;m a web developer and musician with a passion for building
          creative things for creative people
        </p>
      </div>
      <div className={styles.arrow} onClick={handleScroll}></div>
    </header>
  )
}
