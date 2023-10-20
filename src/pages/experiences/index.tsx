import { useTransitionAnimation } from '@/hooks'
import { ReactNode } from 'react'

export function ExperienciesPage() {
  return (
    <div className="m-auto flex h-full w-full cursor-default items-center py-20 lg:h-screen lg:p-0 xl:m-0">
      <ul className="flex flex-col gap-14">
        <Exp title="Dev Frontend Jr ~ (PJ na Brainny Smart Solutions)">
          Prestação de serviços para reparo e criação de novas funcionalidades
          em aplicações web de administração, assim como em landing pages,
          usando tecnologias web como React, TypeScript, ChakraUI, Apollo e
          GraphQL. Atuação em uma equipe ágil seguindo metodologias do Scrum
          (dailies, reviews, plannings, sprints, etc) para desenvolver soluções
          web eficientes e de alta qualidade.
          <p className="mt-5">
            Tempo de atuação:{' '}
            <strong className="tracking-wide">
              Setembro de 2021 - Outubro de 2022
            </strong>
          </p>
        </Exp>

        <Exp title="Dev Frontend Jr ~ (Freelancer na SystemHope - Agência de Software)">
          Atuação freelancer para reparos e criação de novas funcionalidades em
          aplicações web de administração, como também num projeto de plataforma
          EAD, utilizando React, TypeScript e ChakraUI como principais
          tecnologias.
          <p className="mt-5">
            Tempo de atuação:{' '}
            <strong className="tracking-wide">
              Maio de 2020 - Novembro de 2020
            </strong>
          </p>
        </Exp>
      </ul>
    </div>
  )
}

function Exp({ title, children }: { title: string; children: ReactNode }) {
  const [childrenRef] = useTransitionAnimation({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <li className="flex list-none flex-col gap-4">
      <h3 className="text-2xl pb-0.5 font-bold w-auto max-w-max decoration-accent leading-relaxed underline decoration-4 underline-offset-4 lg:underline-offset-8 tracking-wide">
        {title}
      </h3>

      <p className="text-xl leading-relaxed" ref={childrenRef}>
        {children}
      </p>
    </li>
  )
}
