import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import signup_bg from '../icons/signup_bg.jpg';

function Copyright(props: any) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  // GET Api HOST from .env
  const Api = import.meta.env.VITE_HOST;
  // navigator
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch(`${Api}users`, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: data.get('email'),
        PassWord: data.get('password'),
      }),
    })
      .then((res) => {
        if (res.status === 400) {
          alert('This email already signed up');
        } else {
          res.json().then((result) => {
            console.log(result);
            localStorage.setItem('token', result.token);
            navigate('/');
          });
        }
      });
  };

  const mystyle = {
    paddingTop: '10%',
    backgroundImage: `url(${signup_bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={mystyle}>
        <Container component="main" maxWidth="sm">

          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              border: '1px solid white',
              borderRadius: '5px!important',
              padding: '10%',
              paddingBottom: '44%',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              注册您的帐号
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="请输入您的邮箱"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="请输入您的密码"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                确认注册
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/SignIn" variant="body2">
                    已有帐号?请点此登录
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </div>
    </ThemeProvider>
  );
}
