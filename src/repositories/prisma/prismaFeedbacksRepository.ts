import { prisma } from '../../prisma'
import { FeedbacksCreateData, FeedbacksRepository } from '../feedbacksRepository'

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create ({ type, comment, screenshot }: FeedbacksCreateData): Promise<void> {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}
