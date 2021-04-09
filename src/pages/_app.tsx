import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
import { AppProps } from 'next/app'
import React from 'react'
import theme from '../theme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Provider session={pageProps.session}>
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </Provider>
    )
}

export default App
