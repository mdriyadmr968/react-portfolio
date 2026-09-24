"use client";

import React, { useState } from "react";
import { experiences } from "@/lib/data";
import { Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "education">("all");

  const filteredItems = experiences.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4">
              <Briefcase className="h-3.5 w-3.5 text-[#994ff5]" />
              <span className="font-technical text-[11px] uppercase tracking-[0.2em] text-[#a5abbf]">
                CHRONOLOGY // 003
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
              EXPERIENCE & EDUCATION
            </h2>
            <p className="mt-2 max-w-lg font-sans text-sm sm:text-base text-[#8d93a6]">
              A timeline of engineering roles, software contributions, and computer science
              foundations.
            </p>
          </div>

          {/* Filter Tab Switches */}
          <div className="flex items-center rounded-full border border-white/10 bg-[#0b0d16] p-1.5 backdrop-blur-md">
            {(["all", "work", "education"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-1.5 font-technical text-[11px] uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                    : "text-[#8a90a2] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Rule-Divided Tabular Timeline */}
        <div className="mt-12 divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative py-10 transition-colors duration-500 hover:bg-white/[0.015] px-4 -mx-4 rounded-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Period & Metadata */}
                <div className="lg:col-span-3 flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-technical text-xs font-semibold tracking-widest text-[#994ff5]">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#6f7587]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="font-technical text-[11px] uppercase tracking-wider">
                      {item.location}
                    </span>
                  </div>
                  <span className="inline-block w-fit rounded border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-technical text-[9px] uppercase tracking-widest text-[#a1a7bb]">
                    {item.badge}
                  </span>
                </div>

                {/* Role & Company */}
                <div className="lg:col-span-4 flex flex-col">
                  <h3 className="font-editorial text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-technical text-sm text-[#a3a9be] font-medium">
                    {item.company}
                  </p>
                </div>

                {/* Description, Highlights & Tech Stack */}
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <p className="font-sans text-sm text-[#9096a9] leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-2 border-l border-white/10 pl-4">
                      {item.highlights.map((point, hIdx) => (
                        <li
                          key={hIdx}
                          className="font-sans text-xs text-[#7e8599] flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-[#994ff5] mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 font-technical text-[10px] tracking-wider text-[#798094]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
