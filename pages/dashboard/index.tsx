import { GradientHeader } from '@/components/GradientHeader'
import { Grid, Card, CardHeader, IconButton } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React from 'react'

const index = () => {
  return (
    <>
        <GradientHeader text='Dashboard de tareas'/>
        <Grid p={2} container spacing={2}>
          <Grid
          item lg={4} sm = {12} xs = {12}>
            <Card sx={{
            minHeight: 'calc(100vh - 300px)',
            backgroundColor: '#424242'

          }}>
              <CardHeader 
              sx = {{
                backgroundImage: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)'
              }}
              action={
                <IconButton 
                sx={{
                  backgroundImage: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)'
                }}
                aria-label="settings">
                  <MenuOutlinedIcon />
                </IconButton>
              }
              title = 'Pending'/>
            </Card>
          </Grid>
          <Grid item lg={4} sm = {12} xs = {12}>
            <Card sx={{
            minHeight: 'calc(100vh - 300px)',
            backgroundColor: '#424242'

          }}>
              <CardHeader 
              sx = {{
                backgroundImage: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)'
              }}
              title = 'In Progress'
              action={
                <IconButton 
                sx={{
                  backgroundImage: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)'
                }}
                aria-label="settings">
                  <MenuOutlinedIcon />
                </IconButton>
              }
              />
            </Card>
          </Grid>
          <Grid item lg={4} sm = {12} xs = {12}>
            <Card sx={{
            minHeight: 'calc(100vh - 300px)',
            backgroundColor: '#424242'
          }}>
              <CardHeader 
              sx = {{
                backgroundImage: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)'
              }}
              action={
                <IconButton 
                sx={{
                  backgroundImage: 'linear-gradient(27deg, rgba(255,183,77,1) 0%, rgba(255,167,38,1) 76%)'
                }}
                aria-label="settings">
                  <MenuOutlinedIcon />
                </IconButton>
              }              
              title = 'Finished'/>
            </Card>
          </Grid>
        </Grid>
    </>
  )
}

export default index
