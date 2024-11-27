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
      p={{ base: 4, md: 6, lg: 8 }}
      borderRadius="lg"
      boxShadow="lg"
      borderWidth="1px"
      borderColor={borderColor}
      h={{ base: "350px", md: "400px" }}
      overflowY="auto"
    >
      <VStack align="start" spacing={{ base: 4, md: 6 }}>
        <Box>
          <Heading size={{ base: "sm", md: "md" }} mb={{ base: 1, md: 2 }}>
            How to Get to the Venue
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula
            magna vitae porttitor efficitur.
          </Text>
        </Box>

        <Divider />

        <Box w="100%">
          <Heading size={{ base: "xs", md: "sm" }} mb={{ base: 2, md: 4 }}>
            Public Transportation Options:
          </Heading>
          <List spacing={{ base: 2, md: 4 }}>
            <ListItem>
              <Box display="flex" alignItems="center">
                <ListIcon as={MdDirectionsBus} color={iconColor} boxSize={{ base: 5, md: 6 }} />
                <Text fontSize={{ base: "sm", md: "md" }}>
                  Bus lines: 123, 456, 789 <Text as="span" fontWeight="bold">(Stop: Central Station)</Text>
                </Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box display="flex" alignItems="center">
                <ListIcon as={MdTrain} color={iconColor} boxSize={{ base: 5, md: 6 }} />
                <Text fontSize={{ base: "sm", md: "md" }}>
                  Subway: Blue Line, Station XYZ <Text as="span" fontWeight="bold">(5 min walk)</Text>
                </Text>
              </Box>
            </ListItem>
            <ListItem>
              <Box display="flex" alignItems="center">
                <ListIcon as={MdLocalTaxi} color={iconColor} boxSize={{ base: 5, md: 6 }} />
                <Text fontSize={{ base: "sm", md: "md" }}>
                  Taxi services available 24/7 at the main entrance
                </Text>
              </Box>
            </ListItem>
          </List>
        </Box>

        <Divider />

        <Box w="100%">
          <Heading size={{ base: "xs", md: "sm" }} mb={{ base: 2, md: 4 }}>
            Location Details:
          </Heading>
          <Box display="flex" alignItems="center">
            <Icon as={MdLocationOn} color={iconColor} boxSize={{ base: 5, md: 6 }} mr={2} />
            <Text fontSize={{ base: "sm", md: "md" }}>
              123 MUN Street, Conference Center<br />City, State 12345
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
