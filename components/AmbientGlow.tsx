"use client";

import React from "react";

export default function AmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top Left / Center Violet & Magenta Bloom */}
      <div
        className="animate-pulse-glow absolute -top-[10%] left-[15%] h-[500px] w-[500px] rounded-full bg-[#994ff5]/15 blur-[140px] md:h-[650px] md:w-[650px]"
        style={{ animationDuration: "14s" }}
      />
      
      {/* Top Right Cyan Accent */}
      <div
        className="animate-pulse-glow absolute -top-[5%] right-[10%] h-[400px] w-[400px] rounded-full bg-[#06b6d4]/10 blur-[130px] md:h-[550px] md:w-[550px]"
        style={{ animationDuration: "18s", animationDelay: "2s" }}
      />

      {/* Mid Section Magenta Bloom */}
      <div
        className="animate-pulse-glow absolute top-[40%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#d946ef]/12 blur-[150px] md:h-[700px] md:w-[700px]"
        style={{ animationDuration: "16s", animationDelay: "4s" }}
      />

      {/* Projects Section Electric Indigo & Violet */}
      <div
        className="animate-pulse-glow absolute top-[65%] right-[5%] h-[600px] w-[600px] rounded-full bg-[#994ff5]/12 blur-[160px] md:h-[800px] md:w-[800px]"
        style={{ animationDuration: "20s", animationDelay: "1s" }}
      />

      {/* Footer Glow */}
      <div
        className="absolute bottom-[-10%] left-[30%] h-[400px] w-[600px] rounded-full bg-[#7928ca]/15 blur-[140px]"
      />
    </div>
  );
}
