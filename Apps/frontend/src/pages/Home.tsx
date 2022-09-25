import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TopBar from '../component/AppBar';
import Footer from '../component/Footer';
import GameGallery from '../component/GameGallery';

export default function Home() {
  return (

    <Box sx={{ width: '100%' }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 'auto', sm: 'auto', md: 'auto' }}
        sx={{ width: '100%', margin: '0', overflow: 'hidden' }}
        justifyContent="center"
      >
        <Grid item xs={12}>
          <TopBar />
        </Grid>

        <Grid
          item
          xs={12}
          component={Box}
          sx={{
            bgcolor: 'blue',
            width: '100%',
            height: '100vh',
          }}
        />
        <GameGallery />
        <Grid
          item
          xs={12}
          component={Box}
          sx={{
            bgcolor: 'yellow',
            width: '100%',
            height: '100vh',
          }}
        />

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
