import { Box } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

interface Props {
    src: string
}

const Readme: React.FC<Props> = (props) => {
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch(props.src)
            .then((res) => {
                if (res.ok) return res.text()
                throw Error
            })
            .then((data) => {
                setContent(data)
            })
    }, [])

    return (
        <Box key='readme' p='0.3rem 1rem' __css={{ a: { color: 'lightLink' } }}>
            <ReactMarkdown components={ChakraUIRenderer()} children={content} />
        </Box>
    )
}

export { Readme }
