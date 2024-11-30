import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const UEFAPage = () => {
  useEffect(() => {
    document.title = 'UEFA';
  }, []);

  const uefaData = {
    name: 'UEFA',
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
      'Agenda: 2010-2011 Turkish Super League Match Fixing Scandal'
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "UEFA, the governing body for football in Europe, oversees a range of prestigious competitions such as the UEFA European Championship, UEFA Nations League, UEFA Champions League, UEFA Europa League, UEFA Conference League, and UEFA Super Cup. It manages prize money, regulations, and media rights for these events, ensuring the smooth operation and success of European football at both national and club levels."
  };

  return <CommitteePage committeeData={uefaData} />;
};

export default UEFAPage;
