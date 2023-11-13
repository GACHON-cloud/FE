import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}


function preventDefault(event) {
  event.preventDefault();
}

export default function Details() {
  return (
    <React.Fragment>
    <Title>상세 정보</Title>
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell>주소</TableCell>
          <TableCell>데이터1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>내용</TableCell>
          <TableCell>데이터2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>층</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>보증금</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>매매가</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>월세</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>입주가능일</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>복층 여부</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>방향</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>주차 가능 대수</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>부동산명</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>부동산 전화번호</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>빌딩 필드</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>건물명</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>방 개수</TableCell>
          <TableCell>데이터3</TableCell>
        </TableRow>

        
      </TableBody>
    </Table>
   
  </React.Fragment>
  );
}