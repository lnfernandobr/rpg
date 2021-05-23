import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { settings } from '../private/dev/settings';
import { requestPromise } from '../utils/requestPromise';
import { REQUEST_METHODS } from '../infra/utils/constants';
import Typography from '@material-ui/core/Typography';
import { COLORS } from '../index';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Wrapper } from '../components/Wrapper';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles(theme => ({
  search: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    border: '0.5px solid rgba(255,255,255,0.1)',
    margin: theme.spacing(1),
    marginTop: theme.spacing(1),
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
}));

export const Spells = () => {
  const classes = useStyles();
  const [search, setSearch] = useState();
  const [spells, setSpells] = useState([]);

  const onSubmit = () => {
    const url = `${settings.dnd.apiPath}/spells/?name=${search}`;

    requestPromise({ url, method: REQUEST_METHODS.GET }).then(data => {
      const formattedSpells = JSON.parse(data.body);
      setSpells(formattedSpells.results);
    });
    // TODO create rule to block commit with logs
  };

  const SpellsList = () => {
    if (!spells.length) {
      return (
        <div className={classes.spellsContainer}>
          <Typography className={classes.notFoundSpell}>
            Spell not found, sorry :(
          </Typography>
        </div>
      );
    }

    const icons = [
      <Wrapper img="/icons/spells/bottle.svg" />,
      <Wrapper img="/icons/spells/hat.svg" />,
      <Wrapper img="/icons/spells/magic.svg" />,
      <Wrapper img="/icons/spells/magic-ball.png" />,
      <Wrapper img="/icons/spells/magic-wand.svg" />,
      <Wrapper img="/icons/spells/magic-wand (1).svg" />,
      <Wrapper img="/icons/spells/skull.svg" />,
      <Wrapper img="/icons/spells/witch.svg" />,
    ];

    // TODO render list of spells here

    return (
      <List className={classes.root}>
        {spells.map(({ name, index, url }) => {
          const labelId = `checkbox-list-label-${index}`;
          const sortedPosition = Math.floor(Math.random() * 6);
          console.log('sortedPosition: ', sortedPosition);
          return (
            <ListItem key={index} role={undefined} dense button>
              <ListItemIcon>{icons[sortedPosition]}</ListItemIcon>
              <ListItemText
                className={classes.itemText}
                id={labelId}
                primary={name}
              />

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

  const onChange = ({ target: { value } }) => setSearch(value);

  return (
    <div>
      <div className={classes.search}>
        <TextField
          variant="outlined"
          value={search}
          onChange={onChange}
          label="Search spells"
        />

        <IconButton onClick={onSubmit}>
          <SearchIcon style={{ fontSize: 32, color: COLORS.text.secondary }} />
        </IconButton>
      </div>
      <div className={classes.line} />

      <SpellsList />
    </div>
  );
};
