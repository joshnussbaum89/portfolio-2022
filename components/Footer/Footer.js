// Components
import ContactForm from '../ContactForm/ContactForm'

// Styles
import styles from './Footer.module.css'

export default function Footer({ trackContactPosition }) {
  return (
    <footer id="contact" className={styles.contact} ref={trackContactPosition}>
      <div className={styles.container}>
        <h3>
          Contact <span>Me</span>
        </h3>
        <p>Have a project you&apos;d like to build? Let&apos;s talk ✨</p>
        <ContactForm />
      </div>
    </footer>
  )
}
