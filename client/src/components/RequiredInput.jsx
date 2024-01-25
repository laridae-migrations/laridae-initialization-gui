import {Grid, TextField} from '@mui/material';

export default function RequiredInput({label, type, form}) {
  const { register, formState } = form
  const { errors } = formState

  return (
    <>
      <Grid item md={11.5}>
        <TextField 
          label={label} 
          type={type} 
          {...register(type, {
            required: `${label} is required`
          })}
          error={!!errors[type]}
          helperText={errors[type]?.message}
          fullWidth 
          required/>
      </Grid>
    </>
  )
}
