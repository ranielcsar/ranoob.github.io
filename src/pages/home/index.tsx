import ProfilePic from '@/assets/perfil.webp'
import { SocialLinksAndContact } from '@/components/common'
import { useTransitionAnimation } from '@/hooks'
import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation()

  return (
    <div className="flex h-full w-full cursor-default flex-col gap-5 py-20 md:py-16 lg:pb-14 xl:h-screen xl:flex-row xl:items-center xl:py-0">
      <section className="flex flex-col items-center self-center xl:order-2">
        <picture className="profile-picture ">
          <img
            ref={profilePicRef}
            src={ProfilePic}
            alt="foto perfil de Raniel César"
            loading="lazy"
            className="bg-black/50 h-52 w-52 rounded-full object-cover xl:h-64 xl:w-64 object-[0,-4.5rem]"
          />
        </picture>

        <div className="mt-5 flex w-max items-center gap-5 self-center lg:hidden">
          <SocialLinksAndContact />
        </div>
      </section>

      <section className="flex flex-col gap-10 xl:flex-1" ref={sectionRef}>
        <div className="h-full text-xl leading-relaxed lg:text-[3ch] xl:h-auto">
          {t('Olá')}!
          <br />
          {t('Me chamo')}{' '}
          <strong className="tracking-wide">Raniel César</strong> {t('e sou')}{' '}
          <br />
          <mark className="bg-gradient-to-r from-primary to-secondary font-pixel rounded-sm p-1 text-[3ch] tracking-wider text-neutral-50 lg:text-4xl">
            ✦ {t('Desenvolvedor Frontend')}
          </mark>
          <p>{t('Nordestino, moro em Sr. do Bonfim, interior da Bahia.')}</p>
        </div>

        <p className="max-w-[50rem] text-xl leading-relaxed lg:text-[2.75ch]">
          {t('Apaixonado por Ciência, Tecnologia, Web e entusiasta de UX/UI.')}
          <br />
          {t(
            'Amo gatos, música e jogos indie, principalmente os feitos em Pixel Art.',
          )}
          <br />
          {t(
            'Tenho experiência com ReactJS, TypeScript, NextJS, TailwindCSS, ChakraUI entre outras bibliotecas de desenvolvimento web. Possuo conhecimento em desenvolvimento Backend com NestJS, Prisma e Express.',
          )}
          <br />
          {t(
            'Atualmente estou estudando VueJS, Python e Aprendizado de Máquina.',
          )}
        </p>
      </section>
    </div>
  )
}
