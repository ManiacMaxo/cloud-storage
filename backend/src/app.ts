import express, { Request, Response } from 'express'
import { createWriteStream } from 'fs'
import createHttpError from 'http-errors'
import logger from 'morgan'
import cors from 'cors'

const app = express()
app.use(
    logger('common', {
        stream: createWriteStream('./access.log', {
            flags: 'a',
        }),
    })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../public'))

// routes
import * as routes from './routes'

app.use(cors())

app.use(routes.api)

app.use((req: Request, res: Response, next) => {
    next(createHttpError(404))
})

export default app
