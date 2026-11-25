import "./what-we-do.css";
import SectionHeading from "./SectionHeading";

import {
  ArrowUpRight,
  PawPrint,
  Stethoscope,
  TreePine,
  Users,
} from "lucide-react";

export default function WhatWeDoSection() {
  return (
    <section className="liquid-section work-section" id="work">
      <div className="section-glow glow-right" />

      <SectionHeading
        eyebrow="OUR WORK"
        title="Small Actions."
        highlight="Big Changes."
        description="Real change starts with action. Explore the ways we work to create a safer and more compassionate world."
      />

      <div className="work-grid">
        <article className="work-card work-card-large">
          <div className="work-card-top">
            <span>01</span>
            <div className="card-icon">
              <PawPrint size={28} />
            </div>
          </div>
          <div>
            <span className="work-category">ANIMAL WELFARE</span>
            <h3>Rescue & Protection</h3>
            <p>Supporting animal rescue, promoting responsible care, and standing up for animals in need.</p>
            <a href="#involved" className="work-arrow">
              Explore <ArrowUpRight size={19} />
            </a>
          </div>
          <PawPrint className="work-watermark" />
        </article>

        <article className="work-card">
          <div className="work-card-top">
            <span>02</span>
            <div className="card-icon">
              <Stethoscope size={28} />
            </div>
          </div>
          <span className="work-category">ANIMAL HEALTH</span>
          <h3>Health & Care</h3>
          <p>Encouraging proper veterinary care, healthy lives, and responsible pet ownership.</p>
          <a href="#involved" className="work-arrow">
            Explore <ArrowUpRight size={19} />
          </a>
        </article>

        <article className="work-card">
          <div className="work-card-top">
            <span>03</span>
            <div className="card-icon">
              <TreePine size={28} />
            </div>
          </div>
          <span className="work-category">WILDLIFE</span>
          <h3>Nature Conservation</h3>
          <p>Raising awareness about wildlife, biodiversity, and the importance of natural habitats.</p>
          <a href="#involved" className="work-arrow">
            Explore <ArrowUpRight size={19} />
          </a>
        </article>

        <article className="work-card work-card-wide">
          <div className="work-card-top">
            <span>04</span>
            <div className="card-icon">
              <Users size={28} />
            </div>
          </div>
          <span className="work-category">COMMUNITY</span>
          <h3>Education & Awareness</h3>
          <p>Empowering people with knowledge and inspiring communities to make a positive difference.</p>
          <a href="#involved" className="work-arrow">
            Explore <ArrowUpRight size={19} />
          </a>
        </article>
      </div>
    </section>
  );
}
