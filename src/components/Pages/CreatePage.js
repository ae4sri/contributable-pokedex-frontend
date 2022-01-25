import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { CreatePokemonForm } from '../CreatePokemonForm'
import { Container, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const ADD_POKEMON = gql`
  mutation AddPokemon($name: String!, $hp: Int!, $attack: Int!, $defense: Int!, $type1: String!, 
    $type2: String, $ability1: String!, $ability2: String, $speed: Int!, $spatk: Int!, $spdef: Int!, $description: String, 
    $height: String!, $weight: String!, $image: String!) {

      addPokemon(name: $name, hp: $hp, attack: $attack, defense: $defense, type1: $type1, type2: $type2,
        ability1: $ability1, ability2: $ability2, speed: $speed, spatk: $spatk, spdef: $spdef, 
        description: $description, height: $height, weight: $weight, image: $image) {
          name
        }
    }
`

export const CreatePage = () => {

  const navigate = useNavigate()

  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')

  const [addPokemon] = useMutation(ADD_POKEMON)

  const [error, setError] = useState('')

  const [values, setValues] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    ability1: '',
    ability2: '',
    speed: '',
    spatk: '',
    spdef: '',
    description: '',
    height: '',
    weight: '',
    image: ''
  })

  if (error) {
    console.log(error)
  }

  const AlertMessage = () => {
    if (error) {
      return (
        <Alert severity="error">{error}</Alert>
      )
    }
    return (
      <></>
    )
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await addPokemon({
        variables: {
          name: values.name,
          hp: Number(values.hp),
          attack: Number(values.attack),
          defense: Number(values.defense),
          type1: type1,
          type2: type2 === "" ? null : type2,
          ability1: values.ability1,
          ability2: values.ability2 === "" ? null : values.ability2,
          speed: Number(values.speed),
          spatk: Number(values.spatk),
          spdef: Number(values.spdef),
          description: values.description === "" ? null : values.description,
          height: `${(Number(values.height)).toFixed(1)} m`,
          weight: `${(Number(values.weight)).toFixed(1)} kg (${(values.weight * 2.2046).toFixed(1)} lbs)`,
          image: values.image
        }
      })

      navigate('/')

    } catch (e) {
      setError(e.message)
      setTimeout(function () {
        setError('')
      }, 5000)
    }

  }
  return (
    <>
      <AlertMessage />

      <Container>
        <CreatePokemonForm values={values} type1={type1} setType1={setType1} type2={type2} setType2={setType2} handleChange={handleChange} handleSubmit={handleSubmit} />
      </Container>

    </>
  )
}