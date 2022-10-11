import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import Avatar1 from '../icons/avatar1.png';
import Avatar2 from '../icons/avatar2.png';
import Avatar3 from '../icons/avatar3.png';
import Avatar4 from '../icons/avatar4.png';
import Avatar5 from '../icons/avatar5.png';
import Avatar6 from '../icons/avatar6.png';

const themeFont = createTheme({
  typography: {
    fontFamily: [
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default function avatar() {
  const itemData = [
    {
      img: Avatar1,
      title: 'avatar1',
    },
    {
      img: Avatar2,
      title: 'avatar2',
    },
    {
      img: Avatar3,
      title: 'avatar3',
    },
    {
      img: Avatar4,
      title: 'avatar4',
    },
    {
      img: Avatar5,
      title: 'avatar5',
    },
    {
      img: Avatar6,
      title: 'avatar6',
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
        <Stack
          spacing={4}
        >
          <Typography
            variant="h2"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            不同的人选，多样的快乐
          </Typography>
          <ImageList cols={3} rowHeight="auto" gap={20}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                sx={{
                  p: 1,
                }}
              >
                <img
                  style={{ height: 100, width: 100 }}
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
