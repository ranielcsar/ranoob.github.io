import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useToast } from '@/hooks'

export type SendEmailParams = {
  from: string
  subject: string
  message: string
}

export function useSendEmail() {
  useEffect(() => emailjs.init('zjSMl1Ku0HWvUDXWV'), [])
  const { toast } = useToast()

  async function handleSendEmail({ from, subject, message }: SendEmailParams) {
    const serviceId = 'service_4ru450i'
    const templateId = 'template_526gd1n'

    try {
      const data = await emailjs.send(serviceId, templateId, {
        from,
        message,
        subject,
      })

      if (data.text === 'OK') {
        toast('Obrigado por entrar em contato!', { type: 'success' })
      }
    } catch (err) {
      console.error(err)
    }
  }

  return { handleSendEmail }
}
