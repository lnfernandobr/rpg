import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { DnD_API } from '../utils/DnDAPI';
import { Search } from '../components/Search';
import { SkeletonList } from '../components/SkeletonList';
import { mappedDnDResults } from '../utils/utils';

const useStyles = makeStyles(theme => ({
  features: {
    margin: theme.spacing(2),
  },
}));

export const Features = () => {
  const classes = useStyles();
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [features, setFeatures] = useState(false);

  const onSubmit = ({ value }) => {
    setShowSkeleton(true);

    DnD_API.getFeatures({ value })
      .then(({ results }) => {
        const mappedFeatures = mappedDnDResults(results);
        setFeatures(mappedFeatures);
      })
      .finally(() => setShowSkeleton(false));
  };

  return (
    <div className={classes.features}>
      <div>
        <Search onSubmit={onSubmit} label="Search Features" />
        <SkeletonList showSkeleton={showSkeleton} options={features} />
      </div>
    </div>
  );
};
