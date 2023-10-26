import React from "react";
import { Container, TextField, Button, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckIcon from '@mui/icons-material/Check';
import {useNavigate} from 'react-router-dom'

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
  let navigate = useNavigate();
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {/* 로고 및 안내글 */}
      <Grid container direction="column" spacing={12}>
        <Grid item className={classes.titleContainer}>
          <img
            style={{ width: 111, height: 107 }}
            src="/images/logo.png"
            alt="Logo"
          />
          <Typography style={{ fontSize: 30}} className={classes.title}>
          <span style={{ fontWeight: "bold" }}> HomeMate</span><span style={{ color: "black"}}>에서 사용할 <br/> 닉네임을 입력해주세요!</span>
          </Typography>
        </Grid>
        {/* 텍스트박스 */}
        <Grid item container alignItems="stretch" justifyContent= "center" textAlign= "center" spacing={3}>
          <Grid item>
          <TextField
            style={{ fontSize: 30 }}
            className={classes.nicknameInput}
            label="닉네임을 입력해주세요"
            variant="outlined"
            id="outlined-helperText"
            helperText="한글, 숫자 포함 12자 이내"
          />
          </Grid>
          <Grid item>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            중복 확인
          </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography onClick={()=>{navigate('/main')}}
            style={{
              color: "black",
              fontSize: 25,
              fontFamily: "HeadlandOne",
              fontWeight: 400,
              textDecoration: "underline",
             
            }}
          >
            확인<CheckIcon/>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
