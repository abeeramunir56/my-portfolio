"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const emailAddress = "abeeramunir56@gmail.com";

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* INFO SIDE */}
        <div className="info-side">
          <h2 className="contact-title">Contact Me</h2>
          <div className="title-underline"></div>
          
          <div className="info-items">
             <div className="info-item email-row">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href={`mailto:${emailAddress}`} className="contact-link">{emailAddress}</a>
             </div>
          </div>

          <h3 className="social-heading">Social Handles</h3>
          {/* Social Handles back to 2 rows as requested */}
          <div className="info-items">
             <div className="info-item">
                <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
                <span className="social-text">@abeera_munir</span>
             </div>
             <div className="info-item">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                <span className="social-text">www.linkedin.com/in/abeera-munir</span>
             </div>
          </div>
        </div>

        {/* FORM SIDE - Fixed inputs being side-by-side */}
        <div className="form-wrapper">
          <form className="contact-form">
            <input type="text" placeholder="NAME" className="contact-input" />
            <input type="email" placeholder="EMAIL" className="contact-input" />
            <textarea placeholder="MESSAGE" rows={4} className="contact-input" style={{ resize: 'none' }}></textarea>
            
            <a 
              href={`mailto:${emailAddress}?subject=Contact from Portfolio`} 
              className="submit-btn"
            >
              SEND
            </a>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-section { 
          width: 100%; background: #0d0d0f; border-radius: 80px; 
          padding: 100px 8%; margin-top: -60px; position: relative; 
          zIndex: 10; border-top: 1px solid rgba(255,255,255,0.05); 
        }
        .contact-container { 
          max-width: 1200px; margin: 0 auto; display: grid; 
          grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; 
        }
        
        .contact-title { font-size: 50px; font-weight: 900; font-style: italic; text-transform: uppercase; color: #c5a47e; margin: 0; }
        .title-underline { width: 60px; height: 2px; background: rgba(197,164,126,0.3); margin: 20px 0 60px; }
        
        .info-items { display: flex; flex-direction: column; gap: 25px; }
        .info-item { display: flex; align-items: center; gap: 20px; }
        :global(.contact-icon) { color: #c5a47e; width: 18px !important; }
        
        .contact-link, .social-text { color: #aaa; font-size: 14px; text-decoration: none; }
        .social-heading { font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: 3px; margin: 50px 0 25px; color: white; }

        .form-wrapper { 
          background: rgba(255,255,255,0.02); padding: 50px; 
          border-radius: 40px; border: 1px solid rgba(255,255,255,0.05); 
          backdrop-filter: blur(10px); 
        }
        .contact-form { display: flex; flex-direction: column; width: 100%; }
        
        .contact-input {
          width: 100% !important; /* Forces full width always */
          background: #080808; border: 1px solid rgba(255,255,255,0.05);
          padding: 18px 25px; border-radius: 15px; color: white;
          font-size: 12px; font-weight: 700; letter-spacing: 2px;
          outline: none; margin-bottom: 20px; display: block;
        }

        .submit-btn { 
          background: none; border: 2px solid #c5a47e; color: #c5a47e; 
          padding: 15px 60px; border-radius: 50px; font-weight: 900; 
          letter-spacing: 2px; cursor: pointer; align-self: center;
          transition: 0.3s; display: inline-block; text-decoration: none;
        }
        .submit-btn:hover { background: #c5a47e; color: #000; }

        /* RESPONSIVE FIXES */
        @media (max-width: 992px) {
          .contact-container { grid-template-columns: 1fr; gap: 50px; }
          .contact-section { padding: 80px 5% !important; border-radius: 50px !important; }
          .info-side { text-align: center; }
          .title-underline { margin: 20px auto 40px; }
          .info-item { justify-content: center; }
          .form-wrapper { padding: 40px 20px !important; border-radius: 30px !important; }
          
          /* Form stack assurance */
          .contact-form { align-items: stretch; }
          .contact-input { margin-bottom: 15px; }
        }

        @media (max-width: 480px) {
          .contact-title { font-size: 35px; }
          .email-row { flex-direction: column; gap: 10px; }
          .submit-btn { width: 100%; text-align: center; padding: 15px 0; }
        }
      `}</style>
    </section>
  );
};

export default Contact;