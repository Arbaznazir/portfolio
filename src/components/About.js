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
            Arbaz Nazir
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-64 h-64 mb-8 mx-auto lg:mx-0 overflow-hidden rounded-full shadow-xl border-4 border-indigo-500 transform transition-all duration-500 hover:scale-105">
              <Image
                src={profileImage}
                alt="Arbaz Nazir"
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
              Detail-oriented and passionate Power BI Developer with hands-on experience in data modeling,
              visualization, and report automation. Skilled in transforming raw data into meaningful business insights
              using Power BI, DAX, and SQL.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Proven ability to collaborate across teams, solve complex data challenges,
              and deliver impactful dashboards. Eager to contribute to innovative projects and grow as a data
              professional in a dynamic, fast-paced environment.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Education
            </h3>
            <ul className="space-y-4">
              <li className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                  MCA - Master of Computer Applications
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  2023-2025
                </div>
              </li>
              <li className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                  BA+Computer Science
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  2019-2023
                </div>
              </li>
              <li className="border-l-4 border-indigo-500 pl-4 py-2">
                <div className="text-xl font-semibold text-gray-800 dark:text-white">
                  ITI
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  2021
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
                Kupos.cl
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Data Engineer & Power BI Analyst | Jan 2025 - Current
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Working as a Data Engineer and Analyst/Power BI Developer.
                Use Power BI to show the prices and differences between normal and dynamic pricing.
                Create data insights to analyze pricing strategies and support business decisions.
                Automate CSV generation and integrate data from MongoDB into Power BI dashboards.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                AR Medical Agency (Kashmir)
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Sales Insights Analyst | Mar 2022 - Apr 2024 | Remote
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Used Power BI to display monthly sales trends and monitor outgoing medicine inventory.
                Built dashboards that tracked real-time stock movement, daily sales, and category-wise demand.
                Provided data-driven insights on product performance, revenue, and purchase patterns.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                Sub-District Hospital Pampora
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Sanitary Inspector and Medical Trainee | Jun 2021 - Aug 2021
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Assisted doctors and nurses in outpatient care, patient monitoring, and case documentation.
                Observed clinical procedures, including wound dressing, injections, and OPD management.
                Supported public health officers in maintaining sanitation standards in community areas.
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
