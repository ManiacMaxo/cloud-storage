import { getType } from 'mime'
import { lstatSync } from 'fs'
import { DateTime } from 'luxon'

export class IFile {
    name: string
    utf_name: string
    dir: boolean
    size: number
    time: DateTime
    mime: string

    constructor(path: string) {
        const stats = lstatSync(path)
        this.dir = stats.isDirectory()
        this.name = (path.split('\\').pop() || '/').split('/').pop() || ''
        this.utf_name = encodeURIComponent(this.name)
        this.size = stats.size
        this.time = DateTime.fromJSDate(stats.mtime)
        this.mime = getType(path) ?? 'application/octet-stream'
    }
}
