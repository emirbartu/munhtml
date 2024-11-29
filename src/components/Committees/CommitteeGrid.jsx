import { SimpleGrid } from '@chakra-ui/react';
import { CommitteeCard } from './CommitteeCard';

const committees = [
  {
    name: 'GA4-DISEC',
    link: '/committees/disec',
    image: '/images/disec.jpg',
  },
  {
    name: 'GA1-SPECPOL',
    link: '/committees/specpol',
    image: '/images/specpol.jpg',
  },
  {
    name: 'ILO',
    link: '/committees/ilo',
    image: '/images/ilo.jpg',
  },
  {
    name: 'F-UNSC',
    link: '/committees/f-unsc',
    image: '/images/f-unsc.jpg',
  },
  {
    name: 'OTS',
    link: '/committees/ots',
    image: '/images/ots.jpg',
  },
  {
    name: 'UEFA',
    link: '/committees/uefa',
    image: '/images/uefa.jpg',
  },
  {
    name: 'FIA',
    link: '/committees/fia',
    image: '/images/fia.jpg',
  },
  {
    name: 'JCC',
    link: '/committees/jcc',
    image: '/images/jcc.jpg',
  },
  {
    name: 'HCC',
    link: '/committees/hcc',
    image: '/images/hcc.jpg',
  },
  {
    name: 'Reconquista of Spain',
    link: '/committees/crisis',
    image: '/images/reconquista.jpg',
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
