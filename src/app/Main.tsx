"use client";

import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/components/Hero";
import AboutSection from "@/src/components/About";
import MissionSection from "@/src/components/Mission";
import WhatWeDo from "@/src/components/What-We-Do";
import AnimalShowcaseSection from "@/src/components/Animal-Showcase";
import GetInvolvedSection from "@/src/components/Get-Involved";
import DonateSection from "@/src/components/Donate";
import ContactSection from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import "./main.css";


export default function Main() {
  return (
    <main className="zoozeal-page">
      {/* NAVIGATION */}
      <section className="liquid-hero" id="home">
        <div className="liquid-background-glow" />
        <div className="liquid-background-glow second" />
        {/* Nav */}
        <Navbar />
        <HeroSection />
      </section>

      <AboutSection />
      <MissionSection />
      <AnimalShowcaseSection />
      <WhatWeDo />
      <GetInvolvedSection />
      <DonateSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
