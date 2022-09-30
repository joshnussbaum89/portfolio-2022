import styles from '../styles/404.module.css'

export default function pageNotFound() {
  return (
    <div className={styles.message}>
      <h2>404</h2>
      <p>This page could not be found</p>
    </div>
  )
}
