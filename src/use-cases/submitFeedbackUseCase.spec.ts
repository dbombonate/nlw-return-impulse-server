/* eslint-disable no-undef */
import { SubmitFeedbackUseCase } from './submitFeedbackUseCase'

const createFeedbackSpy = jest.fn()
const sendmailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendmail: sendmailSpy }
)

describe('Submit Feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toBeCalled()
    expect(sendmailSpy).toBeCalled()
  })

  it('should not be able to submit a feedback without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback with a invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'image.jpg'
    })).rejects.toThrow()
  })
})
