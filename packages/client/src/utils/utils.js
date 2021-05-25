import { Icons } from './shared';

export const mappedDnDResults = results => {
  const sortedPosition = Math.floor(Math.random() * 6);
  return results.map(({ name, index, url }) => ({
    primary: name,
    icon: Icons[sortedPosition],
    index,
    url,
  }));
};
