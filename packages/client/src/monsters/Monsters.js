import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import { COLORS } from '../index';

const useStyles = makeStyles(() => ({
  typography: {
    color: COLORS.text.primary,
  },
}));

export const Monsters = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typography}>monsters</Typography>
    </div>
  );
};
