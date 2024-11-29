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
        question: 'What is the procedure of YAFLMUN’25?',
        answer: 'YAFLMUN’25 will follow the Harvard Procedure.',
    },
    {
        question: 'Where will the conference be held?',
        answer: 'The conference will take place at Istanbul Zaim University.',
    },
    {
        question: 'When will the conference be held?',
        answer: 'The conference will be held in January, 21-24, 2025.',
    },
    {
        question: 'Do you provide accommodation?',
        answer: 'No, unfortunately we do not.',
    },
    {
        question: 'Is attending all sessions mandatory?',
        answer: 'Yes, you have to attend all the sessions. If you miss 2 sessions, you will not be able to have an award. If you miss 3 sessions, you will not be given a certificate.',
    },
    {
        question: 'Are there any options for different types of eating habits (vegan, vegetarian, etc.)?',
        answer: 'We have already asked you about your eating habits in the application forms. If you have a different type of food choice, we expect you to mention it in the application form and contact us via the given email or phone numbers.',
    },
    {
        question: 'I am a university student. Can I still apply for this conference?',
        answer: 'Yes, all university students are welcomed at our conference.',
    },
    {
        question: 'What is the dress code of YAFLMUN’25?',
        answer: 'Our dress code is Western Business Attire. Male participants are required to wear a jacket during GSL speeches, and ties or bow ties are mandatory for them.',
    },
    {
        question: 'Which committees are you suggesting for first timers?',
        answer: 'First timers should apply for one of the two GA committees. They are: GA1: DISEC, GA3: SOCHUM.',
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
