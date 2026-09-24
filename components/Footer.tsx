"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";
import { ArrowUp, Clock } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  DiscordIcon,
  TwitterIcon,
  FacebookIcon,
} from "./Icons";

export default function Footer() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "GITHUB", href: siteConfig.socials.github, icon: GithubIcon },
    { label: "LINKEDIN", href: siteConfig.socials.linkedin, icon: LinkedinIcon },
    { label: "DISCORD", href: siteConfig.socials.discord, icon: DiscordIcon },
    { label: "TWITTER", href: siteConfig.socials.twitter, icon: TwitterIcon },
    { label: "FACEBOOK", href: siteConfig.socials.facebook, icon: FacebookIcon },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050609] pt-16 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand & Monogram */}
          <div className="md:col-span-5 flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04]">
                <span className="font-editorial text-base font-bold text-white">
                  {siteConfig.monogram}
                </span>
              </div>
              <span className="font-editorial text-lg font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="font-sans text-xs text-[#7e859b] max-w-sm leading-relaxed">
              Crafting high-fidelity digital systems, reactive web applications, and decentralized
              architectures with deliberate typography and motion.
            </p>
          </div>

          {/* Col 2: Live Local Time & Location */}
          <div className="md:col-span-3 flex flex-col space-y-2 font-technical">
            <span className="text-[10px] uppercase tracking-widest text-[#5e6477]">
              LOCAL TIME // ASIA
            </span>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Clock className="h-3.5 w-3.5 text-[#994ff5]" />
              <span>{timeString || "00:00:00 AM"}</span>
              <span className="text-[10px] text-[#798096] font-normal">GMT+6</span>
            </div>
            <span className="text-xs text-[#7e859b]">
              Available for Global Remote &amp; On-Site Deployments
            </span>
          </div>

          {/* Col 3: Social Profile Links */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="font-technical text-[10px] uppercase tracking-widest text-[#5e6477]">
              CONNECT &amp; CODE
            </span>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-technical text-xs text-[#989fb5] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-technical text-xs text-[#63697d]">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Designed &amp; Engineered with Precision.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#8b91a7] hover:text-white transition-colors"
          >
            <span className="text-[11px] uppercase tracking-widest">BACK TO TOP</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] group-hover:border-white/30">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
