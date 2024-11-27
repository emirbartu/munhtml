import React from 'react';
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';

const FAQSection = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const faqs = [
    {
      question: 'What is YAFLMUN?',
      answer: 'YAFLMUN (YAFL Model United Nations) is an annual conference that simulates United Nations committees and international organizations. It provides students with an opportunity to develop their diplomatic, public speaking, and problem-solving skills while addressing global issues.',
    },
    {
      question: 'Who can participate in YAFLMUN?',
      answer: 'YAFLMUN is open to high school students from all around the world. Whether you\'re a beginner or an experienced MUN delegate, we welcome all students who are passionate about international relations and diplomacy.',
    },
    {
      question: 'How can I apply to YAFLMUN?',
      answer: 'You can apply by clicking the "Apply Now" button at the top of our website. The application process includes filling out a registration form and selecting your preferred committees. Early applications are encouraged as spots fill up quickly.',
    },
    {
      question: 'What committees are available?',
      answer: 'YAFLMUN offers a diverse range of committees including DISEC, UNSC, ILO, and UNHRC. Each committee focuses on specific global issues and provides unique opportunities for debate and resolution drafting.',
    },
    {
      question: 'Is there a participation fee?',
      answer: 'Yes, there is a registration fee that covers conference materials, venue costs, and refreshments during the conference. Early bird registration discounts are available. Please contact us for specific fee information.',
    },
  ];

  return (
    <Container maxW="container.xl" py={{ base: 8, md: 12, lg: 16 }}>
      <Box
        bg={bgColor}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={borderColor}
        p={{ base: 4, md: 6, lg: 8 }}
        boxShadow="lg"
      >
        <Heading
          as="h2"
          size={{ base: "lg", md: "xl" }}
          textAlign="center"
          mb={{ base: 6, md: 8 }}
        >
          Frequently Asked Questions
        </Heading>
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h3>
                <AccordionButton
                  py={{ base: 3, md: 4 }}
                  _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                >
                  <Box flex="1" textAlign="left" fontSize={{ base: "md", md: "lg" }}>
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel
                pb={4}
                fontSize={{ base: "sm", md: "md" }}
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Container>
  );
};

export default FAQSection;
