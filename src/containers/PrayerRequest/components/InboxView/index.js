import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReplyIcon from '@material-ui/icons/Reply';
import {connect} from 'react-redux'
import { useRouter } from 'next/router';

const mapStateToProps = state => ({
  prayerRequest: state.prayerRequest 
})

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  container: {
    width: '60vh',
    border: '1px solid grey',
    padding: theme.spacing(3),
  },
  circle: {
    width: 40,
    height: 40,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: 510,
    height: 550,
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  header: {
    borderBottom: '1px solid #E2E2E2',
    padding: theme.spacing(2)
  }, 
  initials: {
    textAlign: 'center',
    fontSize: 'Regular 16px/19px',
    color: '#101424'
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: theme.spacing(3)
  },
  replyButton: {
    width: 127,
    height: 36,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: 4,
    border: '1px solid #E2E2E2',
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    }
  },
  text: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'regular',
    color: '#000000',
  },
  name: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101424',
  },
  content: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'regular',
    color: '#707070',
    textTransform: 'lowercase'
  },
  time: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'regular',
    color: '#707070',
    textTransform: 'lowercase',
    marginRight: 10
  },
  user: {
    marginLeft: 16
  },
  timeMore: {
    display: 'flex',
    flexDirection: 'row'
  },
  cardContent: {
    width: 467,
    height: 342,
    padding: theme.spacing(2)
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: fade('rgba(245, 245, 245)', 0.8),
      borderRadius: 6,
    },
    padding:  theme.spacing(2),
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },

}));


const InboxView = (props) => {
  const classes = useStyles();
  const router = useRouter();
  const {handleReplyMessage, prayerRequest} = props 

  const getInitials = (name) => {
    var parts = name.split(' ')
    var initials = ''
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] != '') {
        initials += parts[i][0]
      }
    }
    return initials
  }

  return (
    <div className={classes.root}>
        
        <Container className={classes.cardGrid} maxWidth="md">
          <Card className={classes.card}>
          <div className={classes.bodyContainer} >
              
            <div className={classes.body} >  
              <div className={classes.circle}  gutterBottom>
                <Typography className={classes.initials}>{getInitials(prayerRequest.requestDetail.memberId.fullName)}</Typography>
              </div>
              <div className={classes.user}>
                <Typography className={classes.name} color="textSecondary" >
                  {prayerRequest.requestDetail.memberId.fullName}
                </Typography>
                <Typography className={classes.content} color="textSecondary" gutterBottom>
                  {prayerRequest.requestDetail.memberId.email}
                </Typography>
              </div>
            </div>
            <div className={classes.timeMore}>
              <Typography className={classes.time} color="textSecondary" gutterBottom>
                5:08 PM (8 hours ago)
              </Typography>
              
              <MoreVertIcon />
            </div>
          </div>
            <div className={classes.cardContent}>
              <Typography gutterBottom className={classes.text}>
                Hello  {prayerRequest.requestDetail.memberId.fullName},
              </Typography>
              <Typography gutterBottom  className={classes.text}>
                {prayerRequest.requestDetail.body}
              </Typography>
            </div>
            <CardActions className={classes.button}>
              {prayerRequest.requestDetail.answered == false && 
                <Button className={classes.replyButton} onClick={handleReplyMessage} startIcon={<ReplyIcon />}>
                
                  Reply
               </Button>
              }
             
            </CardActions>
          </Card>
        </Container>
    </div>
  );
};

export default connect(mapStateToProps)(InboxView);
