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
      className={`transition-opacity mx-3 w-full flex flex-col gap-5 max-h-[90%] overflow-hidden rounded-sm text-primary ${
        activeItem ? 'opacity-100' : 'opacity-40'
      }`}
    >
      <section className="relative flex flex-wrap w-full gap-3">
        <h3 className="text-[2.65ch] min-w-[50vw] lg:min-w-[30vw] font-bold xl:text-4xl flex-1">
          {t(project.title)}
        </h3>

        <div className="flex items-center gap-3">
          <button
            // target="_blank"
            // rel="noreferrer"
            // href={project.links.sandbox}
            disabled={true}
            title="CodeSandbox"
            className="lg:p-2 border-2 border-black disabled:bg-primary/40 disabled:select-none disabled:hover:text-primary flex items-center rounded-sm bg-primary w-max gap-1 p-1 text-primary transition-colors hover:text-primary"
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
            className="lg:p-2 flex border-2 border-black items-center rounded-sm bg-white w-max gap-1 p-1 text-black transition-colors hover:text-primary"
          >
            <i className="h-5 w-5 lg:h-7 lg:w-7">
              <GithubIcon />
            </i>
            <span className="text-xl">Code</span>
          </a>
        </div>
      </section>

      <p className="text-[2ch] lg:max-w-[70%]">{t(project.description)}</p>

      <img
        className={`w-full h-auto aspect-video object-center object-fill rounded-sm bg-white/60 text-black`}
        src={project.image}
        alt={`${project.title} image`}
        rel="preload"
        loading="eager"
      />
    </article>
  )
}
