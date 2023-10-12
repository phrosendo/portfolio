import Image from 'next/image'
import "./header.scss"

export function Header(){
    return(
        <div className="header">
        <div>
          <h1>Olá, eu sou o Pedro!👋</h1>
          <h2>Software Developer</h2>
        </div>
        <Image
          src="/ph.jpeg"
          alt="PH Logo"
          width={325}
          height={310}
          priority
        />
      </div>
    )
}