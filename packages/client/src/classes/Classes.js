import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  classes: {
    margin: theme.spacing(2),
  },
}));

export const Classes = () => {
  const classes = useStyles();

  return <div className={classes.classes}>Classes</div>;
};
