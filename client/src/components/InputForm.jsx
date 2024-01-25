import { Button, CardContent, Typography, Grid, FormControl, Tooltip, IconButton, Box} from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import AwsInfoForm from './AwsInfoForm'
import GithubInfoForm from './GithubInfoForm'
import React from 'react'

export default function InputForm() {
  const exampleJSON = {
    "REGION": "us-east-1", 
    "IMAGE_NAME": "todo-test-app", 
    "APP_CLUSTER": "todo-test-app-cluster",
    "APP_TASK_DEFINITION_FAMILY": "todo-test-app-task-definition",
    "APP_IMAGE_URL": "public.ecr.aws/m8a3j7h3/todo-test-app",
    "APP_SERVICE": "todo-test-app-service",
    "APP_DATABASE_URL_ENVIRONMENT_VARIABLE": "DATABASE_URL",
    "DATABASE_URL": "postgresql://user:password@hostname/region",
    "DATABASE_SECURITY_GROUP": "sg-012ccfea25537bcb3",
    "SUBNET": "subnet-0032bde34aff97563",
    "VPC_ID": "vpc-06b34f632d5a20c3b"
  }
  const tooltipTextAws = `Example input: \t\n ${JSON.stringify(exampleJSON, null, '\t\n')}`
  const tooltipTextGithub = `Secrets will be stored at '"https://api.github.com/repos/$REPO_NAME/actions/secrets/$SECRET_NAME"' `

  const [currentForm, setCurrentForm] = React.useState("aws")

  return (
    <CardContent>
      <Grid container>
        <Box sx={{ m: 1 }}>
          <Typography variant="h5" style={{ color: '#495057'}}>
            {currentForm == 'aws' ? 'Your AWS info' : 'Your GitHub Info'}
          </Typography>
        </Box>
        
        <Tooltip title={currentForm == 'aws' ? tooltipTextAws : tooltipTextGithub} arrow>
          <IconButton >
            <HelpIcon style={{ fontSize: 'medium' }}/>
          </IconButton>
        </Tooltip>
        
        <form>
          <FormControl style={{ height: '300px', overflowY: 'auto' }}>
            {currentForm == 'aws' ? <AwsInfoForm /> : <GithubInfoForm />}
            
          </FormControl>

          {/* <div className="buttons">
            {/* <Button variant="contained" 
                    style={{ backgroundColor: '#EB6D46', margin: '10px', width: '150px' }}
                    disabled={false}>Back</Button>
            <Button variant="contained" 
                    style={{ backgroundColor: '#EB6D46', margin: '10px', width: '150px' }}
                    disabled={false}>Next</Button> */}
            {/* <Button variant="contained" 
                    style={{ backgroundColor: '#EB6D46', margin: '10px'}}
                    disabled={false}>Provision AWS Infrastructures</Button> */}
          {/* </div> */}

        </form>
      </Grid>
    </CardContent>
  )
}