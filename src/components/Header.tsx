import {
    Avatar,
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text
} from '@chakra-ui/react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'

const Header = ({ height }: { height: string }) => {
    const [session] = useSession()
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
                    <Menu>
                        <MenuButton
                            as={Avatar}
                            name={session.user.name ?? ''}
                            src={session.user.image ?? ''}
                            // rightIcon={<ChevronDownIcon />}
                            _focus={{ outline: 'none' }}
                        />
                        <MenuList>
                            <Text px='0.8rem'>
                                <small>Signed in as</small>
                                <br />
                                <strong>
                                    {session.user.name ?? session.user.email}
                                </strong>
                            </Text>
                            <MenuDivider />
                            <MenuItem>
                                <Link href='/protected'>
                                    <a>protected</a>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={() => signOut()}>
                                Sign out
                            </MenuItem>
                        </MenuList>
                    </Menu>
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

export default Header
