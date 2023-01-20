import '@/styles/globals.css'
import { theme } from '@/theme/Theme'
import { ThemeProvider } from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app'

import {Context} from '@/store'
import Navbar from '@/components/Navbar';


export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context>
        <Navbar />
        <Component {...pageProps} />
      </Context>
  </ThemeProvider>
}
