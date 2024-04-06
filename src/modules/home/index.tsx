import { DownIcon } from '@/assets/icons/down-icons'
import { useTranslation } from 'react-i18next'
import { useSpringCarousel } from 'react-spring-carousel'
import { ProjectsPage } from '@/modules/projects'
import { useState } from 'react'
import { Profile } from '@/components/profile'

export function HomePage() {
  const [activeItem, setActiveItem] = useState('profile')

  const sections = [
    {
      id: 'profile',
      renderItem: <Profile />,
    },
    {
      id: 'about',
      renderItem: <About />,
    },
    {
      id: 'projects',
      renderItem: <ProjectsPage />,
    },
  ]

  const { carouselFragment, slideToNextItem, useListenToCustomEvent } =
    useSpringCarousel({
      itemsPerSlide: 1,
      withLoop: false,
      items: sections,
      carouselSlideAxis: 'y',
    })

  useListenToCustomEvent((event: any) => {
    if (event.eventName === 'onSlideStartChange') {
      setActiveItem(event.nextItem.id)
    }
  })

  const title = handleTitle(activeItem)

  return (
    <div className="flex flex-col py-10 relative h-screen">
      <h1 className="text-center text-4xl uppercase">{title}</h1>

      <div className="h-screen my-12">{carouselFragment}</div>

      <button
        onClick={() => slideToNextItem()}
        className="w-10 h-10 absolute bottom-2 inset-x-[42%]"
      >
        <DownIcon />
      </button>
    </div>
  )
}

function About() {
  const { t } = useTranslation()

  return (
    <section className="relative flex flex-col">
      <p className="max-w-4xl text-xl leading-relaxed lg:text-2xl">
        Apaixonado por ciência e tecnologia, sou{' '}
        <strong className="tracking-wide accent_mark">
          {t('Desenvolvedor Web')}
        </strong>{' '}
        com 3 anos de experiência em NextJS, ReactJS e TypeScript. Tenho
        conhecimento em Angular, VueJS, NestJS, Prisma e Express. Por ser
        autodidata e curioso, gosto de estudar novas tecnologias como Docker,
        Jest, Python e Java. Também me interesso por UX/UI, Inglês e Soft
        skills.
      </p>
    </section>
  )
}

function handleTitle(id: string) {
  switch (id) {
    case 'profile':
      return 'Raniel César'
    case 'about':
      return 'Sobre'
    case 'projects':
      return 'Projetos'
  }
}
