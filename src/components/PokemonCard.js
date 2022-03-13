import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PokemonModal } from './Modals/PokemonModal';
import { ReportModal } from './Modals/ReportModal';
import { Type } from './Type';

export const PokemonCard = ({ pokemon, reportPokemon }) => {
  const Style = {
    height: 96,
    width: 96
  };
  
  let description = pokemon.description
  if (description && description.length > 70 && pokemon.id > 899) {
    description = description.slice(0,70).concat('...') // shorten description if it's too long to create space for report button
  }

  const ReportPokemon = () => {
    if (pokemon.id > 898) { // Don't report default pokemon
      return (
        <ReportModal name={pokemon.name} report={reportPokemon} />
      )
    }
    return (
      <></>
    )
  }
  return (
    <Card sx={{ maxWidth: 400, height: 350 }} style={{ display: "flex", flexDirection: "column" }} >

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          image={pokemon.image}
          alt='Image of Pokemon'
          style={Style}
        />
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.id}. {pokemon.name}
        </Typography>

        <Type type={pokemon.type1} />   <Type type={pokemon.type2} />

        <Typography variant="body2" color="text.secondary" style={{ overflow: 'hidden', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }} sx={{ fontSize: 14 }} >
          {description}
        </Typography>

      </CardContent>

        <PokemonModal pokemon={pokemon} /> <ReportPokemon />
    </Card>

  );
}
