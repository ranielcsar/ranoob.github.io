import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <section className="flex h-full">
      <NavbarLink label="Sobre" route="/" />
      <NavbarLink label="Projetos" route="/projects" />
      <NavbarLink label="Experiências" route="/experiences" />
      <NavbarLink label="Currículo" route="/curriculum" />
    </section>
  )
}

function NavbarLink({ label, route }: { label: string; route: string }) {
  const { t } = useTranslation()

  return (
    <NavLink
      className="uppercase tracking-wider xl:text-2xl flex-1 border-r-2 border-secondary"
      to={route}
      aria-label={`Ir para a página ${label}`}
    >
      {({ isActive }) => (
        <span
          className={`relative transition-[background] w-full h-full flex
          items-center justify-center ${
            isActive ? 'bg-secondary text-accent' : 'bg-transparent'
          }`}
        >
          {t(label)}
        </span>
      )}
    </NavLink>
  )
}
