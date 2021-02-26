import { Request, Response } from 'express'
import { createReadStream, existsSync, lstatSync, readdir } from 'fs'
import { lookup } from 'mime'
import { resolve } from 'path'
import { File } from '../models'
import { resolvePath } from '../utils'

export const listDir = (req: Request, res: Response, next: Function) => {
    const path = resolvePath(req.path)

    if (!existsSync(path)) {
        console.error(`error: Could not find "${path}"`)
        return res.sendStatus(404)
    }

    if (!lstatSync(path).isDirectory()) {
        return next()
    }

    readdir(path, (err, dir) => {
        if (err) {
            return res.sendStatus(500)
        }

        const files: File[] = []
        dir.forEach((file) => {
            files.push(new File(resolve(path, file)))
        })

        return res.status(200).send(files)
    })
}

export const downloadFile = (req: Request, res: Response, next: Function) => {
    const path = resolvePath(req.path)

    console.log(`Downloading: ${path}`)
    const file = new File(path)
    const mimetype = lookup(path)

    res.setHeader(
        'Content-disposition',
        `attachment; filename*=UTF-8\'\'${file.utf_name}`
    )
    res.setHeader('Content-type', mimetype)

    return createReadStream(path).pipe(res)
}
