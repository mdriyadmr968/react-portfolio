import type { Metadata, Viewport } from "next";
import { Cinzel, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Syied Bin Salim — Software Engineer",
  description:
    "Portfolio of Mohammad Syied Bin Salim — Software Engineer at XPONENT InfoSystem specializing in high-fidelity React, Next.js, and decentralized Web3 applications.",
  keywords: [
    "Mohammad Syied Bin Salim",
    "Syied Bin Salim",
    "Software Engineer",
    "XPONENT InfoSystem",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "Web3 Developer",
    "Creative Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mohammad Syied Bin Salim" }],
  openGraph: {
    title: "Mohammad Syied Bin Salim — Software Engineer",
    description:
      "Crafting intuitive, high-impact digital experiences across web, mobile, and enterprise platforms.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${geistSans.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#07080c] text-[#d4d6e0] font-sans antialiased selection:bg-[#994ff5]/30 selection:text-white relative min-h-screen overflow-x-hidden">
        {/* Persistent SVG Noise Film Grain Overlay */}
        <GrainOverlay />
        
        {/* Custom Interactive Follower Cursor */}
        <CustomCursor />
        
        {/* Fixed Editorial Navigation */}
        <Navbar />

        {/* Main Content Viewport */}
        <main className="relative z-10 flex flex-col">{children}</main>

        {/* Global Editorial Footer */}
        <Footer />
      </body>
    </html>
  );
}
