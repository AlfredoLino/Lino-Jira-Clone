import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { GradientHeader } from './GradientHeader'
import { HeaderWithBorder } from './HeaderWithBorder'
import { AngledContainer } from './ui/AngledContainer'

const ButNow = () => {
  return (
   
    <AngledContainer>
      <HeaderWithBorder text='But now'/>
      <Box
        sx={{
          width:{
            xs: '90%',
            sm: '85%',
            md: '75%',
            lg: '70%'
          },
          margin: 'auto'
        }}
        pb='3rem'
        >
          <Typography
            sx={{
              color: '#212121'
            }}
            variant='body1'
          >
            ...But now I am unemployed, seeking my next step in my career path. In the meanwhile I am learning new things an preparing myself to new an greater challenges. I need to reach out some place where I can feel I contribute to the success of work environment. So if you reading this think I got what you need, feel free to reach me out. I will leave
            my contacts in the next section.
          </Typography>
      </Box>
    </AngledContainer>
  
  )
}

export default ButNow;