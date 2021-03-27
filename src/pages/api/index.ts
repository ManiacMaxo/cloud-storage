import { existsSync, readdir } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path'
import { File } from '../../lib'

const listDir = (req: NextApiRequest, res: NextApiResponse): any => {
    if (!process.env.DIR) {
        return res.status(501).send('Base directory not specified')
    }

    const path = decodeURIComponent(process.env.DIR)

    if (!existsSync(path)) {
        console.error(`error: Could not find "${path}"`)
        return res.status(404).send('')
    }

    readdir(path, (err, dir) => {
        if (err) {
            return res.status(500).send('')
        }

        const files: File[] = []
        dir.forEach((file) => {
            files.push(new File(resolve(path, file)))
        })

        return res.status(200).json(files)
    })
}

export default listDir
