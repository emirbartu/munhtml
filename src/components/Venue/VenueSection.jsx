import { Container, SimpleGrid, Heading } from '@chakra-ui/react';
import { Map } from './Map';
import { Transport } from './Transport';

export const VenueSection = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Venue Information
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Map />
        <Transport />
      </SimpleGrid>
    </Container>
  );
};
