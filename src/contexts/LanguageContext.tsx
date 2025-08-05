import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ru';

interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    downloadCV: string;
    contactMe: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    years: string;
    projects: string;
    completed: string;
    description2: string;
  };
  skills: {
    title: string;
    frontend: string;
    //backend: string;
    tools: string;
    stack: string;
  };
  projects: {
    title: string;
    viewProject: string;
    technologies: string;
  };
   projectsDescr: {
description0: string;
description1: string;
description2: string;
description3: string;
description4: string;
description5: string;
  };
  contact: {
    title: string;
    description: string;
    title2: string;
    email: string;
    phone: string;
    location: string;
    value: string;
    socialLinks: string;
    sendMessage:string;
  };
sendForm: {
  name: string;
  nameValue: string;
  subject: string;
  subjectMessage: string;
  message:string;
  textMessage: string;
sendMessageBtn: string;
}
}

const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    hero: {
      greeting: 'Привет, я',
      name: 'Эльнур Мамедов',
      title: 'Frontend Разработчик',
      description: 'Создаю современные веб-приложения с использованием React, TypeScript и Next.js. Увлечен разработкой интуитивных пользовательских интерфейсов.',
      downloadCV: 'Скачать CV',
      contactMe: 'Связаться',
    },
    about: {
      title: 'Обо мне',
      description: 'Я страстный frontend разработчик с опытом создания современных веб-приложений. Специализируюсь на React экосистеме и всегда стремлюсь к изучению новых технологий.',
      experience: 'Опыт работы',
      years: '1+ года',
      projects: 'Проекты',
      completed: '5+',
      description2: 'Я страстный frontend разработчик с опытом создания современных веб-приложений. Специализируюсь на React экосистеме и всегда стремлюсь к изучению новых технологий.',
    },
    skills: {
      title: 'Навыки',
      frontend: 'Frontend',
      //backend: 'Backend',
      tools: 'Инструменты',
      stack:'Технологический стек',
    },
    projects: {
      title: 'Мои Проекты',
      viewProject: 'Посмотреть проект',
      technologies: 'Технологии',
    },
    projectsDescr:{
description0: 'Shafatap — веб-приложение для онлайн-записи к врачам и проверки наличия медикаментов в аптеках. Пользователи могут получать результаты анализов и консультации дистанционно, без необходимости посещения медучреждений и ожидания в очередях.',
description1: 'Asncora — компания, специализирующаяся на разработке веб-сайтов и мобильных приложений, предоставляющая индивидуальные digital-решения для бизнеса.',
description2: 'Shyft — модуль приложения для покупки и продажи криптовалют, обеспечивающий удобный и безопасный обмен цифровых активов.',
description3: 'Sebetim — сайт для онлайн-заказа продуктовых корзин с натуральными деревенскими товарами. Доступны три варианта корзин: Стандарт, Премиум и ВИП — отличаются составом и весом продукции.',
description4: 'Warehouse — приложение для управления складскими запасами. Позволяет отслеживать количество товаров, их перемещения, а также сохраняет информацию о том, кто добавил товар и куда он был отправлен.',
description5: 'Boost is a welcome screen for competitive projects that creates a first impression and gets the user ready to participate in the competition.',
    },
    contact: {
      title: 'Связаться со мной',
      description: 'Готов обсудить новые возможности и проекты',
      title2: 'Давайте обсудим ваш проект',
      email: 'Электронная почта',
      phone: 'Телефон',
      location: 'Местоположение',
      value: 'Грузия, Марнеули',
      socialLinks: 'Социальные сети',
      sendMessage: 'Отправить сообщение',
    },
sendForm: {
   name: 'Имя',
  nameValue: 'Ваше имя',
  subject: 'Тема',
  subjectMessage: 'Тема сообщения',
  message: 'Сообщения',
  textMessage: 'Расскажите о вашем проекте...',
  sendMessageBtn: 'Отправить сообщение',
},

  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Elnur Mamedov',
      title: 'Frontend Developer',
      description: 'I create modern web applications using React, TypeScript and Next.js. Passionate about building intuitive user interfaces.',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      description: 'I\'m a passionate frontend developer with experience in creating modern web applications. I specialize in React ecosystem and always strive to learn new technologies.',
      experience: 'Experience',
      years: '1+ years',
      projects: 'Projects',
      completed: '5+',
      description2:'My approach to development is based on attention to detail, performance and user experience. I am constantly learning new technologies and following industry best practices.',
    },
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      //backend: 'Backend',
      tools: 'Tools',
      stack:'Tech stack',
    },
    projects: {
      title: 'My Projects',
      viewProject: 'View Project',
      technologies: 'Technologies',
    },
     projectsDescr:{
description0: 'Shafatap is a web application for online appointments with doctors and checking the availability of medicines in pharmacies. Users can receive test results and consultations remotely, without having to visit medical institutions and wait in lines.',
description1: 'Asncora is a website and mobile app development company providing customized digital solutions for businesses.',
description2: 'Shyft is an application module for buying and selling cryptocurrencies, providing a convenient and secure exchange of digital assets.',
description3: 'Sebetim is a website for online ordering of food baskets with natural village products. Three basket options are available: Standard, Premium and VIP - differ in the composition and weight of the products.',
description4: 'Warehouse is an application for managing warehouse stocks. It allows you to track the number of goods, their movements, and also saves information about who added the goods and where they were sent.',
description5: 'Boost is a welcome screen for competitive projects that creates a first impression and gets the user ready to participate in the competition.',
     },
    contact: {
      title: 'Get In Touch',
      description: 'Ready to discuss new opportunities and projects',
      title2: 'Lets discuss your project',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      value: 'Georgia, Marneuli',
      socialLinks: 'Social links',
      sendMessage: 'Send message',
    },
sendForm: {
   name: 'Name',
  nameValue: 'Your name',
  subject: 'Subject',
  subjectMessage: 'Message Subject',
  message: 'Messages',
  textMessage: 'Tell us about your project...',
  sendMessageBtn: 'Send message',
},
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t: translations[language] 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};