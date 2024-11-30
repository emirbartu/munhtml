import { SimpleGrid } from '@chakra-ui/react';
import { CommitteeCard } from './CommitteeCard';

const committees = [
  {
    name: 'GA1-DISEC',
    link: '/committees/disec',
    image: 'src/assets/thumbnail/disec.jpg',
  },
  {
    name: 'GA4-SPECPOL',
    link: '/committees/specpol',
    image: 'src/assets/thumbnail/specpol.jpg',
  },
  {
    name: 'ILO',
    link: '/committees/ilo',
    image: 'src/assets/thumbnail/ilo.jpg',
  },
  {
    name: 'F-UNSC',
    link: '/committees/f-unsc',
    image: 'src/assets/thumbnail/funsc.jpeg',
  },
  {
    name: 'OTS',
    link: '/committees/ots',
    image: 'src/assets/thumbnail/ots.jpeg',
  },
  {
    name: 'UEFA',
    link: '/committees/uefa',
    image: 'src/assets/thumbnail/uefa.jpeg',
  },
  {
    name: 'FIA',
    link: '/committees/fia',
    image: 'src/assets/thumbnail/fia.jpeg',
  },
  {
    name: 'JCC',
    link: '/committees/jcc',
    image: 'src/assets/thumbnail/jcc.jpeg',
  },
  {
    name: 'HCC',
    link: '/committees/hcc',
    image: 'src/assets/thumbnail/hcc.jpeg',
  },
  {
    name: 'Reconquista of Spain',
    link: '/committees/crisis',
    image: 'src/assets/thumbnail/crisis.jpeg',
  },
];


export const CommitteeGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {committees.map((committee) => (
        <CommitteeCard key={committee.name} {...committee} />
      ))}
    </SimpleGrid>
  );
};
