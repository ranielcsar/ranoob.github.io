import { useTransitionAnimation } from '@/hooks'

import { Header } from '@/components/layout'
import { HomePage, ExperienciesPage } from '@/pages'

export function App() {
  const [mainRef] = useTransitionAnimation({
    from: {
      y: -30,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
  })

  return (
    <div className="grid grid-rows-[10em,1fr] lg:grid-rows-[5em,1fr] h-full">
      <Header />

      <main
        ref={mainRef}
        className="row-[2] py-5 w-full px-2 lg:px-0 flex flex-col items-center justify-center lg:m-auto max-w-5xl"
      >
        <HomePage />

        <ExperienciesPage />
      </main>
    </div>
  )
}
