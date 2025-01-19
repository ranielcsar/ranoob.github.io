import {
  LanguageSwitch,
  SocialLinksAndContact,
  ThemeSelector,
} from '@/components/common'

export function Header() {
  return (
    <header className="sticky top-0 bg-primary z-10 w-full h-max py-3 border-b-2 border-secondary">
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-between max-w-5xl m-auto">
        <div className="flex flex-1 order-2 lg:order-1 gap-5 items-center">
          <SocialLinksAndContact />
        </div>

        <strong className="order-1 lg:order-2 tracking-wider xl:text-2xl m-auto flex-[2] text-center">
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
    <div className="flex flex-1 order-3 h-full lg:max-w-[15vw] items-center justify-center gap-5">
      <ThemeSelector />

      <LanguageSwitch />
    </div>
  )
}
