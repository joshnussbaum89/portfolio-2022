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
        className={styles.image}
        width={3008}
        height={1720}
        sizes="(min-width: 768px) 50vw, 100vw"
        placeholder="blur"
        alt={name}
      />
      <div className={styles.descriptionContainer}>
        <h4>{name}</h4>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  )
}
