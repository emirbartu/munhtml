import {
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';

export const TeamMember = ({ name, role, image, bio }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-4px)' }}
    >
      <Image
        src={image}
        alt={name}
        objectFit="cover"
        h="200px"
        w="100%"
      />
      <VStack p={4} spacing={2} align="start">
        <Heading as="h3" size="md">
          {name}
        </Heading>
        <Text color="blue.500" fontWeight="bold">
          {role}
        </Text>
        <Text fontSize="sm">
          {bio}
        </Text>
      </VStack>
    </Box>
  );
};
