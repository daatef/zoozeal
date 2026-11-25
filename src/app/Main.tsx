"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sparkles, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import {
  PawPrint,
  Heart,
  ArrowRight,
  Play,
  Leaf,
  Globe,
  Users,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  TreePine,
  HandHeart,
  Dog,
  Cat,
  Bird,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight,
  Sparkles as SparkleIcon,
} from "lucide-react";

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

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <div className="liquid-eyebrow">
        <SparkleIcon size={17} />
        {eyebrow}
      </div>

      <h2>
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      <p>{description}</p>
    </div>
  );
}

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
