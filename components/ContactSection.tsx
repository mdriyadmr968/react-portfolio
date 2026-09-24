"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/data";
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  FileDown,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Contact Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#0e111d] to-[#07080c] p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-2xl text-center"
        >
          {/* Subtle Ambient Radial Spotlight */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#994ff5]/25 blur-[100px]" />

          {/* Sub Header Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#ffc41f]" />
            <span className="font-technical text-[11px] uppercase tracking-[0.2em] text-white/90">
              AVAILABLE FOR NEW INITIATIVES
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            LET&apos;S CRAFT THE NEXT <br />
            <span className="bg-gradient-to-r from-white via-[#d4bbfc] to-[#994ff5] bg-clip-text text-transparent">
              DIGITAL FRONTIER.
            </span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto font-sans text-sm sm:text-base text-[#9197ab] leading-relaxed">
            Whether you are envisioning a pioneering Web3 platform, a reactive mobile app, or a
            meticulous frontend overhaul, my inbox is always open.
          </p>

          {/* Interactive Email Copy Button Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button
              onClick={handleCopy}
              className="group relative flex w-full sm:w-auto items-center justify-between sm:justify-center gap-4 rounded-full border border-white/20 bg-white/[0.05] px-6 py-4 font-technical text-xs tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1] hover:shadow-[0_0_30px_rgba(153,79,245,0.3)]"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#994ff5]" />
                <span className="font-medium">{siteConfig.email}</span>
              </div>
              <span className="flex items-center gap-1 text-[10px] text-[#a7aec5] uppercase">
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </span>
            </button>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-technical text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#994ff5] hover:text-white hover:shadow-[0_0_30px_rgba(153,79,245,0.4)]"
            >
              <span>SEND EMAIL</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Alternative CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/[0.08] text-xs font-technical uppercase tracking-wider text-[#82889e]">
            <a
              href={siteConfig.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>UPWORK PROFILE</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#994ff5]" />
            </a>
            <span className="text-white/20">•</span>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>DIRECT RESUME PDF</span>
              <FileDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
