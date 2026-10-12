"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/data";
import {
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  ExternalLink,
  Award,
  GraduationCap,
  FileDown,
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
              ENGINEERING PHILOSOPHY
            </h2>
            <p className="mt-2 max-w-lg font-sans text-sm sm:text-base text-[#8d93a6]">
              A profile of engineering architecture, core distributed proficiencies, and academic
              background.
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
              Enterprise Multi-Tenancy, Web3 Protocols &amp; AI
            </h3>

            <p>
              Software Engineer with 3+ years of experience engineering enterprise multi-tenant SaaS ERP platforms,
              fintech solutions (crypto wallets), and full-stack web applications. Strong in React, Next.js,
              TypeScript, Node.js, and PostgreSQL (Prisma), with proven production delivery in schema-isolated
              multi-tenancy, double-entry accounting engines, and AI/LLM integrations.
            </p>

            <p>
              Currently engineering core architecture for ERP at <strong>XPONENT InfoSystem (Pvt) Ltd</strong> in
              Chattogram, Bangladesh. Architected schema-per-tenant multi-tenancy on PostgreSQL and Prisma (150+
              models/tenant) with dynamic connection pooling, strict double-entry General Ledger (GL) posting gates,
              automated HRMS payroll with topological sorting, and granular RBAC across 50+ tenant databases.
            </p>

            <p>
              Previously at <strong>Tale Wallet</strong>, engineered core multi-chain self-custody wallet features
              supporting 1000+ active users, advanced trading mechanisms (limit, stop-loss, market orders) processing
              5000+ trades/month, Redis query pipelines reducing API load by 45%, and the embeddable Tale Wallet SDK
              adopted across 20+ partner platforms.
            </p>

            {/* Quick Quote / Callout */}
            <div className="rounded-xl border-l-2 border-[#994ff5] bg-white/[0.02] p-5 my-6 text-sm text-[#ccd1e2] italic">
              &quot;Architecting resilient systems where strict data integrity, schema isolation, and intuitive
              interfaces unite to power mission-critical software.&quot;
            </div>
          </motion.div>

          {/* Right Details Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-6 sm:p-8 backdrop-blur-xl space-y-5"
          >
            <h4 className="font-technical text-xs font-bold uppercase tracking-[0.2em] text-[#994ff5]">
              METADATA &amp; CONTACT
            </h4>

            <div className="space-y-3.5 text-xs font-technical">
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

              {/* Location */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#10b981]" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                    LOCATION
                  </span>
                  <p className="text-white font-medium">{siteConfig.location}</p>
                </div>
              </div>

              {/* GitHub Code Profile */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 text-[#a855f7]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                      GITHUB
                    </span>
                    <p className="text-white font-medium">github.com/mdriyadmr968</p>
                  </div>
                </div>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 hover:bg-white/10 text-white/70 hover:text-white"
                  title="View GitHub profile"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Education Degree */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-[#38bdf8]" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                    EDUCATION
                  </span>
                  <p className="text-white font-medium">B.Sc. in CSE (CGPA: 3.38 / 4.00)</p>
                  <p className="text-[10px] text-[#71788e]">Port City International University (2019 – 2023)</p>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex items-center gap-3">
                <Award className="h-4 w-4 text-[#ffc41f]" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#697084]">
                    CERTIFICATION
                  </span>
                  <p className="text-white font-medium">Complete Web Development (Top 15%)</p>
                  <p className="text-[10px] text-[#71788e]">Programming Hero (2022)</p>
                </div>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#994ff5] to-[#7928ca] py-3.5 font-technical text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_25px_rgba(153,79,245,0.3)] transition-all hover:opacity-90"
              >
                <FileDown className="h-4 w-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
              <a
                href={siteConfig.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 font-technical text-xs font-medium uppercase tracking-widest text-[#ccd1e2] transition-all hover:bg-white/[0.08] hover:text-white"
              >
                <span>HIRE ON UPWORK</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
