import {
  LanguageSwitch,
  SocialLinksAndContact,
  ThemeSelector,
} from '@/components/common'
import { Profile, Navbar } from '@/components/layout'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <div>
        <Profile />

        <section>
          <div>
            <SocialLinksAndContact />
          </div>

          <Link
            to="/"

          >
            <strong>
              {'<'}
              ranielcsar
              {'/>'}
            </strong>
          </Link>

          <ChangeThemeAndLang />
        </section>

        <nav>
          <Navbar />
        </nav>
      </div>
    </header>
  )
}

function ChangeThemeAndLang() {
  return (
    <div className="flex flex-1 h-full lg:max-w-[15vw] items-center justify-center gap-5">
      <ThemeSelector />

      <LanguageSwitch />
    </div>
  )
}
