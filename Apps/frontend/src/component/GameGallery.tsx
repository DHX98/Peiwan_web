import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import LolLogo from '../icons/LoL_icon.svg';
import OverWatchLogo from '../icons/OverWatch_icon.svg';
import ApexLogo from '../icons/apex-legends-1.svg';
import CodLogo from '../icons/call-of-duty.svg';
import CSGOLogo from '../icons/counter-strike-global-offensive-2.svg';
import DOTALogo from '../icons/dota-2-seeklogo.com.svg';
import GenshinLogo from '../icons/Genshin_Impact_logo.svg';
import OriginLogo from '../icons/origin-4.svg';
import Rainbow6Logo from '../icons/rainbow-6-siege-1.svg';
import SteamLogo from '../icons/steam-icon-logo.svg';

const themeFont = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function GameGallery() {
  const itemData = [
    {
      img: LolLogo,
      title: 'LOL',
    },
    {
      img: OverWatchLogo,
      title: 'OVERWATCH',
    },
    {
      img: ApexLogo,
      title: 'APEX',
    },
    {
      img: CodLogo,
      title: 'COD',
    },
    {
      img: CSGOLogo,
      title: 'CSGO',
    },
    {
      img: DOTALogo,
      title: 'DOTA',
    },
    {
      img: GenshinLogo,
      title: 'GENSHIN',
    },
    {
      img: OriginLogo,
      title: 'ORIGIN',
    },
    {
      img: Rainbow6Logo,
      title: 'R6',
    },
    {
      img: SteamLogo,
      title: 'STEAM',
    },
  ];

  return (
    <ThemeProvider theme={themeFont}>
      <Grid
        item
        xs={12}
        component={Box}
        sx={{
          bgcolor: 'white',
          height: '100vh',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={4}>
          <Typography
            variant="h4"
            sx={{
            }}
          >
            热门游戏大神带你飞
          </Typography>
          <Typography
            variant="h6"
            sx={{
            }}
          >
            坐标海外华人陪聊娱乐
          </Typography>

          <ImageList cols={5} rowHeight="auto">
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{
                  p: 1,
                }}
              >
                <img
                  style={{ height: 60, width: 60 }}
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Stack>
      </Grid>
    </ThemeProvider>
  );
}
