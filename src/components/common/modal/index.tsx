import { CloseIcon } from '@/assets/icons'
import { Dialog, Transition } from '@headlessui/react'
import { ReactNode, Fragment, useEffect } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose(): void
  title: string
  children: ReactNode
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  useEffect(() => {
    window.addEventListener('beforeunload', onClose)

    return () => window.removeEventListener('beforeunload', onClose)
  }, [])
  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose} onBackdropClick={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-900 bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="m-auto flex h-full w-[90%] items-center justify-center text-center md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all md:h-[79vh] xl:h-auto">
                <Dialog.Title as="h3" className="mb-10 text-lg font-medium leading-6 text-black">
                  {title}
                </Dialog.Title>

                <button
                  type="button"
                  className="absolute outline-none top-6 right-4 text-black h-6 w-6"
                  onClick={onClose}
                >
                  <CloseIcon />
                </button>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
