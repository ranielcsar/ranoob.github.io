import { LeftArrow, RightArrow } from '@/assets/icons'
import { ReactNode, useEffect, useState } from 'react'

export function Carousel({ children }: { children: ReactNode[] }) {
  const [current, setCurrent] = useState(0)
  const itemsLen = children.length - 1

  function handleNext() {
    if (current === itemsLen) {
      return setCurrent(0)
    }

    setCurrent((current) => current + 1)
  }

  function handlePrev() {
    if (current === 0) {
      return setCurrent(itemsLen)
    }

    setCurrent((current) => current - 1)
  }

  function handleKeyPress(evt: KeyboardEvent) {
    if (evt.key === 'ArrowRight') return handleNext()

    if (evt.key === 'ArrowLeft') return handlePrev()
  }

  useEffect(() => {
    if (document) {
      document.addEventListener('keydown', handleKeyPress)
    }

    return () => {
      if (document) {
        document.removeEventListener('keydown', handleKeyPress)
      }
    }
  }, [current])

  return (
    <section className="relative grid h-full w-full grid-cols-[1fr] grid-rows-[1fr,10rem] items-center justify-center lg:grid-rows-[1fr,5rem] xl:flex xl:gap-10">
      <button
        onClick={handlePrev}
        className="col-[1] row-[2] ml-5 h-8 w-8"
        tabIndex={-1}
        aria-label="Preview item button"
      >
        <LeftArrow />
      </button>

      {children[current]}

      <button
        onClick={handleNext}
        className="col-[1] row-[2] mr-5 h-8 w-8 justify-self-end"
        tabIndex={-1}
        aria-label="Next item button"
      >
        <RightArrow />
      </button>
    </section>
  )
}
