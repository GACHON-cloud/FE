import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  boxshadow: 'none',
  tableHead: {
    fontWeight: 'bold',
    paddingLeft: '35px',
    fontSize: '30px',
    height: '70px'
  },
  tableCell: {
    paddingLeft: '35px',
    fontSize: '22px'
  },
}));

export default function MyPage() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>마이페이지</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCell}>닉네임 변경</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>탈퇴하기</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
