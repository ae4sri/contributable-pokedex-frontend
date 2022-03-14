import TextField from '@mui/material/TextField';
import { Button, InputAdornment, Typography, Container } from "@mui/material";
import { TypeSelectBox } from './TypeSelectBox';

export const CreatePokemonForm = ({
    values, handleChange, type1, setType1 = { setType1 }, type2, setType2, visibility
}) => {


    return (
        <Container sx={{ display: visibility }}>
            <Typography align='center' component="h2" variant="h4" >Create A Pokemon</Typography>
            <form>
                <div>
                    <TextField
                        label="Pokemon Name"
                        required
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '40ch' }}
                        inputProps={{ maxLength: 30 }}
                        onChange={handleChange('name')}
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
                        inputProps={{ maxLength: 20 }}
                        onChange={handleChange('ability1')}
                    />

                    <TextField
                        label="Ability 2"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '30ch' }}
                        inputProps={{ maxLength: 20 }}
                        onChange={handleChange('ability2')}
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
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    m
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange('height')}

                    />

                    <TextField
                        label="Weight (kg)"
                        required
                        type="number"
                        step={0.5}
                        sx={{ m: 1, width: '30ch' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    ({(values.weight * 2.2046).toFixed(1)} lbs)
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange('weight')}

                    />
                </div>

                <div>
                    <TextField
                        label="Description"
                        multiline
                        sx={{ m: 1, width: '100ch' }}
                        inputProps={{ maxLength: 250 }}
                        onChange={handleChange('description')}

                    />
                    <TextField
                        required
                        label="Image"
                        sx={{ m: 1, width: '100ch' }}
                        inputProps={{ maxLength: 2048 }}
                        onChange={handleChange('image')}

                    />

                </div>

            </form>
        </Container>

    );
}
