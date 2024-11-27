import { useEffect } from 'react';
import CommitteePage from '../CommitteePage';

const UNHRCPage = () => {
  useEffect(() => {
    document.title = 'UNHRC - MUN Conference';
  }, []);

  const unhrcData = {
    name: 'UNHRC',
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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, distinctio facere modi saepe repellat, voluptatibus voluptate voluptates dignissimos asperiores perspiciatis fuga placeat itaque eaque repudiandae eius atque dolore iusto optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio rem atque optio ullam culpa sapiente, laudantium autem fugiat mollitia itaque aut? Earum vero eligendi cupiditate nam veniam veritatis asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium voluptatibus fugiat provident. Eius dolor totam amet hic ratione culpa provident aut. Consequatur corrupti earum est accusantium natus, quo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, distinctio facere modi saepe repellat, voluptatibus voluptate voluptates dignissimos asperiores perspiciatis fuga placeat itaque eaque repudiandae eius atque dolore iusto optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio rem atque optio ullam culpa sapiente, laudantium autem fugiat mollitia itaque aut? Earum vero eligendi cupiditate nam veniam veritatis asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium voluptatibus fugiat provident. Eius dolor totam amet hic ratione culpa provident aut. Consequatur corrupti earum est accusantium natus, quo sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, distinctio facere modi saepe repellat, voluptatibus voluptate voluptates dignissimos asperiores perspiciatis fuga placeat itaque eaque repudiandae eius atque dolore iusto optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio rem atque optio ullam culpa sapiente, laudantium autem fugiat mollitia itaque aut? Earum vero eligendi cupiditate nam veniam veritatis asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium voluptatibus fugiat provident. Eius dolor totam amet hic ratione culpa provident aut. Consequatur corrupti earum est accusantium natus, quo sapiente! Fugiat, distinctio facere modi saepe repellat, voluptatibus voluptate voluptates dignissimos asperiores perspiciatis fuga placeat itaque eaque repudiandae eius atque dolore iusto optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio rem atque optio ullam culpa sapiente, laudantium autem fugiat mollitia itaque aut? Earum vero eligendi cupiditate nam veniam veritatis asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium voluptatibus fugiat provident. Eius dolor totam amet hic ratione culpa provident aut. Consequatur corrupti earum est accusantium natus, quo sapiente!"
  };

  return <CommitteePage committeeData={unhrcData} />;
};

export default UNHRCPage;
