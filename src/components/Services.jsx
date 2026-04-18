import { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.png'
import { WA_URL } from '../utils/whatsapp'
import './Services.css'

const services = [
  {
    id: 'landing-page',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Landing Page',
    price: 'R$ 247,00',
    description: 'Página que carrega rápido, tem botão de WhatsApp e já aparece no Google. Pronta em até 5 dias.',
    detail: {
      heading: 'Página que converte e impressiona',
      body: `Uma landing page bem feita é a forma mais rápida e eficiente de ter presença online. Ideal para lançamentos, promoções ou qualquer ação que precise de uma página direta e objetiva.

Desenvolvida com foco em velocidade, visual moderno e adaptada para todos os dispositivos — do celular ao desktop.`,
      includes: [
        'Design responsivo (mobile, tablet e desktop)',
        'Seção de apresentação, benefícios e contato',
        'Botão de WhatsApp e formulário de contato',
        'Carregamento rápido e código otimizado',
        'Hospedagem gratuita (Vercel)',
        'Entrega em até 5 dias úteis',
      ],
    },
  },
  {
    id: 'portfolio',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    title: 'Portfólio',
    price: 'R$ 397,00',
    description: 'Mostre seus projetos com visual profissional. Clientes e recrutadores veem seu trabalho em segundos.',
    detail: {
      heading: 'Seu cartão de visitas digital',
      body: `Um portfólio bem construído faz toda a diferença na hora de conquistar um cliente ou uma vaga. Apresente seus projetos, habilidades e trajetória de forma clara e com visual profissional.

Ideal para fotógrafos, designers, desenvolvedores, arquitetos e qualquer profissional que queira se destacar online.`,
      includes: [
        'Design responsivo e personalizado',
        'Seções de projetos, habilidades e sobre mim',
        'Formulário de contato integrado',
        'Animações suaves e experiência agradável',
        'Hospedagem gratuita (Vercel)',
        'Entrega em até 7 dias úteis',
      ],
    },
  },
  {
    id: 'catalogo-fixo',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Catálogo de Produtos (Fixo)',
    price: 'R$ 597,00',
    description: 'Seu cliente acessa pelo celular, vê foto, preço e já chama no WhatsApp — sem precisar de um app.',
    detail: {
      heading: 'Mostre seus produtos com profissionalismo',
      body: `Um catálogo digital moderno substitui com vantagem os PDFs e folders impressos. Seu cliente acessa pelo celular, vê fotos, descrições e já entra em contato direto com você.

Versão estática — sem painel de administração. As atualizações são feitas por mim mediante solicitação.`,
      includes: [
        'Design responsivo e organizado por categorias',
        'Fotos, descrições e preços de cada produto',
        'Filtro por categoria',
        'Botão de WhatsApp por produto',
        'Hospedagem gratuita (Vercel)',
        'Entrega em até 7 dias úteis',
      ],
    },
  },
  {
    id: 'catalogo-gerenciavel',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Catálogo Gerenciável + Database',
    price: 'R$ 997,00',
    description: 'Você entra num painel e atualiza produtos, preços e fotos sozinho — sem chamar ninguém.',
    detail: {
      heading: 'Catálogo que você controla sozinho',
      body: `Tudo do catálogo fixo, mas com autonomia total. Você acessa um painel seguro e atualiza seus produtos quando quiser — sem precisar me chamar a cada mudança.

Ideal para lojas e negócios com produtos que mudam com frequência. Banco de dados integrado garante que tudo fique salvo e organizado.`,
      includes: [
        'Tudo incluso do Catálogo Fixo',
        'Painel de administração exclusivo',
        'Banco de dados integrado',
        'Cadastro, edição e exclusão de produtos',
        'Acesso protegido por autenticação',
        'Suporte técnico pós-entrega',
      ],
    },
  },
  {
    id: 'institucional',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Sites Institucionais',
    price: 'A consultar',
    description: 'Várias páginas, identidade visual completa e formulário de contato. Orçamento sob medida.',
    detail: {
      heading: 'Solução completa para sua empresa',
      body: `Sites institucionais são projetos maiores, com múltiplas páginas, recursos específicos e identidade visual completa. Por isso, o valor é definido após um bate-papo para entender suas necessidades reais.

Entre em contato e conte o que precisa — vamos montar juntos a proposta ideal para o seu negócio.`,
      includes: [
        'Briefing detalhado antes do desenvolvimento',
        'Design personalizado com identidade da empresa',
        'Múltiplas páginas (quem somos, serviços, contato...)',
        'SEO básico configurado',
        'Formulário de contato e integração com WhatsApp',
        'Prazo e valor definidos após consulta',
      ],
    },
  },
  {
    id: 'biolink',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: 'Bio Link',
    price: 'R$ 97,00',
    description: 'Um link só para colocar na bio do Instagram que leva para WhatsApp, portfólio, cardápio e mais.',
    detail: {
      heading: 'Todos os seus links em um só lugar',
      body: `Uma página simples e elegante com a sua cara — muito melhor que o Linktree padrão. Coloque seu nome, foto e links para WhatsApp, Instagram, portfólio, loja ou qualquer destino que precisar.

Ideal para quem usa Instagram, TikTok ou qualquer rede social e quer direcionar o público de forma profissional.`,
      includes: [
        'Design personalizado com sua identidade visual',
        'Links ilimitados (WhatsApp, Instagram, etc.)',
        'Foto, nome e bio personalizados',
        'Hospedagem gratuita e link personalizado',
        'Entrega em até 3 dias úteis',
        'Fácil de atualizar quando necessário',
      ],
    },
  },
]

export default function Services() {
  const [selected, setSelected] = useState(null)
  const detailRef = useRef(null)

  const handleCardClick = (service) => {
    if (selected?.id === service.id) {
      setSelected(null)
      return
    }
    setSelected(service)
  }

  useEffect(() => {
    if (selected && detailRef.current) {
      setTimeout(() => {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }, [selected])

  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="section-label">O que eu faço</p>
        <div className="services__header">
          <h2 className="section-title">Serviços</h2>
          <img src={logo} alt="LN Sistemas" className="services__logo" />
          <div />
        </div>
        <div className="divider" />
        <p className="section-subtitle">
          Soluções práticas e acessíveis para quem precisa de tecnologia sem complicação.
        </p>

        <div className="services__grid">
          {services.map((service) => (
            <article
              key={service.id}
              className={`service-card ${selected?.id === service.id ? 'service-card--active' : ''}`}
              onClick={() => handleCardClick(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(service)}
              aria-expanded={selected?.id === service.id}
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <p className="service-card__price">{service.price}</p>
              <div className="service-card__hint">
                {selected?.id === service.id ? 'Fechar detalhes ↑' : 'Ver detalhes →'}
              </div>
            </article>
          ))}
        </div>

        {/* Nota add-on BioLink */}
        <div className="services__addon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Adicione um <strong>Bio Link</strong> a qualquer serviço acima por apenas <strong>+&nbsp;R$&nbsp;43,00</strong></span>
        </div>

        {/* Nota domínio */}
        <div className="services__note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>Caso deseje seu site com domínio próprio <strong>(.com.br)</strong>, a anuidade de compra do domínio é por conta do cliente.</span>
        </div>

        {/* Seção de detalhe do serviço selecionado */}
        {selected && (
          <div ref={detailRef} className="service-detail">
            <div className="service-detail__header">
              <div className="service-detail__icon">{selected.icon}</div>
              <div>
                <p className="service-detail__label">{selected.title}</p>
                <h3 className="service-detail__heading">{selected.detail.heading}</h3>
                <p className="service-detail__price">{selected.price}</p>
              </div>
              <button
                className="service-detail__close"
                onClick={() => setSelected(null)}
                aria-label="Fechar detalhes"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="service-detail__body">
              <div className="service-detail__text">
                {selected.detail.body.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="service-detail__includes">
                <p className="service-detail__includes-title">O que está incluído:</p>
                <ul>
                  {selected.detail.includes.map((item, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5514997815567?text=${encodeURIComponent(`Olá! Me interessei pelo serviço de *${selected.title}* (${selected.price}). Poderia me passar mais informações?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary service-detail__cta"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Solicitar este serviço
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="services__cta">
          <p className="services__cta-text">Não encontrou o que precisa?</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Consultar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
