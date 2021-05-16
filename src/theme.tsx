import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const fonts = { body: `'Sen', sans-serif` }

const theme = extendTheme({
    colors: {
        darkBg: '#1f1d2e',
        darkText: '#e0def4',
        darkHover: '#6e6a86',
        lightBg: '#ffffff',
        lightText: '#24292e',
        lightHover: '#fffbdd',
        lightLink: '#58a6ff'
    },
    styles: {
        global: (props) => ({
            body: {
                color: mode('lightText', 'darkText')(props),
                bg: mode('lightBg', 'darkBg')(props),
                minHeight: '100vh'
            }
        })
    },
    components: {
        Menu: {
            baseStyle: (props) => ({
                list: {
                    bg: mode('lightBg', 'darkBg')(props)
                }
            })
        }
    },
    fonts
})

export default theme
