import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Badge,
  HStack,
  Link,
  Icon
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const CommitteeCard = ({ name, fullName, description, link }) => {
  const bgColor = useColorModeValue('gray.300', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const gradientBg = useColorModeValue(
    'linear(to-br, pink.400, cyan.400)',
    'linear(to-br, pink.600, cyan.600)'
  );

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        bg: useColorModeValue('blue.100', 'blue.700')
      }}
    >
      <Box
        bg={useColorModeValue('gray.300', 'gray.700')}
        p={6}
        color={useColorModeValue('gray.800', 'white')}
      >
        <HStack spacing={4} align="center">
          <Heading as="h3" size="lg">
            {name}
          </Heading>
          <Badge colorScheme="whiteAlpha" fontSize="0.8em" px={2}>
            UN Committee
          </Badge>
        </HStack>
      </Box>
      <VStack p={6} spacing={4} align="start">
        <HStack width="full" justify="space-between" align="center">
          <Heading as="h4" size="md" color={useColorModeValue('gray.700', 'gray.200')}>
            {fullName}
          </Heading>
          {link && (
            <Link
              href={link}
              isExternal
              color={useColorModeValue('blue.500', 'blue.300')}
              _hover={{ color: useColorModeValue('blue.600', 'blue.200') }}
            >
              Official Website <Icon as={ExternalLinkIcon} mx="2px" />
            </Link>
          )}
        </HStack>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>
          {description}
        </Text>
      </VStack>
    </Box>
  );
};
