import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 75,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: 5,
    opacity: 1,
    marginBottom: 8
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 75
  },
  text: {
    letterSpacing: 0.53,
    color: '#616781',
    opacity: 1,
    fontSize: 12,
  },
  textContainner: {
  },
  number: {
    fontWeight: 'bold',
    color: '#101424',
    opacity: 1,
    fontSize: 20,
  },
  icon: {
    color: '#FD0E31',
    marginTop: 10,
    width: 35,
    height: 35,
  },
  nairaIcon: {
    color: '#FD0E31',
    marginTop: 10,
    marginLeft: 10,
    width: 35,
    height: 40,
  },
  contentContainner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:  'space-between'
  }
}));




export default function Totals(props) {
  const classes = useStyles();
  const {className} = props;

    return (
        <div>
            <Card className={classes.root}>
                
                <CardContent className={classes.contentContainner}>
                    <div>
                        <Typography className={classes.text}> TOTAL APP MEMBERS</Typography>
                        <Typography className={classes.number}> 560 </Typography>
                    </div>
                        <PeopleOutlineIcon  className={classes.icon}/>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent className={classes.contentContainner}>
                    <div>
                        <Typography className={classes.text}> TOTAL CONTRIBUTION</Typography>
                        <Typography className={classes.number}> 250,000,000 </Typography>  
                    </div>
                    <Icon className={classes.nairaIcon}>₦</Icon>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent className={classes.contentContainner}>
                    <div>
                        <Typography className={classes.text}> TOTAL EVENTS</Typography>
                        <Typography className={classes.number}> 54 </Typography>
                    </div>
                    <div>
                        <CalendarTodayIcon className={classes.icon} />
                    </div>
                </CardContent>
            </Card>

            <Card className={classes.root}>
                <CardContent className={classes.contentContainner}>
                    <div>
                        <Typography className={classes.text}> NEW MEMBERS</Typography>
                        <Typography className={classes.number}> 21 </Typography>
                    </div>
                    <div>
                        <PersonAddOutlinedIcon  className={classes.icon}/>
                    </div>
                </CardContent>
            </Card>
        </div>
       
    );
}