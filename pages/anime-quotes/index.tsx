import React from 'react'
import { GetStaticProps } from 'next';
import { Grid, Typography, Box, Card, CardHeader, IconButton, CardContent, CardMedia } from '@mui/material';
import { GradientHeader } from '@/components/GradientHeader';
import quoteClient from '../api/anime-quotes';
import type { TQuote } from '@/types';
import AnimeQuoteCard from '@/components/AnimeQuoteCard';


const AnimeList = () => {
  return (
    <section>
        <Box component={'header'}>
            <GradientHeader text='Anime Quotes'/>
            <Typography variant='body1'>
                Animes y frases que me gustan de algunos de sus personajes.
            </Typography>
        </Box>
        <Box p='1rem'>
          <Grid p={2} container spacing={2}>
            <Grid item lg={4} sm = {6} xs = {12}>
              <AnimeQuoteCard name='Berserk' apiname='berserk' src='/berserk.jpeg'/>
            </Grid>
            <Grid item lg={4} sm = {6} xs = {12}>
              <AnimeQuoteCard name='Vinland Saga' apiname='vinland' src='/vinland.jpeg'/>
            </Grid>
            <Grid item lg={4} sm = {6} xs = {12}>
              <AnimeQuoteCard name='Monster' apiname='monster' src='/monster.jpeg'/>
            </Grid>
            <Grid item lg={4} sm = {6} xs = {12}>
              <AnimeQuoteCard name='Vagabond' apiname='vagabond' src='/vagabond.jpeg'/>
            </Grid>
          </Grid>
        </Box>
    </section>
  )
}

export default AnimeList