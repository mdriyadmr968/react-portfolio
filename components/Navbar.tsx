"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";
import { ArrowUpRight, Menu, X, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "works", "experience", "capabilities", "about", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "INDEX", href: "#hero" },
    { label: "WORKS", href: "#works" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#07080c]/85 py-3.5 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Monogram & Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="group flex items-center gap-3.5 focus:outline-none"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] transition-all duration-300 group-hover:border-[#994ff5]/60 group-hover:bg-[#994ff5]/10">
            <span className="font-editorial text-lg font-bold tracking-tight text-white transition-transform duration-300 group-hover:scale-105">
              {siteConfig.monogram}
            </span>
            <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-[#994ff5]/0 via-[#994ff5]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-sm font-semibold tracking-wider text-white">
              {siteConfig.name}
            </span>
            <span className="font-technical text-[10px] uppercase tracking-widest text-[#8a8f9f]">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Center: Status Badge (Available for work) */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          </span>
          <span className="font-technical text-[11px] font-medium tracking-widest text-white/90">
            {siteConfig.status}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className={`group relative font-technical text-xs tracking-[0.18em] uppercase transition-colors duration-300 ${
                      isActive ? "text-white font-semibold" : "text-[#8a8f9f] hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#994ff5] to-[#06b6d4]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Direct CTA: Resume */}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wider text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(153,79,245,0.25)]"
          >
            <span className="font-technical uppercase tracking-wider text-[11px]">RESUME</span>
            <FileDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-white/10 bg-[#07080c]/98 px-6 py-8 backdrop-blur-2xl"
          >
            {/* Status in Mobile */}
            <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-technical text-[10px] font-medium tracking-widest text-white/90">
                {siteConfig.status}
              </span>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="font-technical text-sm tracking-widest uppercase text-white/80 hover:text-white py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.06] py-3 text-xs font-medium uppercase tracking-widest text-white"
                >
                  <FileDown className="h-4 w-4" />
                  DOWNLOAD RESUME
                </a>
                <a
                  href={siteConfig.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#994ff5]/40 bg-[#994ff5]/20 py-3 text-xs font-medium uppercase tracking-widest text-white"
                >
                  <span>HIRE ON UPWORK</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
