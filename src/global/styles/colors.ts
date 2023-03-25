import { createTheme } from '@mui/material/styles';

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#DEDEDD',

  background: '#F0F4F7',
  primary: '#ADADAD',
  secondary: '#A5887',
  utilitary: '#3D454A',
  danger: '#F56E64',
  success: '#62A765',
};

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ADADAD',
      main: '#ADADAD',
    },
    secondary: {
      light: '#A58877',
      main: '#A58877',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    warning: {
      main: '#F56E64',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
