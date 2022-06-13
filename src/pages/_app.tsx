import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Layout } from '../components'
import theme from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <SessionProvider session={pageProps.session}>
            <ChakraProvider resetCSS theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </SessionProvider>
    )
}

export default App
