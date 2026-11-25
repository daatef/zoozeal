import "./get-involved.css";
import { HandHeart, ArrowRight, Heart, Globe } from "lucide-react";
import SectionHeading from "@/src/components/sectionHeading";
export default function GetInvolvedSection() {
  return (
    <section className="liquid-section involved-section" id="involved">
      <div className="section-glow glow-left" />

      <SectionHeading
        eyebrow="BE PART OF THE CHANGE"
        title="Your Actions."
        highlight="Their Future."
        description="You don't need to change the whole world. You just need to help change the world for one animal at a time."
      />

      <div className="involved-grid">
        <article className="involved-card">
          <div className="involved-icon">
            <HandHeart size={32} />
          </div>
          <span>01 / GIVE YOUR TIME</span>
          <h3>Become a Volunteer</h3>
          <p>Share your time, skills, and passion to support animal welfare and conservation initiatives.</p>
          <a href="#contact" className="text-link">
            Join Our Team <ArrowRight size={17} />
          </a>
        </article>

        <article className="involved-card">
          <div className="involved-icon">
            <Heart size={32} />
          </div>
          <span>02 / MAKE A DIFFERENCE</span>
          <h3>Support Our Cause</h3>
          <p>Your support helps spread awareness and create meaningful opportunities for animal protection.</p>
          <a href="#donate" className="text-link">
            Support Us <ArrowRight size={17} />
          </a>
        </article>

        <article className="involved-card">
          <div className="involved-icon">
            <Globe size={32} />
          </div>
          <span>03 / SPREAD THE WORD</span>
          <h3>Raise Awareness</h3>
          <p>Share knowledge, inspire others, and help build a community that stands for animal rights.</p>
          <a href="#contact" className="text-link">
            Get Involved <ArrowRight size={17} />
          </a>
        </article>
      </div>
    </section>
  );
}
