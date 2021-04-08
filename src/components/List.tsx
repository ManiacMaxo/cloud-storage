import {
    Center,
    Divider,
    Flex,
    Heading,
    Link as ChakraLink,
    Spinner,
    useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { File as TypeFile } from '../lib/File'
import File from './File'
import Folder from './Folder'

interface Props {
    files: TypeFile[]
    loading: boolean
}

const List: React.FC<Props> = (props): JSX.Element => {
    const router = useRouter()
    const bg = useColorModeValue('githubHover', 'rosePineHover')

    const divider = () => (
        <Divider
            key={Math.random().toString(36).substring(7)}
            orientation='horizontal'
            color='gray.600'
        />
    )
    const previousDir =
        router.asPath.slice(0, router.asPath.lastIndexOf('/')) || '/'

    return (
        <Flex
            key='list component'
            direction='column'
            overflowX='hidden'
            width='850px'
            maxWidth='90vw'
            height='fit-content'
            border='1px solid'
            borderRadius='5px'
            borderColor='gray.600'
        >
            <Heading key='heading' as={Center} size='md' py='1rem'>
                <Breadcrumbs />
            </Heading>
            {divider()}
            <Link href={previousDir} key='previous page'>
                <ChakraLink
                    p='0.3rem 1rem'
                    fontWeight='600'
                    color='githubLink'
                    _hover={{ bg }}
                >
                    .&#8202;.
                </ChakraLink>
            </Link>
            {props.loading ? (
                <Center>
                    <Spinner marginBottom='1rem' />
                </Center>
            ) : (
                props.files.map((file) => (
                    <>
                        {divider()}
                        {file.dir ? (
                            <Folder key={file.name} {...file} />
                        ) : (
                            <File key={file.name} {...file} />
                        )}
                    </>
                ))
            )}
        </Flex>
    )
}

export default List
