import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { StatsChart } from '../StatsChart';
import { Type } from '../Type';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const PokemonModal = ({ pokemon }) => {

  const Ability2 = () => {
    if (pokemon.ability2) {
      return (
        <>
          <Typography variant="body1" gutterBottom>Ability 2: {pokemon.ability2}</Typography>
        </>
      )
    }
    return (
      <></>
    )
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Learn More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {pokemon.name}
          </Typography>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={pokemon.image} style={{ maxHeight: 200 }} alt="The Pokemon"/>
          </div>

          <Type type={pokemon.type1} />   <Type type={pokemon.type2} />

          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
            {pokemon.description}
          </Typography>

          <StatsChart hp={pokemon.hp} atk={pokemon.attack} def={pokemon.defense} spatk={pokemon.spatk} spdef={pokemon.spdef} speed={pokemon.speed} />

          <Grid container spacing={2} alignItems="stretch">

            <Grid item xs={6}>
              <Typography id="modal-modal-description">Ability 1: {pokemon.ability1}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Ability2 />
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>Height: {pokemon.height}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>Weight: {pokemon.weight}</Typography>
            </Grid>

          </Grid>

          <br />
          <br />

        </Box>

      </Modal>
    </div>
  );
}