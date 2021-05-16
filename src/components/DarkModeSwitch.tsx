import { FiMoon, FiSun } from 'react-icons/fi'
import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'

export const DarkModeSwitch: React.FC = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'

    return (
        <IconButton
            aria-label='theme switch'
            variant='ghost'
            icon={isDark ? <FiSun /> : <FiMoon />}
            outline='none'
            onClick={toggleColorMode}
        />
    )
}
