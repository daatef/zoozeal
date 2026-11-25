import "./donate.css";
import { Heart, ArrowRight } from "lucide-react";
export default function DonateSection() {
  return (
    <section className="donate-section" id="donate">
      <div className="donate-glow" />

      <div className="donate-inner">
        <div className="donate-visual">
          <div className="donate-ring donate-ring-one" />
          <div className="donate-ring donate-ring-two" />
          <div className="donate-heart-wrapper">
            <Heart size={95} />

            <span className="donate-sparkle sparkle-one">✦</span>
            <span className="donate-sparkle sparkle-two">✧</span>
          </div>
        </div>

        <div className="donate-content">
          <div className="donate-label">
            <Heart size={16} /> MAKE A DIFFERENCE TODAY
          </div>

          <h2>
            Kindness Is
            <br />
            <span>Worth Sharing.</span>
          </h2>

          <p>
            Every act of kindness matters. Stand with us, support animal protection, and help create a brighter future
            for every living creature.
          </p>

          <div className="liquid-buttons">
            <a href="#contact" className="donate-button">
              Support Our Mission <ArrowRight size={19} />
            </a>
            <a href="#about" className="donate-outline">
              Learn Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
