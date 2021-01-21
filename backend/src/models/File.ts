import { lstatSync } from 'fs'

export class File {
    public name
    public dir
    public size
    public time

    constructor(path: string) {
        const stats = lstatSync(path)
        this.dir = stats.isDirectory()
        this.name = path.split('\\').pop().split('/').pop()
        this.size = stats.size / 1000
        this.time = stats.mtime.toLocaleString('en-GB', { timeZone: 'EST' })
    }
}
