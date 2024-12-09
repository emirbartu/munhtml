import React, { useEffect } from 'react';
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
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isMenuOpen, onOpen: onMenuOpen, onClose: onMenuClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if there's a section to scroll to from navigation state
    const state = location.state;
    if (state && state.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Clear the state to prevent repeated scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  const handleNavClick = (section) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== "/") {
      navigate("/", { 
        state: { scrollTo: section },
        replace: true 
      });
    } else {
      // If already on homepage, scroll directly
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    // Close mobile menu if open
    if (isOpen) {
      onToggle();
    }
  };

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
            <Button variant="ghost" onClick={() => handleNavClick('hero')}>Home</Button>
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
                  position="relative"
                  sx={{
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '-10px',
                      bottom: '-10px',
                      left: '-10px',
                      right: '-10px',
                      zIndex: 0,
                    },
                    '&:hover::after': {
                      background: 'transparent',
                    }
                  }}
                  onClick={() => handleNavClick('committees')}
                >
                  Committees
                </MenuButton>
                <MenuList
                  bg={menuBg}
                  borderColor={borderColor}
                  zIndex={1001}
                >
                  <MenuItem as={RouterLink} to="/committees/disec" _hover={{ bg: menuHoverBg }} onClick={onToggle}>GA1-DISEC</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/specpol" _hover={{ bg: menuHoverBg }} onClick={onToggle}>GA4-SPECPOL</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/ilo" _hover={{ bg: menuHoverBg }} onClick={onToggle}>ILO</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/eu" _hover={{ bg: menuHoverBg }} onClick={onToggle}>EU Parliament</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/f-unsc" _hover={{ bg: menuHoverBg }} onClick={onToggle}>F-UNSC</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/ots" _hover={{ bg: menuHoverBg }} onClick={onToggle}>OTS</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/uefa" _hover={{ bg: menuHoverBg }} onClick={onToggle}>UEFA</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/fia" _hover={{ bg: menuHoverBg }} onClick={onToggle}>FIA</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/jcc" _hover={{ bg: menuHoverBg }} onClick={onToggle}>JCC</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/hcc" _hover={{ bg: menuHoverBg }} onClick={onToggle}>HCC</MenuItem>
                  <MenuItem as={RouterLink} to="/committees/crisis" _hover={{ bg: menuHoverBg }} onClick={onToggle}>Cabinet of Cleopatra</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Button variant="ghost" onClick={() => handleNavClick('faq')}>FAQ</Button>
            <Button variant="ghost" onClick={() => handleNavClick('schedule')}>Schedule</Button>
            <Button variant="ghost" onClick={() => handleNavClick('venue')}>Venue</Button>
            <Button as={RouterLink} to="/teams" variant="ghost" onClick={onToggle}>
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
        <Button variant="ghost" w="100%" _hover={{ bg: menuHoverBg }} onClick={() => handleNavClick('hero')}>Home</Button>
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
              onClick={() => handleNavClick('committees')}
            >
              Committees
            </MenuButton>
          </Menu>
        </Box>
        <Button variant="ghost" w="100%" _hover={{ bg: menuHoverBg }} onClick={() => handleNavClick('schedule')}>Schedule</Button>
        <Button variant="ghost" w="100%" _hover={{ bg: menuHoverBg }} onClick={() => handleNavClick('venue')}>Venue</Button>
        <Button variant="ghost" w="100%" _hover={{ bg: menuHoverBg }} onClick={() => handleNavClick('faq')}>FAQ</Button>
        <Button
          as={RouterLink}
          to="/teams"
          variant="ghost"
          w="100%"
          _hover={{ bg: menuHoverBg }}
          onClick={onToggle}
        >
          Teams
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;