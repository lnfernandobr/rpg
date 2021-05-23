import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from './AppContainer';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

/// TODO create folder to contain all styles files
export const COLORS = {
  primary: '#0D1117',
  secondary: '#0D1117',
  text: {
    primary: 'rgba(255,255,255,0.8)',
    secondary: 'rgba(255,255,255,0.4)',
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
  overrides: {
    MuiTypography: {
      color: COLORS.text.primary,
    },
    MuiTextField: {
      root: {
        '& label.Mui-focused': {
          color: COLORS.text.secondary,
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: COLORS.text.secondary,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: COLORS.text.secondary,
          },
          '&:hover fieldset': {
            borderColor: COLORS.text.secondary,
          },
          '&.Mui-focused fieldset': {
            borderColor: COLORS.text.secondary,
          },
        },
        '& .MuiFilledInput-root': {
          background: '#000',
        },
      },
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
