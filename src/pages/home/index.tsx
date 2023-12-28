import { useTranslation } from 'react-i18next'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <section className="m-auto flex flex-col gap-5 xl:max-w-max-xl lg:max-w-max-lg">
      <div className="h-full text-xl lg:text-2xl leading-relaxed">
        {t('Olá')}!
        <br />
        {t('Me chamo')} <strong className="tracking-wide">Raniel César</strong>{' '}
        {t('e sou')} <br />
        <h2 className="bg-accent max-w-3xl text-black font-pixel rounded-sm p-2 mb-2 border-4 border-secondary shadow-neo-md dark:shadow-accent text-[8.5vw] md:text-[6vw] leading-tight tracking-wider lg:text-5xl lg:p-4 lg:text-center">
          ✦ {t('Desenvolvedor Web')}
        </h2>
        <p>{t('Nordestino, moro em Sr. do Bonfim, interior da Bahia.')}</p>
      </div>

      <p className="max-w-4xl text-xl leading-relaxed lg:text-2xl">
        {t('Apaixonado por Ciência, Tecnologia, Web e entusiasta de UX/UI.')}
        <br />
        {t(
          'Amo gatos, música e jogos indie, principalmente os feitos em Pixel Art.',
        )}
        <br />
        {t(
          'Tenho experiência com as principais ferramentas de Desenvolvimento Web como Angular, NextJS, Typscript, VueJS, entre outras. Também possuo conhecimento em desenvolvimento Backend com NestJS, Prisma e Express.',
        )}
        <br />
        {t(
          'Estou sempre estudando novas tecnologias como Docker, e outras linguagens como Python e Java.',
        )}
      </p>
    </section>
  )
}
