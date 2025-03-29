"use client";
import Image from "next/image";
import profileImage from "../images/middle.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 w-16 h-1 mx-auto bg-indigo-600 dark:bg-indigo-400 rounded"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Arbaz Nazir Lohar
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-64 h-64 mb-8 mx-auto lg:mx-0 overflow-hidden rounded-full shadow-xl border-4 border-indigo-500 transform transition-all duration-500 hover:scale-105">
              <Image
                src={profileImage}
                alt="Arbaz Nazir Lohar"
                fill
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
                className="transition-all duration-500 hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I&apos;m a Master&apos;s student pursuing MCA from the University
              of Kashmir (South Campus) with a passion for software development
              and problem-solving. My background includes experience in team
              management, healthcare, and technical support.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I&apos;m currently working on a social media application designed
              to limit addiction by restricting daily usage and filtering
              inappropriate content using AI models.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Education
            </h3>
            <ul className="space-y-4">
              <li className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                  Masters in Computer Applications (MCA)
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  University of Kashmir (South Campus) | Awaiting final results
                </div>
              </li>
              <li className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                  Bachelor&apos;s Degree
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Govt Degree College Tral | CGPA: 71.1 | 2022
                </div>
              </li>
              <li className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                  Health Sanitary Inspector
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  ITI | 78.5% | 2020
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
            Experience
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                AR Medical Agency
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Team Manager | 2022 - 2023
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Worked as Team Manager and kept records and flow of medicines
                and money. Organized and managed the team to maintain sales,
                monitor salaries, and handle accounting.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Pampora Hospital
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Sanitary Inspector and Medical Trainee | 2021
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Learned hospital sanitation protocols and worked as a helper in
                the casualty section.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Reliance Jio
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Home Service Engineer | 2025
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Worked as an Engineer for installing Jio Air Fiber and
                maintaining user satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
            Interests & Hobbies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Programming",
              "Communication Skills",
              "Photography",
              "Tech Troubleshooting",
            ].map((hobby) => (
              <span
                key={hobby}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
