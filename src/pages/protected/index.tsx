import { useSession } from 'next-auth/client'
import React from 'react'
import Layout from '../../components/Layout'

const index = (): JSX.Element => {
    const [session] = useSession()

    return <Layout>{session ? 'welcome' : 'unathorized'}</Layout>
}

export default index
