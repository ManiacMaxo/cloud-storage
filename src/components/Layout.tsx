import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'

const Layout = (props: any): JSX.Element => {
    return (
        <>
            <Header height='7vh' />
            <Flex minHeight='93vh' justifyContent='center'>
                {props.children}
            </Flex>
        </>
    )
}

export default Layout
