import {
    Center,
    Divider,
    Flex,
    Heading,
    Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Breadcrumbs, File, Folder, ListItem, Loader } from '.'
import { IFile } from '../lib'
import { Readme } from './Readme'

interface Props {
    files: IFile[]
    loading: boolean
}

const List: React.FC<Props> = (props): JSX.Element => {
    const router = useRouter()
    const borderColor = 'gray.600'

    const divider = () => (
        <Divider
            key={Math.random().toString(36).substring(7)}
            orientation='horizontal'
            color={borderColor}
        />
    )
    const previousDir =
        router.asPath.slice(0, router.asPath.lastIndexOf('/')) || '/'

    const readme = props.files.find(
        (file) => file.name.split('.')[0].toUpperCase() === 'README'
    )

    return (
        <Flex
            key='list component'
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
            <Heading key='heading' as={Center} size='md' py='1rem'>
                <Breadcrumbs />
            </Heading>
            {divider()}
            <ListItem key='previous page' templateColumns='1fr'>
                <Link href={previousDir}>
                    <ChakraLink
                        fontWeight='600'
                        color='lightLink'
                        _hover={{ textDecor: 'none' }}
                    >
                        .&#8202;.
                    </ChakraLink>
                </Link>
            </ListItem>
            {props.loading ? (
                <Loader />
            ) : (
                props.files.map((file) => {
                    const f = file.dir ? (
                        <Folder key={file.name} {...file} />
                    ) : (
                        <File key={file.name} {...file} />
                    )

                    return (
                        <>
                            {divider()}
                            {f}
                        </>
                    )
                })
            )}
            {readme && (
                <>
                    {divider()}
                    <Readme src={`/api${router.asPath}/${readme.utf_name}`} />
                </>
            )}
        </Flex>
    )
}

export { List }
