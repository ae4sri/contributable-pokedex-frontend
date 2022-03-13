import { PokemonTable } from '../PokemonTable'
import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { PaginationForDefaultTable } from '../Paginations/PaginationForDefaultTable';
import { Banner } from '../Banner';

const GET_20_POKEMON = gql`
query get20Pokemon($indexLowerBound: Int!, $indexUpperBound: Int!) {
  search(
    indexLowerBound: $indexLowerBound
    indexUpperBound: $indexUpperBound
  ) {
    id
    name
    hp
    image
    description
    type1
    type2
    attack
    defense
    spatk
    spdef
    speed
    height
    weight
    ability1
    ability2
  }
}
`
export const IndexPage = () => {

  const [loadPokemon, { called, loading, data }] = useLazyQuery(GET_20_POKEMON, {
    fetchPolicy: "no-cache"
  })

  useEffect(() => {
    loadPokemon({ variables: { indexLowerBound: 1, indexUpperBound: 20 } }) 
  }, [])
  
  if (loading || !called) {
    return <></>
  }

  return (
    <>
      <br />
      <Container>
          <Banner />
          <PokemonTable pokemonList={data.search} />
          <PaginationForDefaultTable loadPokemon={loadPokemon} />
      </Container>
      
    </>
  )

}