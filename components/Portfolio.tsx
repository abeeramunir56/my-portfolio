"use client";
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const projectsPerPage = 6; 

  // Mobile check to prevent layout break
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 850);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cats = ["All", "Full Projects", "Custom Sites", "Wordpress", "E-commerce", "Blog Sites", "Offline Projects"];

  const projects = [
    { id: 1, title: "Calculator", img: "/Calculator.png", link: "#", category: "All, Full Projects, Custom Sites,Offline Projects" },
    { id: 2, title: "Amazon", img: "/Amazon.png", link: "#", category: "All, E-commerce, Custom Sites,Offline Projects" },
    { id: 3, title: "Globlcrimestories", img: "/globalcrimestories.png", link: "#", category: "Blog Sites, Wordpress, All" },
    { id: 4, title: "DawnPrimemedia", img: "/dawnprime.png", link: "#", category: "Blog Sites, Wordpress, All" },
    { id: 5, title: "Flipinvoice", img: "/flipinvoice-webp.webp", link: "#", category: "Wordpress, All" },
    { id: 6, title: "Doughartbakers", img: "/doughartbakers.png", link: "#", category: "All, Custom Sites, Full Projects, E-commerce" },
    { id: 7, title: "Iboplayermedia", img: "/iboplayermedia-webp.webp", link: "#", category: "Wordpress,All" },
    { id: 8, title: "Pro Dispatch", img: "/Pro_dispatch.png", link: "#", category: "All,Custom Sites,Offline Projects" },
    { id: 9, title: "Petsgallery", img: "/petsgallery-pk-webp.webp", link: "#", category: "Wordpres, E-commerce" },
    { id: 10, title: "Starprimemedia", img: "/starprimemedia-webp.webp", link: "#", category: "All, Wordpress" },
    { id: 11, title: "Techlobz", img: "/techlobz-webp.webp", link: "#", category: "All, Wordpress" },
    { id: 12, title: "Grade Calculs", img: "/grade_calculs.png", link: "#", category: "All, Custom Sites ,Full Projects , Offline Projects" },
  ]; 

  const filteredProjects = active === "All" 
    ? projects 
    : projects.filter(proj => proj.category.includes(active));

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Animation variants
  const sidebarVariant: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1.4, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        
        {/* DESKTOP SIDEBAR - Animated only on Desktop */}
        {!isMobile && (
          <motion.aside 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sidebarVariant}
            className="desktop-sidebar"
          >
            <div className="sticky-sidebar">
              {cats.map(c => (
                <button 
                  key={c} 
                  onClick={() => { setActive(c); setCurrentPage(1); }} 
                  className={`cat-btn ${active === c ? 'active' : ''}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </motion.aside>
        )}
        {/* VERTICAL DIVIDER LINE */}
  <div className="vertical-divider" style={{ 
  width: '1px', 
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Ab ye white nazar aaye gi
  alignSelf: 'stretch',
  // margin: '0 30px', // Spacing thodi barha di hai
  minHeight: '100%' 
}}></div>

        <div className="portfolio-content">
          <div className="portfolio-header">
            <h2 className="section-title">Portfolio</h2>
            <div className="title-underline"></div>
          </div>

          {/* MOBILE CATEGORY MENU - No complex animation to keep layout safe */}
          <div className="mobile-category-menu">
            {cats.map(c => (
              <button 
                key={c} 
                onClick={() => { setActive(c); setCurrentPage(1); }} 
                className={`mobile-cat-pill ${active === c ? 'active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {currentProjects.length > 0 ? (
              currentProjects.map((proj, i) => (
                <motion.a 
                  href={proj.link} 
                  key={proj.id} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="project-card">
                    <div style={{ backgroundImage: `url(${proj.img})` }} className="scrolling-img" />
                    <div className="hover-reveal">
                        <span style={{ color: 'white' }}>Case Study</span>
                        <h4 style={{ color: 'white', marginTop: '10px' }}>{proj.title}</h4>
                        <div className="view-btn">View</div>
                    </div>
                  </div>
                </motion.a>
              ))
            ) : (
              <div className="no-projects">No Projects Found.</div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button 
                  key={num} 
                  onClick={() => setCurrentPage(num)} 
                  className={currentPage === num ? 'active' : ''}
                >
                  0{num}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .portfolio-section { padding: 100px 4%; width: 100%; position: relative; overflow: hidden; background: #050505; }
        .portfolio-container { max-width: 1400px; margin: 0 auto; display: flex; gap: 60px; position: relative; }
        
        .desktop-sidebar { width: 220px; flex-shrink: 0; border-right: 1px solid rgba(255,255,255,0.05); }
        .sticky-sidebar { position: sticky; top: 120px; display: flex; flex-direction: column; gap: 30px; }
        .cat-btn { 
          text-align: left; background: none; border: none; 
          color: #ffffff; font-size: 14px; font-weight: 800; 
          text-transform: uppercase; letter-spacing: 2px; 
          cursor: pointer; opacity: 0.7; transition: 0.4s ease; 
        }
        .cat-btn.active { opacity: 1; color: #c5a47e; border-left: 2px solid #c5a47e; padding-left: 15px; }
        
        .portfolio-content { flex-grow: 1; width: 100%; }
        .section-title { font-size: 60px; font-weight: 900; font-style: italic; text-transform: uppercase; color: #c5a47e; margin: 0; line-height: 1; }
        .title-underline { width: 60px; height: 3px; background: #c5a47e; margin: 15px 0 50px; }

        .mobile-category-menu { display: none; } 

        .projects-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          grid-template-rows: repeat(2, auto);
          gap: 30px; 
          width: 100%;
        }
        
        .project-card { 
          aspect-ratio: 1.1/1; background: #0d0d0f; border-radius: 20px; position: relative; 
          overflow: hidden; border: 1px solid rgba(255,255,255,0.05); 
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .scrolling-img { 
          width: 100%; height: 100%; background-size: cover; 
          background-position: top center; 
          transition: background-position 4s ease-in-out; 
          filter: brightness(0.7); 
        }
        
        .hover-reveal { 
          position: absolute; inset: 0; display: flex; flex-direction: column; 
          align-items: center; justify-content: center; opacity: 0; 
          transition: 0.4s; background: rgba(0,0,0,0.6); 
        }
        
        .project-card:hover { transform: translateY(-10px); border-color: #c5a47e; }
        .project-card:hover .scrolling-img { background-position: bottom center; filter: brightness(1); }
        .project-card:hover .hover-reveal { opacity: 1; }
        
        .view-btn { border: 1px solid #c5a47e; padding: 8px 20px; border-radius: 50px; color: #c5a47e; font-size: 11px; margin-top: 15px; font-weight: 900; }
        
        .pagination { display: flex; justify-content: center; gap: 15px; margin-top: 60px; width: 100%; }
        .pagination button { background: none; border: 1px solid rgba(255,255,255,0.1); color: white; width: 40px; height: 40px; cursor: pointer; border-radius: 5px; font-weight: 800; transition: 0.3s; }
        .pagination button.active { border-color: #c5a47e !important; color: #c5a47e !important; background: rgba(197,164,126,0.1) !important; }

        @media (max-width: 1200px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 850px) {
          .desktop-sidebar { display: none; }
          .portfolio-container { flex-direction: column; gap: 30px; display: block; }
          .portfolio-header { text-align: center; }
          .title-underline { margin: 15px auto 30px; }
          .mobile-category-menu { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 30px; width: 100%; }
          .mobile-cat-pill { 
            background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); 
            color: white; padding: 8px 16px; border-radius: 50px; 
            font-size: 10px; font-weight: 800; text-transform: uppercase;
          }
          .mobile-cat-pill.active { border-color: #c5a47e; color: #c5a47e; background: rgba(197,164,126,0.1); }
          .projects-grid { grid-template-columns: 1fr; gap: 25px; width: 100%; }
          .project-card { aspect-ratio: 16/9; }
          .section-title { font-size: 40px; }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;