import { MoonIcon } from '@/assets/icons'
// import { Link } from 'react-router-dom'
import { LanguageSwitch } from '@/components/common'
import { Navbar } from './navbar'
import { Profile } from './profile'

export function Header() {
  return (
    <header className="row-[1] w-full flex border-b-2 border-b-secondary h-[25vh]">
      <div className="grid w-full grid-rows-2 grid-cols-[15rem,1fr] m-auto xl:max-w-max-xl lg:max-w-max-lg">
        <Profile />

        <section className="relative flex items-center justify-center row-span-1 border-b-2 border-r-2 border-secondary xl:text-4xl">
          <p>{'<ranielcsar/>'}</p>

          <div className="absolute right-10 flex items-center justify-center p-4 md:px-5 xl:gap-10 xl:px-10">
            <button
              className="h-6 w-6 cursor-pointer"
              aria-label="Button for change color mode"
              onClick={handleChangeTheme}
            >
              <MoonIcon />
            </button>

            <LanguageSwitch />
          </div>
        </section>

        <nav className="row-span-1 column-[2]">
          <Navbar />
        </nav>
      </div>
    </header>
  )
}

// export function Header() {
//   return (
//     <header className="">
//       <Link to="/" className="">
//         <span className="">{'<'}</span>
//         <span>ranielcsar</span>
//         <span className="">{'/>'}</span>
//       </Link>

//       <section className="">
//         <button
//           className="h-6 w-6 cursor-pointer"
//           aria-label="Button for change color mode"
//           onClick={handleChangeTheme}
//         >
//           <MoonIcon />
//         </button>

//         <LanguageSwitch />
//       </section>
//     </header>
//   )
// }

function handleChangeTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
}
