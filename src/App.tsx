import { MemoryRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from '@/components/layout'
import { AppRoutes } from '@/routes'
// import { useMediaQuery } from '@/hooks/useMediaQuery'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  // const isMobile = useMediaQuery('(max-width: 1020px)')

  return (
    <MemoryRouter initialEntries={['/']}>
      <div className="grid h-full grid-rows-[max-content,1fr]">
        <Header />

        <main className="row-[2] w-full h-full flex items-center justify-center xl:max-w-max-xl lg:max-w-max-lg lg:m-auto">
          <AppRoutes />
        </main>

        {/* {isMobile ? (
          <div className="fixed bottom-0 z-20 w-full bg-black">
            <FooterMenu />
          </div>
        ) : (
          <></>
        )} */}
      </div>

      <ToastContainer />
    </MemoryRouter>
  )
}
