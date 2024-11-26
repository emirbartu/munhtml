import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { CommitteeGrid } from '../components/Committees/CommitteeGrid';

const Committees = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box bg={bgColor} pt={20}>
      <Container maxW="container.xl" py={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={12}>
          Committees
        </Heading>
        <CommitteeGrid />
      </Container>
    </Box>
  );
};

export default Committees;
