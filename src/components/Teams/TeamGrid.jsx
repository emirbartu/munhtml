import { SimpleGrid } from '@chakra-ui/react';
import { TeamMember } from './TeamMember';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Secretary General',
    image: 'https://via.placeholder.com/150',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Smith',
    role: 'Deputy Secretary General',
    image: 'https://via.placeholder.com/150',
    bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Mike Johnson',
    role: 'Under-Secretary-General',
    image: 'https://via.placeholder.com/150',
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    name: 'Sarah Williams',
    role: 'Director General',
    image: 'https://via.placeholder.com/150',
    bio: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
  },
];

export const TeamGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
      {teamMembers.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </SimpleGrid>
  );
};
