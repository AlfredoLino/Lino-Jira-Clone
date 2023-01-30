import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
    sx={{
        height: '100px',
        background: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }} 
    component={'footer'}>
        <Image src={'/nombrefirma.ico'} alt='navbar icon' height={50} width={150}/>

    </Box>
  )
}

export default Footer
