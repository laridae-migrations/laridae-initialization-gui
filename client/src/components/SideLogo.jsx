import { Grid } from "@mui/material"

export default function SideLogo() {
  return (
    <Grid item md={3}>
    <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
      <img src="./logo.png" alt="Laridae Logo" id="laridae-logo"/>
    </div>
  </Grid>
  )
}