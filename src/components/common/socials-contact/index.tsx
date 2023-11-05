import { GithubIcon, LinkedinIcon } from '@/assets/icons'
import { SendEmail } from '@/components/common'

export function SocialLinksAndContact() {
  return (
    <>
      <a
        className="h-10 w-10 md:h-14 md:w-14 cursor-pointer shadow-neo shadow-primary rounded-full bg-secondary text-primary transition-colors border-2 border-primary p-1"
        href="https://github.com/ranielcsar"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="Acessar perfil no Github"
      >
        <GithubIcon />
      </a>

      <a
        className="h-10 w-10 md:h-14 md:w-14 bg-secondary shadow-neo shadow-primary rounded-full text-primary cursor-pointer transition-colors border-2 border-primary p-2"
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
