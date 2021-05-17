import { createReadStream, existsSync, lstatSync, readdirSync } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path'
import { IFile } from '../../lib'

const listDir = (req: NextApiRequest, res: NextApiResponse): any => {
    if (!process.env.DIR) {
        return res.status(500).send('Base directory not specified')
    }

    const path = decodeURIComponent(
        resolve(
            process.env.DIR,
            typeof req.query.path === 'string'
                ? req.query.path
                : req.query.path?.join('/')
        )
    )

    if (!existsSync(path)) {
        console.error(`error: Could not find "${path}"`)
        return res.status(404).end()
    }

    if (!lstatSync(path).isDirectory()) {
        const file = new IFile(path)

        res.setHeader(
            'Content-disposition',
            `inline; filename*=UTF-8\'\'${file.utf_name}`
        )
        res.setHeader('Content-type', file.mime)
        res.setHeader('Content-length', file.size)

        return createReadStream(path).pipe(res)
    }

    try {
        const dir = readdirSync(path)
        const files: IFile[] = []
        const folders: IFile[] = []
        dir.forEach((file) => {
            const newFile = new IFile(resolve(path, file))
            newFile.dir ? folders.push(newFile) : files.push(newFile)
        })

        return res.status(200).json([...folders, ...files])
    } catch (e) {
        return res.status(500).end()
    }
}

export default listDir
