import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TopBar from '../component/AppBar';
import Footer from '../component/Footer';
import GameGallery from '../component/GameGallery';
import IntroductionBlueBox from '../component/IntroductionBlueBox';
import YellowBox from '../component/YellowBox';

export default function Home() {
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
