import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
 
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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        HomeMate
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const defaultTheme = createTheme();

export default function SignUp() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Avatar sx={{ m: 1}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            닉네임 변경
          </Typography>
         
      <Grid item container alignItems="stretch" marginLeft={3} spacing={3}>
           <Grid item>
           <TextField
             style={{ fontSize: 20 }}
             className={classes.nicknameInput}
             label="닉네임을 입력해주세요"
             variant="outlined"
             id="outlined-helperText"
             
           />
           </Grid>
           <Grid item>
           {/* <Button
             className={classes.button}
             variant="contained"
             color="primary"
           >
             중복 확인
           </Button> */}
           </Grid>
         </Grid>
          <Box sx={{ mt: 2 }} >
          <Typography fontSize={10} color="#757575" align="left">
      <ul>
        <li>
        한글/숫자를 사용할 수 있습니다. 	&#40;최대 12자, 혼용 가능&#41;
       </li>
         <li>
         중복되지 않은 닉네임으로 변경해주세요
         </li>
       </ul>
     </Typography>
          </Box>
          
          <Box sx={{ mt: 2 }}component="form" noValidate onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
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









// import React from "react";
// import { Container, TextField, Button, Typography, Grid } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import CheckIcon from '@mui/icons-material/Check';
// import {useNavigate} from 'react-router-dom'



// export default function ChangeNickname(){
//   let navigate = useNavigate();
//   const classes = useStyles();
  
//   return(
//     <>
//     <Grid padding={3}></Grid>
//      {/* 텍스트박스 */}
//      <Grid item container alignItems="stretch" marginLeft={3} spacing={3}>
//           <Grid item>
//           <TextField
//             style={{ fontSize: 20 }}
//             className={classes.nicknameInput}
//             label="닉네임을 입력해주세요"
//             variant="outlined"
//             id="outlined-helperText"
//             helperText="한글, 숫자 포함 12자 이내"
//           />
//           </Grid>
//           <Grid item>
//           <Button
//             className={classes.button}
//             variant="contained"
//             color="primary"
//           >
//             중복 확인
//           </Button>
//           </Grid>
//         </Grid>
//         <Grid item margin={3}>
//         <Typography fontSize={10} color="#757575" padding="20px" align="left">
//       <ul>
//         <li>
//         한글/숫자를 사용할 수 있습니다. 	&#40;최대 12자, 혼용 가능&#41;
//         </li>
//         <li>
//         중복되지 않은 닉네임으로 변경해주세요
//         </li>
//       </ul>
//     </Typography>
//     </Grid>
//         <Grid item>
//           <Typography 
//             style={{
//               color: "black",
//               fontSize: 25,
//               fontFamily: "HeadlandOne",
//               fontWeight: 400,
//               textDecoration: "underline",
             
//             }}
//           >
//             <button>확인</button>
//           </Typography>
//         </Grid>
      
    
//     </>
//   )
// }