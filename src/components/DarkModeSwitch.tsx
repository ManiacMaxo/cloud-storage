import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <IconButton
            aria-label='theme switch'
            variant='ghost'
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
        />
    )
}