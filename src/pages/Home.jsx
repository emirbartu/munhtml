import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { VenueSection } from '../components/Venue/VenueSection';
import { CommitteeGrid } from '../components/Committees/CommitteeGrid';
import ScheduleSection from '../components/Schedule/Schedule';
import CountdownTimer from '../components/Countdown/CountdownTimer';
import FAQSection from '../components/FAQ/FAQSection';
import { useEffect } from 'react';

const Home = () => {
  const location = useLocation();
  const gradientText = useColorModeValue(
    'linear(to-r, pink.400, cyan.400)',
    'linear(to-r, pink.500, cyan.500)'
  );

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Container maxW="container.xl" position="relative">
      {/* Hero Section */}
      <Box
        id="hero"
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
      <VStack id="welcome" spacing={8} py={{ base: 24, md: 32 }} textAlign="center">
        <Heading
          as="h1"
          size="2xl"
          bgClip="text"
          color={'white'}
        >
        YAFLMUN'25

        </Heading>
        <CountdownTimer />
        <Button as={RouterLink} to="/apply" size="lg" colorScheme="blue">
          Apply Now
        </Button>
        <Text fontSize="xl" maxW="container.md">
        <Box
          p={8}
          borderRadius="xl"
          borderWidth="1px"
          boxShadow="md"
        >
          <Text fontSize="lg" lineHeight="tall">
          Esteemed Delegates and Distinguished Guests,
To begin with, we would like to welcome you all to the 2nd annual edition of YAFLMUN. As we greet you all with warm wishes and the spirit of the new year, with sheer excitement we can undoubtedly say that with the best of our efforts, we have tried to put on the greatest show that you will ever endure in the MUN community.
We have been selected to bring you the most absolute academic excellence this year with sharing the role of the Secretary-General position. With 2 General Assembly Committees, 4 Special Committees and 3 Crisis Committees we have prepared a much more complex and alluring MUN experience compared to last year with given our experience from YAFLMUN’23.
Lastly, as we have proven that an affordable, challenging and fun MUN experience is possible with the spirit of greatness which YAFLMUN holds in its core, this year we are ready to raise the stakes even higher and give you a complete experience which will hopefully be a fond experience for all of you.
We all expect you on January 21-24 at Istanbul Zaim University for YAFLMUN’25. <br />
Sincerely, <br />Co Secretaries-General
HAKKI YILMAZER, AHMET İSHAK YILMAZ
          </Text>
        </Box>
        </Text>
      </VStack>

      {/* Committees Section */}
      <Box id="committees" py={{ base: 12, md: 16 }}>
        <Heading as="h2" size="xl" textAlign="center" mb={12}>
          Committees
        </Heading>
        <CommitteeGrid />
      </Box>

      {/* FAQ Section */}
      <Box id="faq">
        <FAQSection />
      </Box>

      {/* Schedule Section */}
      <Box id="schedule">
        <ScheduleSection />
      </Box>

      {/* Venue Section */}
      <Box id="venue">
        <VenueSection />
      </Box>
    </Container>
  );
};

export default Home;
