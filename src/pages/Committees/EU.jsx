import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const EUPage = () => {
  useEffect(() => {
    document.title = 'European Parliament';
  }, []);

  const euData = {
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
      'Agenda: Adressing the Rise of Populism and Extremism in Europe'
    ],
    studyGuideUrl: '/study-guides/unhrc-2024.pdf',
    description: "The European Parliament is the legislative group of the European Union. It stands for its people's desires and forms plans on many matters. The parliament has Members who are chosen by direct voting, also known as MEPs; these members have a very important part in forming EU laws. They nurture conversation and make sure there is democratic rule inside the Union. Their duties involve looking into new political, social, and financial issues that could disturb Europe's peace or unity to ensure that EU standards stay safe even when things around them are changing quickly worldwide. As for it's Agenda Item, you will be discussing the increasing of populism and extremism in Europe. This new phenomenon can harm fundamental democratic beliefs of the European Union. Therefore, you need to discuss upon the reasons and impacts from these movements that generally take advantage from social-economic complaints, political disappointment, and cultural worries. The group will discuss peaceful ways to fight against the increase in populist and extremist thinking by focusing on laws which help make democracy stronger, encourage society unity, protect basic rights throughout Europe. The goal is to build holistic approaches for fighting these splitting powers, safeguarding the EU's fundamental principles of acceptance, inclusion and human respect."
  };

  return <CommitteePage committeeData={euData} />;
};

export default EUPage;
