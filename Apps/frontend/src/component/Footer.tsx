import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        PEIWAN
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => (theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800]),
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          PEIWAN | 本页面所有内容最终解释权归PEIWAN所有
        </Typography>
        <Copyright />
        <Typography variant="body2" color="text.secondary">
          {'Designed by '}
          <Link color="inherit" href="/">
            Hx,Zy
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
