"use client";

import React, { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { Layers, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "featured" | "workplace">("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return !project.workplaceContributionNote;
    if (activeFilter === "workplace") return !!project.workplaceContributionNote;
    return true;
  });

  return (
    <section id="works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4">
              <Layers className="h-3.5 w-3.5 text-[#994ff5]" />
              <span className="font-technical text-[11px] uppercase tracking-[0.2em] text-[#a5abbf]">
                SELECTED WORKS // 002
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
              FEATURED PROJECTS &amp; WORKS
            </h2>
            <p className="mt-2 max-w-xl font-sans text-sm sm:text-base text-[#8d93a6]">
              Production enterprise ERP platforms, autonomous AI systems, and multi-chain Web3
              wallets engineered with uncompromising performance and security.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-[#0b0d16] p-1.5 backdrop-blur-md">
            {[
              { id: "all", label: "ALL BUILDS" },
              { id: "featured", label: "FEATURED AI & WEB3" },
              { id: "workplace", label: "ENTERPRISE SAAS" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`rounded-full px-4 py-1.5 font-technical text-[11px] uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                    : "text-[#8a90a2] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
