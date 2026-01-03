"use client";

export default function Skills() {
  const skills = {
    "Backend Languages": [
      { name: "Python", icon: "🐍" },
      { name: "PHP", icon: "🔧" },
      { name: "Java", icon: "☕" },
      { name: "C#", icon: "#️⃣" },
      { name: "JavaScript", icon: "⚡" },
    ],
    "Frameworks & Platforms": [
      { name: "Django", icon: "🎯" },
      { name: "Flask", icon: "🌶️" },
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🌳" },
      { name: "Postman", icon: "📮" },
    ],
    "Databases & Storage": [
      { name: "MySQL", icon: "🗄️" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "SQLite", icon: "📦" },
      { name: "Oracle", icon: "🔮" },
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-16">Stack that powers my solutions</p>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-effect p-6">
              <h3 className="text-xl font-bold mb-6 text-indigo-300">{category}</h3>
              <div className="grid gap-4">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
