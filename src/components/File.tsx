import { Icon, Link, Text } from '@chakra-ui/react'
import filesize from 'filesize'
import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'
import { FaRegFile } from 'react-icons/fa'
import Moment from 'react-moment'
import { ListItem } from '.'

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
            <Link
                href={href}
                display='flex'
                alignItems='center'
                width='100%'
                boxShadow='none !important'
            >
                <Icon as={FaRegFile} marginRight='0.5rem' />
                <Text isTruncated>{name}</Text>
            </Link>
            <Text
                textAlign='right'
                as={Moment}
                fromNow
                display={{ base: 'none', md: 'inline-block' }}
            >
                {time}
            </Text>
            <Text
                textAlign='right'
                display={{ base: 'none', sm: 'inline-block' }}
            >
                {filesize(size)}
            </Text>
        </ListItem>
    )
}

export { File }
