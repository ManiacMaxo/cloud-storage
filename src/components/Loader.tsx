import { Center, Spinner, SpinnerProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends SpinnerProps {}

const Loader: React.FC<Props> = (props) => {
    return (
        <Center>
            <Spinner key='spinner' marginBottom='1rem' {...props} />
        </Center>
    )
}

export { Loader }
