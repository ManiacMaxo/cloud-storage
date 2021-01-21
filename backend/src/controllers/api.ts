require('dotenv').config()

import { Request, Response } from 'express'
import { existsSync, lstatSync, readdir } from 'fs'
import { resolve } from 'path'
import { File } from '../models'

export const listDir = (req: Request, res: Response, next: Function) => {
    const path = resolve(process.env.DIR + req.path)

    if (!existsSync(path)) {
        console.log(`error: Could not find "${path}"`)
        return res.sendStatus(404)
    }

    if (!lstatSync(path).isDirectory()) {
        return next()
    }

    readdir(path, (err, dir) => {
        if (err) {
            return res.sendStatus(500)
        }

        const files = []
        dir.forEach((file) => {
            files.push(new File(resolve(path, file)))
        })

        res.status(200)
        return res.send(files)
    })
}

export const downloadFile = (req: Request, res: Response, next: Function) => {
    const path = resolve(process.env.DIR + req.path)
    const file = new File(path)
    return res.download(path, file.name)
}
