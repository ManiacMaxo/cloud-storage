import { Image } from '@chakra-ui/image'
import {
    Box,
    Code,
    Divider,
    Heading,
    Link,
    ListItem,
    OrderedList,
    Text,
    UnorderedList
} from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React, { useEffect, useState } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'

interface Props {
    src: string
}

let components: Components & {
    heading: Components['h1']
} = {
    p: (props) => <Text mb={2}>{props.children}</Text>,
    em: (props) => <Text as='em'>{props.children}</Text>,
    blockquote: (props) => (
        <Code as='blockquote' p={2}>
            {props.children}
        </Code>
    ),
    code: (props) =>
        props.inline ? (
            <Code p={2}>{props.children}</Code>
        ) : (
            <Code
                className={props.className}
                whiteSpace='break-spaces'
                display='block'
                w='full'
                p={2}
            >
                {props.children}
            </Code>
        ),
    del: (props) => <Text as='del'>{props.children}</Text>,
    hr: Divider,
    a: Link,
    img: Image,
    text: (props) => <Text as='span'>{props.children}</Text>,
    ul: (props) => (
        <UnorderedList
            spacing={2}
            styleType={props.depth === 1 ? 'circle' : 'decimal'}
            pl={4}
        >
            {props.children}
        </UnorderedList>
    ),
    ol: (props) => (
        <OrderedList
            spacing={2}
            styleType={props.depth === 1 ? 'circle' : 'decimal'}
            pl={4}
        >
            {props.children}
        </OrderedList>
    ),
    li: (props) => {
        return (
            <ListItem
                listStyleType={props.checked !== null ? 'none' : 'inherit'}
            >
                {props.children}
            </ListItem>
        )
    },
    heading: (props) => {
        const sizes = ['3xl', 'xl', 'lg', 'md', 'sm', 'xs']
        return (
            <Heading
                my={4}
                as={`h${props.level}` as any}
                fontSize={sizes[`${props.level - 1}`]}
            >
                {props.children}
            </Heading>
        )
    },
    pre: (props) => <chakra.pre>{props.children}</chakra.pre>,
    table: Table,
    thead: Thead,
    tbody: Tbody,
    tr: (props) => <Tr>{props.children}</Tr>,
    td: (props) => <Td>{props.children}</Td>,
    th: (props) => <Th>{props.children}</Th>
}

components = Object.assign(components, {
    h1: components.heading,
    h2: components.heading,
    h3: components.heading,
    h4: components.heading,
    h5: components.heading,
    h6: components.heading
})

const Readme: React.FC<Props> = ({ src }) => {
    const [content, setContent] = useState('')

    useEffect(() => {
        console.log('fetching readme', src)
        fetch(src)
            .then((res) => {
                if (res.ok) return res.text()
                throw Error
            })
            .then(setContent)
    }, [src])

    return (
        <Box p='0.3rem 1rem' __css={{ a: { color: 'lightLink' } }}>
            <ReactMarkdown components={components}>{content}</ReactMarkdown>
        </Box>
    )
}

export { Readme }
