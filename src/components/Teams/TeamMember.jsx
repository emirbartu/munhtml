import {
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';

export const TeamMember = ({ name, role, image, link, isPriority }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue(isPriority ? 'blue.200' : 'gray.200', isPriority ? 'blue.700' : 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const priorityBgColor = useColorModeValue('blue.50', 'blue.900');

  const imageComponent = (
    <Image
      src={image}
      alt={name}
      objectFit="cover"
      h={isPriority ? "350px" : "300px"}
      w="100%"
      fallback={<Box h={isPriority ? "350px" : "300px"} w="100%" bg="gray.200" />}
    />
  );

  return (
    <Box
      bg={isPriority ? priorityBgColor : bgColor}
      borderWidth={isPriority ? "2px" : "1px"}
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: isPriority ? 'xl' : 'md' }}
      w="100%"
      maxW={isPriority ? "400px" : "350px"}
      mx="auto"
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {imageComponent}
        </a>
      ) : (
        imageComponent
      )}

      <VStack p={isPriority ? 6 : 4} spacing={2} align="center">
        <Heading
          as="h3"
          size={isPriority ? "lg" : "md"}
          textAlign="center"
          color={textColor}
        >
          {name}
        </Heading>
        <Text
          color={isPriority ? "blue.500" : "blue.500"}
          fontWeight="bold"
          textAlign="center"
          fontSize={isPriority ? "lg" : "md"}
        >
          {role}
        </Text>
      </VStack>
    </Box>
  );
};
