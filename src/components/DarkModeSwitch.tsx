import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const DarkModeSwitch: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label='theme switch'
            variant='ghost'
            icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
            outline='none'
            onClick={toggleColorMode}
        />
    )
}

export { DarkModeSwitch }
