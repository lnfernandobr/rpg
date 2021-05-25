import React, { useState } from 'react';
import { Search } from '../components/Search';
import { SkeletonList } from '../components/SkeletonList';
import { DnD_API } from '../utils/DnDAPI';
import { mappedDnDResults } from '../utils/utils';

export const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(false);

  const onSubmit = ({ value }) => {
    setShowSkeleton(true);

    DnD_API.getSpells({ value })
      .then(({ results }) => {
        const mappedSpells = mappedDnDResults(results);
        setSpells(mappedSpells);
      })
      .finally(() => setShowSkeleton(false));
  };

  return (
    <div>
      <Search label="Search spells" onSubmit={onSubmit} />
      <SkeletonList showSkeleton={showSkeleton} options={spells} />
    </div>
  );
};
