import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { COLORS } from '../index';

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
}));

export const Search = ({ onSubmit, showLine = true }) => {
  const classes = useStyles();
  const [search, setSearch] = useState();

  const onChange = ({ target: { value } }) => setSearch(value);

  return (
    <>
      <form
        className={classes.search}
        onSubmit={event => {
          event.preventDefault();
          onSubmit({ value: search });
        }}
      >
        <TextField
          variant="outlined"
          value={search}
          onChange={onChange}
          label="Search spells"
        />

        <IconButton type="submit">
          <SearchIcon style={{ fontSize: 32, color: COLORS.text.secondary }} />
        </IconButton>
      </form>

      {showLine && <div className={classes.line} />}
    </>
  );
};
