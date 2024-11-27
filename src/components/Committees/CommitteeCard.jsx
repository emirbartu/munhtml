import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Badge,
  HStack,
  Link as ChakraLink,
  Icon
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const CommitteeCard = ({ name, fullName, description, route }) => {
  const bgColor = useColorModeValue('gray.300', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const gradientBg = useColorModeValue(
    'linear(to-br, pink.400, cyan.400)',
    'linear(to-br, pink.600, cyan.600)'
  );

  return (
    <Box
      as={RouterLink}
      to={route}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderTopRadius="none"
      borderBottomRadius="lg"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        textDecoration: 'none',
        bg: useColorModeValue('blue.100', 'blue.700')
      }}
    >
      <Box
        bg={useColorModeValue('gray.300', 'gray.700')}
        p={{ base: 4, md: 6 }}
        color={useColorModeValue('gray.800', 'white')}
      >
        <HStack spacing={{ base: 2, md: 4 }} align="center" flexWrap="wrap">
          <Heading as="h3" size={{ base: "md", md: "lg" }}>
            {name}
          </Heading>
          <Badge colorScheme="whiteAlpha" fontSize={{ base: "0.7em", md: "0.8em" }} px={2}>
            UN Committee
          </Badge>
        </HStack>
      </Box>
      <VStack p={{ base: 4, md: 6 }} spacing={{ base: 2, md: 4 }} align="start">
        <Heading
          as="h4"
          size={{ base: "sm", md: "md" }}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          {fullName}
        </Heading>
        <Text
          color={useColorModeValue('gray.600', 'gray.300')}
          fontSize={{ base: "sm", md: "md" }}
        >
          {description}
        </Text>
      </VStack>
    </Box>
  );
};
