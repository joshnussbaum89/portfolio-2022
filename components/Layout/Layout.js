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
        quality={100}
        width={1024}
        height={756}
        sizes="100vw"
        placeholder="blur"
        priority
        alt="Birds flying in front of a beautiful sunset"
      />
      {children}
    </>
  )
}
