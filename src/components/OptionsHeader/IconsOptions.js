/* eslint-disable jsx-a11y/alt-text */
import { Grid } from "@mui/material";
import Profile from "../../images/perfil.svg"
import Bag from "../../images/sacola.svg"
import "./styles.css"

const iconsOptions = [Profile, Bag]
function IconOptions() {
    return (
        <Grid container>
            {iconsOptions && iconsOptions.map((item, index) => (
                <Grid key={index} item xs={12} sm={12} md={12} lg={12}>
                    <img src={item} />
                </Grid>
            ))}
        </Grid>
    )
}

export default IconOptions