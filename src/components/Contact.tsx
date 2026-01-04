"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    "use client";

    export default function Contact() {
      const links = [
        {
          name: "GitHub",
          url: "https://github.com/Geeorgge",
          icon: "🐙",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/georgehdz",
          icon: "💼",
        },
        {
          name: "Email",
          url: "mailto:jorge_hernandezvqz@hotmail.com",
          icon: "📧",
        },
      ];

      return (
        <section id="contact" className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
            <p className="text-gray-400 mb-8">
              Have a question or want to collaborate? I'm open to discussing new projects and
              opportunities. Based in Saltillo and available for remote work.
            </p>

            <a
              href="mailto:jorge_hernandezvqz@hotmail.com"
              className="inline-block btn-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition mb-6"
            >
              Email me
            </a>

            <div className="flex justify-center gap-4 mt-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 glass-effect rounded-lg hover:border-indigo-400 transition"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-medium text-gray-200">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
    }
                  <div>
