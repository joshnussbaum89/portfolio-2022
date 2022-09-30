// Components
import Image from 'next/future/image'

// Images, styles
import heroImage from '../../public/hero-background.jpg'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Image
        src={heroImage}
        className={styles.image}
        placeholder="blur"
        priority="true"
        quality={100}
        alt="Birds flying in front of a beautiful sunset"
      />
      {children}
    </>
  )
}
