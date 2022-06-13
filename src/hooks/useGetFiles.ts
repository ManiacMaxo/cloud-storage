import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IFile } from '../lib'

const useGetFiles = (router: NextRouter) => {
    const [files, setFiles] = useState<IFile[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!router.isReady) return
        setLoading(true)
        setFiles([])
        fetch(`/api${router.asPath}`)
            .then((res) => res.json())
            .then(setFiles)
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [router.asPath, router.isReady])

    return { files, loading }
}
export default useGetFiles
