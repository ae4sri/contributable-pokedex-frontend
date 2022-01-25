import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client'

const NUM_OF_POKEMON = gql`
query {
  numOfPokemon
}`

// display pagination for default index table displaying all pokemon in pages of 20

export const PaginationForDefaultTable = ({ loadPokemon }) => {

  let numOfPokemon = 45 // Default page count is the number of pages it'd take to go through all the original pokemon. 
  // Updated to the actual page count when data is received from server.
  const result = useQuery(NUM_OF_POKEMON)
  if (!result.loading) {
    numOfPokemon = Math.ceil((result.data.numOfPokemon) / 20)
  }
  
  const [ page, setPage ] = useState(1)

  const handleChange = (event, value) => {
    setPage(value);
    loadPokemon({ variables: { indexLowerBound: ((value-1)*20+1), indexUpperBound: ((value-1)*20 + 20) } }) // load the 20 pokemon that correspond to the page number
  }

  return (
    <Stack spacing={10}>
      <Pagination size="large" count={numOfPokemon} page={page} onChange={handleChange} />
    </Stack>
  );
}