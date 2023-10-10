import { useTransitionAnimation } from '@/hooks'

export function CurriculumPage() {
  return (
    <div className="flex h-full cursor-default flex-col justify-center gap-10 py-20 text-[3ch] lg:text-[2.55ch]">
      <section className="grid grid-rows-[auto] gap-5 lg:grid-cols-2">
        {skills.map((skill) => (
          <Skill key={skill.title} {...skill} />
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <header>
          <hgroup>
            <h2 className="text-3xl">Backend knowledge</h2>
            <h3>- Conhecimentos Backend</h3>
          </hgroup>
        </header>

        <div className="grid grid-rows-[auto] gap-5 lg:grid-cols-2">
          {backendSkills.map((skill) => (
            <Skill key={skill.title} {...skill} />
          ))}
        </div>
      </section>
    </div>
  )
}

type SkillProps = { title: string; text: string }

const skills: SkillProps[] = [
  {
    title: 'React e NextJS',
    text: `Experiência em desenvolvimento de aplicações web com React e NextJS, incluindo criação de componentes
    reutilizáveis, gerenciamento de estado com Context API e Hooks, e
    roteamento com React Router e Pages/App folder do NextJS.`,
  },
  {
    title: 'UX e Clean Code',
    text: 'Conhecimentos em UX/UI para criação de interfaces amigáveis e legíveis, seguindo as boas práticas de desenvolvimento de código limpo e legível.',
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
    text: `Testes unitários e de integração usando Jest,
    React Testing Library e Mock Service Worker (MSW)`,
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
  const [titleRef] = useTransitionAnimation({
    from: {
      background: 'transparent',
    },
    to: {
      background:
        'linear-gradient(var(--deg), var(--primary) 25%, var(--secondary) 100%)',
    },
    duration: 1,
  })

  const [textRef] = useTransitionAnimation({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  return (
    <article className="h-max list-none text-[1.75ch]">
      <strong
        className="rounded-sm p-1 tracking-widest text-neutral-50"
        ref={titleRef}
      >
        ✦ {title}
      </strong>
      <span className="leading-relaxed tracking-wide" ref={textRef}>
        <strong>:</strong> {text}
      </span>
    </article>
  )
}
