import React, {useEffect} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Table from './Table';
import DownloadReport from './Table/DownloadReportModal';
import FilterModal from './Table/FilterTableModal';
import axios from 'axios';
import { endpoint } from '../../../../endpoint';
import { config } from '../../../../config';

const count = [
    {
        value: '5',
        label: '5',
    },
    {
        value: '10',
        label: '10',
    },
    {
        value: '20',
        label: '20',
    },
    {
        value: '25',
        label: '25',
    },
];


const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2)
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3, 2, 1 ),
    borderBottom: '1px solid grey',
    background: '#FCFCFC 0% 0% no-repeat padding-box'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#d4d4d4', 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.8),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '95%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    paddingTop: 4
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8D8D8D'
  },
  inputRoot: {
    color: 'black'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    // border: '1px',
    borderRadius: 6,
    // '&:active': {
    //     backgroundColor: fade('#d4d4d4', 0.8),
    // },
  },
  subHeaderTwo: {
    display: 'flex',
    flexDirection: 'row',
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%'
  },
  taskButton: {
    width: 131,
    height: 40,
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 6,
    marginLeft: theme.spacing(5),
    color: '#FFFFFF',
    fontSize: 10,
    border: '1px solid #D9D9D9'
  },
  dropButton: {
    width: 120,
    height: 40,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: 6,
    marginRight: theme.spacing(5),
    fontSize: 10,
    border: '1px solid #D9D9D9'
  },
  textfield: {
    width: 67,
    height: 10
  },
  text: {
    margin: theme.spacing(1, 3),
    fontSize: 14,
    fontWeight: 'regular',
    color: '#000000'
  }

}));



const Transactions = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const [drop, setDrop] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [allTransactions, setAllTransactions] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let token = sessionStorage.getItem('token')
      
      if (token) {
        try {
          let headers = {
            'publicToken' : config.publicToken,
            'x-auth-token': token
          }
          let transaction = await axios.get(endpoint.getAllTransactionHistory, 
            {"headers" : headers}
          )
          console.log('transaction', transaction);
          setAllTransactions(transaction.data.transaction)
        } catch (error) {
          console.log('error', error);
          console.log('error', error.response);
        }
      }
    }

    fetchData();
  }, [])

  const handleDownloadReport = () => {
    setIsOpen(true)
  }

  const handleDropdownChange = () => {
    setDrop(drop);
  };
  const handleFilter = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setIsOpen(false);
    setOpen(false)
  };

  return (
    <div className={classes.root}>
       <div className={classes.header}>
            <div className={classes.subHeader}>
              <Button className={classes.taskButton} onClick={handleDownloadReport}> Download Report</Button>
              <Typography className={classes.text}> Show </Typography>
              <TextField
                id="outlined-select-city"
                select
                className={classes.textfield}
                value={drop}
                onChange={handleDropdownChange}
                variant="outlined"
                >
                {count.map((option) => (
                    <MenuItem key={option.value} value={option.value} style={{ height: 20}}>
                    {option.label}
                    </MenuItem>
                ))}
              </TextField>
              <Typography className={classes.text}> Entries </Typography>
            </div>
            <div className={classes.subHeaderTwo}>
              <Button className={classes.dropButton} startIcon={<FilterListIcon />} onClick={handleFilter}> Filter Search</Button>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
        </div>
      <Table 
        allTransactions={allTransactions}
      />
      <DownloadReport
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClose={handleClose}
      />
      <FilterModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Transactions;
