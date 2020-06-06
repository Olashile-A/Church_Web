import React from "react"
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles"
import InputAdornment from '@material-ui/core/InputAdornment';
import RemoveCircle from "@material-ui/icons/RemoveCircle";

const state = [
  {
    value: 'null',
    label: 'Select',
  },
  {
    value: '1',
    label: 'Lagos',
  },
  {
    value: '2',
    label: 'Oyo',
  },
  {
    value: '3',
    label: 'Edo',
  },
];

const useStyles = makeStyles(theme => ({
	root: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 8
  },
  textField: {
    marginRight: 8,
    width: '20%'
  },
  textFieldM: {
    marginRight: 8,
    width: '40%',
  },
  textFieldM: {
    marginRight: 8,
    width: '30%',
    // borderLeft: '1px solid #FD0E31'
  },
  input: {
    borderLeft: '2px solid #FD0E31'
  }
}))
const MultipleForm = ({ index, handleValue, handleRemove, total, value }) => {
	const classes = useStyles()


	const handleChanges = (key) => event => {

		console.log("index, key, event.target.valu", index, key, event.target.value);
		

		handleValue(index, key, event.target.value);
	}


	return (
    <div className={classes.root}>
        <TextField
          variant="outlined"
          required
          // fullWidth
          id="description"
          value={value.description}
          onChange={handleChanges("description")}
          label="Description"
          name="description"
          className={classes.textFieldM}
          InputProps={{
              className: classes.input,
          }}
        />
        <TextField
          variant="outlined"
          required
          // fullWidth
          id="status"
          select
          value={value.status}
          onChange={handleChanges("status")}
          label="Status"
          name="status"
          className={classes.textField}
        >
          {state.map((option) => (
              <MenuItem key={option._id} value={option._id}>
              {option.label}
              </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="outlined"
          required
          // fullWidth
          id="due_date"
          type="date"
          value={value.date}
          onChange={handleChanges("date")}
          label="Due Date"
          name="due_date"
          className={classes.textField}
        />
        <TextField
          variant="outlined"
          required
          // fullWidth
          id="assigned"
          select
          value={value.assigned}
          onChange={handleChanges("assigned")}
          label="Assigned"
          name="assigned"
          className={classes.textField}
        >
          {state.map((option) => (
            <MenuItem key={option._id} value={option._id}>
            {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="outlined"
          required
          // fullWidth
          id="note"
          value={value.note}
          onChange={handleChanges("note")}
          label="Note"
          name="note"
          className={classes.textField}
        />
        <TextField
          variant="outlined"
          required
          // fullWidth
          id="timeline"
          value={value.timeline}
          onChange={handleChanges("timeline")}
          label="Timeline"
          name="timeline"
          className={classes.textFieldT}
        />
      {total > 1 && (
        <Grid item xs={1}>
          <IconButton
            variant="outlined"
            onClick={() => handleRemove(index)}
            size="large"
            color="primary"
          >
            <RemoveCircle />
          </IconButton>
        </Grid>
      )}
    </div>
  );
}


export default MultipleForm;


