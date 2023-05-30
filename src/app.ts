import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import path from 'path'
import usersRouter from './app/modules/users/users.route'

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users/', usersRouter)

// server running test route
app.get('/', async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

export default app
