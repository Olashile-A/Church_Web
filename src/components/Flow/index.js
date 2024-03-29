import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
 container: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  // width: '50%'
},
subContainers: {
  display: 'flex',
  flexDirection: 'row',
},
 subContainer: {
  display: 'flex',
  flexDirection: 'row',
  paddingTop: theme.spacing(2)
},
text: {
  marginLeft: theme.spacing(2),
  color: '#FD0E31'
},
icon: {
  color: '#FD0E31'
}
}));

const steps = ['Account details', 'Details Confirmation', 'OTP Verification' , 'Completed'];


export default function Flow() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.subContainers}>
        <FiberManualRecordIcon className={classes.icon}/>
        <Typography className={classes.text}> Account Details</Typography>
      </div>
      <div className={classes.subContainer}>
        <FiberManualRecordIcon className={classes.icon}/>
        <Typography className={classes.text}>Details Confirmation</Typography>
      </div>
      <div className={classes.subContainer}>
        <FiberManualRecordIcon className={classes.icon}/>
        <Typography className={classes.text}> OTP Verification </Typography>
      </div>
      <div className={classes.subContainer}>
        <FiberManualRecordIcon className={classes.icon}/>
        <Typography className={classes.text}> Completed </Typography>
      </div>
    </div>
  );
}