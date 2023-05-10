import { sxFlexColumn } from '@/MuiStyles';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useState } from 'react';

interface IUserData {
    first_name: string | undefined,
    last_name: string | undefined,
    id: string | undefined

}

export default function ParseForm() {

    const [code, setCode] = useState("");
    const [userData, setUserData] = useState<IUserData | null>(null);

    const parse = () => {
        const regex = new RegExp(/0+/)
        const [first_name, last_name, id] = code.split(regex);

        setUserData(
            {
                first_name: first_name || "",
                last_name: last_name || "",
                id: id || ""
            }
        )

    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                parse()
            }}
        >
            <Card sx={{
                py: "1rem",
                gap: "1rem",
                ...sxFlexColumn
            }}>
                <Typography sx={{
                    color: 'secondary.dark'
                }}>
                    Values in the string can be separated by any number of zeros. The id is a numeric value but will
                    contain no zeros. The function should parse the string and return a dictionary that contains the
                    first name, last name, and id values.
                    An example input would be “Robert000Smith000123”. The function should return the following
                    using that input:
                </Typography>
                <TextField
                    value={code} onChange={(e) => { setCode(e.target.value) }} variant='filled' label="Code" color='secondary' />
                <Button type='submit' variant='contained'>
                    Parse
                </Button>

                <Box>
                    {userData ? JSON.stringify(userData) : null}
                </Box>
            </Card>
        </form>
    )
}
