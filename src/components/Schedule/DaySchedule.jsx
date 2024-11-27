import { Box, VStack, Text, Heading } from '@chakra-ui/react';

const DaySchedule = ({ day, date, scheduleItems, specialItem, isActive }) => {
  return (
    <Box
      display={isActive ? 'block' : 'none'}
      id={`day${day}D`}
      w="100%"
    >
      <VStack align="stretch" spacing={4}>
        <Box mb={4}>
          <Heading as="h3" size="md">Day {day}</Heading>
          <Text>- {date}</Text>
        </Box>
        {scheduleItems.map((item, index) => (
          <Box
            key={index}
            p={4}
            borderRadius="md"
            bg="gray.50"
            _dark={{ bg: 'gray.700' }}
          >
            <Text fontWeight="bold">{item.time}</Text>
            <Text>{item.topic}</Text>
          </Box>
        ))}
        {specialItem && specialItem.map((item, index) => (
          <Box
            key={index}
            p={4}
            borderRadius="md"
            bg="yellow.50"
            _dark={{ bg: 'yellow.700' }}
          >
            <Text fontWeight="bold">{item.time}</Text>
            <Text>{item.topic}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default DaySchedule;
