import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  Link,
} from 'react-router-dom';

export default function Home() {
  const navItems = ['Home', 'About', 'SignIn'];

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
        <Grid item xs={3}>
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
            >
              {navItems[0]}
            </Button>

            <Button variant="text">{navItems[1]}</Button>
            <Button
              variant="text"
              component={Link}
              to="/signin"
            >
              {navItems[2]}
            </Button>
          </Stack>

        </Grid>
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
