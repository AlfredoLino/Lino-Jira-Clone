import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { useRouter } from 'next/router';

const pages = ['New', 'Search']

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
                    sx={{ 
                        mr: 2,
                    }}
                >
                    <Image src={'/nombrefirma.PNG'} alt='navbar icon' height={50} width={150}/>
                </IconButton>
                <Box sx={{ flexGrow: 1, display: { xs: "none", sm: 'flex', md: "flex", lg: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: "secondary.dark", display: "block" }}
                    >
                        {page}
                    </Button>
                    ))}
                    <Button
                        key={'dashboard'}
                        sx={{ my: 2, color: "secondary.dark", display: "block" }}
                        onClick = {()=> router.push('/dashboard')}
                    >
                        Dashboard
                    </Button>
                </Box>
                <Button sx={{
                display: {
                    xs: 'none',
                    sm: 'block',
                    md: 'block'
                }
                }} color="inherit">Login</Button>
                <Button sx={{
                display: {
                    xs: 'block',
                    sm: 'none',
                    md: 'none'
                }
            }} color="inherit">Menu</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}