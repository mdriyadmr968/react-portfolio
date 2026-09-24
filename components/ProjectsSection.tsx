"use client";

import React from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { Layers, Building2 } from "lucide-react";

export default function ProjectsSection() {
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
              WORKPLACE CONTRIBUTIONS
            </h2>
            <p className="mt-2 max-w-xl font-sans text-sm sm:text-base text-[#8d93a6]">
              Live, high-throughput production applications I have contributed to in my workplace,
              spanning enterprise cloud accounting and educational management platforms.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 font-technical text-xs text-violet-300">
            <Building2 className="h-3.5 w-3.5 text-violet-400" />
            <span>ACTIVE LIVE DEPLOYMENTS</span>
          </div>
        </div>

        {/* Projects Grid: Exactly the 2 Selected Workplace Projects */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
