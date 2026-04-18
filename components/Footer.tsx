"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      
      {/* Left Area - Logo */}
      <div className="footer-logo">
        AM
      </div>
      
      {/* Center Area - Copyright (Mobile par hidden ya stacked ho sakta hai width ke hisab se) */}
      <div className="footer-copyright">
        <p>© 2026 Abeera Munir. All Rights Reserved.</p>
      </div>

      {/* Right Area - Social Icons */}
      <div className="footer-socials">
        {[
          { icon: faFacebook, link: "https://www.facebook.com/share/1FW9K3bwjc/ " },
          { icon: faInstagram, link: "#" },
          { icon: faLinkedin, link: "https://www.linkedin.com/in/abeera-munir-817523399" }
        ].map((social, i) => (
          <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FontAwesomeIcon 
              icon={social.icon} 
              className="social-icon-svg"
            />
          </a>
        ))}
      </div>

      <style jsx>{`
        .footer-container {
          padding: 40px 8%; 
          background: #050506; 
          display: flex; 
          justify-content: space-between; 
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          position: relative;
          z-index: 10;
          gap: 15px;
        }

        .footer-logo { 
          font-size: 22px; 
          font-weight: 900; 
          color: #c5a47e; 
          letter-spacing: 2px;
          font-style: italic;
          flex: 1;
          text-align: left;
        }

        .footer-copyright { 
          flex: 2; 
          text-align: center; 
        }

        .footer-copyright p {
          color: #666; 
          font-size: 9px; 
          font-weight: 800; 
          letter-spacing: 2px; 
          text-transform: uppercase;
          margin: 0;
        }

        .footer-socials { 
          display: flex; 
          gap: 15px; 
          align-items: center; 
          justify-content: flex-end;
          flex: 1; 
        }

        :global(.social-icon-svg) {
          color: #888;
          width: 16px !important; 
          height: 16px !important;
          transition: 0.3s;
        }

        .footer-social-link:hover :global(.social-icon-svg) {
          color: #c5a47e !important;
          transform: translateY(-2px);
        }

        /* FIXED MOBILE LOGIC - No Centering */
        @media (max-width: 850px) {
          .footer-container {
            padding: 30px 5% !important;
            flex-wrap: wrap; /* Taake agar jagah kam ho toh copyright niche aa jaye */
          }

          .footer-logo {
            flex: unset;
            order: 1; /* Logo Left */
          }

          .footer-socials {
            flex: unset;
            order: 2; /* Socials Right */
            gap: 15px;
          }

          .footer-copyright {
            flex: 100%; /* Copyright full width lekar niche chala jayega */
            order: 3;
            margin-top: 20px;
            text-align: center;
          }
        }

        @media (max-width: 400px) {
            .footer-logo { font-size: 18px; }
            .footer-socials { gap: 10px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;