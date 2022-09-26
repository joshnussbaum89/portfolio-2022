// Components
import Project from '../Project/Project'

// Styles
import styles from './RecentWork.module.css'

// Images
import tomFord from '../../public/tom-ford.png'
import supervoid from '../../public/supervoid.png'
import togetherForward from '../../public/together-forward.png'
import robbyWebb from '../../public/robby-webb.png'
import whatAlreadyIs from '../../public/what-already-is.jpeg'
import liveAtTheHangar from '../../public/live-at-the-hangar.jpeg'
import peaceDrink from '../../public/peace-drink.jpeg'

export default function RecentWork({ trackDevPosition, trackMusicPosition }) {
  const data = {
    devData: [
      {
        id: 0,
        name: 'Tom Ford',
        image: tomFord,
        description:
          '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius repellat quidem quae dolorem soluta ducimus natus, laboriosam placeat eos dolores deleniti dolor? Similique quibusdam sed excepturi ab veniam ad.</p>',
        class: `${styles.red}`,
      },
      {
        id: 1,
        name: 'Supervoid',
        image: supervoid,
        description:
          '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius repellat quidem quae dolorem soluta ducimus natus, laboriosam placeat eos dolores deleniti dolor? Similique quibusdam sed excepturi ab veniam ad.</p>',
        class: `${styles.red}`,
      },
      {
        id: 2,
        name: 'Together Forward',
        image: togetherForward,
        description:
          '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius repellat quidem quae dolorem soluta ducimus natus, laboriosam placeat eos dolores deleniti dolor? Similique quibusdam sed excepturi ab veniam ad.</p>',
        class: `${styles.red}`,
      },
      {
        id: 3,
        name: 'Robby Webb',
        image: robbyWebb,
        description:
          '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius repellat quidem quae dolorem soluta ducimus natus, laboriosam placeat eos dolores deleniti dolor? Similique quibusdam sed excepturi ab veniam ad.</p>',
        class: `${styles.red}`,
      },
    ],
    musicData: [
      {
        id: 0,
        name: 'What Already Is - EP',
        image: whatAlreadyIs,
        description: `<p>Listen <a href="https://joshnussbaum.bandcamp.com/album/what-already-is" target="_blank">here</a></p><p>Released January 1, 2016</p><p>Written and performed by Josh Nussbaum</p><p>Engineered, mixed and co-produced by <a href="https://www.robbywebb.com/" target="_blank">Robby Webb</a>, mastered by <a href="https://www.ryanschwabe.com/" target="_blank">Ryan Schwabe</a></p><p>Artwork by Jon Carhart</p>`,
        class: `${styles.purple}`,
      },
      {
        id: 1,
        name: 'Live at the Hangar',
        image: liveAtTheHangar,
        description:
          '<p>Listen <a href="https://joshnussbaum.bandcamp.com/album/live-at-the-hangar" target="_blank">here</a></p><p>Watch <a href="https://www.youtube.com/watch?v=qskcgEoOAxU" target="_blank">Take off Your Face</a></p><p>Watch <a href="https://www.youtube.com/watch?v=6s24G_0Ls-A" target="_blank">I\'m Not Scared</a></p><p>Released December 26, 2016</p><p>Written and performed by Josh Nussbaum</p><p>Produced by <a href="https://www.youtube.com/channel/UC-CAb8FRwNs3YKo5JR26mIw/featured" target="_blank">FeedLab Music</a></p><p>Recorded live at <a href="https://www.youtube.com/user/beatkeeper02" target="_blank">The Hangar</a> by Kevin Grossman</p><p>Mixed by <a href="https://www.robbywebb.com/" target="_blank">Robby Webb</a>, mastered by <a href="https://www.ryanschwabe.com/" target="_blank">Ryan Schwabe</a></p><p>Filmed and edited by Justin Swan</p>',
        class: `${styles.purple}`,
      },
      {
        id: 2,
        name: 'Rover Rover, Peace Drink',
        image: peaceDrink,
        description:
          '<p>Listen <a href="https://roverrover.bandcamp.com/album/peace-drink" target="_blank">here</a></p><p>Released May 1, 2020</p><p>Recorded at <a href="https://headroom.studio/" target="_blank">The Headroom</a></p><p>Mixed by <a href="https://www.robbywebb.com/" target="_blank">Robby Webb</a>, mastered by <a href="https://www.ryanschwabe.com/" target="_blank">Ryan Schwabe</a></p><p>Josh Nussbaum - Guitar, Vocals</p><p>Matthew Keppler - Guitar, Vocals, Keyboard,</p><p>Conner Saltzer - Drums, Percussion, Keyboard, Vocals,</p><p>Nick Perri - Bass, Vocals</p>',
        class: `${styles.purple}`,
      },
    ],
  }

  return (
    <section id="work" className={styles.container}>
      <div id="dev" className={styles.devContent} ref={trackDevPosition}>
        <h3>
          Recent <span>Dev</span> Projects
        </h3>
        {data.devData.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              color={project.class}
            />
          )
        })}
      </div>
      <div id="music" className={styles.musicContent} ref={trackMusicPosition}>
        <h3>
          Recent <span>Music</span> Projects
        </h3>
        {data.musicData.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
              color={project.class}
            />
          )
        })}
      </div>
    </section>
  )
}
