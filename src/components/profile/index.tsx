import ProfilePic from '@/assets/perfil.png'
import { SocialLinksAndContact } from '@/components/common'

export function Profile() {
  return (
    <div className="flex flex-col gap-4 h-screen">
      <picture className="bg-accent flex items-end overflow-hidden max-h-72 w-full rounded-xl border-4 border-secondary shadow-neo-sm">
        <img
          src={ProfilePic}
          alt="foto perfil de Raniel César"
          loading="lazy"
          className="object-cover w-[inherit] h-auto object-bottom max-w-sm"
        />
      </picture>

      <footer className="flex items-center justify-around py-4">
        <SocialLinksAndContact />
      </footer>
    </div>
  )
}
