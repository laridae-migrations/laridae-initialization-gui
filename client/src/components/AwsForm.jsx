import { Grid, Box, Typography, Tooltip, IconButton, FormControl, Button} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { useForm } from "react-hook-form";
import RequiredInput from './RequiredInput';

export default function AwsForm() {
  const form = useForm({
    defaultValues: {
        REGION: '',
        IMAGE_NAME: '',
        APP_CLUSTER: '',
        APP_TASK_DEFINITION_FAMILY: '',
        APP_IMAGE_URL: '',
        APP_SERVICE: '',
        APP_DATABASE_URL_ENVIRONMENT_VARIABLE: '',
        DATABASE_URL: '',
        DATABASE_SECURITY_GROUP: '',
        SUBNET: '',
        VPC_ID: '',
        ACCESS_KEY: '',
        SECRET_KEY: '',
      }
    }
  )

  const { handleSubmit } = form

  const onSubmit = (formData) => {
    console.log(formData)
  }

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
    "VPC_ID": "vpc-06b34f632d5a20c3b",
    "ACCESS_KEY": "AKIAIOSFODNN7EXAMPLE",
    "SECRET_KEY": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
  }
  const tooltipText = `Example input: \t\n ${JSON.stringify(exampleJSON, null, '\t\n')}`

  return (
    <Grid container>
      <Box sx={{ m: 1 }}>
        <Typography variant="h5" style={{ color: '#495057'}}>
          Your AWS info        
          <Tooltip title={tooltipText} arrow>
            <IconButton >
              <HelpIcon style={{ fontSize: 'medium' }}/>
            </IconButton>
          </Tooltip>
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl style={{ height: '300px', overflowY: 'auto' }}>
          <Grid container spacing={2}>
            <RequiredInput label='Region' type='REGION' form={form}/>
            <RequiredInput label='Image Name' type='IMAGE_NAME' form={form} />
            <RequiredInput label='App Cluster' type='APP_CLUSTER' form={form} />
            <RequiredInput label='App Task Definition Family' type='APP_TASK_DEFINITION_FAMILY' form={form} />
            <RequiredInput label='App Image URL' type='APP_IMAGE_URL' form={form} />
            <RequiredInput label='App Service' type='APP_SERVICE' form={form} />
            <RequiredInput label='App Database URL' type='APP_DATABASE_URL_ENVIRONMENT_VARIABLE' form={form} />
            <RequiredInput label='Database URL' type='DATABASE_URL' form={form} />
            <RequiredInput label='Database Security Group' type='DATABASE_SECURITY_GROUP' form={form} />
            <RequiredInput label='Subnet' type='SUBNET' form={form} />
            <RequiredInput label='VPC ID' type='VPC_ID' form={form} />
            <RequiredInput label='Access Key ID' type='ACCESS_KEY' form={form} />
            <RequiredInput label='Secret Access Key' type='SECRET_KEY' form={form} />
          </Grid>
        </FormControl>

        <Box sx={{ m: 1 }}>
          <Button type='submit' variant="contained" style={{ backgroundColor: '#EB6D46', margin: '10px'}}>
            Provision AWS Infrastructures
          </Button>
        </Box>
      </form>
    </Grid>
  );
}

