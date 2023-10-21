import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export function FooterMenu() {
  return (
    <footer className="flex w-full items-center justify-evenly border-t border-t-white bg-black py-3 text-white shadow-md lg:hidden">
      <FooterMenuItem label="Sobre" route="/" />
      <FooterMenuItem label="Projetos" route="/projects" />
      <FooterMenuItem label="Experiências" route="/experiences" />
      <FooterMenuItem label="Currículo" route="/curriculum" />
    </footer>
  )
}

function FooterMenuItem({ label, route }: { label: string; route: string }) {
  const { t } = useTranslation()

  return (
    <NavLink className="group w-max tracking-wider" to={route}>
      {({ isActive }) =>
        isActive ? (
          <span className="text-accent">{t(label)}</span>
        ) : (
          <span>{t(label).slice(0, 4).concat('~')}</span>
        )
      }
    </NavLink>
  )
}
