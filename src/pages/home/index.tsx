import ProfilePic from '@/assets/perfil.webp'
import { SocialLinksAndContact } from '@/components/common'
import { useTransitionAnimation } from '@/hooks'

export function HomePage() {
  const [sectionRef] = useTransitionAnimation({
    from: {
      y: -30,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
  })

  const [profilePicRef] = useTransitionAnimation({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  return (
    <div className="flex h-full w-full cursor-default flex-col gap-5 py-20 md:py-16 lg:pb-14 xl:h-screen xl:flex-row xl:items-center xl:py-0">
      <section className="flex flex-col items-center self-center xl:order-2">
        <picture className="profile-picture ">
          <img
            ref={profilePicRef}
            src={ProfilePic}
            alt="foto perfil de Raniel César"
            loading="lazy"
            className="bg-black/50 h-52 w-52 rounded-full object-cover object-[0,-7.5rem] xl:h-64 xl:w-64 xl:object-[0,-9.5rem]"
          />
        </picture>

        <div className="mt-5 flex w-max items-center gap-5 self-center lg:hidden">
          <SocialLinksAndContact />
        </div>
      </section>

      <section className="flex flex-col gap-10 xl:flex-1" ref={sectionRef}>
        <div className="h-full text-xl leading-relaxed lg:text-[3ch] xl:h-auto">
          Olá!
          <br />
          Me chamo <strong className="tracking-wide">Raniel César</strong> e sou{' '}
          <br />
          <mark className="bg-gradient-to-r from-primary to-secondary font-pixel rounded-sm p-1 text-[3ch] tracking-wider text-neutral-50 lg:text-4xl">
            ✦ Desenvolvedor Frontend
          </mark>
          <p>Nordestino, moro em Sr. do Bonfim, interior da Bahia.</p>
        </div>

        <p className="max-w-[50rem] text-xl leading-relaxed lg:text-[2.75ch]">
          Apaixonado por Ciência, Tecnologia, Web e entusiasta de UX/UI.
          <br />
          Amo gatos, música e jogos indie, principalmente feitos em Pixel Art.
          <br />
          <br />
          Tenho experiência com ReactJS, TypeScript, NextJS, TailwindCSS,
          ChakraUI entre outras bibliotecas de desenvolvimento web. Possuo
          conhecimento em desenvolvimento Backend com NestJS, Prisma e Express.
          <br />
          Atualmente estou estudando VueJS, Python e Aprendizado de Máquina.
        </p>
      </section>
    </div>
  )
}
