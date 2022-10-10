// Components
import Image from 'next/future/image'

// Styles
import styles from './Project.module.css'

export default function Project({ name, image, description }) {
  // Render HTML from string
  function createMarkup() {
    return { __html: description }
  }

  return (
    <div>
      <Image
        src={image}
        className={`${styles.image} ${styles.red}`}
        width={950}
        height={550}
        placeholder="blur"
        alt={name}
      />
      <div className={`${styles.descriptionContainer} ${styles.red}`}>
        <h4>{name}</h4>
        <div
          className={`${styles.description}`}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  )
}
