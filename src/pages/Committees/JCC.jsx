import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const JCCPage = () => {
  useEffect(() => {
    document.title = 'JCC';
  }, []);

  const jccData = {
    name: 'JCC',
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
      "Agenda: Ukrainian Civil War"
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "After the catastrophic collapse of the Russian Empire, the scars of war and ideological enmity remained in Russia and the former member states of the Russian Empire. The most important of these countries and the one that has seen the bloodiest wars was Ukraine. On the one hand, the anarchist-communist Ukrainian Soviet Socialist Republic, which has the support of workers and farmers and wants to establish communist utopia by fighting on the same front with Soviet Russia. On the other hand, the Ukrainian People's republic, which combined the support of the army and the Ukrainian people with nationalist sentiments and won the support of the German Monarchy. These two small but important governments will be ready to do anything to take power. And the stage is set for a civil war that could decide the fate of world."
  };

  return <CommitteePage committeeData={jccData} />;
};

export default JCCPage;
