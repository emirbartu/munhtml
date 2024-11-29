import {
  Box,
  Heading,
  VStack,
  useColorModeValue,
  Link
} from '@chakra-ui/react';

export const CommitteeCard = ({ name, image, link }) => {
  const bgColor = useColorModeValue('gray.300', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
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
        }}
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
          height="100px"
        />

        {/* Committee Name */}
        <VStack 
          p={4} 
          spacing={2} 
          align="center" 
          transition="all 0.3s ease-in-out"
        >
          <Heading 
            as="h3" 
            size="lg" 
            textAlign="center"
            transition="all 0.3s ease-in-out"
            _hover={{
              fontSize: '1.5em'
            }}
          >
            {name}
          </Heading>
        </VStack>
      </Box>
    </Link>
  );
};