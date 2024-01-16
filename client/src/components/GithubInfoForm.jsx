import { Grid, TextField } from '@mui/material';

export default function GithubInfoForm() {
  return (
    <Grid container spacing={2}>
      <Grid item md={10}>
        <TextField label='Owner name' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='Repo name' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='Github Token' fullWidth required/>
      </Grid>
    </Grid>
  );
}

