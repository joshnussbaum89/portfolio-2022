// Components
import Image from 'next/future/image'

// Styles
import styles from './Project.module.css'

export default function Project({ name, image, description }) {
  return (
    <>
      <Image
        src={image}
        className={styles.image}
        alt={`${name} - ${description}`}
      />
      <div className={styles.description}>
        <h4>Background</h4>
        <p>{description}</p>
      </div>
    </>
  )
}
