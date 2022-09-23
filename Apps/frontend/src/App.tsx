import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function App() {
  const navItems = ['Home', 'About', 'Contact'];
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 'auto', sm: 'auto', md: 'auto' }}
        sx={{ width: '100%', margin: '0' }}
      >
        <Grid item xs={2.5}>
          <SportsEsportsIcon
            sx={{
              width: '10vw',
              height: '10vh',
            }}
          />
        </Grid>
        <Grid xs={5} />
        {navItems.map((item) => (
          <Grid item key={item} xs={1.5}>
            <Box
              sx={{
                width: '10vw',
                height: '10vh',
              }}
            >
              {item}
            </Box>
          </Grid>
        ))}

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
