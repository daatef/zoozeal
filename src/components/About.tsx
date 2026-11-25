"use client";

import { PawPrint, Heart, ArrowUpRight } from "lucide-react";

import "./about.css";

export default function AboutSection() {
  return (
    <section className="liquid-section about-section" id="about">
      <div className="section-glow glow-right" />

      <div className="about-grid">
        <div className="about-visual">
          <div className="about-image-card">
            <div className="about-image-placeholder">
              <PawPrint size={90} />
              <span>Every Life Matters</span>
            </div>
            <div className="about-image-overlay">
              <span>01 / WHO WE ARE</span>
              <strong>Compassion changes everything.</strong>
            </div>
          </div>

          <div className="about-floating-card">
            <Heart size={25} />
            <div>
              <strong>One Mission</strong>
              <small>A better world for animals</small>
            </div>
          </div>

          <div className="about-orbit">
            <span />
          </div>
        </div>

        <div className="about-content">
          <div className="liquid-eyebrow">
            <PawPrint size={17} />
            About Zoozeal
          </div>

          <h2>
            A World Where
            <br />
            Every Life
            <br />
            <span>Matters.</span>
          </h2>

          <p>
            We believe that every animal deserves kindness, protection, and the freedom to live without fear. Zoozeal is
            dedicated to creating a world where animals are respected and protected.
          </p>

          <p>
            Through awareness, rescue initiatives, education, and community action, we work together to make compassion
            a part of everyday life.
          </p>

          <a href="#mission" className="text-link">
            Discover Our Mission <ArrowUpRight size={18} />
          </a>

          <div className="about-stats">
            <div>
              <strong>10K+</strong>
              <span>Animal Lovers</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Driven by Compassion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
