import express from 'express'
import usersControler from './users.controler'
const router = express.Router()

router.post('/create-user', usersControler.createUser)

export default router
