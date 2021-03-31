import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/Layout'
import List from '../components/List'
import useGetFiles from '../hooks/useGetFiles'

const path = (): JSX.Element => {
    const router = useRouter()
    const files = useGetFiles(router)

    return (
        <Layout>
            <Head>
                <title>
                    Index of{' '}
                    {typeof router.query.path === 'string'
                        ? router.query.path
                        : router.query.path && router.query.path.join('/')}
                </title>
            </Head>
            <List files={files} />
        </Layout>
    )
}

export default path
