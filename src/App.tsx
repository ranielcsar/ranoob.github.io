import { MemoryRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { useTransitionAnimation } from '@/hooks'

// import { Header } from '@/components/layout'
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
      <div>
        <main
          ref={mainRef}
          className="flex min-h-screen flex-col flex-1 w-[90%] m-auto items-center"
        >
          <AppRoutes />
        </main>
      </div>

      <ToastContainer />
    </MemoryRouter>
  )
}
