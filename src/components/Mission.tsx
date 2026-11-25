import "./mission.css";

import { ShieldCheck, ArrowUpRight, Heart, Globe, HeartHandshake, PawPrint } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function MissionSection() {
  return (
    <section className="liquid-section mission-section" id="mission">
      <div className="section-glow glow-left" />

      <SectionHeading
        eyebrow="WHY WE EXIST"
        title="Our Mission."
        highlight="Our Promise."
        description="We stand for a future where every animal is safe, every habitat is protected, and compassion has no boundaries."
      />

      <div className="mission-grid">
        <article className="liquid-card mission-card">
          <div className="card-icon">
            <ShieldCheck size={30} />
          </div>
          <span className="card-number">01 / PROTECT</span>
          <h3>Protect Every Life</h3>
          <p>Stand against animal cruelty, abuse, and neglect. Every animal deserves safety and dignity.</p>
          <a href="#involved">
            Learn More <ArrowUpRight size={17} />
          </a>
          <div className="card-decoration">
            <Heart />
          </div>
        </article>

        <article className="liquid-card mission-card featured-card">
          <div className="card-icon">
            <Globe size={30} />
          </div>
          <span className="card-number">02 / PRESERVE</span>
          <h3>Preserve Our Planet</h3>
          <p>Protect natural habitats and wildlife while inspiring responsible environmental action.</p>
          <a href="#involved">
            Learn More <ArrowUpRight size={17} />
          </a>
          <div className="card-decoration">
            <Globe />
          </div>
        </article>

        <article className="liquid-card mission-card">
          <div className="card-icon">
            <HeartHandshake size={30} />
          </div>
          <span className="card-number">03 / INSPIRE</span>
          <h3>Inspire Compassion</h3>
          <p>Educate communities and bring people together to create a kinder future for all living beings.</p>
          <a href="#involved">
            Learn More <ArrowUpRight size={17} />
          </a>
          <div className="card-decoration">
            <PawPrint />
          </div>
        </article>
      </div>
    </section>
  );
}
