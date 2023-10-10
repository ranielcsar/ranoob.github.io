import { Carousel } from '@/components/common'
import { ProjectProps, Project } from './Project'
import {
  CoinSynchPrint,
  JohnTasksPrint,
  NLWAiPrint,
  NLWSpacetimePrint,
  NextShoppingPrint,
} from '@/assets/project-imgs'

export function ProjectsPage() {
  return (
    <div className="mt-20 h-full">
      <Carousel>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </Carousel>
    </div>
  )
}

const projects: ProjectProps[] = [
  {
    title: 'Shoping cart with Tests',
    description: 'Shopping cart feito com NextJS e que possui testes unitários',
    image: NextShoppingPrint,
    links: {
      sandbox: 'https://h8ctsg-3000.csb.app/',
      github: 'https://github.com/ranielcsar/next-shopping-cart-testings',
    },
  },
  {
    title: 'Upload AI',
    description:
      'App feito na edição "AI" da NLW (Next Level Week) da Rocketseat',
    image: NLWAiPrint,
    links: {
      sandbox: 'https://v4xv8t-5173.csb.app/',
      github: 'https://github.com/ranielcsar/nlw-ai',
    },
  },
  {
    title: 'Coinsynch',
    description: 'Projeto desafio para vaga de Dev Frontend',
    image: CoinSynchPrint,
    links: {
      sandbox: 'https://8p4cxd-3000.csb.app/',
      github: 'https://github.com/ranielcsar/coinsynch',
    },
  },
  {
    title: 'Capsula do Tempo',
    description:
      'App feito na edição "Spacetime" da NLW (Next Level Week) da Rocketseat',
    image: NLWSpacetimePrint,
    links: {
      sandbox: 'https://6l9ld9-3000.csb.app/',
      github: 'https://github.com/ranielcsar/nlw-spacetime',
    },
  },
  {
    title: "John's Task List",
    description: 'Projeto desafio para vaga de Mid Dev Frontend',
    image: JohnTasksPrint,
    links: {
      sandbox: 'https://3dsjkz-3000.csb.app/',
      github: 'https://github.com/ranielcsar/john_task_list',
    },
  },
]
