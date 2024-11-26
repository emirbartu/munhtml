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
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      borderTop={1}
      borderStyle={'solid'}
      borderColor={borderColor}
      mt={8}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Heading as="h3" size="sm" mb={2}>Contact Us</Heading>
            <Text>Email: contact@templatemun.com</Text>
            <Text>Phone: +1 234 567 8900</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as="h3" size="sm" mb={2}>Address</Heading>
            <Text>123 MUN Street</Text>
            <Text>Conference Center</Text>
            <Text>City, State 12345</Text>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as="h3" size="sm" mb={2}>Follow Us</Heading>
            <Stack direction={'row'} spacing={4}>
              <SocialButton
                label={'Facebook'}
                href={'https://facebook.com/templatemun'}
                icon={<FaFacebook />}
              />
              <SocialButton
                label={'Twitter'}
                href={'https://twitter.com/templatemun'}
                icon={<FaTwitter />}
              />
              <SocialButton
                label={'Instagram'}
                href={'https://instagram.com/templatemun'}
                icon={<FaInstagram />}
              />
              <SocialButton
                label={'LinkedIn'}
                href={'https://linkedin.com/company/templatemun'}
                icon={<FaLinkedin />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>

        <Text pt={8} fontSize={'sm'} textAlign={'center'}>
          Created by Template MUN Team © {new Date().getFullYear()}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
