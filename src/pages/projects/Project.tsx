import { CodeSandboxIcon, GithubIcon } from '@/assets/icons'
import { useTranslation } from 'react-i18next'

export type ProjectProps = {
  title: string
  description: string
  image: string
  links: {
    sandbox: string
    github: string
  }
}

export function Project({
  project,
  activeItem,
}: {
  project: ProjectProps
  activeItem: boolean
}) {
  const { t } = useTranslation()

  return (
    <div
      className={`transition-opacity mx-2 h-[calc(100vh_-_10.3125rem)] flex flex-col gap-5 w-full rounded-sm text-white ${
        activeItem ? 'opacity-100' : 'opacity-40'
      }`}
    >
      <section className="relative flex flex-col gap-5 xl:p-0 flex-1">
        <header className="text-2xl font-bold xl:text-4xl">
          {t(project.title)}
        </header>

        <p className="text-lg">{t(project.description)}</p>

        <img
          className={`h-auto m-auto aspect-video object-center object-fill rounded-sm bg-white/60 text-black`}
          src={project.image}
          alt={`${project.title} image`}
          rel="preload"
          loading="eager"
        />
      </section>

      <footer className="flex w-full items-center justify-end gap-4">
        <button
          // target="_blank"
          // rel="noreferrer"
          // href={project.links.sandbox}
          disabled={true}
          title="CodeSandbox"
          className="disabled:bg-white/50 disabled:select-none disabled:hover:text-black flex items-center rounded-sm bg-white w-max gap-1 p-2 text-black transition-colors hover:text-primary"
        >
          <i className="h-7 w-7">
            <CodeSandboxIcon />
          </i>
          <span className="text-xl">Demo</span>
        </button>

        <a
          target="_blank"
          rel="noreferrer"
          href={project.links.github}
          title="Github"
          className="flex items-center rounded-sm bg-white w-max gap-1 p-2 text-black transition-colors hover:text-primary"
        >
          <i className="h-7 w-7">
            <GithubIcon />
          </i>
          <span className="text-xl">Code</span>
        </a>
      </footer>
    </div>
  )
}
