import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Header from './Header'

interface Props {
    children?: any
    title?: string
}

const Layout = (props: Props): JSX.Element => {
    return (
        <>
            <Head>
                <title>{props.title ?? 'Gorchilov Cloud'}</title>
            </Head>
            <Header height='10vh' />
            <Flex minHeight='90vh' justifyContent='center'>
                {props.children}
            </Flex>
        </>
    )
}

export default Layout
