"use client";
import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Social Media App",
      description:
        "Building a social media app which will restrict the addiction of users by limiting the daily usage and also filter foul content using AI models.",
      image: "/project-1.jpg",
      tags: ["web", "mobile", "ai"],
      status: "in-progress",
      icon: "📱",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "Health Management Dashboard",
      description:
        "A dashboard interface for healthcare professionals to monitor patient records and sanitation protocols.",
      image: "/project-2.jpg",
      tags: ["web", "dashboard"],
      status: "concept",
      icon: "🏥",
      color: "from-green-500 to-teal-600",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description:
        "Online shopping platform with inventory management for small businesses.",
      image: "/project-3.jpg",
      tags: ["web", "mobile"],
      status: "concept",
      icon: "🛒",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS to showcase skills and projects.",
      image: "/project-4.jpg",
      tags: ["web"],
      status: "completed",
      icon: "💼",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: "🔍" },
    { id: "web", name: "Web Development", icon: "🌐" },
    { id: "mobile", name: "Mobile Apps", icon: "📱" },
    { id: "ai", name: "AI & Machine Learning", icon: "🧠" },
    { id: "dashboard", name: "Dashboards", icon: "📊" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-r from-green-500 to-emerald-700 text-white";
      case "in-progress":
        return "bg-gradient-to-r from-yellow-400 to-amber-600 text-white";
      default:
        return "bg-gradient-to-r from-blue-400 to-indigo-600 text-white";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      default:
        return "Concept";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              My Projects
            </span>
          </h2>
          <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Here are some of the projects I&apos;ve been working on
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full p-1 bg-gray-100 dark:bg-gray-800">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
                  filter === category.id
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div
                className={`bg-gradient-to-r ${project.color} h-32 flex items-center justify-center relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <span className="text-6xl z-10 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {project.icon}
                </span>
                <div className="absolute bottom-0 right-0 m-4">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-bold ${getStatusStyle(
                      project.status
                    )}`}
                  >
                    {getStatusText(project.status)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 h-24">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full transform transition hover:scale-110"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 inline-block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
