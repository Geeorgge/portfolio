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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

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
        url: "",
        icon: "📧",
      },
    ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
          Let's Connect
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have a question or want to collaborate? Let's talk!
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-300">Get in Touch</h3>
            <p className="text-gray-400">
              Feel free to reach out through any of these channels. I'm always interested in
              hearing about new projects and opportunities. Based in Saltillo, working with remote teams.
            </p>

            <div className="space-y-4">
              {links.map((link) => (
                  link.url ? (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-indigo-400 transition group"
                    >
                      <span className="text-3xl">{link.icon}</span>
                      <div>
                        <p className="font-semibold group-hover:text-indigo-400 transition">
                          {link.name}
                        </p>
                        {link.name === "Email" && (
                          <p className="text-xs text-gray-500"></p>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div
                      key={link.name}
                      className="flex items-center gap-4 p-4 glass-effect rounded-lg text-gray-500"
                    >
                      <span className="text-3xl">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </div>
                  )
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
