import { Box, Button, Flex } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { DarkModeSwitch, UserDropdown } from '.'

interface Props {
    height: string
}

const Header: React.FC<Props> = ({ height }) => {
    const { data: session } = useSession()

    return (
        <Box width='100vw' py='1rem' height={height}>
            <Flex
                justifyContent='space-between'
                alignItems='center'
                maxWidth='90vw'
                width='850px'
                margin='0 auto'
                px='1rem'
                height='100%'
            >
                <DarkModeSwitch />

                {session ? (
                    <UserDropdown session={session} />
                ) : (
                    <Button
                        onClick={() => signIn()}
                        colorScheme='blue'
                        size='sm'
                        variant='outline'
                    >
                        Sign in
                    </Button>
                )}
            </Flex>
        </Box>
    )
}

export { Header }
