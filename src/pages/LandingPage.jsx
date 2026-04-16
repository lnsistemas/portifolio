import './LandingPage.css'

const services = [
  { name: 'Corte Tradicional', desc: 'Tesoura ou máquina, com acabamento perfeito.', price: 'R$ 45', icon: '✂️' },
  { name: 'Barba Completa', desc: 'Modelagem, hidratação e toalha quente.', price: 'R$ 35', icon: '🪒' },
  { name: 'Corte + Barba', desc: 'O combo completo com desconto especial.', price: 'R$ 70', icon: '👑' },
  { name: 'Hidratação Capilar', desc: 'Tratamento profundo para cabelos danificados.', price: 'R$ 55', icon: '💧' },
  { name: 'Degradê Americano', desc: 'Fade perfeito com acabamento detalhado.', price: 'R$ 55', icon: '⚡' },
  { name: 'Sobrancelha', desc: 'Design e modelagem com linha ou navalha.', price: 'R$ 20', icon: '✦' },
]

const testimonials = [
  { name: 'Rafael M.', text: 'Melhor barbearia da cidade. O pessoal é muito atencioso e o corte sempre sai perfeito!', stars: 5 },
  { name: 'Lucas P.', text: 'Fui indicado por um amigo e não me arrependi. Ambiente top, profissionais excelentes.', stars: 5 },
  { name: 'Marcos A.', text: 'Agendo sempre pelo WhatsApp, super fácil. Nunca precisei esperar muito.', stars: 5 },
]

const stats = [
  { number: '8+', label: 'Anos de experiência' },
  { number: '2k+', label: 'Clientes atendidos' },
  { number: '4.9★', label: 'Avaliação média' },
  { number: '100%', label: 'Satisfação garantida' },
]

export default function LandingPage() {
  return (
    <div className="lp">

      {/* ── Navbar ── */}
      <header className="lp__navbar">
        <div className="lp__container lp__navbar-inner">
          <a href="#hero" className="lp__logo">
            <span className="lp__logo-icon">✂</span>
            <span className="lp__logo-text">Barber<span>Kings</span></span>
          </a>
          <nav className="lp__nav">
            <a href="#servicos" className="lp__nav-link">Serviços</a>
            <a href="#sobre" className="lp__nav-link">Sobre</a>
            <a href="#depoimentos" className="lp__nav-link">Depoimentos</a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="lp__btn lp__btn--primary"
            >
              Agendar Agora
            </a>
          </nav>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="lp__btn lp__btn--primary lp__btn--mobile"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="hero" className="lp__hero">
        <div className="lp__hero-bg">
          <div className="lp__hero-orb lp__hero-orb--1" />
          <div className="lp__hero-orb lp__hero-orb--2" />
          <div className="lp__hero-grid" />
        </div>
        <div className="lp__container lp__hero-inner">
          <div className="lp__hero-content">
            <span className="lp__badge">
              <span className="lp__badge-dot" />
              Aceitando novos agendamentos
            </span>
            <h1 className="lp__hero-title">
              O corte que você<br />
              <span className="lp__gold">merece.</span>
            </h1>
            <p className="lp__hero-sub">
              Experiência premium, profissionais especializados e um ambiente pensado para você. Agende agora pelo WhatsApp e saia renovado.
            </p>
            <div className="lp__hero-actions">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="lp__btn lp__btn--gold lp__btn--lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar pelo WhatsApp
              </a>
              <a href="#servicos" className="lp__btn lp__btn--ghost lp__btn--lg">
                Ver Serviços
              </a>
            </div>
          </div>

          {/* Card flutuante */}
          <div className="lp__hero-card">
            <div className="lp__hero-card-header">
              <div className="lp__hero-card-avatar">✂</div>
              <div>
                <p className="lp__hero-card-name">Barber Kings</p>
                <p className="lp__hero-card-status">● Aberto agora</p>
              </div>
            </div>
            <div className="lp__hero-card-divider" />
            <div className="lp__hero-card-info">
              <div className="lp__hero-card-item">
                <span className="lp__hero-card-label">Horário</span>
                <span className="lp__hero-card-value">Seg–Sáb, 9h–20h</span>
              </div>
              <div className="lp__hero-card-item">
                <span className="lp__hero-card-label">Agendamento</span>
                <span className="lp__hero-card-value">Via WhatsApp</span>
              </div>
              <div className="lp__hero-card-item">
                <span className="lp__hero-card-label">Avaliação</span>
                <span className="lp__hero-card-value lp__gold">★ 4.9 / 5.0</span>
              </div>
            </div>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="lp__hero-card-btn"
            >
              Quero agendar →
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="lp__stats-bar">
        <div className="lp__container lp__stats-inner">
          {stats.map((s, i) => (
            <div key={i} className="lp__stat">
              <span className="lp__stat-number">{s.number}</span>
              <span className="lp__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Serviços ── */}
      <section id="servicos" className="lp__section">
        <div className="lp__container">
          <p className="lp__section-label">O que oferecemos</p>
          <h2 className="lp__section-title">Nossos Serviços</h2>
          <div className="lp__divider" />
          <div className="lp__services-grid">
            {services.map((s, i) => (
              <div key={i} className="lp__service-card">
                <div className="lp__service-icon">{s.icon}</div>
                <div className="lp__service-info">
                  <h3 className="lp__service-name">{s.name}</h3>
                  <p className="lp__service-desc">{s.desc}</p>
                </div>
                <span className="lp__service-price">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre ── */}
      <section id="sobre" className="lp__section lp__section--alt">
        <div className="lp__container lp__about-inner">
          <div className="lp__about-visual">
            <div className="lp__about-img">
              <span>✂</span>
            </div>
            <div className="lp__about-badge-float">
              <span className="lp__gold">8+</span>
              <small>Anos de experiência</small>
            </div>
          </div>
          <div className="lp__about-content">
            <p className="lp__section-label">Sobre nós</p>
            <h2 className="lp__section-title">Tradição e qualidade<br />em cada corte</h2>
            <div className="lp__divider" />
            <p className="lp__about-text">
              A Barber Kings nasceu da paixão pela barbearia clássica combinada com técnicas modernas. Nossa equipe é formada por profissionais com anos de experiência, prontos para oferecer o melhor atendimento da cidade.
            </p>
            <p className="lp__about-text">
              Utilizamos apenas produtos de alta qualidade e investimos constantemente em treinamento para garantir que cada cliente saia 100% satisfeito.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="lp__btn lp__btn--gold lp__btn--lg"
            >
              Agendar Horário
            </a>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section id="depoimentos" className="lp__section">
        <div className="lp__container">
          <p className="lp__section-label">O que dizem sobre nós</p>
          <h2 className="lp__section-title">Depoimentos</h2>
          <div className="lp__divider" />
          <div className="lp__testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="lp__testimonial-card">
                <div className="lp__testimonial-stars">
                  {'★'.repeat(t.stars)}
                </div>
                <p className="lp__testimonial-text">"{t.text}"</p>
                <p className="lp__testimonial-name">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="lp__cta-section">
        <div className="lp__container lp__cta-inner">
          <h2 className="lp__cta-title">Pronto para um novo visual?</h2>
          <p className="lp__cta-sub">Agende agora pelo WhatsApp em menos de 1 minuto.</p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="lp__btn lp__btn--gold lp__btn--lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="lp__footer">
        <div className="lp__container">
          <p>© {new Date().getFullYear()} Barber Kings · Desenvolvido por <strong>LN Sistemas</strong></p>
        </div>
      </footer>

    </div>
  )
}
