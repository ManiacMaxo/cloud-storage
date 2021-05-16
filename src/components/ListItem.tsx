import { Grid, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface Props {}

const ListItem: React.FC<Props> = (props): JSX.Element => {
    const bg = useColorModeValue('lightHover', 'darkHover')

    return (
        <Grid
            as='li'
            p='0.3rem 1rem'
            templateColumns={{ base: '1fr', md: '60% 25% 15%', sm: '80% 20%' }}
            _hover={{ bg }}
        >
            {props.children}
        </Grid>
    )
}

export default ListItem
