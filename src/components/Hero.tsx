import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">

          <div className="animate-fadeInUp">
            <p className="text-lg text-muted-foreground mb-4 animate-slideInLeft">
              {t.hero.greeting}
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInRight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 animate-fadeInUp">
              {t.hero.title}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeInUp">
              {t.hero.description}
            </p>
          </div>


          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp">
<Button 
  className="btn-gradient min-w-[160px] h-12 text-base font-medium"
  onClick={() => {
    const fileName = language === 'ru' ? 'cv-ru.pdf' : 'cv-en.pdf';
    window.open(`/${fileName}`, '_blank');
  }}
>
  <Download className="mr-2" size={20} />
  {t.hero.downloadCV}
</Button>

            
            <Button 
              variant="outline" 
              className="min-w-[160px] h-12 text-base font-medium glow-effect"
              onClick={scrollToContact}
            >
              <Mail className="mr-2" size={20} />
              {t.hero.contactMe}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fadeInUp">
            <a 
              href="https://github.com/Le10uch29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/elnur-mamedov-673b19317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:01elnurmamedov@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;