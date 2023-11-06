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
    <article
      className={`transition-opacity mx-3 w-full flex flex-col gap-2 overflow-hidden rounded-sm text-secondary ${
        activeItem ? 'opacity-100' : 'opacity-40'
      }`}
    >
      <section className="relative flex items-center flex-wrap gap-3">
        <h3 className="text-xl min-w-[50vw] lg:min-w-[30vw] font-bold lg:text-2xl flex-1 xl:text-3xl">
          {t(project.title)}
        </h3>

        <div className="flex items-center gap-3">
          <button
            // target="_blank"
            // rel="noreferrer"
            // href={project.links.sandbox}
            disabled={true}
            title="CodeSandbox"
            className="lg:p-2 border-2 border-black disabled:bg-secondary/40 disabled:select-none disabled:hover:text-secondary flex items-center rounded-sm bg-secondary w-max gap-1 p-1 text-secondary transition-colors hover:text-secondary"
          >
            <i className="h-5 w-5 lg:h-7 lg:w-7">
              <CodeSandboxIcon />
            </i>
            <span className="text-xl">Demo</span>
          </button>

          <a
            target="_blank"
            rel="noreferrer"
            href={project.links.github}
            title="Github"
            className="lg:p-2 flex border-2 border-black items-center rounded-sm bg-white w-max gap-1 p-1 text-black transition-colors hover:text-secondary"
          >
            <i className="h-5 w-5 lg:h-7 lg:w-7">
              <GithubIcon />
            </i>
            <span className="text-xl">Code</span>
          </a>
        </div>
      </section>

      <p className="text-[2ch] lg:text-xl lg:max-w-[70%]">
        {t(project.description)}
      </p>

      <picture className="w-full lg:h-[calc(100%_-_15rem)] xl:h-[55vh] overflow-hidden">
        <img
          className={`w-full h-full aspect-video object-center object-fill rounded-sm bg-white/60 text-black`}
          src={project.image}
          alt={`${project.title} image`}
          rel="preload"
          loading="eager"
        />
      </picture>
    </article>
  )
}
