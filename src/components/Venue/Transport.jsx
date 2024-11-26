import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Divider,
  Icon,
  Container,
} from '@chakra-ui/react';
import { MdDirectionsBus, MdTrain, MdLocalTaxi, MdLocationOn } from 'react-icons/md';

export const Transport = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const iconColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Container maxW="container.xl">
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        borderWidth="1px"
        borderColor={borderColor}
        h="100%"
      >
        <VStack align="start" spacing={6}>
          <Box>
            <Heading size="md" mb={2}>How to Get to the Venue</Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula
              magna vitae porttitor efficitur.
            </Text>
          </Box>

          <Divider />

          <Box w="100%">
            <Heading size="sm" mb={4}>Public Transportation Options:</Heading>
            <List spacing={4}>
              <ListItem>
                <Box display="flex" alignItems="center">
                  <ListIcon as={MdDirectionsBus} color={iconColor} boxSize={6} />
                  <Text>Bus lines: 123, 456, 789 <Text as="span" fontWeight="bold">(Stop: Central Station)</Text></Text>
                </Box>
              </ListItem>
              <ListItem>
                <Box display="flex" alignItems="center">
                  <ListIcon as={MdTrain} color={iconColor} boxSize={6} />
                  <Text>Subway: Blue Line, Station XYZ <Text as="span" fontWeight="bold">(5 min walk)</Text></Text>
                </Box>
              </ListItem>
              <ListItem>
                <Box display="flex" alignItems="center">
                  <ListIcon as={MdLocalTaxi} color={iconColor} boxSize={6} />
                  <Text>Taxi services available 24/7 at the main entrance</Text>
                </Box>
              </ListItem>
            </List>
          </Box>

          <Divider />

          <Box w="100%">
            <Heading size="sm" mb={4}>Location Details:</Heading>
            <Box display="flex" alignItems="center">
              <Icon as={MdLocationOn} color={iconColor} boxSize={6} mr={2} />
              <Text>123 MUN Street, Conference Center<br />City, State 12345</Text>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};
