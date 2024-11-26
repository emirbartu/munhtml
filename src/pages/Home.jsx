import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { Map } from '../components/Venue/Map';
import { Transport } from '../components/Venue/Transport';
import { CommitteeGrid } from '../components/Committees/CommitteeGrid';

const Home = () => {
  const gradientText = useColorModeValue(
    'linear(to-r, pink.400, cyan.400)',
    'linear(to-r, pink.500, cyan.500)'
  );

  return (
    <Container maxW="container.xl">
      {/* Hero Section */}
      <VStack spacing={8} py={{ base: 24, md: 32 }} textAlign="center">
        <Heading
          as="h1"
          size="2xl"
          bgGradient={gradientText}
          bgClip="text"
        >
          MUN TEMPLATE
        </Heading>
        <Text fontSize="xl" maxW="container.md">
          Your gateway to an exceptional Model United Nations experience.
          Join us in shaping the future of international diplomacy.
        </Text>
        <Button
          size="lg"
          colorScheme="blue"
          _hover={{ transform: 'translateY(-2px)' }}
        >
          Download Resources
        </Button>
      </VStack>

      {/* Committees Section */}
      <Box py={{ base: 12, md: 16 }}>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Committees
        </Heading>
        <CommitteeGrid />
      </Box>

      {/* Venue Section */}
      <Box py={{ base: 12, md: 16 }}>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Venue Information
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          <Map />
          <Transport />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Home;
