"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import heroImage from "../images/Arbaz.png";

export default function Hero() {
  const typingTextRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true on component mount
    setIsClient(true);

    if (!typingTextRef.current) return;

    const textElement = typingTextRef.current;
    const roles = [
      "Developer",
      "Problem Solver",
      "MCA Student",
      "ML and AI Learner",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    let typeTimeout = null;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
      } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        isDeleting = true;
        typingDelay = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500;
      }

      typeTimeout = setTimeout(type, typingDelay);
    };

    typeTimeout = setTimeout(type, 1000);

    return () => {
      // Cleanup timeout on unmount
      if (typeTimeout) clearTimeout(typeTimeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 md:pt-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-0 md:mt-6">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 mt-4 md:mt-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Hello, I&apos;m Arbaz Nazir Lohar</span>
              <span className="block text-indigo-600 dark:text-indigo-400 mt-2">
                <span
                  ref={typingTextRef}
                  className="inline-block min-w-[120px]"
                >
                  {isClient ? "" : "Developer"}
                </span>
                <span className="animate-blink">|</span>
              </span>
            </h1>

            <p className="mt-6 mx-auto md:mx-0 text-xl text-gray-500 dark:text-gray-300">
              MCA student passionate about creating beautiful and functional
              applications. Currently working on a social media application with
              AI content moderation.
            </p>

            <div className="mt-10 flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 border-indigo-600 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 md:text-lg"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mt-16 md:mt-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-2 w-full h-full overflow-hidden border-2 border-indigo-300 dark:border-indigo-700">
                <div className="w-full h-full relative">
                  <Image
                    src={heroImage}
                    alt="Arbaz Nazir Lohar"
                    fill
                    sizes="(max-width: 640px) 14rem, (max-width: 768px) 16rem, 20rem"
                    style={{ objectFit: "cover", objectPosition: "center 25%" }}
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute top-4 -right-4 w-24 h-24 bg-indigo-400 dark:bg-indigo-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-4 -left-4 w-32 h-32 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-16 animate-bounce">
          <a
            href="#about"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <span className="sr-only">Scroll down</span>
            <svg
              className="h-8 w-8 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
