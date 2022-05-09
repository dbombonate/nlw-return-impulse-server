import express from 'express'
import submitFeedback from './controllers/SubmitFeedback'

export const routes = express.Router()

routes.post('/feedbacks', submitFeedback.handle)
