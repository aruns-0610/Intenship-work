"use client";

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { Globe, Menu, MessageSquare } from "lucide-react";
import Second from "./second";
import Third from "./third";
import ContactUs from "./contact";
import * as AOS from "aos";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [crazyMode, setCrazyMode] = useState(false);
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1400 });
  }, []);

  return (
    <>
      <div className={crazyMode ? "dark" : ""}>
        {/* First Page */}
        <div id="first-page" className="container">
          <header className="header">
            <div className="logo">
              <div className="logo-icon">
                <span>S</span>
              </div>
              <span className="logo-text">
                SSV <span>Traders</span>
              </span>
            </div>

            <nav className="nav">
              <ul>
                {["Services", "About", "Contact us"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "-")}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <div className="language-select">
                <button>
                  <Globe className="icon" />
                  <span>English</span>
                </button>
              </div>

              <button className="connect-button cta-button">
                <MessageSquare className="icon" />
                Let&#39;s Connect
              </button>

              <button
                className="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="icon" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </div>
          </header>

          <main className="main-content">
            <div className="hero" data-aos="zoom-in-up">
              <div className="hero-icon">
                <div className="icon-layers"></div>
              </div>
              <div className="hero-text">
                <h1 className="hero-title type-text">
                  There is a <br />
                  Better Way to
                  <br />
                  Secure.
                </h1>
              </div>
              <p className="hero-description">
                FynSec is a vulnerability scanner that finds cyber security
                weaknesses in your digital infrastructure, to avoid costly data
                breaches
              </p>
              <div>
                <button className="cta-button btn">Explore Now</button>
              </div>
            </div>

            <div className="image-container" data-aos="zoom-in-up">
              <Image
                src="/web-ssv-rp.png"
                alt="Security Layers Illustration"
                width={500}
                height={500}
                className="hero-image"
                priority
              />
              <div className="img-bg"></div>
            </div>
          </main>

          <div className="crazy-mode-toggle">
            <div className="toggle-container">
              <span className="toggle-label">Switch mode:</span>
              <button
                className={`toggle-button ${crazyMode ? "active" : ""}`}
                onClick={() => setCrazyMode(true)}
              >
                On
              </button>
              <button
                className={`toggle-button ${!crazyMode ? "active" : ""}`}
                onClick={() => setCrazyMode(false)}
              >
                Off
              </button>
            </div>
          </div>
        </div>
      </div>
      <Second />
      <Third />
      <ContactUs />
    </>
  );
}
