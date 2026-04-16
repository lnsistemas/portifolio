import './PortfolioPreview.css'

export default function PortfolioPreview({ className = '' }) {
  return (
    <div className={`portfolio-preview ${className}`}>
      {/* Barra do browser */}
      <div className="portfolio-preview__bar">
        <div className="portfolio-preview__dots">
          <span /><span /><span />
        </div>
        <div className="portfolio-preview__url">lnsistemas.com.br/portfolio</div>
      </div>

      <div className="portfolio-preview__viewport">
        <div className="portfolio-preview__scroll">

          {/* Hero / About */}
          <div className="portfolio-preview__hero">
            <div className="portfolio-preview__avatar" />
            <div className="portfolio-preview__hero-info">
              <div className="portfolio-preview__name" />
              <div className="portfolio-preview__role" />
              <div className="portfolio-preview__hero-btns">
                <div className="portfolio-preview__btn-primary" />
                <div className="portfolio-preview__btn-ghost" />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="portfolio-preview__section-label" />
          <div className="portfolio-preview__skills">
            {['React', 'Node', 'CSS', 'SQL', 'Git'].map((s, i) => (
              <div key={i} className="portfolio-preview__skill" style={{ animationDelay: `${i * 0.1}s` }}>
                {s}
              </div>
            ))}
          </div>

          {/* Projetos grid */}
          <div className="portfolio-preview__section-label" />
          <div className="portfolio-preview__grid">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="portfolio-preview__project-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="portfolio-preview__project-img" />
                <div className="portfolio-preview__project-title" />
                <div className="portfolio-preview__project-tag" />
              </div>
            ))}
          </div>

          {/* Contato */}
          <div className="portfolio-preview__contact">
            <div className="portfolio-preview__contact-title" />
            <div className="portfolio-preview__contact-btn" />
          </div>

        </div>
      </div>
    </div>
  )
}
