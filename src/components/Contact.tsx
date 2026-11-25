import "./contact.css";

import { Mail, MapPin, Heart, ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";
import SectionHeading from "@/src/components/SectionHeading";
export default function ContactSection() {
  return (
    <section className="liquid-section contact-section" id="contact">
      <div className="section-glow glow-right" />

      <SectionHeading
        eyebrow="LET'S CONNECT"
        title="Every Voice."
        highlight="Every Action."
        description="Have a question, an idea, or want to join our mission? We'd love to hear from you."
      />

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's make a difference together.</h3>
          <p>Whether you want to volunteer, collaborate, or simply learn more about our work, get in touch.</p>

          <div className="contact-info-item">
            <div>
              <Mail size={21} />
            </div>
            <span>
              <small>EMAIL US</small>
              <strong>Get in touch with our team</strong>
            </span>
          </div>

          <div className="contact-info-item">
            <div>
              <MapPin size={21} />
            </div>
            <span>
              <small>OUR MISSION</small>
              <strong>Working for animals everywhere</strong>
            </span>
          </div>

          <div className="contact-info-item">
            <div>
              <Heart size={21} />
            </div>
            <span>
              <small>OUR PURPOSE</small>
              <strong>Compassion without boundaries</strong>
            </span>
          </div>

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

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="contact-form-heading">
            <span>GET IN TOUCH</span>
            <h3>Send us a message.</h3>
          </div>

          <div className="contact-form-row">
            <label>
              Your Name
              <input type="text" placeholder="Your full name" required />
            </label>

            <label>
              Email Address
              <input type="email" placeholder="Your email address" required />
            </label>
          </div>

          <label>
            Subject
            <input type="text" placeholder="How can we help?" required />
          </label>

          <label>
            Your Message
            <textarea rows={5} placeholder="Tell us how you'd like to make a difference..." required />
          </label>

          <button type="submit" className="liquid-primary contact-submit">
            Send Message <ArrowRight size={18} />
          </button>
          <small className="form-note">
            Connect this form to your contact API or email service to receive submissions.
          </small>
        </form>
      </div>
    </section>
  );
}
