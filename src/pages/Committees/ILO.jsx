import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const ILOPage = () => {
  useEffect(() => {
    document.title = 'ILO';
  }, []);

  const iloData = {
    name: 'ILO',
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
      'Immigrant labor frameworks',
      'Current worker shortage in europe'
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "ILO mainly aims to adress significant issues regarding the labor wrights and safe working contions. There are some key topics that would be discussed in the committee which are; the impact of globazation on labor markets, effects of technological developments on the future of work and working conditions. These key topics will be combined with the agenda items the impacts of migrants on markets and as a result the worker shortage will be discussed upon. In depth the increasement of migrants are not only effecting the oppurtine work options but also the quality of the industry, which would be reffered on the side."
  };

  return <CommitteePage committeeData={iloData} />;
};

export default ILOPage;
