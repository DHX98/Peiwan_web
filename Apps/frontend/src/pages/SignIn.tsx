import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import signup_bg from '../icons/signup_bg.jpg';

function Copyright(props: any) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const theme1 = createTheme({
  palette: {
    secondary: {
      light: '#7289DA',
      main: '#7289DA',
      dark: '#7289DA',
      contrastText: '#fff',
    },
  },
});

const theme2 = createTheme({
  typography: {
    fontSize: 12,
  },
});

export default function SignIn() {
  const [SignInError, SetSignInError] = React.useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  console.log(code);
  const navigate = useNavigate();
  // GET Api HOST from .env
  const Api = import.meta.env.VITE_HOST;
  console.log(`${Api}users/login`);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch(`${Api}users/login`, {
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
        if (res.status === 401) {
          SetSignInError(true);
          // alert('password not matched or not signed up');
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
    paddingTop: '5%',
    backgroundImage: `url(${signup_bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <ThemeProvider theme={theme1}>
      <div style={mystyle}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              boxShadow: 'none',
              border: '1px solid white',
              borderRadius: '15px!important',
              padding: '10%',
              height: '80vh',
              margin: '5%',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <ThemeProvider theme={theme2}>
              <Typography component="h1" variant="h5">
                登录
              </Typography>
            </ThemeProvider>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                error={SignInError}
                helperText={SignInError ? 'Incorrect email.' : ''}
                label="请输入您的邮箱"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                error={SignInError}
                helperText={SignInError ? 'Or incorrect password.' : ''}
                label="请输入您的密码"
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="记住我"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
              >
                登陆
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{ mb: 1 }}
                color="secondary"
                href="https://discord.com/api/oauth2/authorize?client_id=1029832621712232489&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&response_type=code&scope=identify%20email"
              >
                用discord登录
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    忘记密码?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    没有帐号? 请点此注册
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 8, mb: 1 }} />
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
