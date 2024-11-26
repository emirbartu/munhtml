import { Box, useColorModeValue, Container, SimpleGrid } from '@chakra-ui/react';

export const Map = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Container maxW="container.xl" py={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          borderWidth="1px"
          borderColor={borderColor}
          bg={bgColor}
          h="400px"
          position="relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1842268811736!2d-73.98570684945891!3d40.74841797922864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645134827162!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MUN Venue Location"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};
