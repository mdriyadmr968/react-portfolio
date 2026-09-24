"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/data";
import {
  User,
  Mail,
  Phone,
  Globe,
  Gamepad2,
  Copy,
  Check,
  ArrowUpRight,
  ExternalLink,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md mb-4">
              <User className="h-3.5 w-3.5 text-[#994ff5]" />
              <span className="font-technical text-[11px] uppercase tracking-[0.2em] text-[#a5abbf]">
                PROFILE // 005
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
              PHILOSOPHY &amp; PERSONA
            </h2>
            <p className="mt-2 max-w-lg font-sans text-sm sm:text-base text-[#8d93a6]">
              A glimpse into the engineering ethos, communicative versatility, and foundational background.
            </p>
          </div>
        </div>

        {/* Narrative & Details Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 space-y-6 text-[#a1a7bd] font-sans text-base leading-relaxed"
          >
            <h3 className="font-editorial text-2xl font-bold text-white tracking-wide">
              Engineering with Intent &amp; Artistic Precision
            </h3>
            
            <p>
              Versatile Software Developer with deep expertise in the JavaScript ecosystem and over 3 years
              of experience architecting responsive web applications, decentralized finance platforms, and
              cross-platform mobile apps. Proficient in modern frontend architectures with a sharp focus on
              React, Next.js, and blockchain integration.
            </p>

            <p>
              Currently serving as a Software Engineer at <strong>XPONENT InfoSystem (PVT) Ltd</strong>,
              contributing to the development of enterprise Learning Management Systems (LMS) and multi-tenant ERP
              modules powered by Next.js, Prisma, PostgreSQL, and MongoDB. Formerly at <strong>Tale Wallet</strong>,
              where I engineered multi-chain non-custodial crypto wallet interfaces, embeddable plugins, and
              algorithmic trading execution tools.
            </p>

            <p>
              Dedicated to continuous learning and performance optimization, I thrive in collaborative
              Agile environments that challenge me to transform intricate conceptual systems into fluid,
              production-grade digital experiences.
            </p>

            {/* Quick Quote / Callout */}
            <div className="rounded-xl border-l-2 border-[#994ff5] bg-white/[0.02] p-5 my-6 text-sm text-[#ccd1e2] italic">
              &quot;Translating complex distributed ideas into tangible, impactful, and poetic digital
              experiences that push the boundaries of what is possible.&quot;
            </div>
          </motion.div>

          {/* Right Details Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-6 sm:p-8 backdrop-blur-xl space-y-6"
          >
            <h4 className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#994ff5]">
              METADATA &amp; REACH
            </h4>

            <div className="space-y-4 text-xs font-technical">
              {/* Direct Email with Copy */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#994ff5]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                      PRIMARY EMAIL
                    </span>
                    <p className="text-white font-medium">{siteConfig.email}</p>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="rounded-lg border border-white/10 p-2 hover:bg-white/10 text-white/70 hover:text-white"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Direct Phone */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#06b6d4]" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                    TELEPHONE
                  </span>
                  <p className="text-white font-medium">{siteConfig.phone}</p>
                </div>
              </div>

              {/* GitHub Code Profile */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 text-[#a855f7]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                      CODE REPOSITORIES
                    </span>
                    <p className="text-white font-medium">github.com/mdriyadmr968</p>
                  </div>
                </div>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 hover:bg-white/10 text-white/70 hover:text-white"
                  title="View GitHub repositories"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Spoken Languages */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center gap-3">
                <Globe className="h-4 w-4 text-[#d946ef]" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                    SPOKEN LANGUAGES
                  </span>
                  <p className="text-white font-medium">English • Hindi • Bengali</p>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center gap-3">
                <Award className="h-4 w-4 text-[#ffc41f]" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                    CERTIFICATION
                  </span>
                  <p className="text-white font-medium">Full-Stack Web Development (Programming Hero)</p>
                </div>
              </div>

              {/* Interests & Passions */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center gap-3">
                <Gamepad2 className="h-4 w-4 text-[#10b981]" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                    INTERESTS
                  </span>
                  <p className="text-white font-medium">Reading, Gaming &amp; Web3 Systems</p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <a
                href={siteConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#994ff5] to-[#7928ca] py-3.5 font-technical text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_25px_rgba(153,79,245,0.3)] transition-all hover:opacity-90"
              >
                <span>INITIATE COLLABORATION</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
