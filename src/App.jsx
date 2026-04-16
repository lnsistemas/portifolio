import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BioLink from './components/BioLink'
import ProjectPage from './components/ProjectPage'
import CatalogLanding from './pages/CatalogLanding'
import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'
import WhatsAppFloat from './components/WhatsAppFloat'

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/biolink" element={<BioLink />} />
        <Route path="/projetos/landing-page" element={<LandingPage />} />
        <Route path="/projetos/portfolio" element={<PortfolioPage />} />
        <Route path="/projetos/catalogo" element={<CatalogLanding />} />
      </Routes>
    </BrowserRouter>
  )
}
