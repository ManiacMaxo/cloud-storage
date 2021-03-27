import React from 'react'
import { Container } from './Container'
import Header from './Header'

const Layout = (props: any): JSX.Element => {
    return (
        <Container height='100vh'>
            <Header />
            {props.children}
        </Container>
    )
}

export default Layout
