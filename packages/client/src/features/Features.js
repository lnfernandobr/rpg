import React, { useState } from 'react';
import { DnD_API } from '../utils/DnDAPI';
import { Search } from '../components/Search';
import { SkeletonList } from '../components/SkeletonList';
import { mappingDnDResults } from '../utils/utils';

export const Features = () => {
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [features, setFeatures] = useState(false);

  const onSubmit = ({ value }) => {
    setShowSkeleton(true);

    DnD_API.getFeatures({ value })
      .then(({ results }) => {
        const mappedFeatures = mappingDnDResults(results);
        setFeatures(mappedFeatures);
      })
      .finally(() => setShowSkeleton(false));
  };

  return (
    <div>
      <Search onSubmit={onSubmit} label="Search Features" />
      <SkeletonList showSkeleton={showSkeleton} options={features} />
    </div>
  );
};
