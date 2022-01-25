import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


export const PaginationForSearchTable = ({ pokemonList, setPokemon }) => {

  let numPages = Math.ceil((pokemonList.length) / 20)

  const [ page, setPage ] = useState(1)

  const handleChange = (event, value) => {
    setPage(value);
    setPokemon(
        pokemonList.slice(20*(value-1),20*(value-1)+20)
        )
  }

  return (
    <Stack spacing={10}>
      <Pagination size="large" count={numPages} page={page} onChange={handleChange} />
    </Stack>
  );
}