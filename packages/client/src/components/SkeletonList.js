import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { COLORS } from '../index';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  skeletonList: {
    margin: theme.spacing(2),
  },
  spellsContainer: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
  },
  notFoundSpell: {
    color: COLORS.text.primary,
  },
  itemText: {
    color: COLORS.text.primary,
  },
  skeleton: {
    width: 300,
    marginLeft: theme.spacing(1),
  },
}));

export const SkeletonList = ({ options = [], showSkeleton }) => {
  const classes = useStyles();

  if (!options.length && !showSkeleton) {
    return (
      <div className={classes.spellsContainer}>
        <Typography className={classes.notFoundSpell}>
          Spell not found, sorry :(
        </Typography>
      </div>
    );
  }

  const newOptions = showSkeleton ? [{}, {}, {}, {}, {}] : options;

  return (
    <List className={classes.root}>
      {newOptions.map(({ primary, icon }, i) => {
        const labelId = `checkbox-list-label-${i}`;
        return (
          <ListItem key={i} role={undefined} dense button>
            {showSkeleton ? (
              <Skeleton variant="circle" width={32} height={32} />
            ) : (
              icon && <ListItemIcon>{icon}</ListItemIcon>
            )}

            {showSkeleton ? (
              <Skeleton animation="wave" className={classes.skeleton} />
            ) : (
              <ListItemText
                className={classes.itemText}
                id={labelId}
                primary={primary}
              />
            )}

            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <InfoIcon style={{ color: COLORS.text.primary }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
