import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { File } from '../lib'

const useGetFiles = (router: NextRouter) => {
    const [files, setFiles] = useState<File[]>([])

    useEffect(() => {
        ;(async () => {
            const res = await fetch(`/api${router.asPath}`)
            if (res.ok) {
                return setFiles(await res.json())
            }
        })()
    }, [router.query])

    return files
}
export default useGetFiles
