/* eslint-disable jsx-a11y/alt-text */
import { Grid, Typography } from "@mui/material";
import Logo from "../../images/logo.svg"
import "../../styles/App.css";
import ButtonsOptions from "../OptionsHeader/ButtonOptions";
import IconOptions from "../OptionsHeader/IconsOptions";

function Header() {

    return (
        <Grid className="App-header" container p={1}>
            <Grid item xs={12} sm={12} md={2} lg={2} className="logo">
                <img src={Logo} />
                <Typography alignSelf={'center'} variant="h4" ><strong>Alura</strong>books</Typography>
            </Grid>
            <Grid item xs={11} sm={11} md={9} lg={9} textAlign={'center'} alignSelf={'center'}>
                <ButtonsOptions />
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} textAlign={'end'}>
                <IconOptions />
            </Grid>
        </Grid>
    )
}

export default Header