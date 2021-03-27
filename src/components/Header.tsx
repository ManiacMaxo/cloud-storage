import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/client'
import React from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'

const Header = () => {
    const [session] = useSession()
    return (
        <Box width='100vw' py='1rem'>
            <Flex
                justifyContent='space-between'
                alignItems='center'
                maxWidth='90vw'
                width='850px'
                margin='0 auto'
                px='1rem'
            >
                <DarkModeSwitch />

                <Flex alignItems='center'>
                    {session ? (
                        <>
                            <span>
                                <small>Signed in as</small>
                                <br />
                                <strong>
                                    {session.user.name ?? session.user.email}
                                </strong>
                            </span>
                            <Avatar
                                name={session.user.name ?? ''}
                                src={session.user.image ?? ''}
                            />
                        </>
                    ) : (
                        <>
                            <Text mx='0.2rem' display='inline-block'>
                                You are not signed in
                            </Text>
                            <Button
                                onClick={() => signIn()}
                                colorScheme='blue'
                                size='sm'
                                variant='outline'
                            >
                                Sign in
                            </Button>
                        </>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header
