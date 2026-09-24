"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/data";
import { ArrowUpRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0d16]/80 p-6 lg:p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
    >
      {/* Dynamic Holographic Mouse Spotlight Surface */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(153, 79, 245, 0.12), transparent 40%)`,
        }}
      />

      {/* Dynamic Border Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.25), transparent 45%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div>
        {/* Top Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="font-technical text-[11px] font-semibold uppercase tracking-widest text-[#994ff5]">
              {project.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="font-technical text-[10px] uppercase tracking-widest text-[#6c7285]">
              PROJECT // {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Workplace Contribution Badge */}
          {project.workplaceContributionNote && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/35 bg-violet-500/10 px-3 py-1 font-technical text-[10px] font-semibold uppercase tracking-wider text-violet-300">
              <Building2 className="h-3 w-3 text-violet-400" />
              <span>{project.workplaceContributionNote}</span>
            </span>
          )}
        </div>

        {/* Project Image Preview */}
        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#121522]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Ambient Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d16] via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-20" />
        </div>

        {/* Project Title & Subtitle */}
        <div className="mt-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-editorial text-2xl lg:text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
              {project.title}
            </h3>
            {project.liveUrl && (
              <span className="font-technical text-[11px] text-[#787f94] uppercase tracking-wider">
                {new URL(project.liveUrl).hostname}
              </span>
            )}
          </div>
          <p className="mt-1.5 font-technical text-xs tracking-wider text-[#8a90a2]">
            {project.subtitle}
          </p>
        </div>

        {/* Project Description */}
        <p className="mt-4 font-sans text-sm text-[#9399ab] leading-relaxed">
          {project.description}
        </p>

        {/* Workplace Contribution Quote */}
        {project.extendedDescription && (
          <div className="mt-4 rounded-xl border-l-2 border-[#994ff5] bg-white/[0.02] p-3 text-xs text-[#b8bfd6] leading-relaxed italic">
            &quot;{project.extendedDescription}&quot;
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 font-technical text-[10px] tracking-wider text-[#9ba1b5]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Actions Toolbar */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/[0.06]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.05] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <span>VISIT LIVE PLATFORM</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}

        <div className="flex items-center gap-2 font-technical text-[11px] text-[#636a7e]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>PRODUCTION LIVE</span>
        </div>
      </div>
    </motion.div>
  );
}
