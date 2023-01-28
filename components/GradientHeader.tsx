import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {
    text: string,
    v?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit"
}

export const GradientHeader: React.FC<Props> = ({text, v}) => {
  return (
    <Box
    sx={{
      mt: '2rem',
    }}
  >
    <Typography variant={v || 'h2'}  fontWeight={600}>
      {text}
    </Typography>
  </Box>
  )
}
