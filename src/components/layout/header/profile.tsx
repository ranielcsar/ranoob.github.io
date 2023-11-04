import ProfilePic from '@/assets/perfil.png'
// import { SocialLinksAndContact } from '@/components/common'
import { useTransitionAnimation } from '@/hooks'
// import { useMediaQuery } from '@/hooks/useMediaQuery'

export function Profile() {
  const [profilePicRef] = useTransitionAnimation({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })
  // const isMobile = useMediaQuery('(max-width: 1020px)')

  return (
    <picture className="row-span-2 columns-1 border-x-2 border-x-secondary h-auto w-auto">
      <img
        ref={profilePicRef}
        src={ProfilePic}
        alt="foto perfil de Raniel César"
        loading="lazy"
        className="bg-accent object-cover h-[24.8vh] w-full object-bottom overflow-hidden"
      />

      {/* {isMobile ? (
        <div className="mt-5 flex w-max items-center gap-5 self-center lg:hidden">
          <SocialLinksAndContact />
        </div>
      ) : (
        <></>
      )} */}
    </picture>
  )
}
