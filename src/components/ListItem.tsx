import { Grid, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface Props {}

const ListItem: React.FC<Props> = (props) => {
    const bg = useColorModeValue('githubHover', 'rosePineHover')

    return (
        <Grid
            as='li'
            p='0.3rem 1rem'
            templateColumns='60% 25% 15%'
            _hover={{ bg }}
        >
            {props.children}
        </Grid>
    )
}

export default ListItem
