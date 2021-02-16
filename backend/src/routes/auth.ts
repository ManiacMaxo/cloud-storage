import { Router } from 'express'
import { auth } from '../controllers'
const router = Router()

router.post('/token', auth.createToken)

router.post('/login', auth.login)

export default router
