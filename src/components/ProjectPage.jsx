import { useNavigate } from 'react-router-dom'
import './ProjectPage.css'

export default function ProjectPage({ title }) {
  const navigate = useNavigate()

  return (
    <div className="project-page">
      <div className="project-page__content">
        <button className="project-page__back" onClick={() => navigate('/')}>
          ← Voltar
        </button>
        <h1 className="project-page__title">{title}</h1>
        <p className="project-page__msg">Conteúdo em desenvolvimento. Em breve disponível.</p>
      </div>
    </div>
  )
}
