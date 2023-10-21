import { SectionTitle } from "../sectionTitle/section-title"
import { ExperienceTime } from "../experience-time/experience-time"
import "./experience.scss"

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>6 anos trabalhando como QA/Developer, atualmente na empresa STEFANINI CONSULTORIA E ASSESSORIA EM INFORMATICA S.A.</p>
            <ExperienceTime spanText="1 ano" imgText="/react.png" altLogo="React Logo" measureNumber={1}/>
            <ExperienceTime spanText="5 anos" imgText="/java.png" altLogo="Java Logo" measureNumber={5}/>
            <ExperienceTime spanText="2 anos" imgText="/js.png" altLogo="Java Script Logo" measureNumber={2}/>
            <ExperienceTime spanText="1 ano" imgText="/ts.png" altLogo="Type Script Logo" measureNumber={3}/>
        </div>
    )
}