import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper, Typography } from "@mui/material";
import { TypeSelectBox } from '../Create Pokemon Components/TypeSelectBox';


export const SearchForm = ({ type1, setType1, type2, setType2, handleChange, handleSubmit }) => {
  return (
    <Paper sx={{ m: 1 }}>
      <Typography align='center' component="h2" variant="h4" >Search for a Pokemon</Typography>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center">
        <form onSubmit={handleSubmit}>

          <div>
            <TextField
              label="Pokemon Name"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '40ch' }}
              onChange={handleChange('name')}
            />

            <TypeSelectBox typeNum={1} type={type1} setType={setType1} required={false} />
            <TypeSelectBox typeNum={2} type={type2} setType={setType2} required={false} />

          </div>

          <div>
            <TextField
              label="Ability 1"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('ability1')}
            />

            <TextField
              label="Ability 2"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('ability2')}
            />

            <TextField
              label="HP Minimum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('hpLowerBound')}

            />
            <TextField
              label="HP Maximum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('hpUpperBound')}
            />
          </div>

          <div>
            <TextField
              label="Attack Minimum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('attackLowerBound')}
            />

            <TextField
              label="Attack Maximum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('attackUpperBound')}
            />

            <TextField
              label="Defense Minimum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('defenseLowerBound')}
            />

            <TextField
              label="Defense Maximum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('defenseUpperBound')}
            />
          </div>

          <div>
            <TextField
              label="Sp. Attack Minimum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('spatkLowerBound')}
            />

            <TextField
              label="Sp. Attack Maximum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('spatkUpperBound')}
            />

            <TextField
              label="Sp. Defense Minimum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('spdefLowerBound')}
            />

            <TextField label="Sp. Defense Maximum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('spdefUpperBound')}
            />
          </div>

          <div>
            <TextField
              label="Speed Minimum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('speedLowerBound')}
            />

            <TextField
              label="Speed Maximum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('speedUpperBound')}
            />

            <TextField
              label="Index Minimum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('indexLowerBound')}
            />

            <TextField
              label="Index Maximum"
              type="number"
              sx={{ m: 1, width: '30ch' }}
              onChange={handleChange('indexUpperBound')}
            />
          </div>

          <Button type="submit">Search</Button>

        </form>
      </Grid>
    </Paper>
  );
}