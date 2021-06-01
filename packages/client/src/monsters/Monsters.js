import React, { useState } from 'react';
import { DnD_API } from '../utils/DnDAPI';
import { SkeletonList } from '../components/SkeletonList';
import { Search } from '../components/Search';
import { mappingDnDResults } from '../utils/utils';

export const Monsters = () => {
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
    <div>
      <Search onSubmit={onSubmit} label="Search Monsters" />
      <SkeletonList showSkeleton={showSkeleton} options={monsters} />
    </div>
  );
};
