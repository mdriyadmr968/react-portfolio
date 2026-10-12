"use client";

import React from "react";
import Image from "next/image";
import { skillCategories } from "@/lib/data";
import { Cpu, Layout, Database, Coins, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="h-4 w-4 text-[#38bdf8]" />;
      case "Layout":
        return <Layout className="h-4 w-4 text-[#994ff5]" />;
      case "Database":
        return <Database className="h-4 w-4 text-[#d946ef]" />;
      case "Coins":
        return <Coins className="h-4 w-4 text-[#06b6d4]" />;
      case "Cpu":
      default:
        return <Cpu className="h-4 w-4 text-[#ffc41f]" />;
    }
  };

  return (
    <section id="capabilities" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4">
              <Cpu className="h-3.5 w-3.5 text-[#994ff5]" />
              <span className="font-technical text-[11px] uppercase tracking-[0.2em] text-[#a5abbf]">
                MATRIX // 004
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
              TECHNICAL CAPABILITIES
            </h2>
            <p className="mt-2 max-w-lg font-sans text-sm sm:text-base text-[#8d93a6]">
              A production-tested stack combining multi-tenant SaaS system design, full-stack React &amp;
              Next.js engineering, Web3 smart contract protocols, and AI integrations.
            </p>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIdx * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className={`group relative rounded-2xl border border-white/[0.08] bg-[#0c0e17]/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-500 hover:border-white/20 ${
                catIdx === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="font-technical text-xs font-bold uppercase tracking-[0.16em] text-white">
                    {category.title}
                  </h3>
                </div>
                <span className="font-technical text-[10px] uppercase tracking-widest text-[#666d80]">
                  {category.skills.length} ITEMS
                </span>
              </div>

              {/* Skills Badges Grid */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(153,79,245,0.15)]"
                  >
                    {skill.icon && (
                      <div className="relative h-4 w-4 shrink-0 overflow-hidden">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={16}
                          height={16}
                          className="object-contain filter grayscale group-hover/skill:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    )}
                    <span className="font-technical text-xs font-medium text-[#c0c6db] group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="font-technical text-[9px] uppercase tracking-wider text-[#636a7e] group-hover/skill:text-[#994ff5] transition-colors">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
