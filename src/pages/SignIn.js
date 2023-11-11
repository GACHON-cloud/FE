import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://homemate.shop">
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function SignIn() {
  const navigate =useNavigate();
  const handleConfirmClick = async () => {
    try {
      const response = await axios.get('http://ceprj.gachon.ac.kr:60014/signin'); // 서버 URL을 입력해주세요.
      
      // 토큰과 userid를 localStorage에 저장.
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);

      // 토큰과 userid를 콘솔에 출력
      console.log('Token:', response.data.token);
      console.log('User ID:', response.data.userId);

      navigate("/main");
    } catch (error) {
      console.error('Failed to fetch token and user id:', error);
    }
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: "150px",
            justifyContent: 'center', // 세로로 가운데 정렬s
            gap: 5, // 각 요소 사이의 간격
          }}
          
        >
          <Avatar sx={{ m: 1, bgcolor: '#5784F7' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
         
            로그인 되었습니다.<br/><br/>
            확인 버튼을 누르면 메인 페이지로 이동합니다.            
            <Button
            onClick={() => navigate("/main")}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              확인
            </Button>
            
          </Box>
        
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}