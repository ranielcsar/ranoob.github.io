import { MemoryRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from '@/components/layout'
import { AppRoutes } from '@/routes'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <MemoryRouter initialEntries={['/']}>
      <div className="grid h-full grid-rows-[max-content,1fr]">
        <Header />

        <main className="row-[2] px-3 py-5 w-full overflow-auto flex items-center justify-center xl:max-w-max-xl lg:max-w-max-lg lg:m-auto">
          <AppRoutes />
        </main>
      </div>

      <ToastContainer />
    </MemoryRouter>
  )
}
