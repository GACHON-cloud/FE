import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: 80, margin: '0 50px 0 30px' }}>
          <img
            style={{ width: 50, height: 50 }}
            src="/images/logo.png"
            alt="Logo"
          />
          <Typography variant="h6" component="div" sx={{ ml: 2, fontSize: '2rem' }}>
            HomeMate
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button sx={{ fontSize: '1.2rem' }} color="inherit">My Page</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
