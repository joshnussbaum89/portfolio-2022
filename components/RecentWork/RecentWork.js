// Components
import Project from '../Project/Project'

// Styles
import styles from './RecentWork.module.css'

// Images
import supervoid from '../../public/supervoid.png'
import robbyWebb from '../../public/robby-webb.png'
import chillGuyCooks from '../../public/chill-guy-cooks.png'
import coursesPortal from '../../public/courses-portal.png'
import wheelOfSuccess from '../../public/wheel-of-success.png'
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
      name: 'Chill Guy Cooks',
      image: chillGuyCooks,
      description:
        '<p>Website build for Kevin Ripley (Chill Guy Cooks), Philadelphia chef and musician</p><p>HTML5 | SCSS | JavaScript ES6</p><p><a href="https://chillguycooks.com" target="_blank">Live site</a></p><p><a href="https://github.com/joshnussbaum89/chill-guy-cooks" target="_blank">Code</a></p>',
    },
    {
      id: 3,
      name: 'Courses Portal',
      image: coursesPortal,
      description:
        '<p>Full Stack React and Node application for creating and maintaining courses</p><p>React | Node | SQL</p><p><a href="https://github.com/joshnussbaum89/school-database-with-react-and-a-rest-API" target="_blank">Code</a></p>',
    },
    {
      id: 4,
      name: 'Wheel of Success',
      image: wheelOfSuccess,
      description:
        '<p>Wheel of Fortune-esque movie phrase guessing game</p><p>HTML5 | CSS3 | JavaScript ES6</p><p><a href="https://neon-flan-742630.netlify.app/" target="_blank">Live site</a></p><p><a href="https://github.com/joshnussbaum89/wheel-of-success" target="_blank">Code</a></p>',
    },
    {
      id: 5,
      name: 'The Beer Barn Brewery',
      image: beerBarnBrewery,
      description:
        '<p>Template business landing page with an age gate (21+)</p><p>HTML5 | CSS3 | JavaScript ES6</p><p><a href="https://teal-mermaid-89b056.netlify.app/" target="_blank">Live site</a></p><p><a href="https://github.com/joshnussbaum89/beer-barn-brewery" target="_blank">Code</a></p>',
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
