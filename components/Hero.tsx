"use client";

import React from "react";
import { siteConfig } from "@/lib/data";
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const capabilities = [
    { num: "01", title: "Full-Stack Web & Next.js", detail: "React, Next.js, TypeScript, Tailwind CSS, SSR/SSG" },
    { num: "02", title: "Decentralized Protocols & DeFi", detail: "Web3.js, Ethers.js, Multi-Chain (5+ Chains)" },
    { num: "03", title: "Enterprise Systems & Mobile", detail: "React Native, Electron, Prisma, PostgreSQL, MongoDB" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Editorial Hairline Crosshairs / Blueprint Guides */}
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl px-6 lg:px-12 flex justify-between">
        <div className="h-full w-px bg-white/[0.03]" />
        <div className="h-full w-px bg-white/[0.03] hidden md:block" />
        <div className="h-full w-px bg-white/[0.03]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Main Headline with Reduced, Balanced Editorial Serif Typography */}
          <motion.div variants={itemVariants} className="w-full">
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] max-w-5xl">
              CRAFTING <br />
              <span className="bg-gradient-to-r from-white via-[#ded8fb] to-[#994ff5] bg-clip-text text-transparent">
                HIGH-FIDELITY
              </span>{" "}
              <br />
              DIGITAL SYSTEMS.
            </h1>
          </motion.div>

          {/* Editorial Narrative & Bio */}
          <motion.div
            variants={itemVariants}
            className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full"
          >
            <div className="lg:col-span-7 space-y-4">
              <p className="font-sans text-base sm:text-lg text-[#a2a8ba] leading-relaxed font-light">
                Engineering performant web architectures, decentralized finance solutions, and
                cross-platform mobile apps where robust code logic meets refined micro-interactions.
              </p>
              <p className="font-sans text-sm text-[#747a8e] leading-relaxed max-w-2xl">
                Proficient in modern frontend frameworks with a strong focus on React, Next.js, and
                blockchain integration. Proven track record in developing user-centric solutions for
                fintech and edtech platforms in collaborative Agile environments.
              </p>
            </div>

            {/* Micro Stats Matrix */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-2.5 sm:gap-3 w-full">
              {siteConfig.metrics.map((stat, idx) => (
                <div
                  key={idx}
                  className="group rounded-xl border border-white/[0.07] bg-[#0c0e17]/60 p-3 sm:p-4 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]"
                >
                  <span className="font-editorial text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <p className="font-technical text-[9px] sm:text-[10px] uppercase tracking-widest text-[#71788c] mt-0.5 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-8 border-t border-white/[0.08]"
          >
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="group relative rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 transition-all duration-300 hover:border-[#994ff5]/40 hover:bg-[#994ff5]/[0.03]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-technical text-[10px] font-bold text-[#994ff5]">
                    {cap.num}
                  </span>
                  <span className="font-technical text-xs font-semibold uppercase tracking-wider text-white">
                    {cap.title}
                  </span>
                </div>
                <p className="mt-2 font-technical text-[11px] text-[#787f94] tracking-wide">
                  {cap.detail}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Interactive Action Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-between gap-6 w-full pt-6 border-t border-white/[0.08]"
          >
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#994ff5] hover:text-white hover:shadow-[0_0_35px_rgba(153,79,245,0.45)]"
              >
                <span>EXPLORE SELECTED WORK</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <a
                href={siteConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#994ff5]/60 hover:bg-[#994ff5]/15"
              >
                <span>HIRE ON UPWORK</span>
                <ArrowUpRight className="h-4 w-4 text-[#994ff5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3.5 text-xs font-technical uppercase tracking-wider text-[#9aa0b4] transition-all duration-300 hover:border-white/25 hover:text-white"
              >
                <FileDown className="h-4 w-4" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden xl:flex items-center gap-3 text-[#5e6578] font-technical text-[10px] uppercase tracking-widest">
              <span>SCROLL TO DISCOVER</span>
              <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
