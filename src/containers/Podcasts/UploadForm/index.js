import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from "next/router";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from '@material-ui/core/Checkbox';
import Alert from "@material-ui/lab/Alert";
import axios from 'axios';
import { endpoint } from '../../../../endpoint';
import { config } from '../../../../config';
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
     padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    border: 0
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#101424',
    padding: theme.spacing(1,2),
    borderBottom: '1px solid #E2E2E2',
  },
  card: {
    width: 398,
    height: 450,
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  textField: {
    width: '100%',
    height: 40,
    margin: '9px 0px'
  },
  button: {
    marginTop: theme.spacing(5),
    width: 366,
    height: 35,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: '15',
    color: '#FFFFFF',
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    }
  },
  formControlTwo: {
    display: 'flex',
    flexDirection: 'row'
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing(1)   
  },
  input: {
    display: "none"
  },
  imgRoot: {
    display: 'flex',
    border: "1px solid #CCCCCC",
    borderRadius: 5,
    justifyContent: 'space-between',
    width: 364,
    height: 50,
  },
  imgButton: {
    width: 100,
    height: 48,
    background: '#FDFDFD 0% 0% no-repeat padding-box',
    borderRadius: '0px 4px 4px 0px',
    boxShadow: 'none',
    borderLeft: '1px solid #CCCCCC'
  },
  checkForm: {
    width: 21,
    height: 22,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #CCCCCC',
    borderRadius: 5
  }
}));

const UploadForm = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const fileInput = useRef(null)
  
  const [value, setValue] = React.useState({
    resource: "audio",
    checked: false,
    fileName: "",
    upload: "",
    uploadFIle: "",
    dates: ""
  });

  const [ alert, setAlert ] = React.useState({
    err: "",
    msg: "",
    isLoading: false
  })

  const handleChange = name => e => {
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  const handleChanges = (event) => {
    setValue({ ...value, [event.target.name]: event.target.checked });
  };

  const handleImage = async event => {
    let file = event.target.files[0];
    if (typeof file !== "undefined") {
      setValue({
        fileName: event.target.files[0].name,
        uploadFIle: file
      });
    } 
  };

  const handleUpload = async() => {
    // e.preventDefault();

    setAlert({
      err: "",
      msg: "",
      isLoading: true
    })

    if (value.date === "mm/dd/yyyy") {
      setAlert({
        err: "date",
        msg: "date is required"
      });
      return;
    }

    if (value.upload === "") {
      setAlert({
        err: "others",
        msg: "please upload an audio/video"
      });
      return;
    }

    


    let token = sessionStorage.getItem('token')
      
    if (token) {
      try {
        const convertedDate = moment(value.dates).format(); 
        let uploadFile = value.uploadFIle
        let resources = value.resource
        console.log('date', convertedDate);
        console.log('date', uploadFile);
        console.log('date', resources);

        let formData = new FormData();
        formData.append("file", uploadFile)
        formData.append("publishedDate", convertedDate)
        formData.append("type", resources)
        for (var valuee of formData.values()) {
          console.log(valuee); 
       }

       const options = {
         url: endpoint.createResource,
         method: "POST",
         headers: { 
          'publicToken' : config.publicToken,
          'x-auth-token': token,
          "Access-Control-Allow-Origin": "*"
         },
         data: formData
       }

        let createResource = await axios(options)
        console.log('resource', createResource);
        setAlert({
          isLoading: false,
        })
        router.push('/dashboard/podcasts')

      }catch(error) {
        console.log('error', error);
        setAlert({
          isLoading: false,
          err: "others",
          msg: error.response.data
        })
        console.log('error', error.response);
      }
    }

  };

  const handleBack = () => {
    router.push('/dashboard/podcasts')
  };

  const dates = {
    someDate: new Date().toISOString().substring(0, 10)
  };
console.log('val', value);

  
  return (
    <div className={classes.root}>
        <Container maxWidth="sm">
        <Button className={classes.backButton} onClick={handleBack} startIcon={<ArrowBackIcon />}>
            Back
        </Button>
        <Card className={classes.card}>
          <Typography className={classes.headerText}> Upload New Podcast </Typography>
            {alert.err === "others" && <Alert severity="warning">{alert.msg}</Alert>}
          <CardContent>
            <Grid container spacing={1} justify='center'>
              
              <Grid item  xs={12} >
                <label htmlFor="contained-file">
                  <div>
                    <Typography> Select File </Typography>
                  </div>
                </label>
                <div id="contained-file" className={classes.imgRoot}>
                  <div className={classes.box}>
                    <Typography className={classes.text}> {value.upload !== "" && (value.fileName)} </Typography>
                  </div>
                  <input
                    className={classes.input}
                    id="contained-button-file"
                    onChange={handleImage}
                    value={value.upload}
                    multiple
                    type="file"
                    accept=".mp4,.mp3,.jpeg,.jpg"
                    ref={fileInput}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      size="small"
                      className={classes.imgButton}
                    >
                      select
                    </Button>
                  </label>
                </div>
              </Grid>
              <Grid item  xs={12} >
                <FormControl component="fieldset" className={classes.formControlTwo}>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    value={value.resource}
                    onChange={handleChange("resource")}
                    defaultValue="top"
                  >
                  <FormControlLabel
                    value="audio"
                    control={<Radio color="primary" checked={value.resource === 'audio'}/>}
                    label="Audio Resource"
                    labelPlacement="start"
                  />

                  <FormControlLabel
                    value="video"
                    control={<Radio color="primary" checked={value.resource === 'video'}/>}
                    label="Video Resource"
                    labelPlacement="start"
                  />
                  </RadioGroup>
                </FormControl>

              </Grid>
              <Grid item  xs={12} >
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Publish Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  // value={value.dates}
                  onChange={handleChange("dates")}
                  defaultValue={dates.someDate}
                  className={classes.textField}
                 
                />
              </Grid>
              <Grid item xs={12} >
                <FormControlLabel
                  control={
                    <Checkbox checked={value.checked}
                    onChange={handleChanges} 
                    name="checked"
                    color="primary"
                  />}
                  label="Publish Immediately"
                />
              </Grid>
              <Grid item xs={12} >
                <Button disabled={alert.isLoading} className={classes.button} onClick={handleUpload}>
                  {alert.isLoading ? <CircularProgress size="small" className={classes.progress}/> : "Upload Resource"}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default UploadForm;
