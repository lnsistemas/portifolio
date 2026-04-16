import './CatalogPreview.css'

export default function CatalogPreview({ className = '' }) {
  return (
    <div className={`catalog-preview ${className}`}>
      {/* Barra de navegação do "site" */}
      <div className="catalog-preview__bar">
        <div className="catalog-preview__dots">
          <span /><span /><span />
        </div>
        <div className="catalog-preview__url">lnsistemas.com.br/catalogo</div>
      </div>

      {/* Área de conteúdo com scroll animado */}
      <div className="catalog-preview__viewport">
        <div className="catalog-preview__scroll">

          {/* Header do catálogo */}
          <div className="catalog-preview__site-header">
            <div className="catalog-preview__site-logo" />
            <div className="catalog-preview__site-nav">
              <span /><span /><span />
            </div>
          </div>

          {/* Grid de produtos */}
          <div className="catalog-preview__grid">
            {[
              { w: 28, label: 'R$ 89' },
              { w: 22, label: 'R$ 129' },
              { w: 30, label: 'R$ 49' },
              { w: 24, label: 'R$ 199' },
              { w: 26, label: 'R$ 79' },
              { w: 20, label: 'R$ 159' },
            ].map((item, i) => (
              <div key={i} className="catalog-preview__product">
                <div className="catalog-preview__product-img" style={{ animationDelay: `${i * 0.3}s` }}>
                  <div className="catalog-preview__product-shimmer" />
                </div>
                <div className="catalog-preview__product-line" style={{ width: `${item.w}px` }} />
                <div className="catalog-preview__product-price">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
