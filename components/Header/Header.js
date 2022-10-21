// Components
import Image from 'next/future/image'
import Link from 'next/link'

// Styles
import styles from './Header.module.css'
import heroImage from '../../public/hero-background.jpg'

export default function Header({ handleScroll }) {
  return (
    <>
      <header className={styles.header}>
        <Image
          src={heroImage}
          className={styles.image}
          quality={100}
          width={1024}
          height={756}
          sizes="100vw"
          placeholder="blur"
          priority
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
            I&apos;m a musician and web developer with a passion for creating
            and learning. Lifelong guitarist, currently building on the web.{' '}
            <Link href="#contact">Make stuff with me?</Link>
          </p>
        </div>
        <Link href="#work">
          <div className={styles.arrow} onClick={handleScroll}></div>
        </Link>
      </header>
    </>
  )
}
