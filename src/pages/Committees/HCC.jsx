import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const HCCPage = () => {
  useEffect(() => {
    document.title = 'HCC';
  }, []);

  const hccData = {
    name: 'HCC',
    usg1: {
      name: '',
      image: '',
      title: 'Under-Secretary-General'
    },
    usg2: {
      name: '',
      image: '',
      title: 'Under-Secretary-General'
    },
    agendaItems: [
      'Agenda: Spanish Reconquista'
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "In the Reconquista of Spain committee of the YAFLMUN'25 conference, delegates will delve into the centuries-long conflict that shaped the Iberian Peninsula, still effective in our modern day, creating -or possibly ruining...- the unification of Spain under Christian rule. During the excruciating decades from the 8th century to the 15th, diplomats and warriors of this era are to witness cultural exchanges, territorial battles, and shifting alliances among Christian and Muslim states. Exploring and the intricate dynamics of medieval Spain, this committee is designed for war-driven crisis enthusiasts who wish to be challenged, and to rewrite history by fostering innovative -or destructive- solutions to longstanding conflicts that enables them to play with the balance of power across one of the most transformative eras of both Spanish and North African historical heritage. Do you not dare to go against the longstanding authority of the Spanish rule? Or are you braver than your ancestors? The world will find out in YAFLMUN'25…"
  };

  return <CommitteePage committeeData={hccData} />;
};

export default HCCPage;
