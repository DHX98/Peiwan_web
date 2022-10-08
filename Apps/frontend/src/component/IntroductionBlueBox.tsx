import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BlueBoxBg from '../icons/blueboxbg.jpeg';
import BlueBoxBgCellPhone from '../icons/BlueBoxBg_cellphone_size.png';
import md_BlueBoxBg from '../icons/md_bluebox_bg.png';

export default function IntroductionBlueBox() {
  return (
    <div>
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
        display={{
          xs: 'none', md: 'none', lg: 'block', xl: 'block',
        }}
      >
        <Box
          sx={{
            display: {
              xs: 'none', md: 'none', lg: 'inline', xl: 'inline',
            },

          }}
          justifyContent="center"
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              paddingTop: '20%',
              my: 2,
              flexGrow: 1,
            }}
          >
            海外大型华人陪玩平台
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              paddingLeft: '10%',
              paddingRight: '10%',
              my: 2,
              flexGrow: 1,
            }}
          >
            不再一人孤独地游戏！
          </Typography>
        </Box>
      </Grid>

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
          backgroundImage: `url(${md_BlueBoxBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        display={{
          xs: 'none', md: 'block', lg: 'none', xl: 'none',
        }}
      >

        <Box
          sx={{
            display: {
              xs: 'none', md: 'inline', lg: 'none', xl: 'none',
            },
          }}
          justifyContent="center"
        >

          <Typography
            variant="h2"
            align="center"
            sx={{
              paddingTop: '15%',
              my: 2,
              flexGrow: 1,
            }}
          >
            海外大型华人陪玩平台
          </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{
              paddingLeft: '10%',
              paddingRight: '10%',
              my: 2,
              flexGrow: 1,
            }}
          >
            不再一人孤独地游戏！
          </Typography>
        </Box>
      </Grid>

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
          backgroundImage: `url(${BlueBoxBgCellPhone})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        display={{
          xs: 'block', md: 'none', lg: 'none', xl: 'none',
        }}
      >

        <Box
          sx={{
            display: {
              xs: 'inline', md: 'none', lg: 'none', xl: 'none',
            },
          }}
          justifyContent="center"
        />
        <Typography
          variant="h2"
          align="center"
          sx={{
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingTop: '40%',
            my: 2,
            flexGrow: 1,
          }}
        >
          海外大型华人陪玩平台
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            paddingLeft: '10%',
            paddingRight: '10%',
            my: 2,
            flexGrow: 1,
          }}
        >
          不再一人孤独地游戏！
        </Typography>

      </Grid>
    </div>
  );
}
