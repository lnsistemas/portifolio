import { useNavigate } from 'react-router-dom'
import BioLinkPreview from './BioLinkPreview'
import CatalogPreview from './CatalogPreview'
import LandingPreview from './LandingPreview'
import PortfolioPreview from './PortfolioPreview'
import './Projects.css'

const projects = [
  {
    id: 'biolink',
    title: 'Bio Link — LN Sistemas',
    description: 'Página de links personalizada com identidade visual própria, foto de perfil e atalhos para todas as redes sociais.',
    route: '/biolink',
    external: false,
    gradient: 'linear-gradient(135deg, #0d2e1a 0%, #0a1a10 100%)',
    accent: '#00ff9c',
    tag: 'Bio Link',
  },
  {
    id: 'landing',
    title: 'Landing Page Comercial',
    description: 'Página de conversão para pequeno negócio local, focada em captação de clientes via WhatsApp.',
    route: '/projetos/landing-page',
    external: false,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)',
    accent: '#6c63ff',
    tag: 'Landing Page',
  },
  {
    id: 'portfolio-demo',
    title: 'Portfólio Profissional',
    description: 'Site portfólio para profissional autônomo com seções de projetos, habilidades e formulário de contato.',
    route: '/projetos/portfolio',
    external: false,
    gradient: 'linear-gradient(135deg, #1a1000 0%, #0d0a00 100%)',
    accent: '#f5a623',
    tag: 'Portfólio',
  },
  {
    id: 'catalogo',
    title: 'Catálogo Digital',
    description: 'Catálogo de produtos online com filtros por categoria e botão de contato direto por WhatsApp.',
    route: '/projetos/catalogo',
    external: false,
    gradient: 'linear-gradient(135deg, #001a1a 0%, #000d0d 100%)',
    accent: '#00d4ff',
    tag: 'Catálogo',
  },
]

export default function Projects() {
  const navigate = useNavigate()

  const handleClick = (project) => {
    if (project.external) {
      window.open(project.route, '_blank')
    } else {
      navigate(project.route)
    }
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-label">Modelos de projetos</p>
        <h2 className="section-title">Projetos</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Modelos demonstrativos do que pode ser desenvolvido para o seu negócio. Clique em cada um para visualizar.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onClick={() => handleClick(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(project)}
            >
              <div
                className="project-card__image"
                style={{ background: project.gradient }}
              >
                {project.id === 'biolink' && (
                  <BioLinkPreview className="project-card__catalog-preview" />
                )}
                {project.id === 'catalogo' && (
                  <CatalogPreview className="project-card__catalog-preview" />
                )}
                {project.id === 'landing' && (
                  <LandingPreview className="project-card__catalog-preview" />
                )}
                {project.id === 'portfolio-demo' && (
                  <PortfolioPreview className="project-card__catalog-preview" />
                )}
                <span
                  className="project-card__tag"
                  style={{ borderColor: project.accent, color: project.accent }}
                >
                  {project.tag}
                </span>
                <div
                  className="project-card__glow"
                  style={{ background: `radial-gradient(circle, ${project.accent}22 0%, transparent 70%)` }}
                />
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <span className="project-card__cta">Ver projeto →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
