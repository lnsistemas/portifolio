export default function BioLinkLogo({ size = 80, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00ff9c" />
          <stop offset="100%" stopColor="#00c87a" />
        </linearGradient>
        <filter id="neon" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Fundo com borda gradiente */}
      <rect x="1" y="1" width="62" height="62" rx="16" fill="#0a0a0a" />
      <rect x="1" y="1" width="62" height="62" rx="16"
        fill="none" stroke="url(#borderGrad)" strokeWidth="1.5" opacity="0.7" />

      {/* Foto de perfil circular */}
      <circle cx="32" cy="16" r="7.5"
        fill="none" stroke="#00ff9c" strokeWidth="2"
        filter="url(#neon)" />
      {/* Detalhe interior do perfil */}
      <circle cx="32" cy="16" r="3.5" fill="#00ff9c" opacity="0.9" />

      {/* Ombros / silhueta */}
      <path d="M 19 27 C 19 22 45 22 45 27"
        stroke="#00ff9c" strokeWidth="1.8" strokeLinecap="round"
        opacity="0.6" filter="url(#neon)" />

      {/* Link bar 1 — maior */}
      <rect x="10" y="31" width="44" height="8" rx="4"
        fill="none" stroke="#00ff9c" strokeWidth="1.5"
        filter="url(#neon)" />
      <rect x="14" y="33.5" width="20" height="3" rx="1.5"
        fill="#00ff9c" opacity="0.5" />

      {/* Link bar 2 */}
      <rect x="10" y="43" width="44" height="8" rx="4"
        fill="none" stroke="#00ff9c" strokeWidth="1.5" opacity="0.8"
        filter="url(#neon)" />
      <rect x="14" y="45.5" width="14" height="3" rx="1.5"
        fill="#00ff9c" opacity="0.4" />

      {/* Link bar 3 — menor */}
      <rect x="10" y="55" width="44" height="8" rx="4"
        fill="none" stroke="#00ff9c" strokeWidth="1.5" opacity="0.6" />
      <rect x="14" y="57.5" width="10" height="3" rx="1.5"
        fill="#00ff9c" opacity="0.3" />

      {/* Ponto de conexão entre perfil e links */}
      <line x1="32" y1="24" x2="32" y2="31"
        stroke="#00ff9c" strokeWidth="1.5" strokeDasharray="1.5 2"
        opacity="0.4" />
    </svg>
  )
}
