import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { GradientHeader } from './GradientHeader'

export const WhoAmI = () => {
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
            </Typography>
        </Box>
    </Box>
  )
}
