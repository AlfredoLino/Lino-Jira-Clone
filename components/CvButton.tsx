import Typography from '@mui/material/Typography'
import React from 'react'

export const CvButton = () => {
  return (
    <Typography
    component={'a'}
    href = '/cv.pdf'
    target= '_blank'
    sx={{
      
      color: 'secondary.main',
      lineHeight: '2rem',
      fontSize: {
        xs: '1.5rem'
      },
      width: 'max-content',
      my: '1rem',
      border: '5px solid',
      padding: '0.5rem',
      backgroundColor: 'transparent',
      borderImageSource: 
      'linear-gradient(114deg, rgba(255,0,50,1) 0%, rgba(111,26,182,1) 33%, rgba(205,4,4,1) 66%, rgba(61,23,102,1) 100%)',
      borderImageSlice: '1',
      transition: 'border-image-slice ease 770ms',
      '&:hover': {
        borderImageSlice: '60'
      }
      
    }}
  >
    Read my cv
  </Typography>
  )
}
