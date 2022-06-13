import { Icon, Link, Text } from '@chakra-ui/react'
import filesize from 'filesize'
import { DateTime } from 'luxon'
import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'
import { FaRegFile } from 'react-icons/fa'
import { DateFormat, ListItem } from '.'

interface Props {
    name: string
    time: DateTime
    size: number
    utf_name: string
}

const File: React.FC<Props> = ({ name, time, size, utf_name }) => {
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
                <Text noOfLines={1}>{name}</Text>
            </Link>
            <Text
                textAlign='right'
                as={DateFormat}
                asDuration
                date={time}
                display={{ base: 'none', md: 'inline-block' }}
            />
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
