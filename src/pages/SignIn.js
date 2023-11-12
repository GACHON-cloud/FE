import React,{useEffect} from 'react';
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
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/userSlice';

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
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const accessToken  = query.get('accessToken');
  const userId = query.get('userId');

  // 컴포넌트 내부
const dispatch = useDispatch();



useEffect(() => {
  // URL의 쿼리 파라미터 가져오기
  if (accessToken && userId) {
    // 토큰과 사용자 ID를 로컬 저장소에 저장
    localStorage.setItem('token', accessToken);
    localStorage.setItem('userId', userId);

    // 토큰과 사용자 ID를 콘솔에 출력
    console.log('Token:', accessToken);
    console.log('User ID:', userId);

    // 로그인 상태 업데이트
    dispatch(login({ accessToken, userId }));
  }
}, [accessToken, userId, dispatch]);

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