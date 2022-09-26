import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TopBar from '../component/AppBar';
import first_bg from '../../public/wp9637367-no-copyright-wallpapers.jpg';
// https://wallpapercave.com/no-copyright-wallpapers

export default function Home() {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <TopBar />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 'auto', sm: 'auto', md: 'auto' }}
        sx={{ width: '100%', margin: '0' }}
      >
        <Grid
          item
          xs={12}
          component={Box}
          style={{ background: `url(${first_bg})` }}
          sx={{
            bgcolor: 'blue',
            width: '100%',
            height: '100vh',

          }}
        >
          <Stack spacing={2}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </Stack>
        </Grid>
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

    </Box>
  );
}
