import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <div className="experience">
        <h3>Experiência</h3>
        <p>2 anos trabalhando como QA/Developer na empresa Stefanini</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Idiomas</h3>
          <div className="languages-infos">
            <span>🇧🇷 PT-BR - Fluent</span>
            <span>🇺🇸 EN - Basic</span>
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
      </div>
    </main>
  )
}
