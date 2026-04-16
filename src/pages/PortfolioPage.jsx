import './PortfolioPage.css'

const skills = [
  { name: 'React', level: 92 },
  { name: 'Node.js', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'TypeScript', level: 78 },
  { name: 'Figma', level: 88 },
  { name: 'PostgreSQL', level: 72 },
]

const projects = [
  {
    title: 'App de Finanças Pessoais',
    desc: 'Aplicativo web para controle de gastos, metas e relatórios mensais com gráficos interativos.',
    tags: ['React', 'Node.js', 'Chart.js'],
    type: 'Web App',
  },
  {
    title: 'E-commerce de Moda',
    desc: 'Loja virtual completa com carrinho, pagamentos integrados e painel administrativo.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    type: 'E-commerce',
  },
  {
    title: 'Dashboard SaaS',
    desc: 'Painel de métricas para agências de marketing com integração Google Analytics e relatórios PDF.',
    tags: ['TypeScript', 'React', 'APIs'],
    type: 'Dashboard',
  },
  {
    title: 'App de Agendamento',
    desc: 'Sistema de agendamento para clínicas com notificações por WhatsApp e Google Calendar.',
    tags: ['React', 'Firebase', 'WhatsApp API'],
    type: 'Sistema',
  },
]

const services = [
  { icon: '💻', title: 'Desenvolvimento Web', desc: 'Sites, sistemas e aplicações completas do zero.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Interfaces bonitas, intuitivas e centradas no usuário.' },
  { icon: '📱', title: 'Design Responsivo', desc: 'Experiência perfeita em qualquer dispositivo.' },
  { icon: '⚡', title: 'Otimização', desc: 'Performance, SEO e acessibilidade em dia.' },
]

export default function PortfolioPage() {
  return (
    <div className="pp">

      {/* ── Navbar ── */}
      <header className="pp__navbar">
        <div className="pp__container pp__navbar-inner">
          <a href="#hero" className="pp__logo">
            <span className="pp__logo-dot" />
            <span className="pp__logo-name">Marina <span>Costa</span></span>
          </a>
          <nav className="pp__nav">
            <a href="#sobre" className="pp__nav-link">Sobre</a>
            <a href="#projetos" className="pp__nav-link">Projetos</a>
            <a href="#servicos" className="pp__nav-link">Serviços</a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="pp__btn pp__btn--primary"
            >
              Contato
            </a>
          </nav>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="pp__btn pp__btn--primary pp__btn--mobile"
          >
            Contato
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="hero" className="pp__hero">
        <div className="pp__hero-bg">
          <div className="pp__hero-orb pp__hero-orb--1" />
          <div className="pp__hero-orb pp__hero-orb--2" />
          <div className="pp__hero-grid" />
        </div>
        <div className="pp__container pp__hero-inner">
          <div className="pp__hero-content">
            <span className="pp__badge">
              <span className="pp__badge-dot" />
              Disponível para novos projetos
            </span>
            <h1 className="pp__hero-title">
              Olá, sou a <span className="pp__blue">Marina</span>.<br />
              Desenvolvo experiências digitais.
            </h1>
            <p className="pp__hero-sub">
              Desenvolvedora Full Stack e designer UI/UX com 5 anos de experiência. Especializada em criar produtos digitais que combinam funcionalidade e beleza.
            </p>
            <div className="pp__hero-actions">
              <a href="#projetos" className="pp__btn pp__btn--blue pp__btn--lg">
                Ver Projetos
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="pp__btn pp__btn--ghost pp__btn--lg"
              >
                Falar Comigo
              </a>
            </div>
            <div className="pp__hero-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Figma</span>
              <span>TypeScript</span>
            </div>
          </div>

          {/* Avatar card */}
          <div className="pp__hero-avatar-wrap">
            <div className="pp__hero-avatar">
              <div className="pp__hero-avatar-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="pp__hero-avatar-ring" />
            </div>
            <div className="pp__hero-stat-card pp__hero-stat-card--1">
              <span className="pp__blue" style={{ fontSize: '1.4rem', fontWeight: 800 }}>5+</span>
              <span style={{ fontSize: '0.72rem', color: '#888' }}>anos de exp.</span>
            </div>
            <div className="pp__hero-stat-card pp__hero-stat-card--2">
              <span className="pp__blue" style={{ fontSize: '1.4rem', fontWeight: 800 }}>40+</span>
              <span style={{ fontSize: '0.72rem', color: '#888' }}>projetos</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sobre / Habilidades ── */}
      <section id="sobre" className="pp__section pp__section--alt">
        <div className="pp__container pp__about-inner">
          <div className="pp__about-text-side">
            <p className="pp__label">Sobre mim</p>
            <h2 className="pp__section-title">Código limpo.<br />Design que converte.</h2>
            <div className="pp__divider" />
            <p className="pp__about-text">
              Sou apaixonada por transformar ideias em produtos digitais que realmente funcionam. Trabalho com empresas de todos os tamanhos, desde startups até negócios consolidados.
            </p>
            <p className="pp__about-text">
              Meu diferencial é unir a visão técnica do desenvolvimento com a sensibilidade do design — entregando soluções que são bonitas por fora e sólidas por dentro.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="pp__btn pp__btn--blue pp__btn--lg"
            >
              Vamos conversar
            </a>
          </div>
          <div className="pp__skills-side">
            <p className="pp__label">Habilidades</p>
            <div className="pp__skills-list">
              {skills.map((s, i) => (
                <div key={i} className="pp__skill">
                  <div className="pp__skill-header">
                    <span className="pp__skill-name">{s.name}</span>
                    <span className="pp__skill-pct">{s.level}%</span>
                  </div>
                  <div className="pp__skill-bar">
                    <div
                      className="pp__skill-fill"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projetos ── */}
      <section id="projetos" className="pp__section">
        <div className="pp__container">
          <p className="pp__label">Portfólio</p>
          <h2 className="pp__section-title">Projetos em destaque</h2>
          <div className="pp__divider" />
          <div className="pp__projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="pp__project-card">
                <div className="pp__project-img">
                  <span className="pp__project-type">{p.type}</span>
                  <div className="pp__project-img-icon">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.2">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                </div>
                <div className="pp__project-body">
                  <h3 className="pp__project-title">{p.title}</h3>
                  <p className="pp__project-desc">{p.desc}</p>
                  <div className="pp__project-tags">
                    {p.tags.map((t, j) => (
                      <span key={j} className="pp__project-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Serviços ── */}
      <section id="servicos" className="pp__section pp__section--alt">
        <div className="pp__container">
          <p className="pp__label">O que faço</p>
          <h2 className="pp__section-title">Serviços</h2>
          <div className="pp__divider" />
          <div className="pp__services-grid">
            {services.map((s, i) => (
              <div key={i} className="pp__service-card">
                <span className="pp__service-icon">{s.icon}</span>
                <h3 className="pp__service-title">{s.title}</h3>
                <p className="pp__service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pp__cta-section">
        <div className="pp__container pp__cta-inner">
          <h2 className="pp__cta-title">Pronto para tirar seu projeto do papel?</h2>
          <p className="pp__cta-sub">Me conta o que você precisa — respondo no mesmo dia.</p>
          <div className="pp__cta-actions">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="pp__btn pp__btn--blue pp__btn--lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </a>
            <a href="mailto:marina@email.com" className="pp__btn pp__btn--ghost pp__btn--lg">
              Enviar e-mail
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pp__footer">
        <div className="pp__container">
          <p>© {new Date().getFullYear()} Marina Costa · Desenvolvido por <strong>LN Sistemas</strong></p>
        </div>
      </footer>

    </div>
  )
}
