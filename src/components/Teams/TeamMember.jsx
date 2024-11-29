import {
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';

export const TeamMember = ({ name, role, image, link }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  const imageComponent = (
    <Image
      src={image}
      alt={name}
      objectFit="cover"
      h="300px"
      w="100%"
      fallback={<Box h="300px" w="100%" bg="gray.200" />}
    />
  );

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {imageComponent}
        </a>
      ) : (
        imageComponent
      )}

      <VStack p={4} spacing={2} align="center">
        <Heading as="h3" size="md" textAlign="center" color={textColor}>
          {name}
        </Heading>
        <Text color="blue.500" fontWeight="bold" textAlign="center">
          {role}
        </Text>
      </VStack>
    </Box>
  );
};