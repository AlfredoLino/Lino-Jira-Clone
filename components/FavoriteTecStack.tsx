import { Box, Divider, Grid } from '@mui/material'
import React from 'react'
import { GradientHeader } from './GradientHeader'
import { StackTecElement } from './StackTecElement'

const FavoriteTecStack = () => {
  return (
    <Box sx = {{
        textAlign: 'center',
        backgroundColor: 'secondary.light'
      }}
        pb= '1rem'
      >
        <GradientHeader text='My favorite stack'/>
        <Divider />
        <Box>
          <Grid 
          container spacing={'3'} rowGap={12} alignContent='center'>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <StackTecElement
                title='React'
                experience='I have been in several profesional projects using react all along Typescript and I have to say that this couple is pure fire.
                '
                meAndText='I have been working using react almost since the begining on my web develompen career. I Really like everything about it. The hooks, the component driven development, the libraries and all the ecosystem it has.
                '
                img='/React.svg'
              />
            </Grid>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <StackTecElement
                title='TypeScript'
                img='/ts.svg'
                meAndText='I really like Typescript. I just makes Javascript a good lenguage I really enjoy working with'
                experience='I have worked using TypeScript paired with react and is amazing. The development experience is perfect'
              />
            </Grid>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <StackTecElement
                title='Express.js'
                img='/express.svg'
                meAndText='It was de first backend library I learned for API Rest and I really enjoy making backend job with it'
                experience='I have quite experience with express on API REST projects'
              />
            </Grid>
            <Grid item lg={12} md={6} sm={12} xs={12}>
              <StackTecElement 
              title='MongoDB'
              img='/mongo.svg'
              meAndText='I really like the documental databases and mongo is pretty good'
              experience='I worked modeling documental batabases for a internal project in a University. '
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
}

export default FavoriteTecStack