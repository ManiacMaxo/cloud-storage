import { createReadStream, existsSync, lstatSync, readdirSync } from 'fs'
import { getType } from 'mime'
import { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path'
import { File } from '../../lib'

const listDir = (req: NextApiRequest, res: NextApiResponse): any => {
    if (!process.env.DIR) {
        return res.status(500).send('Base directory not specified')
    }

    const path = decodeURIComponent(
        resolve(
            process.env.DIR,
            typeof req.query.path === 'string'
                ? req.query.path
                : req.query.path.join('/')
        )
    )

    if (!existsSync(path)) {
        console.error(`error: Could not find "${path}"`)
        return res.status(404).end()
    }

    if (!lstatSync(path).isDirectory()) {
        console.log(`Downloading: ${path}`)
        const file = new File(path)
        const mimetype = getType(path)

        if (!mimetype) return res.status(500).end()

        res.setHeader(
            'Content-disposition',
            `attachment; filename*=UTF-8\'\'${file.utf_name}`
        )
        res.setHeader('Content-type', mimetype)

        return createReadStream(path).pipe(res)
    }

    try {
        const dir = readdirSync(path)
        const files: File[] = []
        dir.forEach((file) => {
            files.push(new File(resolve(path, file)))
        })

        return res.status(200).json(files)
    } catch (e) {
        return res.status(500).end()
    }
}

export default listDir