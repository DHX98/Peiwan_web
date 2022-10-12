import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TopBar from '../component/AppBar';
import Footer from '../component/Footer';
import GameGallery from '../component/GameGallery';
import IntroductionBlueBox from '../component/IntroductionBlueBox';
import YellowBox from '../component/YellowBox';

export default function Home() {
  // Get the oauth code first
  // code -> in order to get bearer token
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  console.log(code);

  // use credential and code to get bearer token
  const formData = new URLSearchParams();
  formData.append('client_id', import.meta.env.VITE_CLIENT_ID);
  formData.append('client_secret', import.meta.env.VITE_CLIENT_SECRET);
  formData.append('grant_type', 'authorization_code');
  formData.append('code', code!);
  formData.append('redirect_uri', import.meta.env.VITE_REDIRECT_URI);

  console.log(formData);
  let discordAccessToken = '';
  fetch('https://discord.com/api/v10/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  }).then((r) => r.json())
    .then((res) => {
      discordAccessToken = res.access_token;
      console.log(res.access_token);
      fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `Bearer ${discordAccessToken}`,
        },
      }).then((r) => r.json())
        .then((result) => {
          console.log(result);
        });
    })
    .catch((e) => { console.log(e); });

  return (

    <Box sx={{ width: '100%' }}>
      <TopBar />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 'auto', sm: 'auto', md: 'auto' }}
        sx={{ width: '100%', margin: '0', overflow: 'hidden' }}
        justifyContent="center"
      >

        <IntroductionBlueBox />

        <GameGallery />
        <YellowBox />

        <Grid
          item
          xs={12}
          component={Box}
          sx={{
            bgcolor: 'red',
            width: '100%',
            height: '100vh',
          }}
        />
      </Grid>
      <Footer />
    </Box>
  );
}
