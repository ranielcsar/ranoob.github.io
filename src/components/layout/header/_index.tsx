import {
  LanguageSwitch,
  SocialLinksAndContact,
  ThemeSelector,
} from '@/components/common'
import { Navbar } from '../navbar/_index'
import { Profile } from './profile'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="row-[1] w-full h-max flex lg:border-y-2 border-secondary">
      <div className="grid grid-rows-[10rem,min(10vh,4rem),min(10vh,4rem)] grid-cols-[max-content,1fr] w-full lg:grid-rows-[repeat(2,max(11vh,5rem))] m-auto xl:max-w-max-xl lg:max-w-max-lg">
        <Profile />

        <section className="border-2 row-[2] col-span-2 lg:row-[1] lg:col-[2] lg:w-full text-2xl relative flex justify-around items-center lg:border-r-2 lg:border-y-0 lg:border-l-0 border-secondary xl:text-3xl">
          <div className="lg:flex lg:flex-1 lg:min-w-max lg:gap-3 lg:px-3 lg:items-center lg:justify-evenly hidden">
            <SocialLinksAndContact />
          </div>

          <Link
            to="/"
            className="hover:text-secondary text-center flex-[1.2] lg:flex-[3] lg:flex lg:h-full lg:border-x-2 lg:border-secondary"
          >
            <strong className="tracking-wider xl:text-2xl m-auto">
              {'<'}
              ranielcsar
              {'/>'}
            </strong>
          </Link>

          <ChangeThemeAndLang />
        </section>

        <nav className="row-[3] lg:row-[2] lg:col-[2] col-span-2">
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
