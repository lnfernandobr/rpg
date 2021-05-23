import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';

export const App = () => {
  const classes = makeStyles(theme => ({
    typography: {
      margin: theme.spacing(1),
    },
  }))();

  return (
    <div>
      <Typography className={classes.typography}>
        This repository is an initial idea of a project that will list all
        features of the DnD 5.0 Edition API. The project is separated into many
        endpoints to make requests with a graphical interface made in ReactJs.
        The project provides for the listing of monsters, spells, features,
        classes and more. An integration with roll20 is also possible to create
        a spell token, where the system takes into account how many spells the
        player can spend depending on his level. The project will also have a
        longin system, to be able to save the current status of the player.
      </Typography>
    </div>
  );
};
