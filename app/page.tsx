"use client";
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.1 }
    }
  };

  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh', width: '100%', WebkitFontSmoothing: 'antialiased' }}>
      <AnimatedBackground />
      <Header />
      
      <section className="hero-container" style={{ 
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
        padding: '120px 8% 100px', position: 'relative', overflow: 'hidden' 
      }}>
        
        {/* Left Side: Text Content */}
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={staggerContainer} style={{ flex: '1.2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.h4 variants={fadeInUp} style={{ color: '#c5a47e', letterSpacing: '6px', fontSize: '11px', fontWeight: '900', opacity: 0.7, marginBottom: '12px' }}>
            ─── &nbsp; HI, MY NAME IS
          </motion.h4>
          
          <motion.h1 variants={fadeInUp} className="hero-title" style={{ fontSize: 'clamp(45px, 7vw, 90px)', fontWeight: '900', lineHeight: '1.1', letterSpacing: '2.4px', margin: '10px 0 25px', color: 'white' }}>
            Abeera<br/>Munir
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="role-badge-wrapper" style={{ display: 'flex', justifyContent: 'flex-start' }}> 
            <div className="role-badge" style={{ border: '1px solid rgba(197,164,126,0.2)', padding: '8px 25px', borderRadius: '50px', marginBottom: '25px', background: 'rgba(197,164,126,0.03)' }}>
               <span style={{ color: '#c5a47e', fontSize: '11px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  Full Stack Developer | Cyber Security
               </span>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="hero-desc" style={{ color: '#888', fontStyle: 'italic', maxWidth: '480px', lineHeight: '1.6', fontSize: '16px', marginBottom: '40px' }}>
            "Building secure, high-performance web applications with a focus on pixel-perfect design and digital safety."
          </motion.p>

          <motion.div variants={fadeInUp} className="btn-wrapper" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link href="#portfolio" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', width: 'fit-content' }} className="explore-btn">
                 <span style={{ color: 'white', borderBottom: '2px solid #c5a47e', paddingBottom: '3px', fontWeight: '900', letterSpacing: '3px', fontSize: '11px', textTransform: 'uppercase' }}>
                    Explore My Work
                 </span>
                 <div style={{ background: '#c5a47e', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                    <ArrowRight size={18} />
                 </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Circle */}
        <motion.div 
          className="hero-image-container" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          <motion.div 
            className="hero-circle-ref" 
            style={{ 
              width: 'clamp(280px, 30vw, 350px)', height: 'clamp(280px, 30vw, 350px)',
              borderRadius: '50%', border: '3px solid #c5a47e', display: 'flex',
              alignItems: 'center', justifyContent: 'center', position: 'relative',
              boxShadow: '0 0 60px rgba(197, 164, 126, 0.1)'
            }}
          >
            <div style={{ width: '92%', height: '92%', borderRadius: '50%', overflow: 'hidden', background: '#0d0d0f', position: 'relative', zIndex: 10 }}>
              <motion.img 
                src="/mypic.jpg" 
                alt="Abeera Munir" 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              style={{ position: 'absolute', bottom: '-45px', transform: 'translateX(-50%)', zIndex: 30 }}
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="location-badge" 
                style={{ 
                  background: '#080808', border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '10px 25px', borderRadius: '50px', display: 'flex', 
                  alignItems: 'center', gap: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', 
                  whiteSpace: 'nowrap'
                }}
              >
                <MapPin size={14} color="#c5a47e" />
                <span style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'white' }}>
                  Lahore, Pakistan
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <style jsx>{`
          .explore-btn:hover span { color: #c5a47e !important; transition: 0.3s; }
          
          @media (max-width: 992px) {
            .hero-container { 
              flex-direction: column-reverse ; 
              padding: 100px 5% 60px; 
              text-align: center; 
              gap: 60px ; 
              justify-content: center ;
            }
            .hero-content { 
              align-items: center ; 
              flex: unset ; 
              width: 100% ;
            }
            .role-badge-wrapper, .btn-wrapper { 
              justify-content: center !important; 
              width: 100% !important;
            }
            .hero-desc { margin: 0 auto 40px !important; }
            .hero-title { line-height: 1.1 !important; margin: 10px auto 25px !important; }
            .explore-btn { margin: 0 auto !important; }
          }

          @media (max-width: 480px) {
            .hero-title { font-size: 42px !important; }
            .hero-circle-ref { width: 260px !important; height: 260px !important; }
          }
        `}</style>
      </section>

      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}