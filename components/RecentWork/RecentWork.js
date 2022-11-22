// Components
import Project from '../Project/Project'

// Styles
import styles from './RecentWork.module.css'

// Images
import supervoid from '../../public/supervoid.png'
import robbyWebb from '../../public/robby-webb.png'
import tomFord from '../../public/tom-ford.png'
import beerBarnBrewery from '../../public/the-beer-barn.png'

export default function RecentWork({ trackWorkPosition }) {
  const data = [
    {
      id: 0,
      name: 'Supervoid TV',
      image: supervoid,
      description:
        '<p>Website build for Supervoid TV, Philadelphia studio specializing in music videos, stage visuals, documentaries and more.</p><p>NextJS | React</p><p><a href="https://supervoid.tv" target="_blank">Live site</a></p><p><a href="https://github.com/joshnussbaum89/supervoid-next" target="_blank">Code</a></p>',
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
        '<p>Fragrance Finder for <a href="https://www.tomford.com/beauty/" target="_blank">Tom Ford Beauty</a>, built with my team while working at <a href="https://www.wyng.com/" target="_blank">Wyng</a></p><p><em>I do not own the rights to this code</em></p><p>HTML5 | CSS3 | JavaScript | jQuery</p><p><a href="https://tomfordbeauty.wyng.com/fragrance-finder-global-master" target="_blank">Live site</a></p>',
    },
    {
      id: 3,
      name: 'The Beer Barn Brewery',
      image: beerBarnBrewery,
      description:
        '<p>Template business landing page with an age gate (21+)</p><p>HTML5 | CSS3 | JavaScript</p><p><a href="https://teal-mermaid-89b056.netlify.app/" target="_blank">Live site</a></p><p><a href="https://github.com/joshnussbaum89/beer-barn-brewery" target="_blank">Code</a></p>',
    },
  ]

  return (
    <section id="work" className={styles.container}>
      <div className={styles.content} ref={trackWorkPosition}>
        <h3>
          Recent <span>Dev</span> Projects
        </h3>
        {data.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              image={project.image}
              description={project.description}
            />
          )
        })}
      </div>
    </section>
  )
}
