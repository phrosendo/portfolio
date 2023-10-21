
import Image from "next/image"
import "./experience-time.scss"

interface ExperienceTime {
    spanText: string
    imgText: string
    altLogo: string
    measureNumber: number
}

export function ExperienceTime({ spanText, imgText, altLogo, measureNumber }: ExperienceTime) {

    let measure: string = "experience-measure measure-" + measureNumber;

    return (
        <div className="experience-time">
            <Image
                src={imgText}
                alt={altLogo}
                width={40}
                height={40}
                priority
            />
            <div className="experience-time-value">
                <div className={measure}>
                    <span>{spanText}</span>
                </div>
            </div>
        </div>
    )
}