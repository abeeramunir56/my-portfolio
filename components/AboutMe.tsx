"use client";
import { motion, Variants } from 'framer-motion'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faLaptopCode, 
  faMicrochip, 
  faServer, 
  faShieldHalved, 
  faCubes,
  faDatabase,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Screen size check taake grid columns dynamic rahein
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skills = [
    { name: "HTML / CSS", icon: faCode },
    { name: "JavaScript", icon: faLaptopCode },
    { name: "React / Next.js", icon: faCubes },
    { name: "Laravel", icon: faDatabase },
    { name: "WordPress", icon: faGlobe },
    { name: "Cyber Security", icon: faShieldHalved },
    { name: "Node.js", icon: faServer },
    { name: "Tailwind CSS", icon: faMicrochip }
  ];

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const skillBoxVariant: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="about-section" style={{ padding: '120px 8%', background: 'transparent', position: 'relative', zIndex: 10 }}>
      <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        
        <h2 className="section-title" style={{ fontSize: 'clamp(40px, 6vw, 65px)', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', color: 'white', margin: 0 }}>
          About Me
        </h2>
        
        <div style={{ width: '60px', height: '3px', background: '#c5a47e', margin: '15px auto 50px' }}></div>
        
        <p className="about-text" style={{ color: '#bbb', fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto 80px' }}>
          Hello! I'm <span style={{ color: '#c5a47e', fontWeight: 'bold' }}>Abeera Munir</span>. I am a skilled Full Stack Developer and Cyber Security expert.
        </p>

        <h3 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', color: 'white', margin: '0 0 50px' }}>
          Skills
        </h3>
        
        {/* Animated Skills Grid - FIXED LAYOUT */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariant}
          style={{ 
            display: 'grid', 
            // Desktop par 4 columns, Mobile par 2
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
            gap: isMobile ? '10px' : '20px',
            width: '100%'
          }}
        >
          {skills.map((skill, i) => (
            <motion.div 
              key={i} 
              variants={skillBoxVariant}
              whileHover={{ scale: 1.05 }}
              className="skill-box" 
              style={{
                background: '#c5a47e',
                padding: isMobile ? '12px 10px' : '15px 12px', 
                borderRadius: '12px',
                display: 'flex', 
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                border: '1px solid rgba(197, 164, 126, 0.2)'
              }}
            >
              <FontAwesomeIcon icon={skill.icon} style={{ color: '#050506', width: '14px' }} />
              <span className="skill-name" style={{ fontSize: isMobile ? '9px' : '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', color: '#050506', textAlign: 'left' }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .skill-box:hover {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(197, 164, 126, 0.5) !important;
          transition: 0.3s all ease;
        }
        .skill-box:hover .skill-name, 
        .skill-box:hover :global(svg) {
          color: #c5a47e !important;
        }
        @media (max-width: 600px) {
          .about-section { padding: 60px 4% !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;