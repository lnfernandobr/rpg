import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { DnD_API } from '../utils/DnDAPI';
import { mappingDnDResults } from '../utils/utils';
import { Search } from '../components/Search';
import { SkeletonList } from '../components/SkeletonList';

const useStyles = makeStyles(theme => ({
  classes: {
    margin: theme.spacing(2),
  },
}));

export const Classes = () => {
  const style = useStyles();
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [classes, setClasses] = useState(false);

  const onSubmit = ({ value }) => {
    setShowSkeleton(true);

    DnD_API.getClasses({ value })
      .then(({ results }) => {
        const mappedFeatures = mappingDnDResults(results);
        setClasses(mappedFeatures);
      })
      .finally(() => setShowSkeleton(false));
  };

  return (
    <div className={style.classes}>
      <div>
        <Search onSubmit={onSubmit} label="Search Classes" />
        <SkeletonList showSkeleton={showSkeleton} options={classes} />
      </div>
    </div>
  );
};
