import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error)
  res.status(500).send({ erro: error.message })
})

app.listen(process.env.PORT || 3333, () => {
  console.log('Server HTTP is running!')
})
