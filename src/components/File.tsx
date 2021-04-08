import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react'
import filesize from 'filesize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'
import { FaRegFile } from 'react-icons/fa'
import Moment from 'react-moment'
import ListItem from './ListItem'

interface Props {
    name: string
    time: Date
    size: number
    utf_name: string
}

const File: React.FC<Props> = ({ name, time, size, utf_name }): JSX.Element => {
    const router = useRouter()
    const href = `/api${path.join(router.asPath, utf_name)}`

    return (
        <ListItem>
            <Link href={href}>
                <ChakraLink display='flex' alignItems='center' width='100%'>
                    <Icon as={FaRegFile} marginRight='0.5rem' />
                    <Text isTruncated>{name}</Text>
                </ChakraLink>
            </Link>
            <Text textAlign='right' as={Moment} fromNow>
                {time}
            </Text>
            <Text textAlign='right'>{filesize(size)}</Text>
        </ListItem>
    )
}

export default File
