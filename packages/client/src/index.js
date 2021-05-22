import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './AppContainer';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

/// TODO create folder to contain all styles files
const COLORS = {
  primary: '#000',
  secondary: '#fdab13',
  text: {
    primary: '#333',
    secondary: '#333333',
  },
};

const theme = createMuiTheme({
  palette: {
    primary: { main: COLORS.primary, contrastText: '#fff' },
    secondary: { main: COLORS.secondary },
    text: {
      primary: COLORS.text.primary,
      secondary: COLORS.text.secondary,
    },
  },
});

// TODO create an provider of location

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
