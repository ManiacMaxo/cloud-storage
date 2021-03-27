import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import {
    Code,
    Link as ChakraLink,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/Layout'

const Index = () => (
    <Layout>
        <Text>
            Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>{' '}
            + <Code>typescript</Code>.
        </Text>

        <List spacing={3} my={0}>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                <ChakraLink
                    isExternal
                    href='https://chakra-ui.com'
                    flexGrow={1}
                    mr={2}
                >
                    Chakra UI <LinkIcon />
                </ChakraLink>
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                <ChakraLink
                    isExternal
                    href='https://nextjs.org'
                    flexGrow={1}
                    mr={2}
                >
                    Next.js <LinkIcon />
                </ChakraLink>
            </ListItem>
        </List>
    </Layout>
)

export default Index
