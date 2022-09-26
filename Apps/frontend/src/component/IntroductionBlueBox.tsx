import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BlueBoxBg from '../icons/blueboxbg.jpeg';
import BlueBoxBgCellPhone from '../icons/BlueBoxBg_cellphone_size.png';

export default function IntroductionBlueBox() {
  return (
    <Grid
      item
      xs={12}
      component={Box}
      sx={{
        bgcolor: 'white',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box sx={{
        display: {
          xs: 'none', md: 'inline', lg: 'inline', xl: 'inline',
        },
      }}
      >
        <img src={BlueBoxBg} alt={BlueBoxBg} height="100%" width="100%" />
      </Box>
      <Box sx={{
        display: {
          xs: 'inline', md: 'none', lg: 'none', xl: 'none',
        },
      }}
      >
        <img src={BlueBoxBgCellPhone} alt={BlueBoxBgCellPhone} height="100%" width="100%" />
      </Box>

    </Grid>
  );
}
