import './BioLinkPreview.css'

export default function BioLinkPreview({ className = '' }) {
  return (
    <div className={`bl-preview ${className}`}>
      {/* Barra do browser */}
      <div className="bl-preview__bar">
        <div className="bl-preview__dots">
          <span /><span /><span />
        </div>
        <div className="bl-preview__url">lnsistemas.com.br/biolink</div>
      </div>

      <div className="bl-preview__viewport">
        <div className="bl-preview__scroll">

          {/* Avatar + nome */}
          <div className="bl-preview__profile">
            <div className="bl-preview__avatar">
              <div className="bl-preview__avatar-ring" />
            </div>
            <div className="bl-preview__name" />
            <div className="bl-preview__handle" />
          </div>

          {/* Links */}
          <div className="bl-preview__links">
            {[
              { icon: '▶', label: 'Instagram', w: 44 },
              { icon: '▶', label: 'WhatsApp', w: 38 },
              { icon: '▶', label: 'LinkedIn', w: 36 },
              { icon: '▶', label: 'GitHub',   w: 30 },
              { icon: '▶', label: 'Facebook', w: 40 },
            ].map((link, i) => (
              <div
                key={i}
                className="bl-preview__link-btn"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="bl-preview__link-icon" />
                <div className="bl-preview__link-label" style={{ width: `${link.w}px` }} />
                <div className="bl-preview__link-arrow" />
              </div>
            ))}
          </div>

          {/* Badge rodapé */}
          <div className="bl-preview__footer-badge">
            <div className="bl-preview__footer-dot" />
            <div className="bl-preview__footer-text" />
          </div>

        </div>
      </div>
    </div>
  )
}
