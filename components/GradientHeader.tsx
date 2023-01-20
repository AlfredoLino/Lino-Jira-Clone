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
    }}
  >
    <Typography variant='h1' fontSize={50} fontWeight={600}>
      {text}
    </Typography>
  </Box>
  )
}
