import { Router } from 'express'
const router = Router()
import { api, auth } from '../controllers'

router.get(
    `/${process.env.PROTECTED}/**`,
    auth.authorize,
    api.listDir,
    api.downloadFile
)

router.get('/**', api.listDir, api.downloadFile)

export default router
