import './ForWhom.css'

const profiles = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: 'Autônomos e prestadores de serviço',
    description: 'Eletricista, encanador, designer, fotógrafo, personal trainer — quem precisa de um endereço online profissional para passar credibilidade.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Pequenos negócios locais',
    description: 'Loja, restaurante, clínica, barbearia — quem quer que os clientes encontrem o negócio no celular e já entrem em contato direto.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Quem quer vender online',
    description: 'Produtores, revendedores e lojistas que precisam de um catálogo digital onde o cliente vê o produto e já chama no WhatsApp.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Profissionais das redes sociais',
    description: 'Criadores de conteúdo, influenciadores e perfis comerciais que precisam de um bio link personalizado no lugar do Linktree genérico.',
  },
]

export default function ForWhom() {
  return (
    <section id="for-whom" className="section for-whom">
      <div className="container">
        <p className="section-label">Para quem é</p>
        <h2 className="section-title">Feito para quem não tem tempo a perder</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Se você se reconhece em algum desses perfis, posso te ajudar a estar online em dias — não em meses.
        </p>

        <div className="for-whom__grid">
          {profiles.map((profile, i) => (
            <div key={i} className="for-whom__card">
              <div className="for-whom__icon">{profile.icon}</div>
              <h3 className="for-whom__title">{profile.title}</h3>
              <p className="for-whom__description">{profile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
