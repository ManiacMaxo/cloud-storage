import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/Layout'
import List from '../components/List'
import useGetFiles from '../hooks/useGetFiles'

const path = (): JSX.Element => {
    const router = useRouter()
    const { files, loading } = useGetFiles(router)

    return (
        <Layout>
            <List files={files} loading={loading} />
        </Layout>
    )
}

export default path
