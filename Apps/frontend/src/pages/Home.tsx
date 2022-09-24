import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TopBar from '../component/AppBar';

export default function Home() {
  return (
    <Box sx={{ width: '100%' }}>
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
          sx={{
            bgcolor: 'blue',
            width: '100%',
            height: '60vh',
          }}
        />
      </Grid>

    </Box>
  );
}
