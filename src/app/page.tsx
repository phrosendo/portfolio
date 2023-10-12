import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <div className="infos">
        <h3>Idiomas</h3>
        <div className="languages-infos">
          <span>🇧🇷 PT-BR - Fluente</span>
          <span>🇺🇸 EN - Básico</span>
        </div>
        <h3>Educação</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Análise e Desenvolvimento de Sistemas - Faculdade Metropolitanas Unidas (FMU)</span>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>contato</button>
        </div>
      </div>
    </main>
  )
}
