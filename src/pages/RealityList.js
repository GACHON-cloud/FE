import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  border: '2px solid #5784F7'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "#5784F7"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 0),
    // vertical padding + font size from searchIcon
    marginLeft: `calc(1em + ${theme.spacing(6)})`,
    marginRight: `calc(1em + ${theme.spacing(1)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));


export default function RealityList() {


  const dividerStyle = {
    margin: '0 0', // 양쪽 대칭
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
  };

  return (
    <>
        <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <Box sx={{ flexGrow: 1}}>
      <AppBar elevation={0} style={{ backgroundColor: 'transparent' }}position="static">
       




<Grid item style={{margin:"100px 50px 50px 50px" }}>
 <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             style={{color: "#898989"}}
              placeholder="지역명 또는 단지명으로 검색해주세요."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search></Grid>
         
          </AppBar>
          </Box>
          </Grid>
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>

    <List sx={{ textAlign: 'center', width: '70%', margin:"50px",  bgcolor: 'background.paper' }}>
      <Grid style={{margin: "20px", textAlign: "left", fontWeight: "bold", color:"#414141"}}>검색 결과</Grid>
    <Divider sx={dividerStyle} />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <img src="/images/testimg.png" width="200px" style={{margin: "5px"}}/>
        </ListItemAvatar>
        <div style={{ margin:"30px",}}>
        <ListItemText
          primary={<Typography variant="h5" style={{ fontWeight: "bold",  fontSize: '1.5rem'}}>태평동</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                style={{ fontSize: '1.3em'}}
              >
                매매 6억 3000만원
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        /></div>
      </ListItem>
      <Divider sx={dividerStyle} />
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant="h5" >Summer BBQ</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Grid>
    </>
  );
}
