import { SimpleGrid, Box, Image } from '@chakra-ui/react';
import { CommitteeCard } from './CommitteeCard';

const committees = [
  {
    name: 'DISEC',
    fullName: 'Disarmament and International Security Committee',
    description: 'Deals with disarmament, global challenges and threats to peace that affect the international community.',
    banner: 'src/assets/committees/disec_banner.jpg',
    route: '/committees/disec'
  },
  {
    name: 'F-UNSC',
    fullName: 'United Nations Security Council',
    description: 'Maintains international peace and security in accordance with the principles of the United Nations.',
    banner: 'src/assets/committees/f-unsc_banner.jpg',
    route: '/committees/f-unsc'
  },
  {
    name: 'ILO',
    fullName: 'International Labour Organization',
    description: 'Promotes social justice and internationally recognized human and labour rights.',
    banner: 'src/assets/committees/ilo_banner.jpg',
    route: '/committees/ilo'
  },
  {
    name: 'UNHRC',
    fullName: 'United Nations Human Rights Council',
    description: 'Promotes and protects human rights around the world.',
    banner: 'src/assets/committees/unhrc_banner.jpg',
    route: '/committees/unhrc'
  },
];

export const CommitteeGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {committees.map((committee) => (
        <Box key={committee.name}>
          <Image
            src={committee.banner}
            alt={`${committee.name} Banner`}
            borderTopRadius="lg"
            objectFit="cover"
            height="200px"
            width="100%"
          />
          <CommitteeCard {...committee} />
        </Box>
      ))}
    </SimpleGrid>
  );
};
