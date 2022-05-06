import { FeedbacksRepository } from '../repositories/feedbacksRepository'
import { SendmailAdapter } from '../adapters/sendmailAdapter'

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private feedbacksRepository: FeedbacksRepository,
    private sendmailAdapter: SendmailAdapter
  ) {}

  async execute (request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request
    if (screenshot && !screenshot.startsWith('data:image/png:base64,')) {
      throw new Error('Screenshot invalid format')
    }

    if (!type) {
      throw new Error('Type is empty')
    }

    if (!comment) {
      throw new Error('Comment is empty')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.sendmailAdapter.sendmail({
      subject: 'Novo feedback - Feedget',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `<p>Tela capturada: ${screenshot}</p>`,
        '</div>'
      ].join('')
    })
  }
}
