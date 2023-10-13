import { LeftArrow, RightArrow } from '@/assets/icons'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ReactNode, useEffect } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'

export function Carousel({
  children,
  setActiveItem,
}: {
  children: ReactNode[]
  setActiveItem?: (id: string) => void
}) {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    itemsPerSlide: isMobile ? 1.1 : 1,
    withLoop: true,
    items: children.map((child: any) => ({
      id: child?.key,
      renderItem: child,
    })),
  })

  useListenToCustomEvent(
    (event: { eventName: string; nextItem: { id: any } }) => {
      if (event.eventName === 'onSlideStartChange' && setActiveItem) {
        setActiveItem(event.nextItem.id)
      }
    },
  )

  function handleKeyPress(evt: KeyboardEvent) {
    if (evt.key === 'ArrowRight') return slideToNextItem()

    if (evt.key === 'ArrowLeft') return slideToPrevItem()
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
  }, [])

  return (
    <section className="flex flex-column w-[92vw] lg:w-[73vw] 2xl:w-[45vw] h-full lg:gap-5 lg:items-center xl:flex-row xl:gap-10">
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
