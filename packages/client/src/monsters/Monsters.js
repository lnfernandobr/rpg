import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';
import { DnD_API } from '../utils/DnDAPI';
import { SkeletonList } from '../components/SkeletonList';
import { Search } from '../components/Search';
import { mappingDnDResults } from '../utils/utils';

const useStyles = makeStyles(theme => ({
  monsters: {
    margin: theme.spacing(2),
  },
}));

export const Monsters = () => {
  const classes = useStyles();
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [monsters, setMonsters] = useState(false);

  const onSubmit = ({ value }) => {
    setShowSkeleton(true);

    DnD_API.getMonsters({ value })
      .then(({ results }) => {
        const mappedFeatures = mappingDnDResults(results);
        setMonsters(mappedFeatures);
      })
      .finally(() => setShowSkeleton(false));
  };

  return (
    <div className={classes.monsters}>
      <div>
        <Search onSubmit={onSubmit} label="Search Monsters" />
        <SkeletonList showSkeleton={showSkeleton} options={monsters} />
      </div>
    </div>
  );
};
