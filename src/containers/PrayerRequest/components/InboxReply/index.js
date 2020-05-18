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
import { Paper, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReplyIcon from '@material-ui/icons/Reply';
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DeleteIcon from '@material-ui/icons/Delete';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2),
  },
  container: {
    border: '1px solid grey',
    padding: theme.spacing(3),
  },
  cardGrid: {
    // display: 'flex',
    // justifyContent: 'center',
  },
  card: {
    width: 510,
    height: 580,
    border: '1px solid #E2E2E2',
    borderRadius: 5
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 500,
    height: 36,
    padding: 10
  },
  attach: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 480,
    height: 39,
    padding: 10,
    background: '#F7F8FA 0% 0% no-repeat padding-box',
    border: '1px solid #EDEFF0',
    borderRadius: 4,
    marginLeft:  10
  },
  replyButton: {
    width: 116,
    height: 36,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    border: '1px solid #E2E2E2',
    color: 'white',
    '&:hover': {
      background: '#FD0E31 0% 0% no-repeat padding-box',
      color: '#EEEEE'
    },
  },
  iconButton: {
    width:  14,
    height: 18,
    marginLeft: 16
  },
  text: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'regular',
    color: '#000000',
  },
  bibleText: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'regular',
    color: '#000000',
    margin: '0px 16px'
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
    textTransform: 'lowercase',
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
    marginLeft: 16,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: 4,
    width: 171,
    height: 30,
    padding: 3
  },
  cardContent: {
    width: 467,
    height: 330,
    padding: theme.spacing(2)
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding:  theme.spacing(2),
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width:  14,
    height: 18,
  },
  footerContainer: {
    marginTop: theme.spacing(8)
  },
  topBack: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 510,
    padding: theme.spacing(1, 0)
  },
  inboxButton: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #E2E2E2',
    borderRadius: 4,
    width:  108,
    height: 36,
    color: '#101424',
    fontSize: 12,
  },
  backButton:{
    background: 'none 0% 0% no-repeat padding-box',
    borderRadius: 4,
    width:  80,
    height: 36,
    fontSize: 14,
    color: '#101424'
  }
}));


const InboxReply = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
        <Container className={classes.cardGrid} maxWidth="sm">
          <div className={classes.topBack}>
              
            <Button className={classes.backButton} startIcon={<ArrowBackIcon />}>
              Back
            </Button>
            <Button className={classes.inboxButton}>
              View Inbox
            </Button>
          </div>

          <Card className={classes.card}>
          <div className={classes.bodyContainer} >
              
            <div className={classes.body} >  
              <div  >
                <ReplyIcon />
              </div>
              <div className={classes.user}>
                <Typography className={classes.content}  gutterBottom>
                  mayowaadebowale@gmail.com
                </Typography>
              </div>
            </div>
            <Typography className={classes.time} color="textSecondary" gutterBottom>
              + Cc
            </Typography>
          </div>
            <div className={classes.cardContent}>
              <Typography gutterBottom className={classes.text}>
                Hello  Mayowa,
              </Typography>
              <Typography gutterBottom  className={classes.text}>
                We will be having an online meetup for IDF Lagos tomorrow, 
                Friday 15th May, at 12pm (noon) Nigerian Time/West African Time Zone.
                This will be hosted by one of our members, Richard Tamunotonye.
              </Typography>
              <Typography gutterBottom className={classes.text}>
                If you are able to join us, please do. The meeting will be held on Zoom. 
                Details are below:
              </Typography>
              <Typography className={classes.text}>
                Time: 12pm (noon)
              </Typography><Typography gutterBottom className={classes.text}>
                Zoom Link: https://us02web.zoom.us/j/82871107907
              </Typography>
              <Typography gutterBottom className={classes.text}>
                Discussion Thread: https://www.interaction-design.org/events/idf-ux-meetups/becoming-a-world-class-designer-may-15th-2020-1
              </Typography>
              <Typography gutterBottom className={classes.text}>
                Best regards, Mayowa
              </Typography>
            </div>
            <div className={classes.footerContainer}>
              <div className={classes.attach}>
                <div className={classes.button}>
                  <PictureAsPdfIcon /> 
                  <Typography className={classes.bibleText}>Bible verse</Typography>
                </div>
                <div className={classes.button}>
                  <Typography className={classes.bibleText}>
                    123KB
                  </Typography>
                  <DeleteIcon className={classes.icon} />
                  
                </div>
                
              </div>
              <div className={classes.cardAction}>
                <div className={classes.button}>
                  <Button
                   className={classes.replyButton}
                   startIcon={<SendIcon />}
                   >
                      Send
                  </Button>
                  <IconButton className={classes.iconButton}>
                    <ImageIcon  />
                  </IconButton>
                  <IconButton  className={classes.iconButton}>
                      <AttachFileIcon  />
                  </IconButton>
                </div>
                <IconButton className={classes.icon}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
           
          </Card>
        </Container>
    </div>
  );
};

export default InboxReply;
