import { Box, Typography } from '@mui/material'
import React from 'react'

const AnimatedSubHeader = () => {
  return (
    <Box>
    <Typography color='primary' variant='h2' fontWeight={500} >Alfredo Lino Mendoza</Typography>
    <Box
    height={'2rem'}
    >
      <Box
        sx={{
          height: '2rem',
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
