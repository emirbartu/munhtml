import { Box, Container, Text, useColorModeValue } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Banner = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, pink.400, purple.500, cyan.400)',
    'linear(to-r, pink.600, purple.600, cyan.600)'
  );
  const textColor = useColorModeValue('white', 'white');

  return (
    <Box
      bg={bgGradient}
      color={textColor}
      py={4}
      position="fixed"
      top="60px"
      width="100%"
      zIndex={999}
      boxShadow="lg"
      animation={`${fadeIn} 0.5s ease-out`}
    >
      <Container maxW="container.xl" textAlign="center">
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="bold" letterSpacing="wide">
          🎉 Welcome to MUN Template - Your Gateway to Model United Nations! 🌍
        </Text>
      </Container>
    </Box>
  );
};

export default Banner;
