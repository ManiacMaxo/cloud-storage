import {
    Avatar,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text
} from '@chakra-ui/react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'

interface Props {
    session: Session
}

const UserDropdown = ({ session }: Props): JSX.Element => {
    if (!session.user) return <div />
    return (
        <Menu>
            <MenuButton
                as={Avatar}
                name={session.user.name ?? ''}
                src={session.user.image ?? ''}
                cursor='pointer'
                // rightIcon={<ChevronDownIcon />}
                _focus={{ outline: 'none' }}
            />
            <MenuList className='menu'>
                <Text px='0.8rem'>
                    <small>Signed in as</small>
                    <br />
                    <strong>{session.user.name ?? session.user.email}</strong>
                </Text>
                <MenuDivider />
                <MenuItem>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href='/protected'>
                        <a>Protected</a>
                    </Link>
                </MenuItem>
                <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserDropdown
