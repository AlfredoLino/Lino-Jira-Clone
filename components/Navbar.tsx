import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

const pages = ['New']

export default function Navbar() {

    const router = useRouter();

    return (
        <Box sx={{ 
            flexGrow: 1,
        }}>
        <AppBar position="static">
            <Toolbar
                sx = {{
                    justifyContent: 'space-between'
                }}
            >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={()=>router.push('/')}
                    sx={{ 
                        mr: 2,
                        
                    }}
                >
                    <Image src={'/nombrefirma.PNG'} alt='navbar icon' height={50} width={150}/>
                </IconButton>
                <Box sx={{ 
                    flexGrow: 1, 
                    display: { xs: "none", sm: 'flex', md: "flex", lg: 'flex' } }}>
                    <Button
                        key={'anime-quotes'}
                        sx={{ my: 2, color: "secondary.dark", display: "block" }}
                        onClick = {()=> router.push('/anime-quotes')}
                    >
                        Anime quotes
                    </Button>
                </Box>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={()=>router.push('/')}
                    sx={{ 
                        
                        display: {
                            xs: 'block',
                            sm: 'none',
                            md: 'none'
                        },
                    }}
                >
                    <ArrowDropDownIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        </Box>
    );
}