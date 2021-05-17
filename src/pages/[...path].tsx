import { useRouter } from 'next/router'
import React from 'react'
import { List } from '../components'
import useGetFiles from '../hooks/useGetFiles'

const Wildcard = (): JSX.Element => {
    const router = useRouter()
    const { files, loading } = useGetFiles(router)

    return <List files={files} loading={loading} />
}

export default Wildcard
