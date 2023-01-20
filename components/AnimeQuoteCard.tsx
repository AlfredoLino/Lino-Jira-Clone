import React from 'react';
import { Card, CardHeader, IconButton, CardMedia } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useRouter } from 'next/router';

type Props = {
    name : string,
    src: string,
    apiname: string
}
const AnimeQuoteCard: React.FC<Props> = ({name, src, apiname}) => {
    const router = useRouter();

    return (
        <Card sx={{
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
                onClick={()=> router.push(`/anime-quotes/${apiname}`)}
                aria-label="settings">
                <MenuOutlinedIcon />
                </IconButton>
            }
            title = {name}/>
            <CardMedia component={'img'} src={src} height={250}/>
        </Card>
    )
}

export default AnimeQuoteCard