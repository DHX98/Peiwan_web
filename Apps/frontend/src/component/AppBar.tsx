import Box from '@mui/material/Box';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import {
  Divider, Drawer, List, ListItem, ThemeProvider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LogoSvg from '../logo.svg';

export default function TopBar() {
  const navItems = ['Language', 'TopUp', 'SignIn'];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img alt="logo's svg" style={{ height: '8vh', width: '50%' }} src={LogoSvg} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} to="/signin" sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme1}>
      <Box sx={{ display: 'flex', boxShadow: 0 }}>
        <AppBar
          component="nav"
          color="primary"
          sx={{
            boxShadow: 0,
            bgcolor: 'white',
            width: '100vw',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ padding: '20%' }} />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <img alt="logo's svg" style={{ height: '10vh', width: '40vw' }} src={LogoSvg} />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                my: 2, marginLeft: '10%', flexGrow: 1, display: { xs: 'none', sm: 'block' },
              }}
            >
              PEIWAN
            </Typography>

            <Box sx={{ marginRight: '10%', display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button component={Link} to={`/${item}`} disableRipple key={item} sx={{ color: '#000000' }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box component="nav">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
