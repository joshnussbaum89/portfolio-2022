// Components
import Project from '../Project/Project'

// Styles
import styles from './RecentWork.module.css'

// Images
import tomFord from '../../public/tom-ford.png'
import supervoid from '../../public/supervoid.png'
import togetherForward from '../../public/together-forward.png'
import robbyWebb from '../../public/robby-webb.png'

export default function RecentWork() {
  const data = [
    {
      id: 0,
      name: 'Tom Ford',
      image: tomFord,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius repellat quidem quae dolorem soluta ducimus natus, laboriosam placeat eos dolores deleniti dolor? Similique quibusdam sed excepturi ab veniam ad.',
    },
    {
      id: 1,
      name: 'Supervoid',
      image: supervoid,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius repellat quidem quae dolorem soluta ducimus natus, laboriosam placeat eos dolores deleniti dolor? Similique quibusdam sed excepturi ab veniam ad.',
    },
    {
      id: 2,
      name: 'Together Forward',
      image: togetherForward,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius repellat quidem quae dolorem soluta ducimus natus, laboriosam placeat eos dolores deleniti dolor? Similique quibusdam sed excepturi ab veniam ad.',
    },
    {
      id: 3,
      name: 'Robby Webb',
      image: robbyWebb,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius repellat quidem quae dolorem soluta ducimus natus, laboriosam placeat eos dolores deleniti dolor? Similique quibusdam sed excepturi ab veniam ad.',
    },
  ]

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* TODO: track scroll position and update <span> text + styling */}
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
