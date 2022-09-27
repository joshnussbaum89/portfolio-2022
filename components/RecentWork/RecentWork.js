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
        name: 'Supervoid TV',
        image: supervoid,
        description:
          '<p>Website build for Supervoid TV, Philadelphia studio specializing in music videos, stage visuals, documentaries and more.</p><p>HTML5 | CSS3 | JavaScript ES6</p><p><a href="https://supervoid.tv" target="_blank">Live site</a></p><p><a href="https://github.com/joshnussbaum89/supervoid-vanilla" target="_blank">Code</a></p>',
      },
      {
        id: 1,
        name: 'Robby Webb',
        image: robbyWebb,
        description:
          '<p>Website build for Robby Webb, Philadelphia producer, drummer and engineer</p><p>React | Gatsby | Styled Components</p><p><a href="https://robbywebb.com" target="_blank">Live site</a></p><p><a href="https://github.com/joshnussbaum89/robby-webb" target="_blank">Code</a></p>',
      },
      {
        id: 2,
        name: 'Tom Ford Beauty',
        image: tomFord,
        description:
          '<p>Fragrance finder quiz build for Tom Ford Beauty</p><p><i>Built while working at <a href="https://www.wyng.com/" target="_blank">Wyng,</a> I do not own the rights to the website or the code</i></p><p>HTML5 | CSS3 | JavaScript ES6 | jQuery</p><p><a href="https://tomfordbeauty.wyng.com/fragrance-finder-global-master" target="_blank">Live site</a></p>',
      },
      {
        id: 3,
        name: 'PMI',
        image: togetherForward,
        description:
          '<p>Together Forward UGC campaign for Philip Morris International (PMI)</p><p><i>Built while working at <a href="https://www.wyng.com/" target="_blank">Wyng,</a> I do not own the rights to the website or the code</i></p><p>HTML5 | CSS3 | JavaScript ES6 | jQuery</p><p><a href="https://app.wyng.com/together-forward-demo/preview" target="_blank">Live site</a></p>',
      },
    ],
    musicData: [
      {
        id: 0,
        name: 'What Already Is - EP',
        image: whatAlreadyIs,
        description: `<p>Listen <a href="https://joshnussbaum.bandcamp.com/album/what-already-is" target="_blank">here</a></p><p>Released January 1, 2016</p><p>Written and performed by Josh Nussbaum</p><p>Engineered, mixed and co-produced by <a href="https://www.robbywebb.com/" target="_blank">Robby Webb</a>, mastered by <a href="https://www.ryanschwabe.com/" target="_blank">Ryan Schwabe</a></p><p>Artwork by Jon Carhart</p>`,
      },
      {
        id: 1,
        name: 'Live at the Hangar',
        image: liveAtTheHangar,
        description:
          '<p>Listen <a href="https://joshnussbaum.bandcamp.com/album/live-at-the-hangar" target="_blank">here</a></p><p>Watch <a href="https://www.youtube.com/watch?v=qskcgEoOAxU" target="_blank">Take off Your Face</a></p><p>Watch <a href="https://www.youtube.com/watch?v=6s24G_0Ls-A" target="_blank">I\'m Not Scared</a></p><p>Released December 26, 2016</p><p>Written and performed by Josh Nussbaum</p><p>Produced by <a href="https://www.youtube.com/channel/UC-CAb8FRwNs3YKo5JR26mIw/featured" target="_blank">FeedLab Music</a></p><p>Recorded live at <a href="https://www.youtube.com/user/beatkeeper02" target="_blank">The Hangar</a> by Kevin Grossman</p><p>Mixed by <a href="https://www.robbywebb.com/" target="_blank">Robby Webb</a>, mastered by <a href="https://www.ryanschwabe.com/" target="_blank">Ryan Schwabe</a></p><p>Filmed and edited by Justin Swan</p>',
      },
      {
        id: 2,
        name: 'Rover Rover, Peace Drink',
        image: peaceDrink,
        description:
          '<p>Listen <a href="https://roverrover.bandcamp.com/album/peace-drink" target="_blank">here</a></p><p>Released May 1, 2020</p><p>Recorded at <a href="https://headroom.studio/" target="_blank">The Headroom</a></p><p>Mixed by <a href="https://www.robbywebb.com/" target="_blank">Robby Webb</a>, mastered by <a href="https://www.ryanschwabe.com/" target="_blank">Ryan Schwabe</a></p><p>Josh Nussbaum - Guitar, Vocals</p><p>Matthew Keppler - Guitar, Vocals, Keyboard,</p><p>Conner Saltzer - Drums, Percussion, Keyboard, Vocals,</p><p>Nick Perri - Bass, Vocals</p>',
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
              type="dev"
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
              type="music"
            />
          )
        })}
      </div>
    </section>
  )
}
