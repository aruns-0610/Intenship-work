'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Globe, Menu, MessageSquare } from 'lucide-react';
import Second from './second';
import Third from './third';
import ContactUs from './contact';
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [crazyMode, setCrazyMode] = useState(false);

  return (
    <>
    <div className={crazyMode ? 'dark' : ''}>
      {/* First Page */}
      <div id="first-page" className="container">
        <header className="header">
          <div className="logo">
            <div className="logo-icon">
              <span>S</span>
            </div>
            <span className="logo-text">SSV Traders</span>
          </div>

          <nav className="nav">
            <ul>
              {['Services', 'About', 'Contact us'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`}>
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
              Let`&#39;`s Connect
            </button>

            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="icon" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </header>

        <main className="main-content">
          <div className="hero">
            <div className="hero-icon">
              <div className="icon-layers"></div>
            </div>
            <h1 className="hero-title">
              There is a<br />
              Better Way<br />
              to Secure.
            </h1>
            <p className="hero-description">
              FynSec is a vulnerability scanner that finds cyber security weaknesses in your digital infrastructure, to avoid costly data breaches
            </p>
            <div>
              <button className="cta-button">Explore Now</button>
            </div>
          </div>

          <div className="image-container">
            <Image
              src="/web-ssv.png"
              alt="Security Layers Illustration"
              width={500}
              height={500}
              className="hero-image"
              priority
            />
          </div>
        </main>

        <div className="crazy-mode-toggle">
          <div className="toggle-container">
            <span className="toggle-label">Switch mode:</span>
            <button
              className={`toggle-button ${crazyMode ? 'active' : ''}`}
              onClick={() => setCrazyMode(true)}
            >
              On
            </button>
            <button
              className={`toggle-button ${!crazyMode ? 'active' : ''}`}
              onClick={() => setCrazyMode(false)}
            >
              Off
            </button>
          </div>
        </div>
      </div>
      
          
    </div>
    <Second/>
    <Third/>
    <ContactUs/>
    </>
  );
}
