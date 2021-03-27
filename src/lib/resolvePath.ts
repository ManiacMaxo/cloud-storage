export const resolvePath = (path: string | string[] | undefined): string => {
    if (!path) return '/'
    const out = typeof path === 'string' ? path : path.join('/')
    return decodeURIComponent(out)
}
