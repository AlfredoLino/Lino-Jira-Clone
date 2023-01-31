import { Box, Typography } from '@mui/material'
import React from 'react'

export const HeaderWithBorder: React.FC<{text: string}> = ({text}) => {
  return (
    <Box
    sx={{
      width: 'max-content',
      my: '1rem',
      borderBlockEnd: '5px solid',
      borderInlineStart: '5px solid',
      borderBlockStart: '5px solid',
      backgroundColor: 'transparent',
      p:'1rem',
      borderImageSource: 
      'linear-gradient(114deg, rgba(255,0,50,1) 0%, rgba(111,26,182,1) 33%,  transparent 66%)',
      borderImageSlice: '2',
    }}
    >
      <Typography
        sx={{
          fontSize:{
            xs: '2rem',
            sm: '1.5rem',
            md: '2.5rem',
            lg: '3rem'
          },
          lineHeight: {
            xs: '2rem',
            sm: '2.2rem',
            md: '3rem',
          },
        }}
      >
       {text} 
      </Typography>
    </Box>
  )
}
