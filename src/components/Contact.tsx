import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import  { useState } from "react";
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { t } = useLanguage();

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();

     emailjs.send(
    'service_cpg0tqi',
    'template_ouab4od',
    formData,
    '_k12LRLcCVClf-_VL'
  )
  .then(() => {
    alert('Сообщение отправлено!');
    setFormData({ name: '', email: '', title: '', message: '' });
  }, (error) => {
    alert('Ошибка отправки. Попробуйте позже.');
    console.error(error.text);
  });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: '01elnurmamedov@gmail.com',
      href: 'mailto:01elnurmamedov@gmail.com',
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+995 (599) 45-00-95',
      href: 'tel:+995599450095',
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.value,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: MessageCircle,
      href: 'https://t.me/elnurZo',
      label: 'Telegram',
    },
  ];



  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fadeInUp">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground animate-fadeInUp">
              {t.contact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Контактная информация */}
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">
                {t.contact.title2}
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Социальные сети */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  {t.contact.socialLinks}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                        title={social.label}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Форма обратной связи */}
            <div className="animate-slideInRight">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  {t.contact.sendMessage}
                </h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t.sendForm.name}
                      </label>
                      <Input
                      name="name"
                        type="text"
                        placeholder={t.sendForm.nameValue}
                        required
                        className="w-full"
                                        value={formData.name}
                onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                       name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="w-full"
                                        value={formData.email}
                onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t.sendForm.subject}
                    </label>
                    <Input
                     name="title"
                      type="text"
                      placeholder={t.sendForm.subjectMessage}
                      required
                      className="w-full"
                                      value={formData.title}
                onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                     {t.sendForm.message}
                    </label>
                    <Textarea
                      name="message"
                      placeholder={t.sendForm.textMessage}
                      rows={6}
                      required
                      className="w-full resize-none"
                                      value={formData.message}
                onChange={handleChange}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full btn-gradient h-12 text-base font-medium"
                  >
                    <Send size={20} className="mr-2" />
                    {t.sendForm.sendMessageBtn}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;