
import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
          <span>🇧🇷 PT-BR - Fluente</span>
          <span>🇺🇸 EN - Básico</span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Análise e Desenvolvimento de Sistemas - Faculdade Metropolitanas Unidas (FMU)</span>
        </div>
      </div>
    )
}