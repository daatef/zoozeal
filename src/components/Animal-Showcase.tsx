import "./animal-showcase.css";
import { Dog, Cat, Bird, Heart, PawPrint } from "lucide-react";
export default function AnimalShowcaseSection() {
  return (
    <section className="animal-section">
      <div className="animal-background-glow" />

      <div className="animal-content">
        <div className="liquid-eyebrow">
          <Heart size={17} />
          Every Creature Counts
        </div>

        <h2>
          Different Lives.
          <br />
          <span>One Planet.</span>
        </h2>

        <p>
          From the smallest companion to the wildest creatures, every life deserves respect, protection, and a chance to
          thrive.
        </p>

        <div className="animal-icons">
          <div>
            <Dog size={28} />
            <span>Companions</span>
          </div>
          <div>
            <Cat size={28} />
            <span>Pets</span>
          </div>
          <div>
            <Bird size={28} />
            <span>Wildlife</span>
          </div>
        </div>
      </div>

      <div className="animal-visual">
        <div className="animal-orbit orbit-one" />
        <div className="animal-orbit orbit-two" />
        <div className="animal-center">
          <PawPrint size={100} />
        </div>
        <div className="animal-mini animal-mini-one">🐶</div>
        <div className="animal-mini animal-mini-two">🦁</div>
        <div className="animal-mini animal-mini-three">🐘</div>
        <div className="animal-mini animal-mini-four">🦋</div>
      </div>
    </section>
  );
}
