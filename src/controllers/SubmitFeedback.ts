import { Request, Response } from 'express'
import { NodemailerSendmailAdapter } from '../adapters/nodemailer/nodemailerSendmailAdapter'
import { PrismaFeedbackRepository } from '../repositories/prisma/prismaFeedbacksRepository'
import { SubmitFeedbackUseCase } from '../use-cases/submitFeedbackUseCase'

class SubmitFeedback {
  async handle (req: Request, res: Response) {
    const { type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerSendmailAdapter = new NodemailerSendmailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository,
      nodemailerSendmailAdapter
    )

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    })

    return res.status(201).send()
  }
}

export default new SubmitFeedback()
