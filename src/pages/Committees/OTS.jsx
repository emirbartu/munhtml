import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const OTSPage = () => {
  useEffect(() => {
    document.title = 'Organization of Turkic States';
  }, []);

  const otsData = {
    name: 'OTS',
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
    description: "The Organization of Turkic States (OTS) is an international organization that promotes cooperation among Turkic-speaking countries. Founded in 2009 as the Turkic Council, it was renamed the Organization of Turkic States in 2021. The organization focuses on strengthening cultural, economic, political, and social ties among its members. The organization’s key goals are enhancing economic collaboration, trade, and connectivity, fostering cultural and linguistic unity among Turkic peoples, and promoting regional peace, security, and development. The Uyghur Turks are a Turkic ethnic group primarily living in the Xinjiang Uyghur Autonomous Region in northwest China. They are one of China's officially recognized ethnic minorities and have a rich cultural heritage rooted in Turkic traditions and Islamic faith. In recent years, the Uyghur population has drawn global attention due to allegations of cultural suppression, mass detentions, and human rights abuses by the Chinese government. These issues have highlighted the tension between the Uyghurs' desire to preserve their cultural and religious identity and Beijing's policies of integration and control. Organization of Turkic States in this matter will set this issue as its agenda and will try to reach a treaty/agreement between the states through negotiations and actions"
  };

  return <CommitteePage committeeData={otsData} />;
};

export default OTSPage;
