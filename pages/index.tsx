import { useContext } from 'react';
import Head from 'next/head'
import Image from 'next/image';

import {Typography, Box, Divider, Grid} from '@mui/material'

import { UIContext } from '@/store';
import { GradientHeader } from '@/components/GradientHeader';
import { StackTecElement } from '@/components/StackTecElement';
import AnimatedSubHeader from '@/components/AnimatedSubHeader';
import ResumeHeader from '@/components/ResumeHeader';
import FavoriteTecStack from '@/components/FavoriteTecStack';
import DevExperience from '@/components/DevExperience';
import ButNow from '@/components/ButNow';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { WhoAmI } from '@/components/WhoAmI';


export default function Home() {
  /**
   * De ReactJS - &lt;a rel=&quot;nofollow&quot; class=&quot;external free&quot; href=&quot;https://reactjs.org/&quot;&gt;https://reactjs.org/&lt;/a&gt;, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=63486148">Enlace</a>
   */
  const context = useContext(UIContext)

  return (
    <>
      <Head>
        <title>Alfredo Lino - resume</title>
        <meta name="description" content="Alfredo Lino Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Alfredo Lino Personal Web page" />
        <meta property="og:description" content="This is my personal web page where I post my programing stuff" />
        <meta property="og:image" content="https://alfredolino.vercel.app/page-preview.jpg" />
        <link rel="icon" href="/nombrefirma.png" />
      </Head>

      <ResumeHeader />

      <WhoAmI/>

      <DevExperience />

      <FavoriteTecStack />

      <ButNow />

      <Contact />

      <Footer />

    </>
  )
}
