import { GithubIcon, LinkedinIcon } from '@/assets/icons'
import { SendEmail } from '@/components/common'

export function SocialLinksAndContact() {
  return (
    <>
      <a
        className="h-10 w-10 md:h-14 md:w-14 lg:w-10 lg:h-10 cursor-pointer shadow-neo shadow-secondary rounded-full bg-primary text-secondary transition-colors border-2 border-secondary p-1"
        href="https://github.com/ranielcsar"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="Acessar perfil no Github"
      >
        <GithubIcon />
      </a>

      <a
        className="h-10 w-10 md:h-14 md:w-14 lg:w-10 lg:h-10 bg-primary shadow-neo shadow-secondary rounded-full text-secondary cursor-pointer transition-colors border-2 border-secondary p-2"
        href="https://www.linkedin.com/in/raniel-cesar-5bb0991a3/"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="Acessar perfil no Linkedin"
      >
        <LinkedinIcon />
      </a>

      <SendEmail />
    </>
  )
}
