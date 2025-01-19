import { useTransitionAnimation } from '@/hooks'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export function ExperienciesPage() {
  const { t } = useTranslation()

  return (
    <div className="m-auto mt-10 flex flex-col cursor-default">
      <h2 className="mb-4 text-2xl lg:text-3xl font-bold">{t('exp')}</h2>

      <ul className="flex flex-col gap-12 self-center">
        <Exp title={t('brainny')}>
          {t('brainnyAbout')}
          <p className="mt-5">
            {t('workingTime')}:{' '}
            <strong className="tracking-wide">{t('brainnyWorkingTime')}</strong>
          </p>
        </Exp>

        <Exp title={t('system')}>
          {t('systemAbout')}
          <p className="mt-5">
            {t('workingTime')}:{' '}
            <strong className="tracking-wide">{t('systemWorkingTime')}</strong>
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
      <h2 className="bg-accent text-xl lg:text-2xl xl:text-[clamp(1vw,3vh,10rem)] px-3 py-2 border-4 border-secondary text-black rounded-sm shadow-neo-sm lg:shadow-neo-md dark:shadow-accent font-bold w-auto max-w-max tracking-wider">
        ✦ {title}
      </h2>

      <section className="text-xl leading-relaxed max-w-6xl" ref={childrenRef}>
        {children}
      </section>
    </li>
  )
}
