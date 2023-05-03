/* eslint-disable jsx-a11y/alt-text */
import { Card, OutlinedInput, InputAdornment, Grid, CardContent, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { listBook } from "./DataBooks"

function CardBooks() {
    const [bookslist, setBooksList] = useState(listBook)

    const handleSearch = (e) => {
        const textValue = e
        const listResult = listBook.filter((item) => item.name.includes(textValue))
        setBooksList(listResult)
    }

    return (
        <Grid container justifyContent={'center'} p={2}>
            <Grid item container lg={12} md={12} xs={12} sm={12}>
                <Grid item lg={10} md={10}>
                    <Typography p={1} variant="h3" color={'#ffff'} >Your Book's</Typography>
                </Grid>
                <Grid item lg={2} md={2}>
                    <OutlinedInput
                        style={{ backgroundColor: '#FFF' }}
                        onBlur={(e) => { handleSearch(e.target.value) }}
                        placeholder="Search books"
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </Grid>
            </Grid>
            <Grid justifyContent={'center'} item container lg={12} md={12} xs={12} sm={12}>
                {bookslist && bookslist.map((item) => (
                    <Grid item  lg={2} md={4} xs={8} sm={8}  key={item.id} p={3}>
                        <Card >
                            <CardContent style={{textAlign: 'center'}}>
                                <Typography variant="h5">
                                    {item.name}
                                </Typography>
                                <img src={item.src} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default CardBooks