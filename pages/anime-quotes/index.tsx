import React from 'react'
import { Grid, Typography, Box, Card, CardHeader, IconButton, CardContent, CardMedia } from '@mui/material';
import { GradientHeader } from '@/components/GradientHeader';
import AnimeQuoteCard from '@/components/AnimeQuoteCard';
import Head from 'next/head';


const AnimeList = () => {
  return (
    <>
      <Head>
        <title>Alfredo Lino - Anime Quotes</title>
        <meta name="description" content="Alfredo Lino Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nombrefirma.png" />
      </Head>
      <section>
          <Box component={'header'}>
              <GradientHeader text='Anime Quotes'/>
              <Typography variant='h3'>
                  Some quotes from mangas I have read.
              </Typography>
          </Box>

          <Box p='1rem'>
            <Grid p={2} container spacing={2}>
              <Grid item xl={3}  lg={4} md={6} sm = {12} xs = {12}>
                <AnimeQuoteCard 
                resume='Guts es un espadichin que caza demonios (apostoles) en busca de venganza'
                name='Berserk' apiname='berserk' src='/berserk.jpeg'/>
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm = {12} xs = {12}>
                <AnimeQuoteCard 
                resume='Thorfin es un vikingo en busca de lo que es ser un verdadero guerrero'
                name='Vinland Saga' apiname='vinland' src='/vinland.jpeg'/>
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm = {12} xs = {12}>
                <AnimeQuoteCard 
                resume='Un doctor que se enfrenta a diversos dilemas morales al tratar con sus pacientes'
                name='Monster' apiname='monster' src='/monster.jpeg'/>
              </Grid>
              <Grid item xl={3} lg={4} md={6} sm = {12} xs = {12}>
                <AnimeQuoteCard 
                resume='Un samurai en busca de paz y redencion'
                name='Vagabond' apiname='vagabond' src='/vagabond.jpeg'/>
              </Grid>
            </Grid>
          </Box>
      </section>
      </>
  )
}

export default AnimeList