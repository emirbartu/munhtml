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
          h="300px"
          w="300px"
          position="relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2128.1593010929673!2d28.788423288423424!3d41.032436938082746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa438a39f52db%3A0xa4eb20ddc406fa96!2s%C4%B0stanbul%20Sabahattin%20Zaim%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1732816606316!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="YAFLMUN Venue Location"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};
