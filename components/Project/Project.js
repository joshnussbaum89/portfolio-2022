// Components
import Image from 'next/future/image'

// Styles
import styles from './Project.module.css'

export default function Project({ name, image, description, color }) {
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
        alt={`${name} - ${description}`}
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
