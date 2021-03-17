import { Router } from 'express'
const router = Router()
import { api, auth } from '../controllers'

router.get('/favicon.ico', (req, res) => res.status(204))

router.get(`/protected/**`, auth.authorize, api.listDir, api.downloadFile)

router.get('/**', api.listDir, api.downloadFile)

export default router
