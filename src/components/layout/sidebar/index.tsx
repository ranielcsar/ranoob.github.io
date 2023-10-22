import { SocialLinksAndContact } from '@/components/common'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  return (
    <aside className="fixed left-auto top-0 z-10 hidden h-full w-max flex-[0.3] flex-col lg:flex">
      <section className="m-auto flex h-max w-full flex-col gap-10 text-xl">
        <SidebarLink label="Sobre" route="/" />
        <SidebarLink label="Projetos" route="/projects" />
        <SidebarLink label="Experiências" route="/experiences" />
        <SidebarLink label="Currículo" route="/curriculum" />
      </section>

      <footer className="fixed bottom-14 flex items-center gap-5">
        <SocialLinksAndContact />
      </footer>
    </aside>
  )
}

function SidebarLink({ label, route }: { label: string; route: string }) {
  const { t } = useTranslation()

  return (
    <NavLink
      className="group w-max tracking-wider hover:text-white"
      to={route}
      aria-label={`Ir para a página ${label}`}
    >
      {({ isActive }) => (
        <>
          <span
            className={`text-accent ${
              isActive ? 'opacity-100' : 'opacity-0'
            } font-bold transition-opacity group-hover:opacity-100`}
          >
            {'<'}
          </span>
          {t(label)}
          <span
            className={`text-accent ${
              isActive ? 'opacity-100' : 'opacity-0'
            } font-bold transition-opacity group-hover:opacity-100`}
          >
            {'/>'}
          </span>
        </>
      )}
    </NavLink>
  )
}
