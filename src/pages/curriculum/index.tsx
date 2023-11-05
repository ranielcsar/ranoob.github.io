import { useTransitionAnimation } from '@/hooks'
import { useTranslation } from 'react-i18next'

export function CurriculumPage() {
  const { t } = useTranslation()

  return (
    <section className="flex m-auto cursor-default flex-col justify-center gap-10 text-[3ch] lg:text-[2.55ch] xl:text-[2.8ch]">
      <div className="grid grid-rows-[auto] gap-5 lg:gap-x-20 lg:grid-cols-2">
        {skills.map((skill) => (
          <Skill key={skill.title} {...skill} />
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">{t('Conhecimentos em Backend')}</h2>

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
  text: string
}

const skills: SkillProps[] = [
  {
    title: 'React e NextJS',
    text: 'Experiência em desenvolvimento de aplicações web com React e NextJS, incluindo criação de componentes reutilizáveis, gerenciamento de estado com Context API, Zustand e Redux. Roteamento de páginas com React Router e Pages/App folder do NextJS.',
  },
  {
    title: 'UX e Clean Code',
    text: 'Conhecimentos em UX/UI para criação de interfaces amigáveis e legíveis. Boas práticas de desenvolvimento de código limpo e legível.',
  },
  {
    title: 'TypeScript',
    text: `Experiência sólida em desenvolvimento com TypeScript.`,
  },

  {
    title: 'Metodologias ágeis',
    text: 'Experiência em trabalhar em equipe ágil seguindo as metodologias do Scrum. Incluindo sprints, dailies, reviews, etc.',
  },
  {
    title: 'ChakraUI, TailwindCSS e StyledComponents',
    text: 'Experiência em desenvolvimento de interfaces responsivas com ChakraUI, Tailwind CSS e StyledComponents.',
  },
  {
    title: 'Inglês intermediário',
    text: 'Compreensão e comunicação em inglês intermediário.',
  },
  {
    title: 'TDD',
    text: `Testes unitários e de integração usando Jest, React Testing Library e Mock Service Worker (MSW)`,
  },
]

const backendSkills: SkillProps[] = [
  {
    title: 'NodeJS e Express',
    text: 'Experiência no desenvolvimento de aplicativos utilizando o ambiente de execução do Nodejs e Express.',
  },
  {
    title: 'NestJS',
    text: 'Familiaridade com o framework NestJS para construção de aplicativos server-side.',
  },
  {
    title: 'Prisma',
    text: 'Experiência no uso do Prisma como ORM (Object-Relational Mapping) para interagir com bancos de dados.',
  },
]

function Skill({ text, title }: SkillProps) {
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
    <article className="h-max list-none lg:text-[1.75ch]">
      <strong className="rounded-sm p-1 text-2xl md: text-xl tracking-widest text-black bg-accent border-2 border-primary dark:shadow-accent shadow-neo-sm">
        ✦ {t(title)}
      </strong>
      <span className="leading-relaxed text-xl tracking-wide" ref={textRef}>
        <strong className="ml-1">:</strong> {t(text)}
      </span>
    </article>
  )
}
