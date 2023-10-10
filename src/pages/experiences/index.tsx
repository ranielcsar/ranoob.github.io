import { useTransitionAnimation } from '@/hooks'
import { ReactNode } from 'react'

export function ExperienciesPage() {
  return (
    <div className="m-auto flex h-full w-full cursor-default items-center py-20 lg:h-screen lg:p-0 xl:m-0">
      <ul>
        <Exp>
          Minha mais recente experiência aconteceu numa{' '}
          <Mark>software house</Mark> chamada Brainny Smart Solutions. A qual
          foi fundamental para o meu crescimento profissional. Atuei como{' '}
          <Mark>Dev Frontend Jr</Mark> de Setembro de 2021 a Outubro de 2022,
          trabalhando em diversos projetos que incluiam desde{' '}
          <Mark>Administração de Negócios</Mark> à <Mark>Landing Pages</Mark> e
          aplicando minhas habilidades em React, TypeScript, Apollo e GraphQL.
          Houve também alguns projetos <Mark>outsourcing</Mark>. Além disso,
          tive a oportunidade de trabalhar com Scrum, dailys, sprints, reviews,
          etc.
        </Exp>

        <br />

        <Exp>
          Na minha 1ª oportunidade atuei como{' '}
          <Mark>Dev Frontend Jr (freelancer)</Mark> reparando e criando novas
          funcionalidades em aplicações web de administração, e também num
          projeto de plataforma EAD, de Maio a Novembro de 2020, utilizando
          React, TypeScript e StyledComponents como principais tecnologias. Foi
          uma experiência valiosa para o desenvolvimento das minhas habilidades
          em Frontend.
        </Exp>
      </ul>
    </div>
  )
}

function Mark({ children }: { children: ReactNode }) {
  return <strong className="italic tracking-widest">{children}</strong>
}

function Exp({ children }: { children: ReactNode }) {
  const [childrenRef] = useTransitionAnimation({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <li className="flex list-none flex-col gap-2 before:text-3xl before:text-accent before:content-['✦'] lg:flex-row">
      <p className="text-xl leading-relaxed" ref={childrenRef}>
        {children}
      </p>
    </li>
  )
}
