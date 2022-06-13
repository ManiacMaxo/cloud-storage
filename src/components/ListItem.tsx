import { Grid, GridProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ListItem: React.FC<GridProps> = (props) => {
    const bg = useColorModeValue('lightHover', 'darkHover')

    return (
        <Grid
            as='li'
            p='0.3rem 1rem'
            templateColumns={{ base: '1fr', md: '60% 25% 15%', sm: '80% 20%' }}
            _hover={{ bg }}
            {...props}
        >
            {props.children}
        </Grid>
    )
}

export { ListItem }
