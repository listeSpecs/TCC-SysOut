import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import AppRoutes from './routes';
import './index.css';
import { theme } from './global/styles/colors';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
