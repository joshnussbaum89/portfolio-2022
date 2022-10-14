// Components
import { useForm, ValidationError } from '@formspree/react'

// Styles
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM)

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name">
        Name: <span>*</span>
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="John Doe"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email">
        Email: <span>*</span>
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="JohnDoe@mail.com"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">
        Message: <span>*</span>
      </label>
      <textarea
        id="message"
        name="message"
        cols="30"
        rows="5"
        placeholder="Message..."
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>

      {state.succeeded ? (
        <div className={styles.success}>
          Thanks, I&apos;ll get back to you soon!
        </div>
      ) : (
        <ValidationError errors={state.errors} className={styles.errors} />
      )}
    </form>
  )
}
