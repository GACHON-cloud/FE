import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, Stack } from "@mui/material"
import axios from 'axios';

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

export default function Landing() {
    useEffect(() => {
        axios.get('http://ceprj.gachon.ac.kr:60006/')
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.error(error);
        });
        }, []);
   
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
                            <BoldText>Welcome!</BoldText>
                        </Grid>
                        <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:"10px" }}>
                        <img
                            onClick={() => window.location.href = 'http://ceprj.gachon.ac.kr:60006/oauth2/authorization/naver'}
                            width="250px"
                            src="/images/naver_login.png"
                            alt=""
                            />
                            <img 
                            onClick={() => window.location.href = 'http://ceprj.gachon.ac.kr:60006/oauth2/authorization/kakao'} 
                            width="250px" 
                            src="/images/kakao_login.png" 
                            alt="" 
                            />
                        </div>
                        <div style={{ color:'#888' }}>사용 중이신 SNS로 간편하게 로그인하세요!</div>
                        <div style={{ textDecorationLine:'underline', fontWeight:'bold' }}>Admin</div>
                    </Stack>
                </Grid>
            </Grid>
        </Box>dnd
        </Container>
    );
}
