import { Card, Grid, CardContent } from '@mui/material';
import SideLogo from './SideLogo';
import AwsForm from './AwsForm';

export default function MainBox() {
  return (
    <div className="main" style={{ maxWidth: '1000px', height: '650px' }}>
      <Grid container spacing={20} className="container">
        <SideLogo />
        
        <Grid item md={8.9} xs={6} className="content">
          <Card className="card-custom pb-4">
            <CardContent>
              <AwsForm />
            </CardContent>
          </Card>
        </Grid>
      
      </Grid>
    </div>
  );
}
