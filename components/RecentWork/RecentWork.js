// Components
import Project from '../Project/Project'

// Styles
import styles from './RecentWork.module.css'

// Images
import supervoid from '../../public/supervoid.png'
import robbyWebb from '../../public/robby-webb.png'
import tomFord from '../../public/tom-ford.png'
import togetherForward from '../../public/together-forward.png'

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
        '<p>Fragrance finder quiz build for Tom Ford Beauty</p><p><i>Built while working at <a href="https://www.wyng.com/" target="_blank">Wyng,</a> I do not own the rights to the website or the code</i></p><p>HTML5 | CSS3 | JavaScript ES6 | jQuery</p><p><a href="https://tomfordbeauty.wyng.com/fragrance-finder-global-master" target="_blank">Live site</a></p>',
    },
    {
      id: 3,
      name: 'PMI',
      image: togetherForward,
      description:
        '<p>Together Forward UGC campaign for Philip Morris International (PMI)</p><p><i>Built while working at <a href="https://www.wyng.com/" target="_blank">Wyng,</a> I do not own the rights to the website or the code</i></p><p>HTML5 | CSS3 | JavaScript ES6 | jQuery</p><p><a href="https://app.wyng.com/together-forward-demo/preview" target="_blank">Live site</a></p>',
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
