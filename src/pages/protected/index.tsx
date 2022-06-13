import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Index: NextPage = () => {
    const { data: session } = useSession()

    return <div>{session ? 'welcome' : 'unathorized'}</div>
}

export default Index
