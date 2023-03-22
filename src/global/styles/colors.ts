import { createTheme } from '@mui/material/styles';

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#DEDEDD',

  background: '#F0F4F7',
  primary: '#1A3DB8',
};

export const theme = createTheme({
  palette: {
    primary: {
      light: '#57F4D0',
      main: '#25C8A2',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
