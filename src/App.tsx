import { BrowserRouter } from 'react-router-dom'
import { FooterMenu, Header, Sidebar } from '@/components/layout'
import { AppRoutes } from '@/routes'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <BrowserRouter>
      <div className="relative flex w-full flex-col">
        <div className="fixed top-0 z-20 w-full backdrop-blur-lg xl:backdrop-blur-sm bg-black/75 xl:bg-black/50">
          <Header />
        </div>

        <main className="relative flex w-full max-w-max-allowed flex-1 flex-col items-center overflow-y-auto px-3 lg:mx-auto lg:h-screen lg:flex-row lg:px-5 xl:px-10">
          <Sidebar />

          <div className="flex-1 md:px-5 lg:order-2 lg:ml-[13rem] xl:ml-[15rem]">
            <AppRoutes />
          </div>
        </main>

        <div className="fixed bottom-0 z-20 w-full bg-black">
          <FooterMenu />
        </div>
      </div>

      <ToastContainer />
    </BrowserRouter>
  )
}
