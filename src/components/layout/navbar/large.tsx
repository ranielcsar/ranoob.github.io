import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export function LargeNavbar() {
  const { t } = useTranslation()

  return (
    <section className="flex h-full text-xl md:border-b-2 lg:border-t-2 lg:border-b-0 md:border-x-2 lg:border-x-0 border-primary">
      <NavbarLink label={t('Sobre')} route="/" />
      <NavbarLink label={t('Projetos')} route="/projects" />
      <NavbarLink label={t('Experiências')} route="/experiences" />
      <NavbarLink label={t('Currículo')} route="/curriculum" />
    </section>
  )
}

function NavbarLink({ label, route }: { label: string; route: string }) {
  return (
    <NavLink
      className="hover uppercase tracking-wider xl:text-2xl flex-1 [&:not(:last-child)]:border-r-2 lg:border-r-2 border-primary"
      to={route}
      aria-label={`Ir para a página ${label}`}
    >
      {({ isActive }) => (
        <span
          className={`relative transition-[background] w-full h-full flex
          items-center justify-center ${
            isActive ? 'bg-primary text-secondary' : 'bg-secondary text-primary'
          }`}
        >
          {label}
        </span>
      )}
    </NavLink>
  )
}
