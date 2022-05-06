import express from 'express'
import { NodemailerSendmailAdapter } from './adapters/nodemailer/nodemailerSendmailAdapter'
import { PrismaFeedbackRepository } from './repositories/prisma/prismaFeedbacksRepository'
import { SubmitFeedbackUseCase } from './use-cases/submitFeedbackUseCase'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
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
})
