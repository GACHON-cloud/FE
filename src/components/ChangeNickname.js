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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nickname: data.get('nickname'),
    });
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
                helperText="	&#42; 한글/숫자를 사용할 수 있습니다. (최대 12자, 혼용 가능)
                &#42; 중복되지 않은 닉네임으로 변경해주세요"

              />
            </Grid>
            <Grid item xs={4}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
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
