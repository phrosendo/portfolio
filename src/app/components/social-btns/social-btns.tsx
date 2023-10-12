import { InstaIcon } from "../icons/Insta-icon";
import { GitHubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";
import "./social-btns.scss"

interface SocialBtnsProps {

}
export function SocialBtns(props : SocialBtnsProps){
    return(
        <div className="social">
            <a href="https://www.instagram.com/phrosendo/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/pedro-henrique-rosendo-da-silva-828740230/" target="_blank">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/phrosendo" target="_blank">
                <GitHubIcon/>
            </a>
            <a href="https://twitter.com/" target="_blank">
                <TwitterIcon/>
            </a>
        </div>
    )
}