import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { GradientHeader } from './GradientHeader'
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export const WhoAmI = () => {

  const router = useRouter();

  return (
    <Box
    sx={{
        width:{
          xs: '90%',
          sm: '85%',
          md: '75%',
          lg: '90%'
        },
        mt: '1rem',
        mx: 'auto'
      }}
    >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
            <Box
            sx={{
              width: 'min-content',
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
                Somethings about me
              </Typography>
            </Box>
            <Typography variant='body1'>
                My name is Alfredo Lino Mendoza. I am a Computer systems engineer. My career path is until now
                main focused in Web development where I stand out as frontend developer. This path started 3 years ago.
                I have been learning since the beginning and never going to stop. I really enjoy technology and coding.
                coding so I am constantly learning and improving as a programmer. In the next sections I write a resume about
                my work experience and some technologies I really love working with. 

                So I as a very motivated and skilled we developer
                I am confident that I would be a valuable asset to any team.
                My experience and skils coupled with my ability to learn quickly and
                adapt to new technologies make me agreat candidate to a web development role.
                I am excited about opportunities to bring my knowledge and focus where I can
                give value and also continue to grow as a professional.
                For more details, you can read and download my cv below.
            </Typography>


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


        </Box>
    </Box>
  )
}
