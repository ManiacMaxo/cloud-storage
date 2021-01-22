require('dotenv').config()

import { lookup } from 'mime'
import { Request, Response } from 'express'
import { createReadStream, existsSync, lstatSync, readdir } from 'fs'
import { resolve, basename } from 'path'
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

    console.log(path)
    const file = new File(path)

    var mimetype = lookup(path)

    res.setHeader('Content-disposition', `attachment; filename=${file.name}`)
    res.setHeader('Content-type', mimetype)

    return createReadStream(path).pipe(res)
}
