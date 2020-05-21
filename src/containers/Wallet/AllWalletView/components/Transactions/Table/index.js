import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: 'inherit',
    height: 325
  },
});

function createData( date, donor, amount) {
  return { date, donor, amount };
}


const rows = [
  createData('7th Aug, 2020', 'Musa Saka', '4,000.00'),
  createData('7th Aug, 2020', 'Musa Saka', '4,000.00'),
  createData('7th Aug, 2020', 'Musa Saka', '4,000.00'),
  createData('7th Aug, 2020', 'Musa Saka', '4,000.00'),
  createData('7th Aug, 2020', 'Musa Saka', '4,000.00'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="center">Donor</TableCell>
            <TableCell align="center">Amount&nbsp;(₦)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.donor}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
