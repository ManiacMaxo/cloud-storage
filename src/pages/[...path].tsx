import {
    Center,
    Container,
    Flex,
    Grid,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import filesize from 'filesize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'

const path = (): JSX.Element => {
    const router = useRouter()
    const [files, setFiles] = useState<any[]>([])
    const bg = useColorModeValue('#fffbdd', '#6e6a86')

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
                p='0.5rem'
                height='fit-content'
                border='2px solid'
                borderRadius='5px'
            >
                <Heading as={Center} size='md' py='0.5rem'>
                    <Breadcrumbs />
                </Heading>

                <Link
                    href={router.asPath
                        .split('/')
                        .slice(0, router.asPath.split('/').length - 1)
                        .join('/')}
                >
                    <a>..</a>
                </Link>
                {files.map((file) => (
                    <Grid
                        as='li'
                        p='0.1rem'
                        key={file.name}
                        templateColumns='55% 25% 20%'
                        _hover={{ bg }}
                    >
                        <Link
                            href={router.asPath + '/' + file.utf_name}
                            key={file.name}
                        >
                            <a>
                                <Text isTruncated>{file.name}</Text>
                            </a>
                        </Link>
                        <Text textAlign='right' as={Moment} fromNow>
                            {file.time}
                        </Text>
                        <Text textAlign='right'>{filesize(file.size)}</Text>
                    </Grid>
                ))}
            </Flex>
        </Layout>
    )
}

export default path
