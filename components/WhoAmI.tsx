import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { GradientHeader } from './GradientHeader'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fontSize } from '@mui/system';
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
          lg: '70%'
        },
        margin: 'auto'
      }}
    >
        <GradientHeader text='Who Am I?'/>
        <Box>
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

            <Button
            
              sx={{
                my: '1rem',
                border: '10px solid',
                padding: '2rem',
                backgroundColor: 'transparent',
                borderImageSource: 
                'linear-gradient(114deg, rgba(255,0,50,1) 0%, rgba(111,26,182,1) 33%, rgba(205,4,4,1) 66%, rgba(61,23,102,1) 100%)',
                borderImageSlice: '1',
              }}
            >
              <Typography
                sx={{
                  color: 'secondary.main',
                  fontSize: '4rem'
                }}
              >
                Read my cv
              </Typography>
            </Button>

        </Box>
    </Box>
  )
}
