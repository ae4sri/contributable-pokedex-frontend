import { PokemonTable } from '../PokemonTable'
import { Container } from '@mui/material'
import React, { useState} from 'react'
import { PaginationForSearchTable } from "../Paginations/PaginationForSearchTable"

export const SearchTable = ({ pokemonList }) => {

    const [ displayedPokemon, setDisplayedPokemon ]= useState(pokemonList.slice(0,20))

  return (
    <Container>
        <PokemonTable pokemonList={displayedPokemon} />
        <PaginationForSearchTable pokemonList={pokemonList} setPokemon={setDisplayedPokemon} />
    </Container>
  )

}