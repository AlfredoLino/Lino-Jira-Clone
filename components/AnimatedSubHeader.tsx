import { Box, Typography } from '@mui/material'
import React from 'react'

const AnimatedSubHeader = () => {
  return (
    <Box>
      <Box sx={{
        borderBlockEnd: '5px solid',
        borderImageSource: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)',
        borderImageSlice: '1',
        padding: '1rem',

      }}>
        <Typography 
          sx={{
            fontSize:{
              xs: '3rem',
              sm: '3.5rem',
              md: '5rem',
              lg: '6rem'
            },
            lineHeight: {
              xs: '2.5rem',
              sm: '3.2rem',
              md: '5rem',
            }
          }}
        color='primary' fontWeight={500} >Alfredo Lino Mendoza</Typography>
      </Box>
    <Box
    height={'2rem'}
    >
      <Box
        sx={{
          height: '2rem',
          paddingTop: '1rem',
          position: 'relative',
          width: '100%',
          lineHeight: '2rem',
        }}
      >
        <Typography 
        sx={{
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          animation: 'opacity1 12s ease infinite normal',
          '@keyframes opacity1': {
            '0%': {
              opacity: '1'
            },
            '25%':{
              opacity: '0'
            },
            '75%':{
              opacity: '0'
            },
            '100%':{
              opacity: '0'
            }
          }
        }}
        color={'#6a52b3'} fontSize='2rem' fontWeight={400} ></Typography>
        <Typography 
        sx={{
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          lineHeight: '2rem',
          animation: 'opacity2 12s ease infinite normal',
          '@keyframes opacity2': {
            'from': {
              opacity: '0'
            },
            '25%':{
              opacity: '1'
            },
            '75%':{
              opacity: '0'
            },
            'to':{
              opacity: '0'
            }
          }
        }}
        color={'#6a52b3'} fontSize='2rem' fontWeight={400} > TypeScript Developer</Typography>
        <Typography 
        sx={{
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          animation: 'opacity3 12s ease infinite normal',
          '@keyframes opacity3': {
            'from': {
              opacity: '0'
            },
            '25%':{
              opacity: '0'
            },
            '75%':{
              opacity: '1'
            },
            'to':{
              opacity: '0'
            }
          }
        }}
        color={'#6a52b3'} fontSize='2rem' fontWeight={400} > Frontend Developer</Typography>
        <Typography 
        sx={{
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          lineHeight: '2rem',
          animation: 'opacity4 12s ease infinite normal',
          '@keyframes opacity4': {
            'from': {
              opacity: '0'
            },
            '25%':{
              opacity: '0'
            },
            '75%':{
              opacity: '0'
            },
            'to':{
              opacity: '1'
            }
          }
        }}
        color={'#6a52b3'} fontSize='2rem' fontWeight={400} > React Developer</Typography>
      </Box>
    </Box>
  </Box>
  )
}

export default AnimatedSubHeader
