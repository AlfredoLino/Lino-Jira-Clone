import { orange, blueGrey, grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'



export const theme = createTheme({
    palette: {
    background: {
        default: grey[900]
    },
      primary: {
        main: orange[300],
        dark: orange[400],
        light: orange[200]
      },
      secondary: {
        main: blueGrey[300],
        dark: blueGrey[900]
      },
    },
    typography:{
        fontFamily: 'Roboto, sans-serif'
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root:{
                    background: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)'
                }
            }
        }
    }
  })