import React from 'react'
import { GradientHeader } from '@/components/GradientHeader';
import { Box, CardContent, Grid, Card, CardHeader, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import type { TQuote } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import quoteClient from '../api/anime-quotes';


interface Props {
    quotes: TQuote[]
}

const Quotes: React.FC<Props> = (props) => {
    const router = useRouter();

    return (
        <section>
            <Box component={'header'}>
                <GradientHeader v='h2' text={`${router.query.anime} QUOTES`.toUpperCase()}/>
            </Box>
            <Box p='1rem'>
                <Grid p={2} container spacing={2}>
                    {
                        props.quotes.map(quote => 
                            <Grid key={quote.quote}item lg={4} sm = {6} xs = {12}>
                                <Card sx={{
                                    height: '17rem',
                                    overflow: 'scroll'
                                }}>
                                    <CardContent>
                                        <Box>
                                        <Typography component={'p'} fontSize={'3rem'} variant='h1'>
                                            {quote.character}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: 'secondary.light'
                                            }}
                                            fontStyle= 'italic'
                                        >
                                            &quot;{quote.quote}&quot;
                                        </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </section>
    )
}

export const getStaticPaths: GetStaticPaths = () =>{

    const animes = [
        'vinland',
        'berserk',
        'vagabond',
        'monster'
    ]
    return {
        //Mapeo para los paths retornando un array de objectos con una propiedad params que contiene el nombre del anime
        paths: animes.map(anime => ({
            params: {
                anime
            }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const anime: string = ctx.params?.anime as string;
    const {data} = await quoteClient.get<TQuote[]>(`/anime?title=${anime}`)

    return {
        props: {
            quotes: data
        }
    }
}

export default Quotes;