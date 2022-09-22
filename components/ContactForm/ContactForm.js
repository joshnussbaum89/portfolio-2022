/****

TODO: 
1. Formspree integration

****/

// Styles
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    // Get data from form submission
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }

    // Send formatted JSON to server
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/form'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    // Send form data to API + get a response
    const response = await fetch(endpoint, options)
    const { body } = await response.json()

    // Log response
    console.log('Form Submitted: ', {
      name: body.name,
      email: body.email,
      message: body.message,
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
