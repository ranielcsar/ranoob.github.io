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
    <div className="grid grid-rows-[5em,1fr] h-full overflow-y-auto">
      <Header />

      <main
        ref={mainRef}
        className="row-[2] py-5 w-full flex flex-col items-center justify-center lg:m-auto max-w-5xl"
      >
        <HomePage />

        <ExperienciesPage />
      </main>
    </div>
  )
}
