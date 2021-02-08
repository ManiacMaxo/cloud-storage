import { Router } from 'express'
import { auth } from '../controllers'
const router = Router()

router.post('/token', auth.createToken)

export default router
