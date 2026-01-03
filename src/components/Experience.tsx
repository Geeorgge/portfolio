"use client";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Backend Software Engineer",
      company: "Justia",
      period: "Feb 2022 - Oct 2023",
      description:
        "Designed and maintained backend systems for legal SaaS products. Built ETL pipelines and automated scraping tools to ingest data into production databases.",
      achievements: [
        "Improved data acquisition pipelines, reducing ingestion time by 40%",
        "Implemented robust error-handling and monitoring for scraping jobs",
        "Led migration of monolith endpoints to microservices"
      ],
      icon: "💼",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Freelance / Early Projects",
      period: "2023 - Present",
      description:
        "Built web applications using PHP and MySQL, later adopting Python and Django for more scalable backends.",
      achievements: ["Delivered multiple client projects", "Improved database designs and query performance"],
      icon: "🚀",
    },
  ];

  const education = {
    degree: "Ingeniero en Sistemas",
    school: "Universidad Autónoma de Coahuila (UAdeC)",
    year: "Graduated",
    icon: "🎓",
  };

  const certificates = [
    { id: 1, title: "Python Web Scraping", date: "Feb 2024" },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Experience & Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-indigo-300">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="glass-effect p-6 relative">
                  {idx !== experiences.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
                  )}
                  <div className="flex gap-4">
                    <div className="text-3xl">{exp.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">{exp.title}</h4>
                      <p className="text-indigo-400 text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-xs mb-2">{exp.period}</p>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-indigo-300">Education</h3>
            <div className="glass-effect p-6 h-fit">
              <div className="flex gap-4">
                <div className="text-5xl">{education.icon}</div>
                <div>
                  <h4 className="text-lg font-bold">{education.degree}</h4>
                  <p className="text-indigo-400 text-sm">{education.school}</p>
                  <p className="text-gray-500 text-sm mt-2">{education.year}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 glass-effect p-6">
              <h4 className="font-bold mb-4 text-indigo-300">Certificates</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {certificates.map((c) => (
                  <li key={c.id}>{c.title} — <span className="text-gray-500">{c.date}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
