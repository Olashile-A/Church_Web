import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: '100%',
  },
  tableCell: {
    fontSize: 12,
    fontWeight: 'regular',
    color: '#101424'
  },
  tableHeadCell: {
    fontSize: 11,
    fontWeight: 'regular',
    color: '#616781'
  },
  button:{
    background: '#FD0E31 0% 0% no-repeat padding-box',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'regular',
    color: '#FFFFFF'
  }
});

function createData( number, date, reference, paymentMethod, mode, amount) {
  return { number, date, reference, paymentMethod, mode, amount };
}


const rows = [
  createData(1, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(2, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(3, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(4, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(5, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(6, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(7, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(8, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(9, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(10, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(11, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(12, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(13, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(14, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
  createData(15, '18th May 2020', '#CL0056XLK', 'Credit Card', 'Withdrawal', '$40,000.00'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.tableHeadCell}>S/N</TableCell>
            <TableCell align="right" className={classes.tableHeadCell}>Date</TableCell>
            <TableCell align="right" className={classes.tableHeadCell}>Reference</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Payment Method</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Mode</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Amount</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell className={classes.tableCell} component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.date}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.reference}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.paymentMethod}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.mode}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.amount}</TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Button className={classes.button}>
                    View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
