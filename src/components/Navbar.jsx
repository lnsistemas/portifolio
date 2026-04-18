import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { WA_URL } from '../utils/whatsapp'
import './Navbar.css'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#services' },
  { label: 'Meus Projetos', href: '#projects' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <img src={logo} alt="LN Sistemas" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="navbar__link" onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a
            href="/biolink"
            className="navbar__link navbar__link--biolink"
            target={window.innerWidth > 768 ? '_blank' : '_self'}
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            Bio Link
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
            onClick={handleNavClick}
          >
            WhatsApp
          </a>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
