import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IFile } from '../lib'

const useGetFiles = (router: NextRouter) => {
    const [files, setFiles] = useState<IFile[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!router.isReady) return
        setFiles([])
        ;(async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api${router.asPath}`)
                if (res.ok) {
                    setFiles(await res.json())
                }
            } catch (e) {
                console.log(e)
                setFiles([])
            }
            setLoading(false)
        })()
    }, [router.query])

    return { files, loading }
}
export default useGetFiles
