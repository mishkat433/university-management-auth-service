import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import path from 'path'

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

export default app
