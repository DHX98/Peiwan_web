import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LolLogo from '../icons/LoL_icon.svg';
import OverWatchLogo from '../icons/OverWatch_icon.svg';

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
      <ImageList cols={4} rowHeight="auto" gap={0}>
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
    </Grid>
  );
}
