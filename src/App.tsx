import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/AboutSection";
import CasesSection from "@/components/sections/CasesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FooterSection from "@/components/sections/FooterSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], footer");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "home");
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <ContactSection />
        <AboutSection />
        <CasesSection />
        <ExperienceSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
