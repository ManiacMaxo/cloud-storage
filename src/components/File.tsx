import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react'
import filesize from 'filesize'
import { useRouter } from 'next/router'
import path from 'path'
import React from 'react'
// import {
//     GoFile,
//     GoFileBinary,
//     GoFileMedia,
//     GoFilePdf,
//     GoFileZip
// } from 'react-icons/go'
import { FaRegFile } from 'react-icons/fa'
import Moment from 'react-moment'
import ListItem from './ListItem'

interface Props {
    name: string
    time: Date
    size: number
    utf_name: string
    mime: string
}

const File: React.FC<Props> = ({ name, time, size, utf_name }): JSX.Element => {
    const router = useRouter()
    const href = `/api${path.join(router.asPath, utf_name)}`

    // let icon = GoFile

    // if (mime.split('/')[0] === 'image') {
    //     icon = GoFileMedia
    // } else if (mime.includes('compressed')) {
    //     icon = GoFileZip
    // } else if (mime === 'application/pdf') {
    //     icon = GoFilePdf
    // } else if (mime === 'application/octet-stream') {
    //     icon = GoFileBinary
    // }

    return (
        <ListItem>
            <ChakraLink
                href={href}
                display='flex'
                alignItems='center'
                width='100%'
                boxShadow='none !important'
            >
                <Icon as={FaRegFile} marginRight='0.5rem' />
                <Text isTruncated>{name}</Text>
            </ChakraLink>
            <Text textAlign='right' as={Moment} fromNow>
                {time}
            </Text>
            <Text textAlign='right'>{filesize(size)}</Text>
        </ListItem>
    )
}

export default File
