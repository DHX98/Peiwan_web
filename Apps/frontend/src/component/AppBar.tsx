import Box from '@mui/material/Box';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import LogoSvg from '../../public/logo.svg';

export default function TopBar() {
  const navItems = ['Language', 'TopUp', 'SignIn'];

  const theme1 = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#F0F8FF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme1}>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => { console.log('clicked'); }}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => { console.log('clicked'); }}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <img alt="logo's svg" style={{ height: '10vh', width: '100%' }} src={LogoSvg} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginLeft: '10%', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              PEIWAN
            </Typography>
            <Box sx={{ marginRight: '10%', display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button disableRipple key={item} sx={{ color: '#000000' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
