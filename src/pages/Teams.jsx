import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { TeamGrid } from '../components/Teams/TeamGrid';
import { useState } from 'react';

const Teams = () => {
  const [activeTeam, setActiveTeam] = useState('academy');
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box bg={bgColor} pt={20}>
      <Container maxW="container.xl" py={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={12}>
          Our Teams
        </Heading>
        <VStack spacing={8}>
          <HStack spacing={4} mb={8}>
            <Button
              size="lg"
              colorScheme={activeTeam === 'academy' ? 'teal' : 'gray'}
              onClick={() => setActiveTeam('academy')}
            >
              Academy Team
            </Button>
            <Button
              size="lg"
              colorScheme={activeTeam === 'organization' ? 'teal' : 'gray'}
              onClick={() => setActiveTeam('organization')}
            >
              Organization Team
            </Button>
          </HStack>
          <TeamGrid activeTeam={activeTeam} />
        </VStack>
      </Container>
    </Box>
  );
};

export default Teams;
