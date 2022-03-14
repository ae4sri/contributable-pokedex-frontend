import { Typography } from "@mui/material";
import { Grid, Container } from "@mui/material";
import { Type } from '../Type';

export const Preview = ({ values, type1, type2, visibility }) => {
  const display = visibility == "none" ? '' : 'none'
  return (
    <Container sx={{ display: display }}>
      <Typography align='center' component="h2" variant="h4" >Preview Pokemon</Typography>
      
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <img height={200} src={values.image} />
      </div>

      <Grid container spacing={0} sx={{ m: 3, display: display }} >
        <Grid item xs={4}>
          Name: {values.name}
        </Grid>
        <Grid item xs={4}>
          HP: {values.hp}
        </Grid>
        <Grid itsem xs={4}>
          Type 1: {type1}
        </Grid>
        <br />
        <br />
        <Grid item xs={4}>
          Type 2: {type2}
        </Grid>
        <Grid item xs={4}>
          First Ability: {values.ability1}
        </Grid>
        <Grid item xs={4}>
          Hidden Ability: {values.ability2}
        </Grid>
        <br />
        <br />
        <Grid item xs={4}>
          Attack: {values.attack}
        </Grid>
        <Grid item xs={4}>
          Defense: {values.defense}
        </Grid>
        <Grid item xs={4}>
          Special Attack: {values.spatk}
        </Grid>
        <br />
        <br />
        <Grid item xs={4}>
          Special Defense: {values.spdef}
        </Grid>
        <Grid item xs={4}>
          Speed: {values.speed}
        </Grid>
        <Grid item xs={4}>
          Height: {values.height}
        </Grid>
        <br />
        <br />
        <Grid item xs={4}>
          Weight: {values.weight}
        </Grid>
        <Grid item xs={4}>
          Description: {values.description}
        </Grid>

      </Grid>

    </Container>
  )
}