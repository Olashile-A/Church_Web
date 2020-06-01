import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Table from './Table';
import FilterModal from './Table/FilterTableModal';
import { useRouter } from 'next/router';

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
    padding: theme.spacing(3, 5)
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#101424',
    // padding: theme.spacing(2),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    borderBottom: '1px solid #E2E2E2',
    // background: '#FCFCFC 0% 0% no-repeat padding-box'
  },
  headerTwo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0, 2, 0),
    borderBottom: '1px solid #E2E2E2',
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



const AdminUser = () => {
  const classes = useStyles();
  const router = useRouter();
  const [drop, setDrop] = React.useState(5);
  const [open, setOpen] = React.useState(false);

  const handleAddNewStaff = () => {
    router.push('/dashboard/admin-user/admin-add-staff')
  }

  const handleFilter = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const handleDropdownChange = () => {
    setDrop(drop)
  }

  return (
    <div className={classes.root}>
      <Paper >
        <div className={classes.header}>
            <Typography className={classes.headerText}> Admin Members</Typography>
            <Button className={classes.taskButton} onClick={handleAddNewStaff}> Add new Staff</Button>
        </div>
        <div className={classes.headerTwo}>
          <div className={classes.subHeader}>
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
        <Table />
        <FilterModal
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
        />
      </Paper>
    </div>
  );
};

export default AdminUser;
