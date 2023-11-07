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
      className={`transition-opacity mx-3 w-full h-full flex flex-col gap-2 overflow-hidden rounded-sm text-secondary ${
        activeItem ? 'opacity-100' : 'opacity-40'
      }`}
    >
      <section className="relative flex items-center flex-wrap gap-3">
        <h3 className="text-2xl min-w-[50vw] lg:min-w-[30vw] font-bold flex-1 xl:text-3xl">
          {t(project.title)}
        </h3>

        <div className="flex items-center gap-3">
          <button
            // target="_blank"
            // rel="noreferrer"
            // href={project.links.sandbox}
            disabled={true}
            title="CodeSandbox"
            className="border-2 border-black disabled:bg-secondary/50 disabled:select-none disabled:hover:text-secondary flex items-center rounded-sm bg-secondary w-max gap-1 p-1 text-secondary transition-colors hover:text-secondary"
          >
            <i className="h-5 w-5">
              <CodeSandboxIcon />
            </i>
            <span className="text-xl">Demo</span>
          </button>

          <a
            target="_blank"
            rel="noreferrer"
            href={project.links.github}
            title="Github"
            className="flex border-2 border-black items-center rounded-sm bg-white w-max gap-1 p-1 text-black transition-colors hover:bg-secondary hover:text-primary"
          >
            <i className="h-5 w-5">
              <GithubIcon />
            </i>
            <span className="text-xl">Code</span>
          </a>
        </div>
      </section>

      <p className="text-[2ch] lg:text-[1.8ch] lg:max-w-[70%]">
        {t(project.description)}
      </p>

      <picture className="w-full 2xl:max-w-[60%] lg:m-auto overflow-hidden">
        <img
          className={`w-full aspect-video object-center object-fill border-2 border-secondary rounded-sm bg-white/60 text-black`}
          src={project.image}
          alt={`${project.title} image`}
          rel="preload"
          loading="eager"
        />
      </picture>
    </article>
  )
}
