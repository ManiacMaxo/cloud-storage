import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Header } from '.'

interface Props {
    title?: string
}

const Layout: React.FC<React.PropsWithChildren<Props>> = (props) => {
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

export { Layout }
