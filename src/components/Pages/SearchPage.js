import { SearchForm } from "../SearchHelpers/SearchForm"
import { useState } from "react"
import { gql, useLazyQuery } from '@apollo/client'
import { Container } from "@mui/material"
import { SearchTable } from "../SearchHelpers/SearchTable"

const SEARCH_POKEMON = gql`
query searchPokemon(
  $name: String, $hpLowerBound: Int, $hpUpperBound: Int, $attackLowerBound: Int, $attackUpperBound: Int, 
  $defenseLowerBound: Int, $defenseUpperBound: Int, $type1: String, $type2: String, $ability1: String, $ability2: String,
  $speedLowerBound: Int, $speedUpperBound: Int, $spatkLowerBound: Int, $spatkUpperBound: Int, $spdefLowerBound: Int,
  $spdefUpperBound: Int, $indexLowerBound: Int, $indexUpperBound: Int
  ) {
  search(
    name: $name
    hpLowerBound: $hpLowerBound
    hpUpperBound: $hpUpperBound
    attackLowerBound: $attackLowerBound
    attackUpperBound: $attackUpperBound
    defenseLowerBound: $defenseLowerBound
    defenseUpperBound: $defenseUpperBound
    type1: $type1
    type2: $type2
    ability1: $ability1
    ability2: $ability2
    speedLowerBound: $speedLowerBound
    speedUpperBound: $speedUpperBound
    spatkLowerBound: $spatkLowerBound
    spatkUpperBound: $spatkUpperBound
    spdefLowerBound: $spdefLowerBound
    spdefUpperBound: $spdefUpperBound
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




export const SearchPage = () => {

  const [loadPokemon, { data }] = useLazyQuery(SEARCH_POKEMON)

  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')

  const [values, setValues] = useState({
    name: '',
    hpLowerBound: -1,
    hpUpperBound: -1,
    attackLowerBound: -1,
    attackUpperBound: -1,
    defenseLowerBound: -1,
    defenseUpperBound: -1,
    ability1: '',
    ability2: '',
    speedLowerBound: -1,
    speedUpperBound: -1,
    spatkLowerBound: -1,
    spatkUpperBound: -1,
    spdefLowerBound: -1,
    spdefUpperBound: -1,
    indexLowerBound: -1,
    indexUpperBound: -1
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const Table = () => {

    if (data) {
      return <SearchTable pokemonList={data.search} />
    }
    return <></>
  }

  const submitHelper = (val) => {
    if (val === "" || val === -1) {
      return null
    }
    return val
  }

  const handleSubmit = (event) => {

    event.preventDefault()
    loadPokemon({
      variables: {

        type1: submitHelper(type1),
        type2: submitHelper(type2),

        name: submitHelper(values.name),

        ability1: submitHelper(values.ability1),
        ability2: submitHelper(values.ability2),

        indexLowerBound: Number(submitHelper(values.indexLowerBound)),
        indexUpperBound: Number(submitHelper(values.indexUpperBound)),

        hpLowerBound: Number(submitHelper(values.hpLowerBound)),
        hpUpperBound: Number(submitHelper(values.hpUpperBound)),

        attackLowerBound: Number(submitHelper(values.attackLowerBound)),
        attackUpperBound: Number(submitHelper(values.attackUpperBound)),

        defenseLowerBound: Number(submitHelper(values.defenseLowerBound)),
        defenseUpperBound: Number(submitHelper(values.defenseUpperBound)),

        speedLowerBound: Number(submitHelper(values.speedLowerBound)),
        speedUpperBound: Number(submitHelper(values.speedUpperBound)),

        spatkLowerBound: Number(submitHelper(values.spatkLowerBound)),
        spatkUpperBound: Number(submitHelper(values.spatkUpperBound)),

        spdefLowerBound: Number(submitHelper(values.spdefLowerBound)),
        spdefUpperBound: Number(submitHelper(values.spdefUpperBound)),

      }
    })
  }

  return (
    <>


      <SearchForm values={values}
        type1={type1} setType1={setType1}
        type2={type2} setType2={setType2}
        setValues={setValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
        <br />
      <Container>
        <Table />
      </Container>
      
    </>
  )
}