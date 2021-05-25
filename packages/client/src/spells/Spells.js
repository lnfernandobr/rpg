import React, { useState } from 'react';
import { settings } from '../private/dev/settings';
import { requestPromise } from '../utils/requestPromise';
import { REQUEST_METHODS } from '../infra/utils/constants';
import { Wrapper } from '../components/Wrapper';
import { Search } from '../components/Search';
import { SkeletonList } from '../components/SkeletonList';

export const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(false);

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

  const onSubmit = ({ value }) => {
    setShowSkeleton(true);
    const url = `${settings.dnd.apiPath}/spells/?name=${value}`;
    requestPromise({ url, method: REQUEST_METHODS.GET })
      .then(data => {
        const sortedPosition = Math.floor(Math.random() * 6);
        const formattedSpells = JSON.parse(data.body);

        const mappedSpells = formattedSpells.results.map(
          ({ name, index, url }) => ({
            primary: name,
            icon: icons[sortedPosition],
            index,
            url,
          }),
        );
        setSpells(mappedSpells);
      })
      .catch(err => {
        throw err;
      })
      .finally(() => setShowSkeleton(false));
  };

  return (
    <div>
      <Search onSubmit={onSubmit} />
      <SkeletonList showSkeleton={showSkeleton} options={spells} />
    </div>
  );
};
