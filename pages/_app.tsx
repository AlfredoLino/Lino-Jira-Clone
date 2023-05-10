import '@/styles/globals.css'
import { theme } from '@/theme/Theme'
import { ThemeProvider } from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app'

import { Context } from '@/store'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';
import { sxFlexColumn } from '@/MuiStyles';


export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Context>
      <Box
        sx={
          {
            ...sxFlexColumn,
            height: '100vh'

          }
        }
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />

      </Box>
    </Context>
  </ThemeProvider>
}
