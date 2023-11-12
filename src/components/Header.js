import React,{useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('access_token') !== null);
    const user = useSelector((state) => state.user);
    const [logoutSuccess, setLogoutSuccess] = useState(false);

    useEffect(() => {
      const checkLoginStatus = () => {
        setIsLoggedIn(localStorage.getItem('token') !== null);
      };
    
      window.addEventListener('storage', checkLoginStatus);
    
      return () => {
        window.removeEventListener('storage', checkLoginStatus);
      };
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      setLogoutSuccess(true); // 로그아웃 성공 시 모달 표시
    
    };


    const handleClose = () => {
      setLogoutSuccess(false);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: 80, margin: '0 50px 0 30px' }}>
          <img onClick={() => navigate('/main')}
            style={{ width: 50, height: 50 }}
            src="/images/logo.png"
            alt="Logo"
          />
          <Typography onClick={() => navigate('/main')} variant="h6" component="div" sx={{ ml: 2, fontSize: '2rem' }}>
            HomeMate
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography  onClick={() => navigate('/mypage')} sx={{ fontSize: '1.2rem', marginRight:'10px'}} color="inherit">My Page</Typography >
          {user.isLoggedIn ? (
          <Typography sx={{ fontSize: '1.2rem' }} color="inherit" onClick={handleLogout}>Logout</Typography>
        ) : (
          <Typography sx={{ fontSize: '1.2rem' }} color="inherit" onClick={() => navigate('/')}>Login</Typography>
        )}
       
        </Toolbar>
      </AppBar>
      <Modal
  open={logoutSuccess}
  onClose={handleClose}
  onExited={() => navigate('/')}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: 400, 
    bgcolor: 'background.paper', 
    border: '2px solid #000',
    boxShadow: 24, 
    p: 4,
  }}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      로그아웃 되었습니다.
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      
    </Typography>
    <Button onClick={handleClose}>확인</Button> {/* 확인 버튼 추가 */}
  </Box>
</Modal>

    </Box>
  );
}
