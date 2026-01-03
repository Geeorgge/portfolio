"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-t from-black to-transparent">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Jorge Hernández</h3>
            <p className="text-gray-400 text-sm">
              Backend Software Engineer | SaaS & Startups
              <br />
              <span className="text-xs text-gray-500">Saltillo, Coahuila, México</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-indigo-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-indigo-400 transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-indigo-300">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://github.com/Geeorgge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/georgehdz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:jorge_hernandezvqz@hotmail.com"
                  className="hover:text-indigo-400 transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} Jorge Hernández. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
