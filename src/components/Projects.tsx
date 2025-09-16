import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  // githubUrl: string;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "Shafatap",
      description: t.projectsDescr.description0,
      image: "/img/shafatap.png",
      technologies: [
        "React",
        "Chart.js",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Openapi",
        "Node",
      ],
      liveUrl: "https://sefatapp-v-2-0-rlvl.vercel.app/",
      //githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: "Asncora",
      description: t.projectsDescr.description1,
      image: "/img/asncora.png",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://asncora.vercel.app/",
      // githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: "Shyft",
      description: t.projectsDescr.description2,
      image: "/img/shyft.png",
      technologies: ["React", "TypeScript", "Chart.js"],
      liveUrl: "https://shyft-cyan.vercel.app/",
      //githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: "Sebetim",
      description: t.projectsDescr.description3,
      image: "/img/sebetim.png",
      technologies: ["Js", "Html", "Css"],
      liveUrl: "https://sebetim.vercel.app/",
      //githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: "Warehouse",
      description: t.projectsDescr.description4,
      image: "/img/warehouse.png",
      technologies: ["Js", "Html", "Css", "Chart.js"],
      liveUrl: "https://le10uch29.github.io/WAREHOUSE-MANAGAMENT/",
      //githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: "Boost",
      description: t.projectsDescr.description5,
      image: "/img/boost.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "Grid"],
      liveUrl: "https://boost-club.vercel.app/",
      //githubUrl: 'https://github.com',
    },
    {
      id: 7,
      title: "Crogecoin",
      description: t.projectsDescr.description6,
      image: "/img/croge.png",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://crogecoin.vercel.app/",
      //githubUrl: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fadeInUp">
            {t.projects.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group project-card group flex flex-col h-full bg-background rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Изображение проекта */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Кнопки при наведении */}
                  {/*<div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </Button>
                  </div>*/}
                </div>

                {/* Контент проекта */}
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Технологии */}
                  <div className="mb-4  mt-auto">
                    <p className="text-xs font-medium text-muted-foreground mb-2">
                      {t.projects.technologies}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Кнопка действия */}
                  <Button
                    className="w-full btn-gradient"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {t.projects.viewProject}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
