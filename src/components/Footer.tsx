import "./footer.css";
import { Instagram, Facebook, Twitter, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="liquid-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="liquid-logo">
            <Image src="/zoozeallogo-white.png" alt="Animals" width={200} height={50} />
          </a>
          <p>A kinder world starts with us. Together, we can protect animals, preserve nature, and inspire change.</p>
          <div className="contact-socials">
            <a href="#contact" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#contact" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#contact" aria-label="Twitter">
              <Twitter />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>EXPLORE</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#mission">Our Mission</a>
          <a href="#work">What We Do</a>
        </div>

        <div className="footer-links">
          <h4>GET INVOLVED</h4>
          <a href="#involved">Volunteer</a>
          <a href="#involved">Raise Awareness</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-cta">
          <div className="footer-cta-icon">
            <Heart size={25} />
          </div>
          <h3>Be the reason for a better tomorrow.</h3>
          <a href="#donate">
            Make a Difference <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Zoozeal. All rights reserved.</span>
        <span>
          MADE WITH <Heart size={13} /> FOR EVERY LIFE
        </span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
