import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

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

function createData( number, date, fullName, email, id, role, lastSeen) {
  return { number, date, fullName, email, id, role, lastSeen };
}


const rows = [
  createData(1, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Pastor', '2:00 AM (2 mins ago)'),
  createData(2, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Accountant', '2:00 AM (2 mins ago)'),
  createData(3, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Usher', '2:00 AM (2 mins ago)'),
  createData(4, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Pastor', '2:00 AM (2 mins ago)'),
  createData(5, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Usher', '2:00 AM (2 mins ago)'),
  createData(6, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Pastor', '2:00 AM (2 mins ago)'),
  createData(7, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Usher', '2:00 AM (2 mins ago)'),
  createData(8, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Pastor', '2:00 AM (2 mins ago)'),
  createData(9, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Usher', '2:00 AM (2 mins ago)'),
  createData(10, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Pastor', '2:00 AM (2 mins ago)'),
  createData(11, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Usher', '2:00 AM (2 mins ago)'),
  createData(12, '18th May 2020', 'Musa Saka', 'm.saka@gmail.com', 'CL001EXLT', 'Pastor', '2:00 AM (2 mins ago)'),
];

export default function DenseTable() {
  const classes = useStyles();
  const router = useRouter();

  const handleView = () => {
    router.push('/dashboard/register-user/registered-user-view/:id')
  }
  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.tableHeadCell}>S/N</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Date</TableCell>
            <TableCell align="right" className={classes.tableHeadCell}>Full Name</TableCell>
            <TableCell align="right" className={classes.tableHeadCell}>Email Address</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>User ID</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Phone</TableCell>
            <TableCell align="center" className={classes.tableHeadCell}>Last seen</TableCell>
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
              <TableCell align="right" className={classes.tableCell}>{row.fullName}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.email}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.id}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.role}</TableCell>
              <TableCell align="center" className={classes.tableCell}>{row.lastSeen}</TableCell>
              <TableCell align="center" className={classes.tableCell}>
                <Button onClick={handleView} className={classes.button}>
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
