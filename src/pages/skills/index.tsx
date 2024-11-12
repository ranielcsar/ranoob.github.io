import { useTransitionAnimation } from '@/hooks'
import { useTranslation } from 'react-i18next'

export function SkillsPage() {
  const { t } = useTranslation()

  return (
    <section className="flex m-auto cursor-default flex-col justify-center gap-10 text-[3ch] lg:text-[2.55ch] xl:text-[2ch] xl:max-w-max-xl">
      <div className="grid grid-rows-[auto] gap-5 lg:gap-x-20 lg:grid-cols-2">
        {skills.map((skill) => (
          <Skill key={skill.title} {...skill} />
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-secondary">
          {t('Conhecimentos em Backend')}
        </h3>

        <div className="grid grid-rows-[auto] gap-5 lg:gap-x-20 lg:grid-cols-2">
          {backendSkills.map((skill) => (
            <Skill key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

type SkillProps = {
  title: string
  description: string
}

const skills: SkillProps[] = [
  {
    title: 'React, NextJS e Django',
    description: 'Experiência em desenvolvimento de aplicações web com React, NextJS e Django. Incluindo criação de componentes reutilizáveis, gerenciamento de estado, roteamento de páginas entre outras funcionalidades.',
  },
  {
    title: 'UX e Clean Code',
    description: 'Conhecimentos em UX/UI para criação de interfaces agradáveis. Boas práticas de desenvolvimento de código limpo e legível.',
  },
  {
    title: 'TypeScript e Python',
    description: `Experiência em desenvolvimento com TypeScript e Python.`,
  },

  {
    title: 'Metodologias ágeis',
    description: 'Experiência em trabalhar em equipe ágil seguindo as metodologias do Scrum. Incluindo sprints, dailies, reviews, etc.',
  },
  {
    title: 'CSS, ChakraUI, TailwindCSS, StyledComponents, MaterialUI...',
    description: 'Experiência em desenvolvimento de interfaces responsivas com CSS, ChakraUI, Tailwind CSS, StyledComponents, MaterialUI entre outras bibliotecas.',
  },
  {
    title: 'Inglês intermediário',
    description: 'Compreensão e comunicação em inglês intermediário.',
  },
  {
    title: 'TDD',
    description: `Testes unitários e de integração usando Jest, React Testing Library e Mock Service Worker (MSW)`,
  },
]

const backendSkills: SkillProps[] = [
  {
    title: 'NodeJS e Express',
    description: 'Experiência no desenvolvimento de aplicativos utilizando o ambiente de execução do Nodejs e Express.',
  },
  {
    title: 'NestJS',
    description: 'Familiaridade com o framework NestJS para construção de aplicativos server-side.',
  },
  {
    title: 'Prisma',
    description: 'Experiência no uso do Prisma como ORM (Object-Relational Mapping) para interagir com bancos de dados.',
  },
]

function Skill({ description: text, title }: SkillProps) {
  const [textRef] = useTransitionAnimation({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  const { t } = useTranslation()

  return (
    <article className="h-max list-none lg:text-[1.5ch]">
      <h2 className="rounded-sm p-1 text-2xl md:text-xl lg:w-full xl:w-max tracking-widest text-black bg-accent border-2 border-secondary dark:shadow-accent shadow-neo-sm">
        ✦ {t(title)}
      </h2>
      <span className="leading-relaxed text-xl tracking-wide" ref={textRef}>
        {t(text)}
      </span>
    </article>
  )
}
