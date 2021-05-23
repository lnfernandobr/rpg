import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  features: {
    margin: theme.spacing(2),
  },
}));

export const Features = () => {
  const classes = useStyles();

  return <div className={classes.features}>features</div>;
};
