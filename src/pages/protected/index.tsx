import { useSession } from 'next-auth/client'

const index = (): JSX.Element => {
    const [session] = useSession()

    return <div>{session ? 'welcome' : 'unathorized'}</div>
}

export default index
