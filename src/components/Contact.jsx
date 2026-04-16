import { useState } from 'react'
import './Contact.css'

const MAX_NAME = 80
const MAX_EMAIL = 120
const MAX_MESSAGE = 1000

function sanitize(str) {
  return str.replace(/[<>"'`]/g, '')
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    const limits = { name: MAX_NAME, email: MAX_EMAIL, message: MAX_MESSAGE }
    if (value.length > limits[name]) return
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Nome é obrigatório.'
    if (!form.email.trim()) newErrors.email = 'E-mail é obrigatório.'
    else if (!isValidEmail(form.email)) newErrors.email = 'E-mail inválido.'
    if (!form.message.trim()) newErrors.message = 'Mensagem é obrigatória.'
    else if (form.message.trim().length < 10) newErrors.message = 'Mensagem muito curta.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const name = sanitize(form.name.trim())
    const email = sanitize(form.email.trim())
    const message = sanitize(form.message.trim())

    const text = `Olá, Leandro!%0A%0ANome: ${encodeURIComponent(name)}%0AE-mail: ${encodeURIComponent(email)}%0A%0AMensagem:%0A${encodeURIComponent(message)}`
    window.open(`https://wa.me/5514997815567?text=${text}`, '_blank', 'noopener,noreferrer')
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <p className="section-label">Fale comigo</p>
          <h2 className="section-title">Contato</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Pronto para começar? Envie uma mensagem ou me chame diretamente no WhatsApp.
            Respondo rápido!
          </p>

          <a
            href="https://wa.me/5514997815567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact__wa-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chamar no WhatsApp
          </a>

          <div className="contact__divider-line">
            <span>ou preencha o formulário</span>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-input ${errors.name ? 'form-input--error' : ''}`}
              placeholder="Seu nome"
              value={form.name}
              onChange={handleChange}
              maxLength={MAX_NAME}
              autoComplete="name"
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? 'form-input--error' : ''}`}
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              maxLength={MAX_EMAIL}
              autoComplete="email"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Mensagem
              <span className="form-counter">{form.message.length}/{MAX_MESSAGE}</span>
            </label>
            <textarea
              id="message"
              name="message"
              className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
              placeholder="Descreva o que você precisa..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              maxLength={MAX_MESSAGE}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          {status === 'sent' && (
            <p className="form-success">
              Mensagem enviada! Você será redirecionado ao WhatsApp.
            </p>
          )}

          <button type="submit" className="btn btn-primary form-submit">
            Enviar mensagem
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>

          <p className="form-note">
            * Ao enviar, você será redirecionado ao WhatsApp com a mensagem pronta.
          </p>
        </form>
      </div>
    </section>
  )
}
