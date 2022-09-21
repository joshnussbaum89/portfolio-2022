// Styles
import styles from './About.module.css'

export default function About({ trackAboutPosition }) {
  return (
    <section id="about" className={styles.about} ref={trackAboutPosition}>
      <p>
        I&apos;ve spent my life pursuing music as a professional guitarist. I
        graduated from the University of the Arts in Philadelphia, PA in 2013
        with a degree in guitar performance and music education. It wasn&apos;t
        until recently that I felt compelled to create with tools other than my
        guitar and manuscript paper. I&apos;m now exploring new ways of building
        stuff, on browsers mostly.
      </p>
      <p>
        I have always been facinated with the idea of creating something that
        hasn&apos;t previously existed - to breathe life into our ideas. Art is
        magic. Over the years, I&apos;ve explored writing, composing, arranging,
        recording, video production... you get the idea. I love making stuff.
      </p>
      <p>
        It&apos;s pretty amazing how much creative control one has on the web,
        and I am currently exploring ways of mixing my love of music with my
        passion for web development. It&apos;s possible to make anything really,
        so the challenge is building unique, carefully branded websites and apps
        that feel intuitive and accessible for a diverse audience.
      </p>
      <p>
        Artists and creators should feel supported in as many ways as possible
        to do their best work. My goal is to help artists accomplish their
        creative dreams by building a web experience that supports them. Please
        get in touch if you have a project you would like to create together!
      </p>
    </section>
  )
}
