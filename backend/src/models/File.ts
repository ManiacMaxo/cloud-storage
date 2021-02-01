import { lstatSync } from 'fs'

export class File {
    name: string
    dir: boolean
    size: number
    time: string

    constructor(path: string) {
        const stats = lstatSync(path)
        this.dir = stats.isDirectory()
        this.name = path.split('\\').pop().split('/').pop()
        this.size = stats.size / 1000
        this.time = stats.mtime.toLocaleString('en-GB', { timeZone: 'EST' })
    }
}
