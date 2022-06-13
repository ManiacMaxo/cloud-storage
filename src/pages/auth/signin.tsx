import { Button, Center } from '@chakra-ui/react'
import { NextPage } from 'next'
import { getProviders, signIn } from 'next-auth/react'

import { GoMarkGithub } from 'react-icons/go'

interface Provider {
    name: string
    id: string
    callbackUrl: string
    signinUrl: string
    type: string
}

interface Props {
    providers: Provider[]
}

const signin: NextPage<Props> = ({ providers }) => {
    const icons = new Map([['GitHub', <GoMarkGithub key='github' />]])

    return (
        <Center transform='translateY(-10vh)'>
            {Object.values(providers).map((provider) => (
                <Button
                    leftIcon={icons.get(provider.name)}
                    onClick={() => signIn(provider.id)}
                    key={provider.name}
                >
                    Sign in with {provider.name}
                </Button>
            ))}
        </Center>
    )
}

export const getServerSideProps = async (_context: any) => {
    const providers = await getProviders()

    return {
        props: { providers }
    }
}

export default signin
