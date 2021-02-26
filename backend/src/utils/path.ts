require('dotenv').config()

import { resolve } from 'path'

export const resolvePath = (path: string): string => {
    const authenticatedPath = 'protected'

    if (path.startsWith(`/${authenticatedPath}`)) {
        return decodeURIComponent(
            resolve(
                process.env.AUTHENTICATED_DIR +
                    path.substring(authenticatedPath.length + 1)
            )
        )
    }
    return decodeURIComponent(resolve(process.env.DIR + path))
}
