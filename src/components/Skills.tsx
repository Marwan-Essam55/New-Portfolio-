import React from "react";
import '../assets/styles/Skills.scss';

// ── Skill data ──────────────────────────────────────────────────────────────
const categories = [
  {
    title: "Languages & Databases",
  
    skills: [
      { name: "C#",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "Java",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "SQL Server",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Firebase",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  {
    title: "Frameworks & Web Technologies",
    skills: [
      { name: "ASP.NET Core",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "React",                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML5",                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",                   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "FastAPI",                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Entity Framework Core",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    ],
  },
  {
    title: "Tools & Data Utilities",
    icon: "",
    skills: [
      { name: "Git",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Excel", icon: "https://cdn.simpleicons.org/googlesheets" },
      { name: "Postman",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },    ],
  },
];

function Skills() {
  return (
    <div className="skills-section" id="skills">
      <div className="items-container">
        <h1>Skills</h1>
        <p className="skills-subtitle">Technologies I work with on a daily basis</p>

        <div className="skills-categories">
          {categories.map((cat, ci) => (
            <div className="skill-category-card" key={ci}>
              {/* Card header */}
              <div className="skill-category-card__header">
                {cat.icon ? <span className="skill-category-card__emoji">{cat.icon}</span> : null}
                <h3 className="skill-category-card__title">{cat.title}</h3>
              </div>

              {/* Skill badges */}
              <div className="skill-badges">
                {cat.skills.map((skill, si) => (
                  <div className="skill-badge" key={si}>
                    <div className="skill-badge__icon-wrap">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-badge__img"
                        loading="lazy"
                        onError={(e) => {
                          // fallback to first letter if CDN icon fails
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="skill-badge__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
