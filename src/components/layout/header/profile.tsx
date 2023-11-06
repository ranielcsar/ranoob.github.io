import ProfilePic from '@/assets/perfil.png'
import { SocialLinksAndContact } from '@/components/common'
// import { useMediaQuery } from '@/hooks/useMediaQuery'

export function Profile() {
  // const isMobile = useMediaQuery('(max-width: 1020px)')

  return (
    <>
      <picture className="row-[1] col-[1] lg:row-span-2 border-2 lg:border-x-2 lg:border-t-0 border-b-0 bg-accent flex items-end overflow-hidden border-secondary h-full w-full">
        <img
          src={ProfilePic}
          alt="foto perfil de Raniel César"
          loading="lazy"
          className="object-fill lg:object-contain w-[inherit] h-auto object-center max-h-52 max-w-sm lg:max-h-60"
        />
      </picture>

      <div className="flex items-center border-r-2 border-t-2 border-b-0 lg:border-l-0 border-secondary justify-around lg:hidden">
        <SocialLinksAndContact />
      </div>
    </>
  )
}
