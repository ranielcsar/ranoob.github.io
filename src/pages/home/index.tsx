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
        {t(`Apaixonado por ciência e tecnologia, sou Desenvolvedor Web com 3 anos de experiência, sendo 2 anos em software house e 1 ano como freelancer. Atuei em projetos de Dashboards, Gestão de serviços, Controle de vendas, LandingPages e SaaS no geral utilizando NextJS, ReactJS, TypeScript entre outras tecnologias web. Tenho conhecimento em Angular, Django, Docker, Jest, Testing Library e no que diz respeito a desenvolvimento Backend: Prisma, Express e NestJS.`)}
      </p>
      <p className="max-w-4xl text-xl leading-relaxed lg:text-2xl">
        {t(`Prezo pela comunicação e pela cooperação na equipe, assim também como a transparência de informações. Gosto de um ambiente de trabalho que possui segurança psicológica. Aprendo e me adapto rápido às mudanças.`)}
      </p>
    </section>
  )
}
