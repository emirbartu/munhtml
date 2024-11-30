import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
  Heading,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialButton = ({ icon, label, href }) => {
  return (
    <IconButton
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      icon={icon}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

const Footer = () => {
  const [creatorText, setCreatorText] = useState('YAFLMUN IT Team');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCreatorText(prevText =>
        prevText === 'YAFLMUN IT Team'
          ? 'Emir Bartu Ekinci'
          : 'YAFLMUN IT Team'
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      bg={bgColor}
      borderTop={1}
      borderStyle={'solid'}
      borderColor={borderColor}
      mt={8}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={8}
          justifyItems="center"
          alignItems="center"
        >
          <Stack align={'center'}>
            <Heading as="h3" size="sm" mb={2}>Contact Us</Heading>
            <a href="mailto:yaflmunhr@gmail.com">yaflmunhr@gmail.com</a>
          </Stack>

          <Stack align={'center'}>
            <Heading as="h3" size="sm" mb={2}>Address</Heading>
            <Text textAlign="center">Halkalı Merkez, Halkalı, 34303</Text>
            <Text textAlign="center">Küçükçekmece/İstanbul</Text>
          </Stack>

          <Stack align={'center'}>
            <Heading as="h3" size="sm" mb={2}>Follow Us</Heading>
            <Stack direction={'row'} spacing={4}>
              <SocialButton
                label={'Instagram'}
                href={'https://www.instagram.com/yafl.mun25/'}
                icon={<FaInstagram />}
              />
              {/*
              <SocialButton
                label={'LinkedIn'}
                href={'https://linkedin.com/company/templatemun'}
                icon={<FaLinkedin />}
              
              />
               */}
            </Stack>
          </Stack>
        </SimpleGrid>

        <Text pt={8} fontSize={'sm'} textAlign={'center'}>
          Created by {creatorText}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
