import { Grid, Button} from "@mui/material";

const buttonsOptions = ['Categorias', 'Minha estante', 'Favoritos']

function ButtonsOptions() {
    return (
        <Grid container alignItems={'center'} >
            <Grid container item xs={12} sm={12} md={9} lg={9}>
                {buttonsOptions && buttonsOptions.map((item, index) => (
                    <Grid item xs={12} sm={12} md={4} lg={4} key={index} >
                        <Button style={{ color: '#000', fontWeight: 'bold' }}>{item}</Button>
                    </Grid>
                ))}
            </Grid>
        </Grid>

    )
}

export default ButtonsOptions;