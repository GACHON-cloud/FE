import React, { useState } from "react";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';





const useStyles = makeStyles((theme) => ({
  container: {
    width: 1280,
    height: 832,
    position: "relative",
    background: "white",
    margin: "280px",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  title: {
    color: "#3E4C88",
    fontSize: 40,
    fontFamily: "Noto Sans",
    fontWeight: 900,
  },
  subtitle: {
    color: "black",
    fontSize: 40,
    fontFamily: "Noto Sans",
    fontWeight: 700,
    wordWrap: "break-word",
  },
  nicknameInput: {
    width: 441,
    height: 42,
    border: "1px solid #A6A6A6",
    borderRadius: 4,
  },
  errorText: {
    color: "#F03F40",
    fontSize: 15,
    fontFamily: "HeadlandOne",
    fontWeight: 400,
    lineHeight: "24",
  },
  helperText: {
    color: "#757575",
    fontSize: 16,
    fontFamily: "HeadlandOne",
    fontWeight: 400,
    lineHeight: "25.60",
  },
  button: {
    width: 170,
    height: 50,
    background: "#EEF2FF",
    borderRadius: 4,
    border: "1px solid #A6A6A6",
  },
}));

export default function Onboarding() {

  const navigate = useNavigate();
  const classes = useStyles();
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(""); // userId 상태 추가

                                                                 
  const query = new URLSearchParams(location.search);
  const accessToken = query.get('accessToken');

  
  const updateNickname = async (nickName) => {
    try {
      const response = await axios({
        method: 'post', 
        url: 'http://ceprj.gachon.ac.kr:60014/user/sign-up',
        headers: { Authorization: `Bearer ${accessToken}` }, 
        data: { nickName }, 
      });

        // userId를 숫자만 추출하여 로컬스토리지에 저장
    const userId = response.data; // "user=51"
    const userIdNumber = userId.replace(/[^0-9]/g, ''); // 숫자만 추출
    localStorage.setItem('userId', userIdNumber);

    dispatch(login({ accessToken, userId: userIdNumber }));

      //오류가 없으면 /main으로 이동
      navigate('/main');
    }  catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          setError("중복된 닉네임입니다.");
        } else if (error.response.data.message === 'sign-up error') {
          setError("회원 가입에 실패했습니다. 다시 시도해 주세요.");
        }
      } else {
        console.error('닉네임 업데이트에 실패했습니다.', error);
      }
    }
  };
  return (
    <Container className={classes.container}>
      <Grid container direction="column" spacing={12}>
        <Grid item className={classes.titleContainer}>
          <img
            style={{ width: 111, height: 107 }}
            src="/images/logo.png"
            alt="Logo"
          />
          <Typography style={{ fontSize: 30 }} className={classes.title}>
            <span style={{ fontWeight: "bold" }}> HomeMate</span><span style={{ color: "black" }}>에서 사용할 <br /> 닉네임을 입력해주세요!</span>
            
          </Typography>
        </Grid>
        <Grid item container alignItems="stretch" justifyContent="center" textAlign="center" spacing={3}>
  <Grid item>
    <TextField
      style={{ fontSize: 30 }}
      className={classes.nicknameInput}
      label="닉네임을 입력해주세요"
      variant="outlined"
      id="outlined-helperText"
      type="text"
      value={nickname}
      onChange={(e) => setNickname(e.target.value)}
    />
  </Grid>
</Grid>
<Grid item>
  {error && <Typography color="error">{error}</Typography>}
</Grid>

       
        <Grid item>
          <Button
         onClick={() => { updateNickname(nickname);
          
        }}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            확인<CheckIcon />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}