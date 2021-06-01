import { Icons } from './shared';

export const mappingDnDResults = results => {
  return results.map(({ name, index, url }) => {
    const sortedPosition = Math.floor(Math.random() * 6);
    return {
      primary: name,
      icon: Icons[sortedPosition],
      index,
      url,
    };
  });
};
