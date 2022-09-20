// Components
import Image from 'next/future/image'

// Styles
import styles from './Project.module.css'

export default function Project({ name, image, description, color }) {
  return (
    <>
      <Image
        src={image}
        className={`${styles.image} ${color}`}
        placeholder="blur"
        loading="lazy"
        alt={`${name} - ${description}`}
      />
      <div className={styles.description}>
        <h4>Background</h4>
        <p>{description}</p>
      </div>
    </>
  )
}
