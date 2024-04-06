import { ToastContainer } from 'react-toastify'

import { useTransitionAnimation } from '@/hooks'
import { HomePage } from '@/modules'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  const [mainRef] = useTransitionAnimation({
    from: {
      y: -40,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
  })

  return (
    <>
      <main ref={mainRef} className="m-auto w-[90%] h-screen">
        <HomePage />
      </main>

      <ToastContainer />
    </>
  )
}
