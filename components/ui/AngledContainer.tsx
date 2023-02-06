import { sxFlexColumn } from '@/MuiStyles'
import { Box } from '@mui/material'
import React, { PropsWithChildren } from 'react'

export const AngledContainer: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Box
    sx={{
        width:{
          xs: '90%',
          sm: '85%',
          md: '75%',
          lg: '90%'
        },
        my: '6rem',
        mx: 'auto',
        p: '1rem',
        position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)',
            zIndex: '-1',
            transform: 'skewY(-3deg)',
            
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(114deg, rgba(255,0,50,1) 0%, rgba(111,26,182,1) 33%, rgba(205,4,4,1) 66%, rgba(61,23,102,1) 100%)',
            zIndex: '-2',
            opacity: '0.5',
            transform: 'skewY(3deg)',
          },
        
      }}
    >

        <Box
          sx={{
            ...sxFlexColumn,
            gap: '1rem'
          }}
        >
            {children}
        </Box>

    </Box>
  )
}
