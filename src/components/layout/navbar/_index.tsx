import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import { LargeNavbar } from './large'
import { RightArrow } from '@/assets/icons'

const links: Record<string, string> = {
  ['/']: 'Sobre',
  ['/projects']: 'Projetos',
  ['/experiences']: 'Experiências',
  ['/curriculum']: 'Currículo',
}

export function Navbar() {
  const isTablet = useMediaQuery('(min-width: 768px)')
  const { t } = useTranslation()

  const [openMenu, setOpenMenu] = useState(false)
  const handleMenu = () => setOpenMenu((open) => !open)

  const { pathname } = useLocation()

  const menuStyle = openMenu
    ? `opacity-1 z-20 translate-y-1`
    : `-translate-y-14 opacity-0 -z-20`

  if (isTablet) return <LargeNavbar />

  return (
    <section className="relative h-full">
      <button
        onClick={handleMenu}
        className="uppercase flex items-center justify-center gap-4 bg-primary text-xl text-secondary h-[inherit] w-full tracking-wider border-secondary"
      >
        {t(links[pathname])}
        <span className="w-5 h-5 rotate-90">
          <RightArrow />
        </span>
      </button>

      <div
        className={`absolute grid auto-rows-[8vh] text-xl inset-x-1 border-x-2 border-t-2 border-primary overflow-hidden transition-all duration-300 ${menuStyle}`}
        onClick={handleMenu}
      >
        <NavbarLink label={t('Sobre')} route="/" />
        <NavbarLink label={t('Projetos')} route="/projects" />
        <NavbarLink label={t('Experiências')} route="/experiences" />
        <NavbarLink label={t('Currículo')} route="/curriculum" />
      </div>
    </section>
  )
}

function NavbarLink({ label, route }: { label: string; route: string }) {
  return (
    <NavLink
      className="uppercase h-full w-full tracking-wider flex-1 border-b-2 border-primary"
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
