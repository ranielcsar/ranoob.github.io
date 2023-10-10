import { NavLink } from 'react-router-dom'

export function FooterMenu() {
  return (
    <footer className="flex w-full items-center justify-evenly border-t border-t-white bg-black py-3 text-white shadow-md lg:hidden">
      <FooterMenuItem label="Sobre" route="/" />
      <FooterMenuItem label="Projetos" route="/projects" />
      <FooterMenuItem label="Experiências" route="/experiences" />
      <FooterMenuItem label="Curriculum" route="/curriculum" />
    </footer>
  )
}

function FooterMenuItem({ label, route }: { label: string; route: string }) {
  return (
    <NavLink className="group w-max tracking-wider" to={route}>
      {({ isActive }) =>
        isActive ? (
          <span className="text-accent">{label}</span>
        ) : (
          <span>{label.slice(0, 4).concat('~')}</span>
        )
      }
    </NavLink>
  )
}
