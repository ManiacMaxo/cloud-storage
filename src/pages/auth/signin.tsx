import { Button, Center } from '@chakra-ui/react'
import { providers as authProviders, signIn } from 'next-auth/client'
import React from 'react'
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

const signin: React.FC<Props> = ({ providers }): JSX.Element => {
    const icons = new Map([['GitHub', <GoMarkGithub />]])

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
    const providers = await authProviders()

    return {
        props: { providers }
    }
}

export default signin
