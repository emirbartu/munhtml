import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const SPECPOLPage = () => {
  useEffect(() => {
    document.title = 'SPECPOL';
  }, []);

  const specpolData = {
    name: 'SPECPOL',
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
      "Agenda 1: Examining the effects of political corruption on decolonization and nation-building",
      "Agenda 2: Addressing political instability in post colonial states: the role of external powers"
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "SPECPOL, or the Special Political and Decolonization Committee, is a part of the UN General Assembly that focuses on political issues like decolonization, peacekeeping, and human rights. It also handles topics like refugee crises, outer space policies, and the peaceful use of atomic energy. Fundamentally , it works on finding solutions to global challenges that don’t fall under other committees, often focusing on helping countries to achieve stability."
  };

  return <CommitteePage committeeData={specpolData} />;
};

export default SPECPOLPage;
