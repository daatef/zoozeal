import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import "./navbar.css";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Mission", href: "#mission" },
    { label: "What We Do", href: "#work" },
    { label: "Get Involved", href: "#involved" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="liquid-navbar">
      <Link href="#home" className="liquid-logo" onClick={closeMenu}>
        <Image src="/zoozeallogo-black.png" alt="Animals" width={100} height={70} />
      </Link>

      <div className={`liquid-nav-links ${isOpen ? "active" : ""}`}>
        {navLinks.map((link, index) => (
          <Link key={link.href} href={link.href} className={index === 0 ? "selected" : ""} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}

        <Link href="#donate" className="liquid-mobile-donate" onClick={closeMenu}>
          <Heart size={19} />
          Donate Now
        </Link>
      </div>

      <Link href="#donate" className="liquid-donate">
        <Heart size={19} />
        Donate Now
      </Link>

      <button
        type="button"
        className="liquid-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="liquid-navigation"
      >
        {isOpen ? <X size={27} /> : <Menu size={27} />}
      </button>
    </nav>
  );
}
