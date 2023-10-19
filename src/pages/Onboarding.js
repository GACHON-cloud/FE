import React from "react";
import { Container, TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 1280,
    height: 832,
    position: 'relative',
    background: 'white',
  },
  title: {
    color: '#3E4C88',
    fontSize: 40,
    fontFamily: 'Noto Sans',
    fontWeight: 700,
    wordWrap: 'break-word',
  },
  subtitle: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'Noto Sans',
    fontWeight: 700,
    wordWrap: 'break-word',
  },
  nicknameInput: {
    width: 441,
    height: 42,
    border: '1px solid #A6A6A6',
    borderRadius: 4,
    display: 'inline-flex',
  },
  errorText: {
    color: '#F03F40',
    fontSize: 15,
    fontFamily: 'HeadlandOne',
    fontWeight: 400,
    lineHeight: '24',
  },
  helperText: {
    color: '#757575',
    fontSize: 16,
    fontFamily: 'HeadlandOne',
    fontWeight: 400,
    lineHeight: '25.60',
  },
  button: {
    width: 170,
    height: 50,
    background: '#EEF2FF',
    borderRadius: 4,
    border: '1px solid #A6A6A6',
    display: 'inline-flex',
  },
}));

export default function Onboarding() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div style={{ width: 158, height: 54, left: 557, top: 233, position: 'absolute' }}>
        <div style={{ left: -165, top: 0, position: 'absolute', textAlign: 'center' }}>
          <Typography className={classes.title}>HomeMate</Typography>
          <Typography className={classes.subtitle}>에서 사용할<br />닉네임을 입력해주세요!</Typography>
        </div>
      </div>

      <div style={{ width: 480, height: 162, left: 266, top: 425, position: 'absolute' }}>
        <TextField
          className={classes.nicknameInput}
          label="닉네임을 입력해주세요"
          variant="outlined"
        />
        <div className={classes.errorText}>중복된 닉네임입니다.</div>
        <Typography className={classes.helperText}>한글, 숫자 포함 12자 이내</Typography>
      </div>

      <div style={{ width: 170, height: 50, left: 762, top: 454, position: 'absolute' }}>
        <Button className={classes.button} variant="contained" color="primary">
          중복확인
        </Button>
      </div>

      <div style={{ width: 23, height: 23, left: 646, top: 703, position: 'absolute', border: '4px solid #666464' }}></div>
      <Typography style={{ width: 87, height: 47, left: 563, top: 697, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'HeadlandOne', fontWeight: 400, textDecoration: 'underline', lineHeight: '40', wordWrap: 'break-word' }}>확인</Typography>
      <img style={{ width: 111, height: 107, left: 259, top: 220, position: 'absolute' }} src="https://via.placeholder.com/111x107" />
    </Container>
  );
}
