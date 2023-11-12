import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({

  nicknameInput: {
    width: 350,
    height: 56,
    border: "1px solid #A6A6A6",
    borderRadius: 4,
  },
  errorText: {
    color: "#F03F40",
    fontSize: 15,
    fontFamily: "HeadlandOne",
    fontWeight: 400,
    lineHeight: "24",
    margin: '10px 0',
  },
  helperText: {
    color: "#757575",
    fontSize: 16,
    fontFamily: "HeadlandOne",
    fontWeight: 400,
    lineHeight: "25.60",
    margin: '10px 0',
  },
  button: {
    width: 170,
    height: 50,
    borderRadius: 4,
    border: "1px solid #A6A6A6",
  },

}));

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        HomeMate
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

function ChangeNickname() {
  const classes = useStyles();
  const [nickName, setNickname] = React.useState('');
  const [error, setError] = React.useState(null);
  const [checkCompleted, setCheckCompleted] = React.useState(false);
  const [message, setMessage] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nickName: data.get('nickName'),
    });
  };


  const handleCheckNickname = async () => {
    console.log('handleCheckNickname is called');
    const userId = localStorage.getItem('userId');
    console.log('userId:', userId);
    console.log('nickName:', nickName);
  
    try {
      const response = await axios.patch(`http://ceprj.gachon.ac.kr:60014/user/update?userId=${userId}`, {
        nickName: nickName,
      });
  
      if (response.status === 409) {
        setError('중복된 닉네임입니다.');
        setMessage(null);
        setCheckCompleted(false);
        return;
      }
  
      if (response.status === 200) {
        setError(null);
        setMessage('사용 가능한 닉네임입니다.');
        setCheckCompleted(true);
        return;
      }
  
      setError('닉네임 중복 확인 요청 실패');
      setMessage(null);
      setCheckCompleted(false);
    } catch (error) {
      setError('닉네임 중복 확인 요청 중 에러 발생');
      setMessage(null);
      setCheckCompleted(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" marginBottom={8}>
            닉네임 변경
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                style={{ fontSize: 20 }}
                className={classes.nicknameInput}
                label="닉네임을 입력해주세요"
                variant="outlined"
                id="outlined-helperText"
                value={nickName}
                error={!!error} // error 상태를 설정합니다
                helperText={error || " &#42; 중복되지 않은 닉네임으로 변경해주세요"} // helperText를 설정합니다
                onChange={(e) => {
                  setNickname(e.target.value);
                  setError(null);
                  setMessage(null);
                  setCheckCompleted(false); // 닉네임을 변경하면 중복 확인 완료 상태를 초기화
                }}
              
            />
            
            </Grid>
            <Grid item xs={4}>
              <Button
                className={classes.button}
                variant="contained"
                onClick={handleCheckNickname}
                
              >
                중복 확인
              </Button>
            </Grid>
          </Grid>
          
          <Box paddingTop={6} sx={{ mt: 2 }} component="form" noValidate onSubmit={handleSubmit}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!checkCompleted}
              sx={{ mt: 3, mb: 2 }}
            >
              확인
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default ChangeNickname;
