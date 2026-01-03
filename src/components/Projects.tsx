"use client";

import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  featured: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const realProjects: Project[] = [
      {
        id: 1,
        title: "IMDB Movie API Consumer",
        description: "Python application that consumes the IMDB API to fetch and process movie data with intelligent caching and error handling.",
        technologies: ["Python", "REST API", "Data Processing"],
        github: "https://github.com/Geeorgge/IMDB_API",
        image: "🎬",
        featured: true,
      },
      {
        id: 2,
        title: "Yidio Web Scraper",
        description: "Web scraping tool built in Python to extract movie and series information from yidio website with structured data output.",
        technologies: ["Python", "Web Scraping", "BeautifulSoup"],
        github: "https://github.com/Geeorgge/yidio_scraper",
        image: "🕷️",
        featured: true,
      },
      {
        id: 3,
        title: "CIMA - Sistema de Gestión",
        description: "Comprehensive management system built with Django and Python for institutional data handling and reporting.",
        technologies: ["Django", "Python", "MySQL"],
        github: "https://github.com/Geeorgge/CIMA",
        image: "📊",
        featured: false,
      },
      {
        id: 4,
        title: "TecnoWeb Platform",
        description: "Full-featured web platform developed with PHP, featuring modern architecture and responsive design.",
        technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        github: "https://github.com/Geeorgge/TecnoWeb",
        image: "🌐",
        featured: false,
      },
      {
        id: 5,
        title: "DAS Microservicios",
        description: "Microservices architecture project featuring Vue.js frontend with scalable backend design patterns.",
        technologies: ["Vue.js", "Microservices", "Docker"],
        github: "https://github.com/Geeorgge/DAS_MICROSERVICIOS",
        image: "🏗️",
        featured: false,
      },
    ];

    setProjects(realProjects);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading projects...</div>;
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Explore some of my recent work from GitHub
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`glass-effect p-6 hover:border-indigo-400 transition group cursor-pointer ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{project.image}</div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Geeorgge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary text-white font-semibold hover:scale-105 transition-transform"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
