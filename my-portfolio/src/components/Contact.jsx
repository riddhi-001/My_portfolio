import { useState } from 'react'

const serviceOptions = [
  'Digital Marketing',
  'Website Development',
  'Graphic Designing',
  'UI/UX Designing',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="section-desc">
            Ready to take your business to the next level? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email Us</h4>
                <p>hello@creativeminds.com</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-msg">✓ Message sent! We'll get back to you soon.</div>
            )}
            <div className="form-row">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">Select a Service</option>
              {serviceOptions.map(s => <option key={s}>{s}</option>)}
            </select>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              required
            />
            <button type="submit" className="btn-primary">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  )
}
