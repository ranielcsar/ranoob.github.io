import { CodeSandboxIcon, GithubIcon } from '@/assets/icons'
import { useTransitionAnimation } from '@/hooks'

export type ProjectProps = {
  title: string
  description: string
  image: string | typeof import('*.webp')
  links: {
    sandbox: string
    github: string
  }
}

export function Project(project: ProjectProps) {
  const [ref] = useTransitionAnimation({
    from: {
      opacity: 0,
      y: -20,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  })

  return (
    <div className="flex h-[65vh] w-full rounded-sm text-white xl:m-auto xl:h-[82vh]" ref={ref}>
      <section className="relative m-auto flex h-full flex-col gap-5 md:px-5 xl:p-0">
        <header className="text-2xl font-bold xl:text-4xl">{project.title}</header>

        <p className="text-lg">{project.description}</p>

        <figure className="flex-[2] shadow-sm dark:shadow-none md:w-[95vw] lg:w-[68vw] xl:w-auto">
          <img
            className="h-full max-h-[40vh] w-full object-cover xl:max-h-[60vh] xl:object-fill"
            src={project.image as string}
            alt={`${project.title} image`}
            rel="preload"
            loading="eager"
          />
        </figure>

        <footer className="flex flex-[0.5] items-center justify-end gap-4 md:flex-1">
          <span className="text-4xl">{'['}</span>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.links.sandbox}
            title="CodeSandbox"
            className="h-10 w-10 transition-colors hover:text-primary"
          >
            <CodeSandboxIcon />
          </a>
          <span className="text-4xl">,</span>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.links.github}
            title="Github"
            className="h-10 w-10 transition-colors hover:text-primary"
          >
            <GithubIcon />
          </a>
          <span className="text-4xl">{']'}</span>
        </footer>
      </section>
    </div>
  )
}
