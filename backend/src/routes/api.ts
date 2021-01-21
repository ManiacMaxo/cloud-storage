import { Router } from 'express'
const router = Router()
import { api } from '../controllers'

router.get('/**', api.listDir, api.downloadFile)

export default router
