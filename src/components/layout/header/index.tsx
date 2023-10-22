import { MoonIcon } from '@/assets/icons'
import { Link } from 'react-router-dom'
import { LanguageSwitch } from '@/components/common'

export function Header() {
  return (
    <header className="m-auto flex max-w-max-allowed items-center justify-between p-4 md:px-5 xl:gap-10 xl:px-10">
      <Link to="/" className="text-xl tracking-wider hover:text-white">
        <span className="font-bold text-accent">{'<'}</span>
        <span>ranielcsar</span>
        <span className="font-bold text-accent">{'/>'}</span>
      </Link>

      <section className="flex items-center gap-5">
        <button
          className="h-6 w-6 cursor-pointer"
          aria-label="Button for change color mode"
          onClick={handleChangeTheme}
        >
          <MoonIcon />
        </button>

        <LanguageSwitch />
      </section>
    </header>
  )
}

function handleChangeTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
}
