import { Grid, TextField } from '@mui/material';

export default function AwsInfoForm() {
  return (
    <Grid container spacing={2}>
      <Grid item md={10}>
        <TextField label='Region' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='Image Name' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='App Cluster' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='App Task Definition Family' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='App Image URL' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='App Service' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='App Database URL ' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='Database URL' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='Database Security Group' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='Subnet' fullWidth required/>
      </Grid>
      <Grid item md={10}>
        <TextField label='VPC ID' fullWidth required/>
      </Grid>
    </Grid>
  );
}

