import './CatalogLanding.css'

const products = [
  { name: 'Camiseta Premium', category: 'Vestuário', price: 'R$ 89,90', badge: 'Novo' },
  { name: 'Calça Slim Fit', category: 'Vestuário', price: 'R$ 149,90', badge: '' },
  { name: 'Tênis Urban', category: 'Calçados', price: 'R$ 219,90', badge: 'Destaque' },
  { name: 'Boné Classic', category: 'Acessórios', price: 'R$ 59,90', badge: '' },
  { name: 'Jaqueta Couro', category: 'Vestuário', price: 'R$ 349,90', badge: 'Exclusivo' },
  { name: 'Mochila Urban', category: 'Acessórios', price: 'R$ 179,90', badge: '' },
]

const categories = ['Todos', 'Vestuário', 'Calçados', 'Acessórios']

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Sempre Atualizado',
    text: 'Produtos, preços e estoque atualizados em tempo real.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Acesso pelo Celular',
    text: 'Seus clientes navegam pelo catálogo direto do smartphone.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    title: 'Pedido pelo WhatsApp',
    text: 'Botão de contato direto em cada produto. Um clique e já está falando com você.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Carregamento Rápido',
    text: 'Site otimizado para abrir rápido mesmo em conexões lentas.',
  },
]

export default function CatalogLanding() {
  return (
    <div className="cl">

      {/* ── Navbar ── */}
      <header className="cl__navbar">
        <div className="cl__container cl__navbar-inner">
          <div className="cl__logo">
            <span className="cl__logo-mark">B</span>
            <span className="cl__logo-name">Bella<span>Store</span></span>
          </div>
          <nav className="cl__nav">
            <a href="#produtos" className="cl__nav-link">Produtos</a>
            <a href="#sobre" className="cl__nav-link">Sobre</a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="cl__btn cl__btn--primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="cl__hero">
        <div className="cl__hero-bg" />
        <div className="cl__container cl__hero-inner">
          <span className="cl__badge">✦ Catálogo Digital</span>
          <h1 className="cl__hero-title">
            Explore nossa<br />
            <span className="cl__accent">coleção completa</span>
          </h1>
          <p className="cl__hero-subtitle">
            Navegue pelos nossos produtos, veja preços e faça seu pedido direto pelo WhatsApp. Rápido, fácil e sem complicação.
          </p>
          <div className="cl__hero-actions">
            <a href="#produtos" className="cl__btn cl__btn--primary cl__btn--lg">
              Ver Catálogo
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="cl__btn cl__btn--outline cl__btn--lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Categorias ── */}
      <section id="produtos" className="cl__section">
        <div className="cl__container">
          <p className="cl__label">Nossos Produtos</p>
          <h2 className="cl__title">Catálogo</h2>
          <div className="cl__divider" />

          <div className="cl__categories">
            {categories.map(cat => (
              <button key={cat} className={`cl__cat-btn ${cat === 'Todos' ? 'cl__cat-btn--active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="cl__products-grid">
            {products.map((p, i) => (
              <div key={i} className="cl__product-card">
                <div className="cl__product-img">
                  {p.badge && <span className="cl__product-badge">{p.badge}</span>}
                  <div className="cl__product-img-placeholder">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                </div>
                <div className="cl__product-body">
                  <span className="cl__product-category">{p.category}</span>
                  <h3 className="cl__product-name">{p.name}</h3>
                  <div className="cl__product-footer">
                    <span className="cl__product-price">{p.price}</span>
                    <a
                      href={`https://wa.me/5500000000000?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${p.name} (${p.price}). Está disponível?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cl__product-btn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Pedir
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefícios ── */}
      <section id="sobre" className="cl__section cl__section--alt">
        <div className="cl__container">
          <p className="cl__label">Por que escolher</p>
          <h2 className="cl__title">Nosso Catálogo Digital</h2>
          <div className="cl__divider" />
          <div className="cl__benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="cl__benefit-card">
                <div className="cl__benefit-icon">{b.icon}</div>
                <h3 className="cl__benefit-title">{b.title}</h3>
                <p className="cl__benefit-text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="cl__cta-section">
        <div className="cl__container cl__cta-inner">
          <h2 className="cl__cta-title">Gostou do que viu?</h2>
          <p className="cl__cta-sub">Entre em contato e faça seu pedido agora mesmo.</p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="cl__btn cl__btn--primary cl__btn--lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="cl__footer">
        <div className="cl__container">
          <p>© {new Date().getFullYear()} BellaStore · Desenvolvido por <strong>LN Sistemas</strong></p>
        </div>
      </footer>

    </div>
  )
}
