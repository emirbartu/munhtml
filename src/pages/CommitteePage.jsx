import { Box, Container, VStack, Text, Button, SimpleGrid, Image, Heading, useColorModeValue } from '@chakra-ui/react';

const CommitteePage = ({ committeeData }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBgColor = useColorModeValue('white', 'gray.600');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'white');

  const defaultCommitteeData = {
    name: 'United Nations General Assembly Legal Committee',
    usg1: {
      name: 'John Doe',
      image: '/images/usg/usg1-placeholder.jpg',
      title: 'Under-Secretary-General'
    },
    usg2: {
      name: 'Jane Smith',
      image: '/images/usg/usg2-placeholder.jpg',
      title: 'Under-Secretary-General'
    },
    agendaItems: [
      'Global Big Data Security and Privacy',
      'Global Artificial Intelligence Regulation'
    ],
    studyGuideUrl: '#',
    description: `The United Nations General Assembly Legal Committee plays a crucial role in addressing emerging challenges in international law. Our committee focuses on establishing comprehensive frameworks for data protection and AI governance, ensuring a balanced approach between technological advancement and human rights.`
  };

  const data = committeeData || defaultCommitteeData;

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={10} align="stretch">
        {/* USG Section */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {[data.usg1, data.usg2].map((usg, index) => (
            <Box
              key={index}
              textAlign="center"
              p={8}
              borderRadius="xl"
              bg={bgColor}
              boxShadow="md"
              borderWidth="1px"
              borderColor={borderColor}
              transition="all 0.3s ease"
              _hover={{
                bg: hoverBgColor,
                transform: 'translateY(-4px)',
                boxShadow: 'xl'
              }}
            >
              <Box
                borderRadius="xl"
                overflow="hidden"
                mb={4}
                mx="auto"
                maxW="280px"
              >
                <Image
                  src={usg.image}
                  alt={usg.name}
                  w="full"
                  h="280px"
                  objectFit="cover"
                />
              </Box>
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="medium"
                mt={4}
              >
                {usg.title}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Agenda Items */}
        <Box
          bg={hoverBgColor}
          p={8}
          borderRadius="xl"
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="md"
        >
          <Heading as="h2" size="xl" mb={8} textAlign="center" color={textColor}>
            Agenda Items
          </Heading>
          <VStack align="stretch" spacing={4}>
            {data.agendaItems.map((item, index) => (
              <Box
                key={index}
                p={4}
                borderLeft="4px solid"
                borderColor="blue.500"
                bg={useColorModeValue('gray.50', 'gray.700')}
                borderRadius="md"
                transition="all 0.2s"
                _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
              >

                <Text fontSize="lg" fontWeight="medium" color={textColor}>
                    {item}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Study Guide Button */}
        <Button
          size="lg"
          width="full"
          bg="blue.500"
          color="white"
          py={7}
          fontSize="xl"
          fontWeight="bold"
          _hover={{
            bg: 'blue.600',
            transform: 'translateY(-2px)',
            boxShadow: 'xl'
          }}
          _active={{
            bg: 'blue.700'
          }}
          transition="all 0.3s"
        >
          STUDY GUIDE
        </Button>

        {/* Committee Description */}
        <Box
          bg={hoverBgColor}
          p={8}
          borderRadius="xl"
          borderWidth="1px"
          borderColor={borderColor}
          boxShadow="md"
        >
          <Heading as="h2" size="xl" mb={6} color={textColor}>
            About the Committee
          </Heading>
          <Text fontSize="lg" lineHeight="tall" color={textColor}>
            {data.description}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default CommitteePage;
