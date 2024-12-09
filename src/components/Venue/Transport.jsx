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
} from '@chakra-ui/react';
import { MdDirectionsBus, MdTrain, MdLocalTaxi, MdLocationOn } from 'react-icons/md';

export const Transport = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const iconColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Box
      bg={bgColor}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      borderWidth="1px"
      borderColor={borderColor}
      h="400px"
      overflowY="auto"
    >
      <VStack align="start" spacing={6}>
        <Box>
          <Heading size="md" mb={2}>How to Get to the Venue</Heading>

        </Box>

        <Divider />

        <Box w="100%">
          <Heading size="sm" mb={4}>Public Transportation Options:</Heading>
          <List spacing={4}>
            <ListItem>
              <Box display="flex" alignItems="center">
                <ListIcon as={MdDirectionsBus} color={iconColor} boxSize={6} />
                <Text>Bus Lines: 36AS, 76O, 89, 89A, 89F, 89K, 89S, 98, 98KM, 98AB,  HT20, BN1. <Text as="span" fontWeight="bold">(Stop: Central Station)</Text></Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box display="flex" alignItems="center">
                <ListIcon as={MdDirectionsBus} color={iconColor} boxSize={6} />
                <Text>Metrobus -- 89, 89K, 89S, 98, 98AB, HT20 <Text as="span" fontWeight="bold">(5 min walk)</Text></Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box display="flex" alignItems="center">
                <ListIcon as={MdTrain} color={iconColor} boxSize={6} />
                <Text>Subway: Marmaray -- BN1 <Text as="span" fontWeight="bold">(5 min walk)</Text></Text>
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
            <Text>Halkalı Merkez, Halkalı, 34303 <br />Küçükçekmece/İstanbul</Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
