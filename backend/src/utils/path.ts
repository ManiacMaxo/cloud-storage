require('dotenv').config()

import { resolve } from 'path'

export const resolvePath = (path: string): string => {
    const authenticatedPath = 'protected'

    return decodeURIComponent(
        resolve(
            path.startsWith(`/${authenticatedPath}`)
                ? process.env.AUTHENTICATED_DIR +
                      path.substring(authenticatedPath.length + 1)
                : process.env.DIR + path
        )
    )
}
