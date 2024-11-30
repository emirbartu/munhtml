import {
  Box,
  Heading,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const CommitteeCard = ({ name, image, link }) => {
  const bgColor = useColorModeValue('gray.300', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as={RouterLink} to={link} _hover={{ textDecoration: 'none' }}>
      <Box
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="lg"
        overflow="hidden"
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: '2xl',
          cursor: 'pointer',
        }}
        p={4}
        position="relative"
        zIndex={1}
      >
        <Box
          bgImage={`url(${image})`}
          bgSize="cover"
          bgPosition="center"
          filter="grayscale(100%)"
          transition="all 0.3s ease-in-out"
          _hover={{
            filter: 'grayscale(0%)',
            transform: 'scale(1.05)'
          }}
          height="150px"
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'transparent',
            transition: 'all 0.3s ease-in-out',
            _groupHover: { bg: 'blackAlpha.100' }
          }}
        />

        {/* Committee Name */}
        <VStack
          p={4}
          spacing={2}
          align="center"
          role="group"
        >
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            transition="all 0.3s ease-in-out"
            _groupHover={{
              transform: 'scale(1.05)',
              color: useColorModeValue('blue.600', 'blue.200')
            }}
          >
            {name}
          </Heading>
        </VStack>
      </Box>
    </Box>
  );
};