import React from "react"
import { TextField } from "@mui/material"
import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { Button } from "@mui/material"

const DELETE_POKEMON = gql`
mutation removePokemon($name: String!) {
  removePokemon(name: $name)
}
`

export const DeletePokemonForm = ({ secretKey, setErrorMessage }) => {

  const [name, setName] = useState('')

  const [removePokemon] = useMutation(DELETE_POKEMON, {
    context: { headers: { authorization: secretKey } }
  })

  const deletePokemon = async (event) => {
    event.preventDefault()
    try {
      await removePokemon({
        variables: {
          name: name
        }
      })
    } catch (e) {
      setErrorMessage(e.message)
      setTimeout(function () {
        setErrorMessage('')
      }, 5000);
    }
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }
  
  return (
    <>
      <div>
        <form onSubmit={deletePokemon}>

          <div>
            <TextField label="Delete a Pokemon by name" 
            value={name} onChange={handleChange} 
            id="outlined-basic" variant="outlined"
            sx={{ m: 1, width: '30ch' }} />
          </div>
          
          <Button type='submit'>Delete Pokemon</Button>
          
        </form>
      </div>
    </>
  )
}