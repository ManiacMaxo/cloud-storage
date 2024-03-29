import { existsSync, readdirSync } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path'
import { IFile } from '../../lib'

const listDir = (_req: NextApiRequest, res: NextApiResponse) => {
    if (!process.env.DIR) {
        return res.status(500).send('Base directory not specified')
    }

    const path = process.env.DIR

    if (!existsSync(path)) {
        console.error(`error: Could not find "${path}"`)
        return res.status(404).end()
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
