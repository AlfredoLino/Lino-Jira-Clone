import { useContext } from 'react';
import Head from 'next/head'
import Image from 'next/image';

import {Typography, Box, Divider} from '@mui/material'

import { UIContext } from '@/store';
import { GradientHeader } from '@/components/GradientHeader';


export default function Home() {

  const context = useContext(UIContext)

  return (
    <>
      <Head>
        <title>Alfredo Lino - Home</title>
        <meta name="description" content="Alfredo Lino Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Box 
        sx={{
          marginTop: '3rem',
          display: {
            lg: 'flex',
            sm: 'flex',
            xs:'flex'
          },
          flexDirection: {
            xs: 'column',
            sm: 'column',
            lg: 'row'
          },
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center'
          
        }}
        p = {'3%'}
      >
        <Box borderRadius={'10px'} p='0'>
          <Image style={{borderRadius: '10px'}} src={'/resumephoto.jpg'} alt='Perfil' width={150*2} height={200*2} />
        </Box>
          <Divider flexItem orientation='vertical' />
          <Box>
            <Typography color='primary' variant='h2' fontWeight={500} >{context.state.nombre}</Typography>
            <Typography color={'#6a52b3'} fontSize='2rem' fontWeight={400} >A not very good React Developer</Typography>
          </Box>
      </Box>
      <Box sx = {{
        display:{
          lg: 'flex',
          md: 'flex',
        },
        background: 'radial-gradient(circle, rgba(106,82,179,1) 0%, rgba(255,176,38,1) 76%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 3%',
        textAlign: 'center',
        flexGrow: '1',
      }}>
        <Box
          sx={{
            p:{
              sm: '2rem',
              xs: '2rem'
            }
          }}
          bgcolor={'transparent'} >
          <Typography variant='h2' pb={'1rem'}>
            Lorem ipsum dolor
          </Typography>
          <Typography variant='body1' lineHeight={'inherit'} fontWeight='300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies erat. Nam ante odio, pharetra ut egestas et, aliquet vel lectus. Maecenas euismod ipsum in rhoncus facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at urna eleifend, molestie.
          </Typography>
        </Box>
        <Box
          sx={{
            p:{
              sm: '2rem',
              xs: '2rem'
            }
          }}
          bgcolor={'transparent'}>
          <Typography variant='h2' pb={'1rem'}>
          Lorem ipsum dolor
          </Typography>
          <Typography variant='body1' lineHeight={'inherit'} fontWeight='300'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies erat. Nam ante odio, pharetra ut egestas et, aliquet vel lectus. Maecenas euismod ipsum in rhoncus facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at urna eleifend, molestie.
          </Typography>
        </Box>
      </Box>
      <section>
        <Box>
          <GradientHeader text='Un poco sobre mi'/>
          <Typography fontSize={30} variant='h2' textAlign={'center'} color='primary'>realmente muy poco...</Typography>
          <Box p={'2rem'}>            
          <Typography variant='body1' color='primary'>
            Me gusta mucho escuchar musica, comer carne, estar con mi gato de nombre Pascal, programar y aprender mas sobre desarrollo web y ciencia de datos.
            Me agrada el cine de terror y de suspenso. Mis sagas favoritas son El Señor de los Anillos y Harry Potter. Y en tanto a videojuegos
            disfruto mucho el genero RTS y RPGs de accions como Dark Souls (adoro dark souls). Mis mangas favoritos son Vinland Saga y Berserk.
            </Typography>
          </Box>
        </Box>
      </section>
    </>
  )
}
