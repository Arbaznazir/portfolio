"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function ClientWrapper() {
  // Add a client-side only state to ensure hydration is consistent
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to let browser extensions finish their modifications
    // before hydration completes
    const timer = setTimeout(() => {
      setMounted(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Remove any Grammarly attributes that might cause hydration mismatches
  useEffect(() => {
    if (mounted) {
      // Find all elements with data-gr attributes and remove them
      document
        .querySelectorAll(
          "[data-gr-c-s-loaded], [data-new-gr-c-s-check-loaded]"
        )
        .forEach((el) => {
          el.removeAttribute("data-gr-c-s-loaded");
          el.removeAttribute("data-new-gr-c-s-check-loaded");
        });
    }
  }, [mounted]);

  // This ensures no hydration mismatch by avoiding rendering until client-side
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900"></div>;
  }

  return (
    <main className="overflow-hidden" suppressHydrationWarning>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
