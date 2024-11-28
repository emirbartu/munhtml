import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Link,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react';
import {
  MdGavel,
  MdGroup,
  MdPerson,
  MdLanguage,
  MdCameraAlt
} from 'react-icons/md';
import { PiPackageThin } from 'react-icons/pi';

const ApplyOption = ({ icon: Icon, title, early, regular, late, formLink }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Link
      href={formLink}
      isExternal
      _hover={{ textDecoration: 'none' }}
    >
      <VStack
        p={8}
        bg={bgColor}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="xl"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-4px)',
          shadow: 'lg',
          bg: hoverBg
        }}
        spacing={4}
      >
        <Icon size={64} />
        <Heading size="md">{title}</Heading>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Early</Th>
              <Th>Regular</Th>
              <Th>Late</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{early}</Td>
              <Td>{regular}</Td>
              <Td>{late}</Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Link>
  );
};

const Apply = () => {
  const applyOptions = [
    {
      icon: MdGavel,
      title: 'Board',
      early: '550₺',
      regular: '600₺',
      late: '700₺',
      formLink: '#' // TODO: Add actual Google Form link
    },
    {
      icon: MdGroup,
      title: 'Delegation',
      early: '700₺',
      regular: '750₺',
      late: '850₺',
      formLink: '#'
    },
    {
      icon: MdPerson,
      title: 'Individual Delegate',
      early: '750₺',
      regular: '800₺',
      late: '900₺',
      formLink: '#'
    },
    {
      icon: MdLanguage,
      title: 'International',
      early: '80€',
      regular: '85€',
      late: '90€',
      formLink: '#'
    },
    {
      icon: MdCameraAlt,
      title: 'Press',
      early: '450₺',
      regular: '500₺',
      late: '550₺',
      formLink: '#'
    },
    {
      icon: PiPackageThin,
      title: 'Admin',
      early: '450₺',
      regular: '500₺',
      late: '550₺',
      formLink: '#'
    }
  ];

  return (
    <Container maxW="container.xl" py={16}>
      <VStack spacing={12}>
        <Heading size="2xl">Apply Now</Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          w="full"
        >
          {applyOptions.map((option, index) => (
            <ApplyOption key={index} {...option} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Apply;
