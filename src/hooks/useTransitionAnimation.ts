import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
  from: gsap.TweenVars
  to: gsap.TweenVars
  duration?: number
}

export function useTransitionAnimation({ duration = 0.5, from, to }: Props) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    gsap.fromTo(ref?.current, from, { ...to, duration })
  }, [ref])

  return [ref]
}
