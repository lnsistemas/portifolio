import './LandingPreview.css'

export default function LandingPreview({ className = '' }) {
  return (
    <div className={`landing-preview ${className}`}>
      {/* Barra do browser */}
      <div className="landing-preview__bar">
        <div className="landing-preview__dots">
          <span /><span /><span />
        </div>
        <div className="landing-preview__url">lnsistemas.com.br/landing</div>
      </div>

      <div className="landing-preview__viewport">
        <div className="landing-preview__scroll">

          {/* Navbar */}
          <div className="landing-preview__nav">
            <div className="landing-preview__nav-logo" />
            <div className="landing-preview__nav-links">
              <span /><span /><span />
            </div>
            <div className="landing-preview__nav-btn" />
          </div>

          {/* Hero */}
          <div className="landing-preview__hero">
            <div className="landing-preview__hero-badge" />
            <div className="landing-preview__hero-title" />
            <div className="landing-preview__hero-title landing-preview__hero-title--accent" />
            <div className="landing-preview__hero-subtitle" />
            <div className="landing-preview__hero-subtitle landing-preview__hero-subtitle--short" />
            <div className="landing-preview__hero-actions">
              <div className="landing-preview__btn-primary" />
              <div className="landing-preview__btn-outline" />
            </div>
          </div>

          {/* Features */}
          <div className="landing-preview__features">
            {[0, 1, 2].map(i => (
              <div key={i} className="landing-preview__feature" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="landing-preview__feature-icon" />
                <div className="landing-preview__feature-title" />
                <div className="landing-preview__feature-text" />
                <div className="landing-preview__feature-text landing-preview__feature-text--short" />
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className="landing-preview__cta-section">
            <div className="landing-preview__cta-title" />
            <div className="landing-preview__cta-sub" />
            <div className="landing-preview__cta-btn" />
          </div>

        </div>
      </div>
    </div>
  )
}
