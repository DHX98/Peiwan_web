import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
        width: '100vw',
        height: '100vh',
      }}
      style={{
        backgroundImage: `url(${BlueBoxBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          display: {
            xs: 'none', md: 'inline', lg: 'inline', xl: 'inline',
          },

        }}
        justifyContent="center"

      >
        TODO:居中这里
        <Typography
          variant="h6"
          sx={{
            my: 2, flexGrow: 1, display: { xs: 'none', sm: 'block' },
          }}
        >
          这里要居中
        </Typography>
      </Box>

      TODO:加一个md屏幕尺寸的bg

      TODO:把下面的BOX改成和lg一样的

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
