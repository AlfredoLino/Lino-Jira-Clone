import { HeaderWithBorder } from '@/components/HeaderWithBorder'
import { Box } from '@mui/material'
import React from 'react'
import ParseForm from './ParseForm'
import { sxFlexColumn } from '@/MuiStyles'

export default function ParseApp() {
    return (
        <Box sx={{
            ...sxFlexColumn
        }}>

            <header>
                <HeaderWithBorder text='Parse App' />
            </header>
            <Box
                sx={{
                    width: "45rem",
                }}
            >
                <ParseForm />
            </Box>
        </Box>
    )
}
