"use client";
import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const sectionRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    { name: "Python", level: 90, color: "bg-blue-500", icon: "🐍" },
    { name: "HTML/CSS", level: 85, color: "bg-orange-500", icon: "🌐" },
    { name: "JavaScript", level: 80, color: "bg-yellow-500", icon: "📜" },
    { name: "Next.js", level: 85, color: "bg-black", icon: "▲" },
    { name: "Tailwind CSS", level: 90, color: "bg-cyan-500", icon: "🌊" },
    { name: "Bootstrap", level: 80, color: "bg-purple-600", icon: "🅱️" },
    { name: "NodeJS/ExpressJS", level: 70, color: "bg-green-500", icon: "🚀" },
    { name: "Java", level: 65, color: "bg-red-500", icon: "☕" },
    { name: "Microsoft Office", level: 85, color: "bg-purple-500", icon: "📊" },
    { name: "Design Tools", level: 75, color: "bg-pink-500", icon: "🎨" },
    { name: "Machine Learning", level: 60, color: "bg-indigo-500", icon: "🧠" },
    { name: "AI", level: 55, color: "bg-teal-500", icon: "🤖" },
  ];

  const categories = [
    {
      name: "Programming Languages",
      icon: "💻",
      items: ["Python", "JavaScript", "Java", "HTML", "CSS"],
    },
    {
      name: "Frameworks & Technologies",
      icon: "⚙️",
      items: [
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "NodeJS",
        "ExpressJS",
        "Web Development",
      ],
    },
    {
      name: "Tools & Software",
      icon: "🔧",
      items: ["Microsoft Office", "Canva", "Photoshop", "Git", "VS Code"],
    },
    {
      name: "AI & Machine Learning",
      icon: "🧠",
      items: [
        "Data Analysis",
        "Neural Networks",
        "Python Libraries",
        "Model Training",
      ],
    },
    {
      name: "Soft Skills",
      icon: "👥",
      items: [
        "Team Management",
        "Problem Solving",
        "Communication",
        "Tech Troubleshooting",
        "Photography",
      ],
    },
  ];

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    // Only run intersection observer on the client
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll(".progress-bar");
            progressBars.forEach((bar) => {
              const level = bar.getAttribute("data-level");
              bar.style.width = `${level}%`;
              bar.style.opacity = "1";
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <div className="mt-2 w-16 h-1 mx-auto bg-indigo-600 dark:bg-indigo-400 rounded"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Technologies and skills I work with
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              All Skills
            </button>

            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Levels Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills
              .filter(
                (skill) =>
                  activeCategory === "all" ||
                  categories
                    .find((cat) => cat.name === activeCategory)
                    ?.items.includes(skill.name)
              )
              .map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:rotate-1"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{skill.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {skill.name}
                      </h3>
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          Proficiency: {skill.level}%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`progress-bar h-full ${
                        skill.color
                      } rounded-full transition-all duration-1000 ease-out ${
                        isClient ? "opacity-0" : ""
                      }`}
                      style={{
                        width: isClient ? "0%" : `${skill.level}%`,
                        opacity: isClient ? 0 : 1,
                      }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Skill Categories Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories
              .filter(
                (category) =>
                  activeCategory === "all" || activeCategory === category.name
              )
              .map((category) => (
                <div
                  key={category.name}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl"
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 group-hover:from-purple-600 group-hover:to-indigo-500 transition-all duration-500">
                    <div className="flex items-center">
                      <span className="text-3xl text-white mr-3">
                        {category.icon}
                      </span>
                      <h4 className="text-xl font-semibold text-white">
                        {category.name}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center text-gray-700 dark:text-gray-300 transition-transform duration-200 hover:translate-x-2"
                        >
                          <svg
                            className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
