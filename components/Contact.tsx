import React from 'react'
import Image from 'next/image'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { GradientHeader } from './GradientHeader'

export const Contact = () => {
  return (
    <Box component={'section'}>
    <Box>
      <GradientHeader text='Contact me'/>
    </Box>
    <Divider />
    <Grid py={'1rem'} container gap={2} justifyContent={'space-around'}>
      <Grid item lg = {6} xl={3}>
        <Image src={'/github.svg'} alt='Github logo' width={300} height={300} />
        <GradientHeader text='https://github.com/AlfredoLino' size={25} />
      </Grid>
      <Grid item lg = {6} xl={3}>
        <Image src={'/gmail.svg'} alt='Github logo' width={300} height={300} />
        <GradientHeader text='alfredolinomendoza@gmail.com' size={25} />
      </Grid>
      <Grid item lg = {12} xl={3}>
        <Image src={'/linkedin.svg'} alt='Github logo' width={300} height={300} />
        <GradientHeader text='www.linkedin.com/in/alfredolino/' size={25} />
      </Grid>
    </Grid>
  </Box>
  )
}

export default Contact