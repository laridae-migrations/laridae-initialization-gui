import { Card, Grid } from '@mui/material';
import InputForm from './InputForm';
import SideLogo from './SideLogo';

export default function MainBox() {
  return (
    <div className="main" style={{ maxWidth: '1000px', height: '610px' }}>
      <Grid container spacing={20} className="container">
        <SideLogo />
        
        <Grid item md={9} className="content">
          <Card className="card-custom pb-4">
            <InputForm />
          </Card>
        </Grid>
      
      </Grid>
    </div>
  );
}
