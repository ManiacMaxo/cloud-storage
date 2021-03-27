import {
    Center,
    Divider,
    Flex,
    Grid,
    Heading,
    Icon,
    Link as ChakraLink,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import filesize from 'filesize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaFolder, FaRegFile } from 'react-icons/fa'
import Moment from 'react-moment'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'

const path = (): JSX.Element => {
    const router = useRouter()
    const [files, setFiles] = useState<any[]>([])
    const bg = useColorModeValue('#fffbdd', '#6e6a86')
    const divider = <Divider orientation='horizontal' color='gray.600' />

    useEffect(() => {
        if (!router.query.path?.length) return
        ;(async () => {
            const res = await fetch(`/api${router.asPath}`)
            if (res.ok) {
                return setFiles(await res.json())
            }
        })()
    }, [router.query])

    return (
        <Layout>
            <Flex
                direction='column'
                overflowX='hidden'
                width='850px'
                maxWidth='90vw'
                height='fit-content'
                border='1px solid'
                borderRadius='5px'
                borderColor='gray.600'
            >
                <Heading as={Center} size='md' py='1rem'>
                    <Breadcrumbs />
                </Heading>
                {divider}
                <Link
                    href={router.asPath
                        .split('/')
                        .slice(0, router.asPath.split('/').length - 1)
                        .join('/')}
                >
                    <ChakraLink
                        p='0.3rem 1rem'
                        _hover={{ bg }}
                        fontWeight='600'
                        color='githubLink'
                    >
                        .&#8202;.
                    </ChakraLink>
                </Link>
                {files.map((file) => (
                    <>
                        {divider}
                        <Grid
                            as='li'
                            p='0.3rem 1rem'
                            key={file.name}
                            templateColumns='60% 25% 15%'
                            _hover={{ bg }}
                        >
                            <Link
                                href={router.asPath + '/' + file.utf_name}
                                key={file.name}
                            >
                                <ChakraLink display='flex' alignItems='center'>
                                    <Icon
                                        as={file.dir ? FaFolder : FaRegFile}
                                        marginRight='0.5rem'
                                    />
                                    <Text isTruncated>{file.name}</Text>
                                </ChakraLink>
                            </Link>
                            <Text textAlign='right' as={Moment} fromNow>
                                {file.time}
                            </Text>
                            <Text textAlign='right'>{filesize(file.size)}</Text>
                        </Grid>
                    </>
                ))}
            </Flex>
        </Layout>
    )
}

export default path
