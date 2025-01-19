import {
  LanguageSwitch,
  SocialLinksAndContact,
  ThemeSelector,
} from '@/components/common'

export function Header() {
  return (
    <header className="sticky top-0 bg-primary z-10 w-full h-max py-3 lg:border-y-2 border-secondary">
      <div className="flex items-center justify-between max-w-5xl m-auto">
        <div className="lg:flex lg:flex-1 lg:gap-6 lg:items-center hidden">
          <SocialLinksAndContact />
        </div>

        <strong className="tracking-wider xl:text-2xl m-auto flex-[2] text-center">
          {'<'}
          ranielcsar
          {'/>'}
        </strong>

        <ChangeThemeAndLang />
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
