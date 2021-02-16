require('dotenv').config()

import { resolve } from 'path'

export const resolvePath = (path: string): string => {
    if (path.startsWith(`/${process.env.PROTECTED}`)) {
        return decodeURIComponent(
            resolve(
                process.env.PROTECTED_DIR +
                    path.substring(process.env.PROTECTED.length + 1)
            )
        )
    }
    return decodeURIComponent(resolve(process.env.DIR + path))
}
