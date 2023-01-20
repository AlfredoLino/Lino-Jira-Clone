import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {
    text: string
}

export const GradientHeader: React.FC<Props> = ({text}) => {
  return (
    <Box
    sx={{
      mt: '2rem',
      textAlign: 'Center',
      backgroundImage: 'radial-gradient(circle, rgba(106,82,179,1) 0%, rgba(255,176,38,1) 76%)',
      backgroundClip: 'text',
      color: 'transparent'
    }}
  >
    <Typography fontSize={50} fontWeight={600}>
      {text}
    </Typography>
  </Box>
  )
}
