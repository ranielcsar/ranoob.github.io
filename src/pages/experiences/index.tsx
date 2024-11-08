import { useTransitionAnimation } from '@/hooks'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export function ExperienciesPage() {
  const { t } = useTranslation()

  return (
    <div className="m-auto xl:max-w-max-xl lg:max-w-max-lg flex cursor-default items-center">
      <ul className="flex flex-col gap-12">
        <Exp title={t('Dev Frontend Jr ~ (PJ na Brainny Smart Solutions)')}>
          {t(
            'Responsável pelo reparo e criação de novas funcionalidades em aplicações web de administração, dashboards, gestão/agendamento de serviços, assim como em landing pages, usando tecnologias web como React, TypeScript, ChakraUI, Apollo e GraphQL. Atuação em uma equipe ágil seguindo metodologias do Scrum (dailies, reviews, plannings, sprints, etc).',
          )}
          <p className="mt-5">
            {t('Tempo de atuação')}:{' '}
            <strong className="tracking-wide">
              {t('Setembro de 2021 - Outubro de 2022')}
            </strong>
          </p>
        </Exp>

        <Exp
          title={t(
            'Dev Frontend Jr ~ (Freelancer na SystemHope - Agência de Software)',
          )}
        >
          {t(
            'Responsável pelo reparo e criação de funcionalidades em sistemas web de administração, dashboards, controles de estoque e também num projeto de plataforma de vídeos usando React, Styled Components, MaterialUI, ChakraUI, React Router entre outras tecnologias.',
          )}
          <p className="mt-5">
            {t('Tempo de atuação')}:{' '}
            <strong className="tracking-wide">
              {t('Maio de 2020 - Janeiro de 2021')}
            </strong>
          </p>
        </Exp>
      </ul>
    </div>
  )
}

function Exp({ title, children }: { title: string; children: ReactNode }) {
  const [childrenRef] = useTransitionAnimation({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <li className="flex list-none flex-col gap-4">
      <h2 className="bg-accent text-[3ch] lg:text-[2.5vw] xl:text-[clamp(1vw,3vh,10rem)] px-3 py-2 border-4 border-secondary text-black rounded-sm shadow-neo-sm lg:shadow-neo-md dark:shadow-accent font-bold w-auto max-w-max tracking-wider">
        ✦ {title}
      </h2>

      <section className="text-xl leading-relaxed max-w-6xl" ref={childrenRef}>
        {children}
      </section>
    </li>
  )
}
