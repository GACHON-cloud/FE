import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, Stack } from "@mui/material"
import Button from '@mui/material/Button';


const Container= styled('Box')({
    width: 1280,
    height: 832,
    position: "relative",
    background: "white",
    margin: "280px",
})
    
const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const BoldText = styled('h1')({
  fontWeight: 'bold',
  fontSize: '35px',
  justifyContent: 'center',
  alignItems: 'center',
  margin: "150px 0 50px",
});

const BText = styled('h1')({
    fontWeight: 'bold',
    fontSize: '25px',
    justifyContent: 'center',
    alignItems: 'center',
   
  });

export default function Landing() {
   
    return (
        <Container>
        <Box sx={{ width:'100%', height:"100vh" }}>
            <Grid container spacing={0}>
                <Grid item xs={5}>
                    <Image src="/images/banner1.png" alt="" />
                </Grid>
                <Grid item xs={7}>
                    <Stack spacing={10}>
                        <Grid container direction="column">
                            <BoldText>With 챗봇</BoldText>
                        </Grid>
                        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:"10px" }}>
                       
                            <img
                            onClick={() => {
                                window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
                                
                            }}
                            width="250px"
                            src="/images/kakao_login.png"
                            alt=""
/>
                        </div>
                        <div style={{ color:'#888' }}>로그인 후 사용 가능합니다.</div>
                        
                        <Button onClick={() => window.location.href = 'http://localhost:8080/admin/form'}>
                            <BText>Admin</BText></Button>



                    </Stack>
                </Grid>
            </Grid>
        </Box>
        </Container>
    );
}
