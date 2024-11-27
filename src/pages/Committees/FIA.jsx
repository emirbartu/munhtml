import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const FIAPage = () => {
  useEffect(() => {
    document.title = 'FIA';
  }, []);

  const fiaData = {
    name: 'FIA',
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
      'Para kazanma falan',
      'Sonbahar yaprakları yakın zamanda altından daha mı değerli olacak'
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: " The FIA, or Fédération Internationale de l'Automobile, is the governing body for world motor sport and the federation of the world's leading motoring organizations, dedicated to ensuring safety, sustainability, and fair competition in automotive and motorsport activities globally. In this committee the delegates will each represent a council member in the year 2008- the year one of the biggest Formula 1 scandals, the Crashgate Scandal took place. They will each have different secrets they want to keep buried while investigating and discussing the scandal. Will you be able to keep your dirty works secret or will you be exposed to the whole world? What about the investigation? What measures are going to be taken?"
  };

  return <CommitteePage committeeData={fiaData} />;
};

export default FIAPage;
