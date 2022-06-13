import {
    Center,
    Divider,
    Flex,
    Heading,
    Link as ChakraLink
} from '@chakra-ui/react'
import { randomUUID } from 'crypto'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { Breadcrumbs, File, Folder, ListItem, Loader } from '.'
import useGetFiles from '../hooks/useGetFiles'
import { Readme } from './Readme'

const randId = () => {
    if (typeof randomUUID !== 'undefined') {
        return randomUUID()
    }
    return Math.random().toString(36).substring(0, 7)
}

const borderColor = 'gray.600'
const divider = () => (
    <Divider key={randId()} orientation='horizontal' color={borderColor} />
)

const List: React.FC = () => {
    const router = useRouter()
    const { files, loading } = useGetFiles(router)

    const readme = useMemo(
        () => files.find((file) => file.name.toLowerCase() === 'readme.md'),
        [files]
    )

    return (
        <Flex
            direction='column'
            overflowX='hidden'
            width='90vw'
            maxWidth='850px'
            height='fit-content'
            border='1px solid'
            borderRadius='5px'
            borderColor={borderColor}
            marginBottom='5rem'
        >
            <Heading as={Center} size='md' py='1rem'>
                <Breadcrumbs />
            </Heading>
            {divider()}
            <ListItem templateColumns='1fr'>
                <Link
                    href={
                        router.asPath.slice(
                            0,
                            router.asPath.lastIndexOf('/')
                        ) || '/'
                    }
                >
                    <ChakraLink
                        fontWeight='600'
                        color='lightLink'
                        _hover={{ textDecor: 'none' }}
                    >
                        .&#8202;.
                    </ChakraLink>
                </Link>
            </ListItem>
            {loading ? (
                <Loader />
            ) : (
                files.map(({ dir, ...file }) => {
                    const Component = dir ? Folder : File
                    return (
                        <>
                            {divider()}
                            <Component key={randId()} {...file} />
                        </>
                    )
                })
            )}
            {!loading && readme && (
                <>
                    {divider()}
                    <Readme src={`/api${router.asPath}/${readme.utf_name}`} />
                </>
            )}
        </Flex>
    )
}

export { List }
