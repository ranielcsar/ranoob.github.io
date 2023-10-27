import { MemoryRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { FooterMenu, Header, Sidebar } from '@/components/layout'
import { AppRoutes } from '@/routes'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  const isMobile = useMediaQuery('(max-width: 1020px)')

  return (
    <MemoryRouter initialEntries={['/']}>
      <div className="relative flex w-full flex-col">
        <div className="fixed top-0 z-20 w-full backdrop-blur-lg xl:backdrop-blur-sm bg-black/75 xl:bg-black/50">
          <Header />
        </div>

        <main className="relative flex w-full max-w-max-allowed flex-1 flex-col items-center overflow-y-auto overflow-x-hidden px-3 lg:mx-auto lg:h-screen lg:flex-row lg:px-5 xl:px-10">
          {!isMobile ? <Sidebar /> : <></>}

          <div className="flex-1 md:px-5 lg:order-2 lg:ml-[12rem] xl:ml-[15rem]">
            <AppRoutes />
          </div>
        </main>

        {isMobile ? (
          <div className="fixed bottom-0 z-20 w-full bg-black">
            <FooterMenu />
          </div>
        ) : (
          <></>
        )}
      </div>

      <ToastContainer />
    </MemoryRouter>
  )
}
