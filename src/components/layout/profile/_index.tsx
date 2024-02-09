import ProfilePic from '@/assets/perfil.png'
import { SocialLinksAndContact } from '@/components/common'

export function Profile() {
  return (
    <section className='grid grid-rows-[max-content,1fr,max-content] gap-4 my-16'>
      <h1 className='text-center text-4xl'>RANIEL CÉSAR</h1>
      <picture className="bg-accent flex items-end overflow-hidden h-full w-full rounded-xl border-4 border-secondary shadow-neo-sm">
        <img
          src={ProfilePic}
          alt="foto perfil de Raniel César"
          loading="lazy"
          className="object-cover w-[inherit] h-auto object-bottom max-h-64 max-w-sm"
        />
      </picture>

      <div className="flex items-center justify-around py-4">
        <SocialLinksAndContact />
      </div>
    </section>
  )
}
