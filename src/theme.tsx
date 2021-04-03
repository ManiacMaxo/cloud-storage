import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const fonts = { body: `'Sen', sans-serif` }

const theme = extendTheme({
    colors: {
        rosePineBg: '#1f1d2e',
        rosePineText: '#e0def4',
        githubBg: '#ffffff',
        githubText: '#24292e',
        githubLink: '#58a6ff'
    },
    styles: {
        global: (props) => ({
            body: {
                color: mode('githubText', 'rosePineText')(props),
                bg: mode('githubBg', 'rosePineBg')(props)
            },
            Menu: {
                color: mode('githubText', 'rosePineText')(props),
                bg: mode('githubBg', 'rosePineBg')(props)
            }
        })
    },
    fonts
})

export default theme
