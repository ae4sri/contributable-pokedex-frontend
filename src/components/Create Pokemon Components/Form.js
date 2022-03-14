import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { CreatePokemonForm } from './CreatePokemonForm';
import { Paper, Alert } from '@mui/material';
import { Preview } from './Preview';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client'
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

const steps = ['Set Details', 'Preview Pokemon'];

export const Form = () => {


  const navigate = useNavigate()
  const [addPokemon] = useMutation(ADD_POKEMON)
  const [error, setError] = useState('')
  const [visibility, setVisibility] = useState('')
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

  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')

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


  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    if (activeStep != steps.length - 1) {
      setVisibility("none")
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setVisibility("")
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const canPreview = () => { // can user go to preview step
    return (values.name === '' || values.hp === "" || values.type1 === "" || values.ability1 === ""
    || values.attack === '' || values.defense === "" || values.spatk === "" || values.speed === "" ||
    values.speed === "" || values.height === "" || values.weight === "" || values.image === "")
  }



  return (
    <div>
    <AlertMessage />
    <Paper sx={{ m: 3 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <CreatePokemonForm values={values} handleChange={handleChange}
        type1={type1} setType1={setType1} type2={type2} setType2={setType2} visibility={visibility}
      />
      <Preview values={values} type1={type1} type2={type2} visibility={visibility} />
      
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />

          {activeStep === steps.length - 1  ? 
          <Button onClick={handleSubmit}>Submit Pokemon</Button>
          : 
          <Button onClick={handleNext} disabled={canPreview()}>Preview Pokemon</Button>
          }
      </Box>

    </Paper>
    </div>
  );
}





