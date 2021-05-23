import React from 'react';
import { Routes } from './routes/Routes';
import { AppHeader } from './app/AppHeader';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#161B22',
  },
  main: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
      background: 'inherit',
    },
    padding: theme.spacing(1),
  },
}));

export const AppContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <AppHeader />

      <div className={classes.main}>
        <Routes />
      </div>
    </div>
  );
};
