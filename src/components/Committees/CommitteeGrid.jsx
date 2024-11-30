import { SimpleGrid } from '@chakra-ui/react';
import { CommitteeCard } from './CommitteeCard';

// Dynamically import all images from the committee-thumbnails directory
const committeeImages = import.meta.glob('/src/assets/committee-thumbnails/*.{jpg,JPG}', {
  eager: true,
  as: 'url'
});

const committees = [
  {
    name: 'GA1-DISEC',
    link: '/committees/disec',
    image: committeeImages['/src/assets/committee-thumbnails/disec.jpg'],
  },
  {
    name: 'GA4-SPECPOL',
    link: '/committees/specpol',
    image: committeeImages['/src/assets/committee-thumbnails/specpol.jpg'],
  },
  {
    name: 'ILO',
    link: '/committees/ilo',
    image: committeeImages['/src/assets/committee-thumbnails/ilo.jpg'],
  },
  {
    name: 'F-UNSC',
    link: '/committees/f-unsc',
    image: committeeImages['/src/assets/committee-thumbnails/funsc.jpg'],
  },
  {
    name: 'OTS',
    link: '/committees/ots',
    image: committeeImages['/src/assets/committee-thumbnails/ots.jpg'],
  },
  {
    name: 'UEFA',
    link: '/committees/uefa',
    image: committeeImages['/src/assets/committee-thumbnails/uefa.jpg'],
  },
  {
    name: 'FIA',
    link: '/committees/fia',
    image: committeeImages['/src/assets/committee-thumbnails/fia.jpg'],
  },
  {
    name: 'JCC',
    link: '/committees/jcc',
    image: committeeImages['/src/assets/committee-thumbnails/jcc.jpg'],
  },
  {
    name: 'HCC',
    link: '/committees/hcc',
    image: committeeImages['/src/assets/committee-thumbnails/hcc.jpg'],
  },
  {
    name: 'Crisis Committee',
    link: '/committees/crisis',
    image: committeeImages['/src/assets/committee-thumbnails/crisis.jpg'],
  },
];

export const CommitteeGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {committees.map((committee) => (
        <CommitteeCard key={committee.name} {...committee} />
      ))}
    </SimpleGrid>
  );
};