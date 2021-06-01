import React, { useState } from 'react';
import { DnD_API } from '../utils/DnDAPI';
import { mappingDnDResults } from '../utils/utils';
import { Search } from '../components/Search';
import { SkeletonList } from '../components/SkeletonList';

export const Classes = () => {
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
    <div>
      <Search onSubmit={onSubmit} label="Search Classes" />
      <SkeletonList showSkeleton={showSkeleton} options={classes} />
    </div>
  );
};
