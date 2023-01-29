import { Box, Typography } from '@mui/material'
import React from 'react'

const AnimatedSubHeader = () => {
  return (
    <Box>
      <Box
        sx={{
          fontSize:{
            xs: '2rem',
            sm: '2.5rem',
            md: '3rem',
            lg: '3rem'
          },
          lineHeight: {
            xs: '2.5rem',
            sm: '3.2rem',
            md: '5rem',
          }
        }}
      >Hello there 👋, my name is:</Box>
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
              md: '4rem',
              lg: '4rem'
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
      height={'10rem'}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          paddingTop: '1rem',
          position: 'relative',
          width: '100%',
          lineHeight: '2rem',
        }}
      >
        <Typography fontSize={'1.5rem'}>and I am a:</Typography>
        <Box
          sx={{
            backgroundImage: 'linear-gradient(114deg, rgba(255,0,50,1) 0%, rgba(111,26,182,1) 33%, rgba(205,4,4,1) 66%, rgba(61,23,102,1) 100%)',
            py: {
              xs: '1rem',
              sm: '1rem',
              md: '2rem'
            },
            
            
          }}
        >
          <Typography fontSize={'2rem'} lineHeight={'2rem'}>
            FRONT-END DEVELOPER
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default AnimatedSubHeader
