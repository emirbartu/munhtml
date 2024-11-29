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
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();

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
            YAFLMUN'25
          </Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <ScrollLink to="hero" smooth={true} duration={500} spy={true}>
              <Button variant="ghost">Home</Button>
            </ScrollLink>
            <Box
              position="relative"
              onMouseEnter={onMenuOpen}
              onMouseLeave={onMenuClose}
            >
              <Menu isOpen={isMenuOpen} isLazy placement="bottom">
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  onClick={() => {
                    const element = document.getElementById('committees');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Committees
                </MenuButton>
                <MenuList
                  bg={menuBg}
                  borderColor={borderColor}
                  zIndex={1001}
                >
                <MenuItem as={RouterLink} to="/committees/disec" _hover={{ bg: menuHoverBg }}>GA1-DISEC</MenuItem>
                <MenuItem as={RouterLink} to="/committees/specpol" _hover={{ bg: menuHoverBg }}>GA4-SPECPOL</MenuItem>
                <MenuItem as={RouterLink} to="/committees/ilo" _hover={{ bg: menuHoverBg }}>ILO</MenuItem>
                <MenuItem as={RouterLink} to="/committees/f-unsc" _hover={{ bg: menuHoverBg }}>F-UNSC</MenuItem>
                <MenuItem as={RouterLink} to="/committees/ots" _hover={{ bg: menuHoverBg }}>OTS</MenuItem>
                <MenuItem as={RouterLink} to="/committees/uefa" _hover={{ bg: menuHoverBg }}>UEFA</MenuItem>
                <MenuItem as={RouterLink} to="/committees/fia" _hover={{ bg: menuHoverBg }}>FIA</MenuItem>
                <MenuItem as={RouterLink} to="/committees/jcc" _hover={{ bg: menuHoverBg }}>JCC</MenuItem>
                <MenuItem as={RouterLink} to="/committees/hcc" _hover={{ bg: menuHoverBg }}>HCC</MenuItem>
                <MenuItem as={RouterLink} to="/committees/crisis" _hover={{ bg: menuHoverBg }}>Reconquista of Spain</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <ScrollLink to="faq" smooth={true} duration={500} spy={true}>
              <Button variant="ghost">FAQ</Button>
            </ScrollLink>
            <ScrollLink to="schedule" smooth={true} duration={500} spy={true}>
              <Button variant="ghost">Schedule</Button>
            </ScrollLink>
            <ScrollLink to="venue" smooth={true} duration={500} spy={true}>
              <Button variant="ghost">Venue</Button>
            </ScrollLink>
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
        <ScrollLink to="hero" smooth={true} duration={500} spy={true}>
          <Button variant="ghost" w="100%" _hover={{ bg: menuHoverBg }}>Home</Button>
        </ScrollLink>
        <Box
          position="relative"
          onMouseEnter={onMenuOpen}
          onMouseLeave={onMenuClose}
        >
          <Menu isOpen={isMenuOpen} isLazy placement="bottom">
            <MenuButton
              as={Button}
              variant="ghost"
              w="100%"
              rightIcon={<ChevronDownIcon />}
              _hover={{ bg: menuHoverBg }}
              onClick={() => {
                const element = document.getElementById('committees');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Committees
            </MenuButton>
            <MenuList
              bg={menuBg}
              borderColor={borderColor}
              zIndex={1001}
            >
              <MenuItem as={RouterLink} to="/committees/disec" _hover={{ bg: menuHoverBg }}>GA1-DISEC</MenuItem>
              <MenuItem as={RouterLink} to="/committees/specpol" _hover={{ bg: menuHoverBg }}>GA4-SPECPOL</MenuItem>
              <MenuItem as={RouterLink} to="/committees/ilo" _hover={{ bg: menuHoverBg }}>ILO</MenuItem>
              <MenuItem as={RouterLink} to="/committees/f-unsc" _hover={{ bg: menuHoverBg }}>F-UNSC</MenuItem>
              <MenuItem as={RouterLink} to="/committees/ots" _hover={{ bg: menuHoverBg }}>OTS</MenuItem>
              <MenuItem as={RouterLink} to="/committees/uefa" _hover={{ bg: menuHoverBg }}>UEFA</MenuItem>
              <MenuItem as={RouterLink} to="/committees/fia" _hover={{ bg: menuHoverBg }}>FIA</MenuItem>
              <MenuItem as={RouterLink} to="/committees/jcc" _hover={{ bg: menuHoverBg }}>JCC</MenuItem>
              <MenuItem as={RouterLink} to="/committees/hcc" _hover={{ bg: menuHoverBg }}>HCC</MenuItem>
              <MenuItem as={RouterLink} to="/committees/crisis" _hover={{ bg: menuHoverBg }}>Reconquista of Spain</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <ScrollLink to="schedule" smooth={true} duration={500} spy={true}>
          <Button variant="ghost" w="100%" _hover={{ bg: menuHoverBg }}>Schedule</Button>
        </ScrollLink>
        <ScrollLink to="venue" smooth={true} duration={500} spy={true}>
          <Button variant="ghost" w="100%" _hover={{ bg: menuHoverBg }}>Venue</Button>
        </ScrollLink>
        <ScrollLink to="faq" smooth={true} duration={500} spy={true}>
          <Button variant="ghost" w="100%" _hover={{ bg: menuHoverBg }}>FAQ</Button>
        </ScrollLink>
        <Button
          as={RouterLink}
          to="/teams"
          variant="ghost"
          w="100%"
          _hover={{ bg: menuHoverBg }}
        >
          Teams
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
