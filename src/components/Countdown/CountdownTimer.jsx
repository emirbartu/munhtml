import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-01-21') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 * 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const textColor = useColorModeValue('gray.700', 'white');
  const bgColor = useColorModeValue('white', 'gray.700');
  const accentColor = useColorModeValue('teal.500', 'teal.200');

  return (
    <Box
      textAlign="center"
      my={8}
      p={6}
      borderRadius="lg"
      bg={bgColor}
      boxShadow="lg"
      maxW="container.lg"
      mx="auto"
    >
      <Text fontSize="2xl" mb={4} color={textColor} fontWeight="bold">
        Countdown to YAFLMUN'25
      </Text>
      <HStack spacing={8} justify="center" flexWrap="wrap">
        {Object.entries(timeLeft).map(([interval, value]) => (
          <VStack key={interval} spacing={2} p={4}>
            <Text
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color={accentColor}
              fontFamily="mono"
            >
              {value.toString().padStart(2, '0')}
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color={textColor}
              textTransform="capitalize"
            >
              {interval}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default CountdownTimer;
