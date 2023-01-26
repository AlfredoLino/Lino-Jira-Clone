import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { GradientHeader } from './GradientHeader'

interface Props {
    title: string,
    meAndText: string,
    experience: string,
    img: string
}
export const StackTecElement: React.FC<Props> = ({title, meAndText, experience, img}) => {
  return (
    <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-around'
        }}
    >
      <Typography variant='h2'>
        {title}
      </Typography>
      <Box
      sx={{
        display: 'flex',
        flexDirection: {
          lg: 'row',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        justifyContent: 'center',
        alignItems: 'center',
        gap: {
          md: '2rem',
          lg: '10rem'
        },
      }}
      >
        <Box width={'20rem'}>
        <GradientHeader v='h3' text={`Me and ${title}`} size={30} />
          <Typography variant='body1'>
            {meAndText}
          </Typography>
        </Box>
        <Image src={img} alt='React logo' width={300} height={300} />
        <Box width={'20rem'}>
          <GradientHeader v='h3' text='About my experience' size={30} />
          <Typography variant='body1'>
            {experience}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
