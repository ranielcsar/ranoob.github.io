import { MemoryRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { useTransitionAnimation } from '@/hooks'

import { Header } from '@/components/layout'
import { AppRoutes } from '@/routes'

import 'react-toastify/dist/ReactToastify.css'

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
    <MemoryRouter initialEntries={['/']}>
      <div className="grid h-full grid-rows-[max-content,1fr]">
        <Header />

        <main
          ref={mainRef}
          className="row-[2] px-3 py-5 w-full lg:h-full overflow-y-auto flex items-center justify-center lg:m-auto"
        >
          <AppRoutes />
        </main>
      </div>

      <ToastContainer />
    </MemoryRouter>
  )
}
