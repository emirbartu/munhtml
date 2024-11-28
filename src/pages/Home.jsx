import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { VenueSection } from '../components/Venue/VenueSection';
import { CommitteeGrid } from '../components/Committees/CommitteeGrid';
import ScheduleSection from '../components/Schedule/Schedule';
import CountdownTimer from '../components/Countdown/CountdownTimer';
import FAQSection from '../components/FAQ/FAQSection';

const Home = () => {
  const gradientText = useColorModeValue(
    'linear(to-r, pink.400, cyan.400)',
    'linear(to-r, pink.500, cyan.500)'
  );

  return (
    <Container maxW="container.xl" position="relative">
      {/* Hero Section */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        width="100vw"
        height="400px"
        bgImage="src/assets/thumbnail/banner.jpg"
        bgSize="cover"
        bgPosition="center"
        backgroundRepeat={0}
        filter="blur(2px)"
        opacity="0.8"
        zIndex="-1"
      />
      <VStack spacing={8} py={{ base: 24, md: 32 }} textAlign="center">
        <Heading
          as="h1"
          size="2xl"
          bgClip="text"
          color={'white'}
        >
        YAFLMUN'25

        </Heading>
        <CountdownTimer />
        <Text fontSize="xl" maxW="container.md">
          Your gateway to an exceptional Model United Nations experience.
          Join us in shaping the future of international diplomacy.
        </Text>
      </VStack>

      {/* Committees Section */}
      <Box py={{ base: 12, md: 16 }}>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Committees
        </Heading>
        <CommitteeGrid />
      </Box>

      {/* FAQ Section */}
      <FAQSection />

      {/* Schedule Section */}
      <ScheduleSection />

      {/* Venue Section */}
      <VenueSection />
    </Container>
  );
};

export default Home;
