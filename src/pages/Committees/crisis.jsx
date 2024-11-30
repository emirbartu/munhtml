import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const CrisisPage = () => {
  useEffect(() => {
    document.title = 'Reconquista of Spain';
  }, []);

  const crisisData = {
    name: 'Reconquista of Spain',
    usg1: {
      name: 'Hakkı Yılmaz Yılmazer',
      image: '/src/assets/akademi/hyy.JPG',
      title: 'Under-Secretary-General'
    },
    usg2: {
      name: 'Daron Acemoğlu',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Acemoglu_2016_%283x4_cropped%29.png',
      title: 'Under-Secretary-General'
    },
    agendaItems: [
      'Agenda: Cabinet of Cleopatra'
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "The Nile flows red with conflict as Cleopatra VII, Queen of the Nile, navigates the treacherous tides of diplomacy, war, and ambition. Every decision will ripple across kingdoms, stirring chaos or forging alliances, as rival empires vie to claim Cleopatra’s throne and Egypt’s riches. Intrigue is the currency of this court. Secrets will be uncovered, and loyalties tested. Will you rise above the chaos to secure Egypt’s glory, or will the sands of time bury your efforts in obscurity? The weight of a kingdom rests on your shoulders, and the eyes of the ancient world are upon you."
  };

  return <CommitteePage committeeData={crisisData} />;
};

export default CrisisPage;
