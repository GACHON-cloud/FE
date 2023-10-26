import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ButtonGroup from '@mui/material/ButtonGroup';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useNavigate} from 'react-router-dom'

const Container = styled('Box')({
  width: 1280,
  height: 832,
  position: 'relative',
  background: 'white',
  margin: '280px',
  justifyContent: 'center',  
  alignItems: 'center',  
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#F4F8FF',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  width: '100%',
  height: 'auto',
  backgroundSize: 'cover',
  position: 'relative',
}));

const Buttons = styled(ButtonGroup)({
  position: 'absolute',
  bottom: '25px',
  left: '33vw',
  borderRadius: '20px',
  
});

const StyledButton = styled(Button)({
  padding: '20px',
  margin: '10px',
  fontSize: '20px',
  height: '60px',
  '&:first-child': {  
    borderTopLeftRadius: '20px',  
    borderBottomLeftRadius: '20px',  
    borderTopRightRadius: '20px', 
    borderBottomRightRadius: '20px', 
    height: '45px',
    backgroundColor: '#F4F8FF',
    color: '#959393'
  },
  '&:last-child': { 
    borderTopLeftRadius: '20px',  
    borderBottomLeftRadius: '20px',  
    borderTopRightRadius: '20px', 
    borderBottomRightRadius: '20px',  
    width: '300px',
  },
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.7)',
});

const GreyItem = styled(Item)({
  backgroundColor: '#F0F0F0',
  borderRadius: '20px',
  boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2)'
});

export default function Main() {
  let navigate = useNavigate()
  return (
    <Container>
      <Box sx={{ flexGrow: 1, margin:"50px 20px 0 20px" }}>
        <Grid container spacing={4}>
          <Grid xs={12}>
            <Item>
              <img src="/images/button1.png" alt="" />
              <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '25px', width: '100%' }}>  {/* 추가 */}
                <Buttons orientation="vertical">
                  <StyledButton variant="contained">Guide<ChevronRightIcon></ChevronRightIcon></StyledButton>
                  <StyledButton variant="contained">챗봇과 함께 우리집 찾기</StyledButton>
                </Buttons>
              </Box>  
            </Item>
          </Grid>
          <Grid xs={6}>
            <GreyItem>
              <img src="/images/button2.png" alt="" />
            </GreyItem>
          </Grid>
          <Grid xs={6}>
            <GreyItem>
              <img src="/images/button3.png" alt="" />
            </GreyItem>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
