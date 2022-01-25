import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, FilledInput, InputAdornment } from "@mui/material";
import { TypeSelectBox } from './TypeSelectBox';


export const CreatePokemonForm = ({ values, type1, setType1, type2, setType2, handleChange, handleSubmit }) => {

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center">

            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        label="Pokemon Name"
                        required
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '40ch' }}
                        onChange={handleChange('name')}
                        inputProps={{ maxLength: 30 }}
                    />

                    <TextField
                        label="HP"
                        required
                        type="number"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('hp')}
                    />
                </div>

                <div>
                    <TypeSelectBox typeNum={1} type={type1} setType={setType1} required={true} />
                    <TypeSelectBox typeNum={2} type={type2} setType={setType2} required={false} />
                </div>

                <div>
                    <TextField
                        label="Ability 1"
                        required
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('ability1')}
                        inputProps={{ maxLength: 20 }}
                    />

                    <TextField
                        label="Ability 2"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('ability2')}
                        inputProps={{ maxLength: 20 }}
                    />
                </div>

                <div>
                    <TextField
                        label="Attack"
                        required
                        type="number"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('attack')}
                    />

                    <TextField
                        label="Defense"
                        required
                        type="number"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('defense')}
                    />

                    <TextField
                        label="Sp. Attack"
                        required
                        type="number"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('spatk')}
                    />

                    <TextField
                        label="Sp. Defense"
                        required
                        type="number"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('spdef')}
                    />
                </div>

                <div>
                    <TextField
                        label="Speed"
                        required
                        type="number"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('speed')}
                    />

                    <TextField
                        label="Height (metres)"
                        required
                        type="number"
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('height')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    m
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="Weight (kg)"
                        required
                        type="number"
                        step={0.5}
                        sx={{ m: 1, width: '30ch' }}
                        onChange={handleChange('weight')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    ({(values.weight * 2.2046).toFixed(1)} lbs)
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div>
                    <TextField
                        label="Description"
                        multiline
                        sx={{ m: 1, width: '100ch' }}
                        onChange={handleChange('description')}
                        inputProps={{ maxLength: 250 }}
                    />
                    <TextField
                        required
                        label="Image"
                        sx={{ m: 1, width: '100ch' }}
                        onChange={handleChange('image')}
                        inputProps={{ maxLength: 2048 }}
                    />

                </div>

                <Button type="submit">Create Pokemon</Button>

            </form>
        </Grid>
    );
}