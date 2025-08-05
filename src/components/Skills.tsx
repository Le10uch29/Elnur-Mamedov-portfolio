import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.frontend,
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
   /* {
      title: t.skills.backend,
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'PostgreSQL', level: 68 },
        { name: 'REST API', level: 80 },
        { name: 'GraphQL', level: 60 },
      ],
    },*/
    {
      title: t.skills.tools,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Webpack', level: 75 },
        { name: 'Vite', level: 85 },
        { name: 'Docker', level: 65 },
        { name: 'Figma', level: 80 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            {t.skills.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp glow-effect"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

       
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              {t.skills.stack}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'Git', 'Figma'
              ].map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;