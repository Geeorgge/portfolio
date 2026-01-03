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
      url: "mailto:jorge_hernandezvqz@hotmail.com",
      icon: "📧",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/528442741275",
      icon: "💬",
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-300">Get in Touch</h3>
            <p className="text-gray-400">
              Feel free to reach out through any of these channels. I'm always interested in
              hearing about new projects and opportunities. Based in Saltillo, working with remote teams.
            </p>

            <div className="space-y-4">
              {links.map((link) => (
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
                      <p className="text-xs text-gray-500">jorge_hernandezvqz@hotmail.com</p>
                    )}
                    {link.name === "WhatsApp" && (
                      <p className="text-xs text-gray-500">+(52) 8442741275</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-effect p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-indigo-500 transition resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary text-white font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
