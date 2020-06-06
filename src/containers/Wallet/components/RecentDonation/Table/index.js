import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: 'inherit',
    height: 325
  },
  tableCell: {
    fontSize: 11
  },
  tableHeadCell: {
    fontSize: 12
  },
});


export default function DenseTable(props) {
  const classes = useStyles();
  const {recentTransaction} = props;

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadCell} align="left">Date</TableCell>
            <TableCell className={classes.tableHeadCell} align="center">Donor</TableCell>
            <TableCell className={classes.tableHeadCell} align="center">Amount&nbsp;(₦)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentTransaction.map((row) => (
            <TableRow key={row._id} >
              <TableCell className={classes.tableCell} component="th" scope="row">
                {moment(row.date).format('DD MMM YYYY')}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">{row.memberId.fullName}</TableCell>
              <TableCell className={classes.tableCell} align="center">
                {row.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
