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
      img: LolLogo,
      title: 'LOL',
    },
    {
      img: LolLogo,
      title: 'LOL',
    },
    {
      img: LolLogo,
      title: 'LOL',
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

          <ImageList cols={4} rowHeight="auto" gap={30}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
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
