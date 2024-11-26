import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  HStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const menuBg = useColorModeValue('white', 'gray.800');
  const menuHoverBg = useColorModeValue('gray.100', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      top={0}
      zIndex={1000}
      bg={bgColor}
      color={textColor}
      boxShadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
      backdropFilter="blur(8px)"
    >
      <Flex
        minH="60px"
        py={2}
        px={4}
        align="center"
        justify="space-between"
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />

        <HStack spacing={8} alignItems="center">
          <Box as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
            MUN TEMPLATE
          </Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                Committees
              </MenuButton>
              <MenuList bg={menuBg} borderColor={borderColor}>
                <MenuItem as={RouterLink} to="/committees/disec" _hover={{ bg: menuHoverBg }}>DISEC</MenuItem>
                <MenuItem as={RouterLink} to="/committees/unsc" _hover={{ bg: menuHoverBg }}>UNSC</MenuItem>
                <MenuItem as={RouterLink} to="/committees/ecosoc" _hover={{ bg: menuHoverBg }}>ECOSOC</MenuItem>
                <MenuItem as={RouterLink} to="/committees/unhrc" _hover={{ bg: menuHoverBg }}>UNHRC</MenuItem>
              </MenuList>
            </Menu>
            <Button as={RouterLink} to="/teams" variant="ghost">
              Teams
            </Button>
          </HStack>
        </HStack>

        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle Theme"
        />
      </Flex>

      {/* Mobile Navigation */}
      <Stack
        display={{ base: isOpen ? 'flex' : 'none', md: 'none' }}
        bg={bgColor}
        p={4}
        borderTop="1px"
        borderColor={borderColor}
      >
        <Button
          as={RouterLink}
          to="/teams"
          variant="ghost"
          _hover={{ bg: menuHoverBg }}
        >
          Teams
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="ghost"
            w="100%"
            _hover={{ bg: menuHoverBg }}
          >
            Committees
          </MenuButton>
          <MenuList bg={menuBg} borderColor={borderColor}>
            <MenuItem as={RouterLink} to="/committees/disec" _hover={{ bg: menuHoverBg }}>DISEC</MenuItem>
            <MenuItem as={RouterLink} to="/committees/unsc" _hover={{ bg: menuHoverBg }}>UNSC</MenuItem>
            <MenuItem as={RouterLink} to="/committees/ecosoc" _hover={{ bg: menuHoverBg }}>ECOSOC</MenuItem>
            <MenuItem as={RouterLink} to="/committees/unhrc" _hover={{ bg: menuHoverBg }}>UNHRC</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Box>
  );
};

export default Header;
