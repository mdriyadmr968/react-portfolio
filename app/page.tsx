import React from "react";
import AmbientGlow from "@/components/AmbientGlow";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07080c] overflow-x-hidden">
      {/* Background Ambient Color Blooms */}
      <AmbientGlow />

      {/* Hero Section */}
      <Hero />

      {/* Selected Works / Holographic Project Cards */}
      <ProjectsSection />

      {/* Chronology / Experience & Education Timeline */}
      <ExperienceSection />

      {/* Matrix / Technical Capabilities */}
      <SkillsSection />

      {/* Profile & Persona / About Narrative */}
      <AboutSection />

      {/* Direct Collaboration / Contact Action */}
      <ContactSection />
    </div>
  );
}
