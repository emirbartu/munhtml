import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const DISECPage = () => {
  useEffect(() => {
    document.title = 'GA1-DISEC';
  }, []);

  const disecData = {
    name: 'GA1-DISEC',
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
      "Agenda 1: The Role of Religious Extremism in Global Security",
      "Agenda 2: Ethnic Cleansing and Genocidal Warfare"
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "The Disarmament and International Security Committee (DISEC) is dedicated to addressing global peace and security challenges, focusing on disarmament, conflict resolution, and threats to international stability. In this session, DISEC will explore two critical agendas: the role of religious extremism in global security and ethnic cleansing and genocidal warfare. Delegates are tasked with engaging in constructive dialogue, fostering collaboration, and working toward comprehensive solutions to these pressing global issues."
  };

  return <CommitteePage committeeData={disecData} />;
};

export default DISECPage;
