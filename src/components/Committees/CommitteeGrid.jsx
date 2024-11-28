import { SimpleGrid } from '@chakra-ui/react';
import { CommitteeCard } from './CommitteeCard';

const committees = [
  {
    name: 'DISEC',
    fullName: 'Disarmament and International Security Committee',
    description: 'Deals with disarmament, global challenges and threats to peace that affect the international community.',
    link: 'https://www.un.org/disarmament/institutions/first-committee/',
    image: '/images/disec.jpg', // Add appropriate image paths
  },
  {
    name: 'UNSC',
    fullName: 'United Nations Security Council',
    description: 'Maintains international peace and security in accordance with the principles of the United Nations.',
    link: 'https://www.un.org/securitycouncil/',
    image: '/images/unsc.jpg',
  },
  {
    name: 'ECOSOC',
    fullName: 'Economic and Social Council',
    description: 'Coordinates the economic and social work of the United Nations and its specialized agencies.',
    link: 'https://www.un.org/ecosoc/',
    image: '/images/ecosoc.jpg',
  },
  {
    name: 'UNHRC',
    fullName: 'United Nations Human Rights Council',
    description: 'Promotes and protects human rights around the world.',
    link: 'https://www.ohchr.org/en/hrc',
    image: '/images/unhrc.jpg',
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
