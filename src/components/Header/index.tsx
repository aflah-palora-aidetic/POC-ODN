import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid } from '@mui/material';
import logo from '../../assets/logo.png'

export const Header: React.FC = () => {
  return (
    <Grid item width={'100%'} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{backgroundColor: 'black'}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box component={'img'} sx={{maxHeight: '25px'}} src={logo}></Box>
        </Toolbar>
      </AppBar>
    </Grid>

  );
}