import React from "react";
import { Stack, TextField,InputAdornment } from "@mui/material";
const MuiTexfield = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row">
        <TextField label="name" variant="standard" />
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small Secondary" size="small" color="secondary" />
        <TextField
          label="Required Input Box"
          size="small"
          color="secondary"
          required
        />
        <TextField
          label="password"
          type="password"
          size="small"
          color="secondary"
          error
          required
          helperText="Password must be 8 charachaters"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label='Read Only'
         size='small'
         color='secondary'
         InputProps={{
            startAdornment:
            <InputAdornment position="start">$</InputAdornment>
            }}/>
        <TextField label='Amount' size='small' color='secondary' InputProps={{
            endAdornment:
            <InputAdornment position="end">KG</InputAdornment>
            }}/>
        <TextField label='Weight' size='small' color='secondary'  InputProps={{
            startAdornment:
            <InputAdornment position="start">KG</InputAdornment>
            }}/>
      </Stack>
    </Stack>
  );
};

export default MuiTexfield;
