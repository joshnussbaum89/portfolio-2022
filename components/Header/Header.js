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
        src={heroImage}
        className={styles.image}
        placeholder="blur"
        priority="true"
        quality={100}
        alt="Birds flying in front of a beautiful sunset"
      />
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
          creative things for creative people
        </p>
      </div>
      <Link href="#about">
        <div className={styles.arrow} onClick={handleScroll}></div>
      </Link>
    </header>
  )
}
