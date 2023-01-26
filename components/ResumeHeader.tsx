import React from 'react'
import Image from 'next/image'
import { Box, Divider } from '@mui/material'
import AnimatedSubHeader from './AnimatedSubHeader'

const ResumeHeader = () => {
  return (
    <Box 
    sx={{
      marginTop: '3rem',
      display: {
        lg: 'flex',
        sm: 'flex',
        xs:'flex'
      },
      flexDirection: {
        xs: 'column',
        sm: 'column',
        lg: 'row'
      },
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      textAlign: 'center'
      
    }}
    p = {'3%'}
  >
    <Box 
    sx={{
      background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      backgroundSize: '400% 400%',
      animation: 'gradient 5s ease infinite',
      '@keyframes gradient': {
        '0%': {
          backgroundPosition:'0% 50%'
        },
        '50%': {
          backgroundPosition: '100% 50%'
        },
        '100%': {
          backgroundPosition: '0% 50%'
        }
      }
    }}
    borderRadius={'10px'} p='0'>
      <Image style={{borderRadius: '10px', padding: '0.5rem'}} src={'/resumephoto.jpg'} alt='Perfil' width={150*2} height={200*2} />
    </Box>
    <Divider flexItem orientation='vertical' />
    <AnimatedSubHeader />

  </Box>
  )
}

export default ResumeHeader;