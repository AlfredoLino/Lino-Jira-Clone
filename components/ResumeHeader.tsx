import React from 'react'
import Image from 'next/image'
import { Box, Divider } from '@mui/material'
import AnimatedSubHeader from './AnimatedSubHeader'

const ResumeHeader = () => {
  return (
    <Box component={'section'}
      sx= {{
        display: 'flex',
        justifyContent: 'center',
      }}
    >

    <Box 
    sx={{
      border: '10px solid',
      py: '4rem',
      width: '90%',
      backgroundColor: 'transparent',
      borderImageSource: 
      'linear-gradient(114deg, rgba(255,0,50,1) 0%, rgba(111,26,182,1) 33%, rgba(205,4,4,1) 66%, rgba(61,23,102,1) 100%)',
      borderImageSlice: '1',
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

    }}
    borderRadius={'10px'} p='0'>
      <Image style={{borderRadius: '10px', padding: '0.5rem'}} src={'/resumephoto.jpg'} alt='Perfil' width={150*2} height={200*2} />
    </Box>
    <Divider flexItem orientation='vertical' />
    <AnimatedSubHeader />

  </Box>
  </Box>

  )
}

export default ResumeHeader;