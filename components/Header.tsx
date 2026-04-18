"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '800',
    letterSpacing: '2px',
    textTransform: 'uppercase' as const,
    opacity: 0.9,
    transition: '0.3s ease',
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '25px 8%', zIndex: 1000,
      backdropFilter: 'blur(15px)',
      background: 'linear-gradient(to bottom, rgba(5,5,6,0.9), transparent)',
    }}>
      {/* Logo Area */}
      <div style={{ fontSize: '26px', fontWeight: '900', color: '#c5a47e', letterSpacing: '2px', fontStyle: 'italic' }}>
        AM
      </div>
      
      {/* Desktop Navigation - Is mein 'nav-desktop' class lagayi hai */}
      <nav className="nav-desktop">
        <Link href="#home" style={navLinkStyle} className="hover-gold">Home</Link>
        <Link href="#about" style={navLinkStyle} className="hover-gold">About Me</Link>
        <Link href="#portfolio" style={navLinkStyle} className="hover-gold">Portfolio</Link>
        <Link href="#contact" style={{
          ...navLinkStyle,
          border: '1px solid #c5a47e',
          padding: '10px 25px',
          borderRadius: '50px',
          color: '#c5a47e',
          opacity: 1
        }}>
          Contact Me
        </Link>
      </nav>

      {/* Mobile Toggle Button - Is mein 'mobile-toggle-btn' class lagayi hai */}
      <div className="mobile-toggle-btn" onClick={() => setIsOpen(!isOpen)} style={{ color: '#c5a47e', cursor: 'pointer', zIndex: 1100 }}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <Link href="#home" onClick={() => setIsOpen(false)} style={navLinkStyle}>Home</Link>
        <Link href="#about" onClick={() => setIsOpen(false)} style={navLinkStyle}>About Me</Link>
        <Link href="#portfolio" onClick={() => setIsOpen(false)} style={navLinkStyle}>Portfolio</Link>
        <Link href="#contact" onClick={() => setIsOpen(false)} style={{ ...navLinkStyle, color: '#c5a47e', border: '1px solid #c5a47e', padding: '10px', borderRadius: '50px', textAlign: 'center' }}>Contact Me</Link>
      </div>

      <style jsx>{`
        /* Desktop Style */
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 45px;
        }

        .mobile-toggle-btn {
          display: none; /* Desktop par toggle button hide rahay ga */
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%; /* Default hidden */
          width: 280px;
          height: 100vh;
          background: #0a0a0b;
          display: flex;
          flex-direction: column;
          padding: 100px 40px;
          gap: 30px;
          transition: 0.4s ease-in-out;
          zIndex: 1050;
          box-shadow: -10px 0 30px rgba(0,0,0,0.5);
        }

        .mobile-sidebar.open {
          right: 0;
        }

        .hover-gold:hover { color: #c5a47e !important; opacity: 1 !important; }

        /* Expert Responsive Logic - Correcting the Screenshot Issue */
        @media (max-width: 950px) {
          .nav-desktop {
            display: none !important; /* Mobile par desktop links gayab ho jayenge */
          }
          .mobile-toggle-btn {
            display: block !important; /* Mobile par sirf Hamburger dikhega */
          }
          header {
            padding: 20px 5% !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;