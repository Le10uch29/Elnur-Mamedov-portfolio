import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Code,
      label: t.about.experience,
      value: t.about.years,
    },
    {
      icon: Trophy,
      label: t.about.projects,
      value: t.about.completed,
    },
    {
      icon: Users,
      label: 'Клиенты',
      value: '8+',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            {t.about.title}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Текст */}
            <div className="animate-slideInLeft">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.about.description}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
               {t.about.description2}
              </p>

              {/* Статистика */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="text-center p-4 rounded-lg bg-card hover:shadow-lg transition-all duration-300"
                    >
                      <IconComponent className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Изображение/Визуал */}
            <div className="animate-slideInRight">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mb-6 mx-auto flex items-center justify-center">
                      <Code className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Frontend Developer
                    </h3>
                    <p className="text-muted-foreground">
                      React • TypeScript • Next.js
                    </p>
                  </div>
                </div>
                
                {/* Плавающие элементы */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;