import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const types = [
  'Normal',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Psychic',
  'Bug',
  'Rock',
  'Ghost',
  'Dark',
  'Dragon',
  'Steel',
  'Fairy'
];

export const TypeSelectBox = ({ typeNum, type, setType, required }) => {

  const handleChange = (event) => {
    setType(event.target.value)
  };

  if (typeNum === 1) {
    return (
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Type {typeNum}</InputLabel>

        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={type}
          onChange={handleChange}
          label="Type"
          required={required}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {types.map((t) => (
            <MenuItem
              key={t}
              value={t}
            >
              {t}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
    )
  }

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Type {typeNum}</InputLabel>

      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={type}
        onChange={handleChange}
        label="Type"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {types.map((t) => (
          <MenuItem
            key={t}
            value={t}
          >
            {t}
          </MenuItem>
        ))}

      </Select>
    </FormControl>

  );
}