import { LeftArrow, RightArrow } from '@/assets/icons'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { FunctionComponent, useEffect, useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'

type CarouselProps<T> = {
  items: T[]
  children: FunctionComponent<{ item: T; activeItem: boolean }>
}

export function Carousel<T>({ items, children }: CarouselProps<T>) {
  const [activeItem, setActiveItem] = useState(0)

  const isMobile = useMediaQuery('(max-width: 1020px)')

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: isMobile ? 1.1 : 1,
    withLoop: true,
    items: items.map((item, index) => ({
      id: index,
      renderItem: children({ item, activeItem: activeItem === index }),
    })),
  })

  useListenToCustomEvent(
    (event: { eventName: string; nextItem: { id: number } }) => {
      if (event.eventName === 'onSlideStartChange') {
        setActiveItem(event.nextItem.id)
      }
    },
  )

  function handleKeyPress(evt: KeyboardEvent) {
    if (evt.key === 'ArrowRight') return slideToNextItem()

    if (evt.key === 'ArrowLeft') return slideToPrevItem()
  }

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener('keydown', handleKeyPress)

      return () => document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <section className="flex flex-column w-full h-full lg:gap-5 lg:items-center xl:flex-row xl:gap-10">
      <button
        onClick={slideToPrevItem}
        className="hidden z-20 lg:block col-[1] row-[2] ml-5 h-8 w-8 order-1"
        tabIndex={-1}
        aria-label="Preview item button"
      >
        <LeftArrow />
      </button>

      <div className="flex-1 order-2 overflow-hidden">{carouselFragment}</div>

      <button
        onClick={slideToNextItem}
        className="hidden z-20 lg:block col-[1] row-[2] mr-5 h-8 w-8 justify-self-end order-3"
        tabIndex={-1}
        aria-label="Next item button"
      >
        <RightArrow />
      </button>
    </section>
  )
}
