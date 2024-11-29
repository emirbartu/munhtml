import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const FUNSCPage= () => {
  useEffect(() => {
    document.title = 'F-UNSC';
  }, []);

  const funscData = {
    name: 'F-UNSC',
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
      'Agenda: Aegean Sea Crisis 2028'
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "UNSC, the United Nations Security Council is one of the 6 principal organs of the United Nations and is charged with ensuring international peace and security, approving new members to the United Nations, and ratifying changes made to the UN Charter. Deemed by many to be the most important factor of the United Nations, the UNSC has a vital and pivotal role in securing the peace and prosperity of the globe. At the YAFLMUN'25 FUTURISTIC UNSC committee, delegates will travel to 2028, a time when the Aegean Sea Crisis first broke out and shifted the world's agenda. They will prepare to take action in accordance with their countries' perspective and policy and seek to find stable and comprehensive solutions that will ensure peace around the region. The delegates will need to take into account all perspectives of the conflict and manufacture a resolution paper that will be satisfactory for all sides of the Aegean Sea Crisis."
  };

  return <CommitteePage committeeData={funscData} />;
};

export default FUNSCPage;
