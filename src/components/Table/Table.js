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
    height: 205
  },
});

function createData( date, donor, donation, amount) {
  return { date, donor, donation, amount };
}


const rows = [
  createData('7th Aug, 2020', 'Musa Saka', 'CardPayment,Exhault Church', '4,000.00'),
  createData('7th Aug, 2020', 'Musa Saka', 'CardPayment,Exhault Church', '4,000.00'),
  createData('7th Aug, 2020', 'Musa Saka', 'CardPayment,Exhault Church', '4,000.00'),
  createData('7th Aug, 2020', 'Musa Saka', 'CardPayment,Exhault Church', '4,000.00'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Donor</TableCell>
            <TableCell align="center">Donation</TableCell>
            <TableCell align="right">Amount&nbsp;(₦)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.donor}</TableCell>
              <TableCell align="right">{row.donation}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// function createData( date, donor, donation, amount) {
//   return { date, donor, donation, amount };
// }

// const rows = [
//   createData('7th Aug, 2020', 'Musa Saka', 'CardPayment,Exhault Church', 4000),
//   createData('7th Aug, 2020', 'Musa Saka', 'CardPayment,Exhault Church', 4000),
//   createData('7th Aug, 2020', 'Musa Saka', 'CardPayment,Exhault Church', 4000),
//   createData('7th Aug, 2020', 'Musa Saka', 'CardPayment,Exhault Church', 4000),
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function CustomizedTables() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>DATE</StyledTableCell>
//             <StyledTableCell align="right">DONOR</StyledTableCell>
//             <StyledTableCell align="right">DONATION</StyledTableCell>
//             <StyledTableCell align="right">AMOUNT</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
