import { useState } from 'react';
import { Box, Container, VStack, Heading, SimpleGrid, Button, Text, useColorModeValue } from '@chakra-ui/react';
import DaySchedule from './DaySchedule';

const scheduleData = [
    {
      day: 1,
      date: '21 Jan 2025',
      items: [
        { time: '08:00 - 09:30', topic: 'Registration' },
        { time: '09:30 - 11:00', topic: 'Opening Ceremony' },
        { time: '11:00 - 11:15', topic: 'Coffee Break' },
        { time: '11:15 - 12:00', topic: 'Session 1' },
        { time: '12:00 - 13:30', topic: 'Lunch' },
        { time: '13:30 - 15:00', topic: 'Session 2' },
        { time: '15:00 - 15:30', topic: 'Coffee Break' },
        { time: '15:30 - 17:00', topic: 'Session 3' }
      ]
    },
    {
      day: 2,
      date: '22 Jan 2025',
      items: [
        { time: '08:30 - 09:00', topic: 'Breakfast' },
        { time: '09:00 - 10:30', topic: 'Session 4' },
        { time: '10:30 - 11:00', topic: 'Coffee Break' },
        { time: '11:00 - 12:30', topic: 'Session 5' },
        { time: '12:30 - 14:00', topic: 'Lunch' },
        { time: '14:00 - 15:30', topic: 'Session 6' },
        { time: '15:30 - 16:00', topic: 'Coffee Break' },
        { time: '16:00 - 17:30', topic: 'Session 7' }
      ]
    },
    {
      day: 3,
      date: '23 Jan 2025',
      items: [
        { time: '08:30 - 09:00', topic: 'Breakfast' },
        { time: '09:00 - 10:30', topic: 'Session 8' },
        { time: '10:30 - 11:00', topic: 'Coffee Break' },
        { time: '11:00 - 12:30', topic: 'Session 9' },
        { time: '12:30 - 14:00', topic: 'Lunch' },
        { time: '14:00 - 15:30', topic: 'Session 10' },
        { time: '15:30 - 16:00', topic: 'Coffee Break' },
        { time: '16:00 - 17:30', topic: 'Session 11' },
      ],
      specialItem: [
        { time: '18:30 - 21:30', topic: 'Traditional Night' }
      ]
    },
    {
      day: 4,
      date: '24 Jan 2025',
      items: [
        { time: '08:30 - 09:00', topic: 'Breakfast' },
        { time: '09:00 - 10:30', topic: 'Session 12' },
        { time: '10:30 - 11:00', topic: 'Coffee Break' },
        { time: '11:00 - 12:30', topic: 'Session 13' },
        { time: '12:30 - 14:00', topic: 'Lunch' },
        { time: '14:00 - 15:30', topic: 'Session 14' },
        { time: '15:30 - 15:45', topic: 'Break' },
        { time: '15:45 - 16:30', topic: 'Closing 1 (Cabinet JCC HCC FIA UEFA)' },
        { time: '16:30 - 16:45', topic: 'Break' },
        { time: '16:45 - 18:00', topic: 'Closing 2 (ILO SPECPOL F-UNSC D(ISaac) OTS)' }
      ]
    }
  ];
  
const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(1);
  const gradientTextColor = useColorModeValue('blue.500', 'blue.300');
  const buttonBg = useColorModeValue('gray.100', 'gray.700');
  const activeButtonBg = useColorModeValue('blue.500', 'blue.600');
  const buttonTextColor = useColorModeValue('gray.800', 'white');
  const activeButtonTextColor = 'white';

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading
            as="h3"
            size="lg"
            textAlign="center"
            mb={6}
            color={gradientTextColor}
          >
            Conference Days
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 12 }} spacing={8}>
            <Box gridColumn={{ md: 'span 4' }}>
              <VStack spacing={4} align="stretch">
                {scheduleData.map((day) => (
                  <Button
                    key={day.day}
                    onClick={() => setActiveDay(day.day)}
                    bg={activeDay === day.day ? activeButtonBg : buttonBg}
                    color={activeDay === day.day ? activeButtonTextColor : buttonTextColor}
                    _hover={{
                      bg: activeDay === day.day ? activeButtonBg : 'blue.400',
                      color: 'white'
                    }}
                    size="lg"
                    width="100%"
                  >
                    <Box textAlign="left" width="100%">
                      <Text fontWeight="bold">Day {day.day}</Text>
                      <Text fontSize="sm">- {day.date}</Text>
                    </Box>
                  </Button>
                ))}
              </VStack>
            </Box>

            <Box gridColumn={{ md: 'span 8' }}>
              {scheduleData.map((day) => (
                <DaySchedule
                  key={day.day}
                  day={day.day}
                  date={day.date}
                  scheduleItems={day.items}
                  specialItem={day.specialItem || []} // Add this line
                  isActive={activeDay === day.day}
                />
              ))}
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ScheduleSection;
