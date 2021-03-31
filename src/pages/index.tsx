import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/Layout'
import List from '../components/List'
import useGetFiles from '../hooks/useGetFiles'

const Index = (): JSX.Element => {
    const router = useRouter()
    const files = useGetFiles(router)

    console.log(files)

    return (
        <Layout>
            <Head>
                <title>Index of /</title>
            </Head>
            <List files={files} />
        </Layout>
    )
}

export default Index
