import { GithubIcon, LinkedinIcon } from '@/assets/icons'
import { SendEmail } from '@/components/common'

export function SocialLinksAndContact() {
  return (
    <>
      <a
        className="h-8 w-8 cursor-pointer transition-colors"
        href="https://github.com/ranielcsar"
        referrerPolicy="no-referrer"
        target="_blank"
        aria-label="Acessar perfil no Github"
      >
        <GithubIcon />
      </a>

      <a
        className="h-8 w-8 cursor-pointer transition-colors"
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
