import React from 'react'
import { PokemonCard } from './PokemonCard'
import { Grid, Paper } from '@mui/material'
import { gql, useMutation } from '@apollo/client';

const REPORT_POKEMON = gql`
mutation reportPokemon($pokemonReported: String!, $reportDescription: String!) {
  addReport(
    pokemonReported: $pokemonReported
    reportDescription: $reportDescription
  )
}
`

export const PokemonTable = ({ pokemonList }) => {

  const [reportPokemon] = useMutation(REPORT_POKEMON)

  return (
    <div>
      <Grid container spacing={2} alignItems="stretch">

        {pokemonList.map(p => {

          return (
            <Grid key={p.name} item xs={3}>
              <Paper elevation={3} >

                <PokemonCard pokemon={p} reportPokemon={reportPokemon} />
                
              </Paper>
            </Grid>
          )
        })}

      </Grid>
    </div>
  )
}