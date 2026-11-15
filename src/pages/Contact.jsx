import { useState } from 'react'
import './Contact.css'

const emptyForm = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Your name should be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'That email does not look right — try name@example.com.'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please add a subject so we can route your message.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please write a message.'
  } else if (values.message.trim().length < 15) {
    errors.message = 'A little more detail helps — at least 15 characters.'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({ ...current, [name]: value }))

    // Clear a field's error as soon as the user starts fixing it.
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(null)
      return
    }

    // A real app would POST this to an API. Here we confirm locally.
    setSubmitted({ name: form.fullName.trim(), subject: form.subject.trim() })
    setForm(emptyForm)
  }

  const messageCount = form.message.trim().length

  return (
    <>
      <section className="page-head">
        <div className="container page-head__inner">
          <span className="eyebrow">Contact us</span>
          <h1>Let's talk about clothes</h1>
          <p>
            Sizing questions, order updates or wholesale enquiries — send us a
            message and someone in the studio will reply within one working day.
          </p>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact__inner">
          <aside className="contact__details">
            <h2>Studio details</h2>
            <p className="contact__intro">
              We are a small team, so email is the fastest way to reach us. Phone
              lines are staffed during studio hours.
            </p>

            <ul className="contact__list">
              <li>
                <span className="contact__label">Email</span>
                <a href="mailto:hello@feranmistore.com">hello@feranmistore.com</a>
              </li>
              <li>
                <span className="contact__label">Telephone</span>
                <a href="tel:+23400000000">+234 0000 0000</a>
              </li>
              <li>
                <span className="contact__label">Studio</span>
                <address>
                  14 Foundry Lane, Unit 3<br />
                  Lekki Phase 1, Lagos 106104<br />
                  Nigeria
                </address>
              </li>
              <li>
                <span className="contact__label">Opening hours</span>
                <span>Monday – Friday, 9:00 – 17:00</span>
                <span>Saturday, 9:00 – 13:00</span>
              </li>
            </ul>

            <div className="contact__note">
              <strong>Sample details</strong>
              <p>
                The email address, phone number and address above are sample
                details created for this student project.
              </p>
            </div>
          </aside>

          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success" role="status">
                <span className="contact__success-mark" aria-hidden="true">
                  ✓
                </span>
                <h2>Thanks, {submitted.name.split(' ')[0]}!</h2>
                <p>
                  Your message about “{submitted.subject}” has been noted. In a
                  live store it would land in our inbox and you would hear back
                  within one working day.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSubmitted(null)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h2>Send a message</h2>

                <div className="field">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Amina Dlamini"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p className="field__error" id="fullName-error">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p className="field__error" id="email-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Question about the linen shirt"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p className="field__error" id="subject-error">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need help with…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                  />
                  <div className="field__meta">
                    {errors.message ? (
                      <p className="field__error" id="message-error">
                        {errors.message}
                      </p>
                    ) : (
                      <p className="field__hint" id="message-hint">
                        Minimum 15 characters.
                      </p>
                    )}
                    <span className="field__count">{messageCount} / 600</span>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark contact__submit">
                  Submit message
                </button>

                <p className="contact__disclaimer">
                  This form is a demonstration — no data leaves your browser.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
