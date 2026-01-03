"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl w-full text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Jorge Hernández</span>
          <br />
          <span className="text-white">Backend Software Engineer</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-3 max-w-2xl mx-auto">
          Backend Software Engineer with 2+ years building scalable solutions for SaaS startups.
          <br />
          Specialties: Python, Django, Flask, microservices, data scraping and ETL pipelines.
          <br />
          Based in Saltillo, Coahuila, México — available for remote work.
        </p>

        <p className="text-sm text-gray-500 mb-8 max-w-2xl mx-auto">
          Spanish (native) • English (B2) • Open to collaboration
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="btn-primary text-white font-semibold hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
