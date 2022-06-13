import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react'
import filesize from 'filesize'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'
import { GoFileDirectory } from 'react-icons/go'
import { DateFormat, ListItem } from '.'

interface Props {
    name: string
    time: DateTime
    size: number
    utf_name: string
}

const Folder: React.FC<Props> = ({ name, time, size, utf_name }) => {
    const router = useRouter()
    const href = path.join(router.asPath, utf_name)

    return (
        <ListItem>
            <Link href={href}>
                <ChakraLink
                    display='flex'
                    alignItems='center'
                    width='fit-content'
                >
                    <Icon as={GoFileDirectory} marginRight='0.5rem' />
                    <Text noOfLines={1}>{name}</Text>
                </ChakraLink>
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

export { Folder }
