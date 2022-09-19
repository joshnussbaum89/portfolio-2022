// Components
import DevWork from '../DevWork/DevWork'
import MusicWork from '../MusicWork/MusicWork'

// Styles
import styles from './RecentWork.module.css'

export default function RecentWork() {
  return (
    <section className={styles.container}>
      <h3>
        Recent <span>Work</span>
      </h3>
      <DevWork />
      <MusicWork />
    </section>
  )
}
