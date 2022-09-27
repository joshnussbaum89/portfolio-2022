// Components
import Image from 'next/future/image'

// Styles
import styles from './Project.module.css'

export default function Project({ name, image, description, type }) {
  // Determine color based on section
  const color = type === 'dev' ? styles.red : styles.purple

  // Render HTML from string
  function createMarkup() {
    return { __html: description }
  }

  return (
    <div>
      <Image
        src={image}
        className={`${styles.image} ${color}`}
        placeholder="blur"
        loading="lazy"
        alt={name}
      />
      <div className={`${styles.descriptionContainer} ${color}`}>
        <h4>{name}</h4>
        <div
          className={`${styles.description}`}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  )
}
