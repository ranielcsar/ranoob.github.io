// import { Profile } from '@/components/layout'
import { useTranslation } from 'react-i18next'


export function HomePage() {
  return (
    <>
      {/* <Profile /> */}
      <AboutText />
    </>
  )
}



function AboutText() {
  const { t } = useTranslation()

  return (
    <section id="about_text" className="m-auto flex flex-col gap-5 xl:max-w-max-xl lg:max-w-max-lg">
      <div className="h-full text-xl lg:text-2xl leading-relaxed">
        <p className="max-w-4xl text-xl leading-relaxed lg:text-2xl">
        <strong className="tracking-wide accent_mark">{t('Desenvolvedor Web')}</strong>
          {t(', Apaixonado por Ciência, Tecnologia e entusiasta de UX/UI.')}
          <br />
          {t(
            'Amo gatos, música e jogos indie, principalmente os feitos em Pixel Art.',
          )}
        </p>
      </div>

      <p className="max-w-4xl text-xl leading-relaxed lg:text-2xl">
        Tenho experiência nas principais ferramentas de desenvolvimento como Angular, NextJS e ReactJS.
        Possuo conhecimento em desenvolvimento Backend com NestJS, Prisma e Express.
        Sempre que possível estudo tecnologias como Docker e Jest, e também linguagens como Python e Java.
        Gosto de música e de escrever resumos sobre o que estou estudando.
      </p>
    </section>
  )
}
