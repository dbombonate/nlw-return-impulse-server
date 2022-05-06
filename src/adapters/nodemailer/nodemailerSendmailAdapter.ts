import nodemailer from 'nodemailer'
import { SendmailAdapter, SendmailAdapterSubmit } from '../sendmailAdapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '6731ae9583829d',
    pass: '16fdb97d7843c6'
  }
})

export class NodemailerSendmailAdapter implements SendmailAdapter {
  async sendmail ({ subject, body }: SendmailAdapterSubmit) {
    await transport.sendMail({
      from: 'Equipe Feedget <contato@feedget.com>',
      to: 'Daniel Bombonate <daniel.bombonate@gmail.com>',
      subject,
      html: body
    })
  };
}
