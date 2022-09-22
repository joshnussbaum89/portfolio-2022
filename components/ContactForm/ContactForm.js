/****

TODO: 
1. build api endpoint to handle form submit (first just log response)
2. Formspree integration

****/

// Styles
import styles from './ContactForm.module.css'

export default function ContactForm() {
  return (
    <form action="/api/form" method="post" className={styles.form}>
      <label htmlFor="name">
        Name: <span>*</span>
      </label>
      <input id="name" type="text" name="name" required />

      <label htmlFor="email">
        Email: <span>*</span>
      </label>
      <input id="email" type="email" name="email" required />

      <label htmlFor="message">
        Message: <span>*</span>
      </label>
      <textarea
        id="message"
        name="message"
        cols="30"
        rows="5"
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  )
}
