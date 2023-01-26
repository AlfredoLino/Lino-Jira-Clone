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
        light: '#424242',
        main: blueGrey[300],
        dark: blueGrey[900]
      },
    },
    typography:{
        fontFamily: 'Roboto, sans-serif',
        h2: {
          fontFamily: 'Roboto Slab',
          backgroundImage: 'radial-gradient(circle, rgba(255,176,38,1) 0%, rgba(106,82,179,1) 76%)',
          backgroundClip: 'text',
          color: 'transparent',
        },
        h1: {
          fontFamily: 'Roboto Slab',
          textAlign: 'center',
          backgroundImage: 'radial-gradient(circle, rgba(106,82,179,1) 0%, rgba(255,176,38,1) 76%)',
          backgroundClip: 'text',
          color: 'transparent',
          
        },
        h3: {
          fontFamily: 'Roboto Slab',
          textAlign: 'center',
          backgroundImage: 'radial-gradient(circle, rgba(106,82,179,1) 0%, rgba(255,176,38,1) 76%)',
          backgroundClip: 'text',
          color: 'transparent',
        },
        body1: {
          fontFamily: 'Roboto Slab',
          fontWeight: '500',
          fontSize: '1rem',
          textAlign: 'center',
          lineHeight: '1.5rem',
          color: orange[300]
        },
        body2: {
          fontFamily: 'Roboto Slab',
          fontWeight: '500',
          fontSize: '.875rem',
          textAlign: 'center',
          backgroundImage: 'radial-gradient(circle, rgba(255,204,128,1) 0%, rgba(255,183,77,1) 50%)',
          backgroundClip: 'text',
          color: 'transparent',
        }


    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root:{
                    background: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)'
                }
            }
        },
        MuiCardHeader:{
          styleOverrides: {
            root:{
                fontFamily: 'Roboto Slab'
            },

        }
        }
    }
  })