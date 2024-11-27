import {
  Box,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';

export const TeamMember = ({ name, role, image }) => {
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
      height="100%"
    >
      <Image
        src={image}
        alt={name}
        objectFit="cover"
        h={{ base: "200px", sm: "250px", md: "300px" }}
        w="100%"
      />
      <VStack
        p={{ base: 3, md: 4 }}
        spacing={{ base: 1, md: 2 }}
        align="center"
      >
        <Heading
          as="h3"
          size={{ base: "sm", md: "md" }}
          textAlign="center"
        >
          {name}
        </Heading>
        <Text
          color="blue.500"
          fontWeight="bold"
          fontSize={{ base: "sm", md: "md" }}
        >
          {role}
        </Text>
      </VStack>
    </Box>
  );
};
