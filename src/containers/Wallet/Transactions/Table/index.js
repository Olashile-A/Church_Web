import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import moment from 'moment';


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

export default function DenseTable(props) {
  const classes = useStyles();
  const {allTransactions} = props;
  console.log('props', props);
  
 let count = 0;
  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.tableHeadCell}>S/N</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Date</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Reference</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Payment Method</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Mode</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Amount</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allTransactions.map((row) => (
            <TableRow key={row._id} >
              <TableCell className={classes.tableCell} component="th" scope="row">
                {count = 0 ? count : count + 1 }
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{moment(row.date).format('DD MMM YYYY')}</TableCell>
              <TableCell align="right" className={classes.tableCell}>XX{row.txRef.substr(29,32)}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.type}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.modeOfPayment}</TableCell>
              <TableCell align="center" className={classes.tableCell}>
                {row.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </TableCell>
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
