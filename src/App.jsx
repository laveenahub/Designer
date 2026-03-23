import { useEffect, useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Scroll handling for animations and navbar
    const handleScroll = () => {
      // Navbar scroll effect
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Scroll Reveal elements
      const reveals = document.querySelectorAll('.reveal')
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
           element.classList.add('active');
        } else {
           // element.classList.remove('active'); // don't remove, keep it revealed
        }
      });
    }

    // Run once on mount to check initial position
    handleScroll()
    
    // Quick timeout to trigger initial reveals smoothly
    setTimeout(() => {
        handleScroll()
    }, 100)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">Lavee.</a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={handleNavClick}><span data-text="About">About</span></a>
            <a href="#work" onClick={handleNavClick}><span data-text="Work">Work</span></a>
            <a href="#contact" onClick={handleNavClick}><span data-text="Contact">Contact</span></a>
          </div>

          <div 
            className="mobile-menu-btn" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO / INTRO SECTION --- */}
        <section id="hero" className="hero">
          <div className="container">
            <span className="small-caps tagline-bracket reveal">[ Boosting engagement by 25% through design ]</span>
            <h1 className="hero-title reveal delay-100">
              <span className="font-serif">AI-Powered</span>
              <span className="font-serif indent">UI/UX Designer</span>
            </h1>
            <h2 className="hero-subtitle reveal delay-200">
              I build things that solve AND feel right.
            </h2>
            <p className="hero-meta small-caps reveal delay-300">
              Product Design · UX Research · UI Design
            </p>
            <a href="#contact" className="hero-cta reveal delay-400">Open to projects →</a>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="section">
          <div className="container manifesto-wrap">
            <span className="section-label reveal">About</span>
            
            <p className="manifesto-line reveal">
              I didn't start with Figma.<br/>
              I started with a pencil.
            </p>
            
            <p className="manifesto-line reveal">
              Business cards. Banners. Posters.<br/>
              Then screens. Flows. Experiences.<br/>
              <span className="font-serif italic text-secondary">Then a full passion for Product Design.</span>
            </p>
            
            <p className="manifesto-line reveal">
              Computer Science gave me logic.<br/>
              Design gave me feeling.
            </p>
            
            <p className="manifesto-line reveal" style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              Design should solve. Not decorate.
            </p>
          </div>
        </section>

        {/* --- CASE STUDIES SECTION --- */}
        <section id="work" className="section">
          <div className="container">
            <span className="section-label reveal">Work</span>
            
            <div className="projects-grid">
              
              <a href="#" className="project-item reveal">
                <div className="project-image-wrap">
                    <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&q=80" alt="DesignLink Interface" className="project-image" />
                </div>
                <div className="project-info">
                  <div className="project-title">
                      DesignLink Platform <span>(UX Research + UI Design, Designerrs Academy)</span>
                  </div>
                  <div className="project-stat">Simplifying job matching for creative professionals</div>
                </div>
              </a>

              <a href="#" className="project-item reveal">
                <div className="project-image-wrap">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" alt="Conscent Dashboard" className="project-image" />
                </div>
                <div className="project-info">
                  <div className="project-title">
                      Conscent.ai <span>(UI/UX Design, 7 months)</span>
                  </div>
                  <div className="project-stat">Designing for India's content economy</div>
                </div>
              </a>

              <a href="#" className="project-item reveal">
                <div className="project-image-wrap">
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80" alt="Social Campaign Design" className="project-image" />
                </div>
                <div className="project-info">
                  <div className="project-title">
                      Social Campaign Design <span>(Socialveins)</span>
                  </div>
                  <div className="project-stat">35% uplift in engagement through visual campaigns</div>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* --- SKILLS & TOOLS SECTION --- */}
        <section id="skills" className="section" style={{ paddingTop: 'var(--space-md)' }}>
          <div className="container">
            <span className="section-label reveal">Skills</span>
            
            <div className="skills-list small-caps reveal">
                <span>Figma</span> <span className="dot">·</span> 
                <span>Product Design</span> <span className="dot">·</span> 
                <span>UX Research</span> <span className="dot">·</span> 
                <span>UI Design</span> <span className="dot">·</span> 
                <span>Wireframing</span> <span className="dot">·</span> 
                <span>Prototyping</span> <span className="dot">·</span> 
                <span>Visual Design</span> <span className="dot">·</span> 
                <span>Community Building</span>
            </div>
          </div>
        </section>

        {/* --- ACHIEVEMENTS & EXTRAS --- */}
        <section id="recognition" className="section" style={{ paddingTop: 'var(--space-sm)' }}>
            <div className="container">
                <span className="section-label reveal">Recognition</span>
                
                <div className="recognition-list small-caps reveal">
                    <div className="recog-item">LinkedIn Certified Marketing Insider</div>
                    <div className="recog-item">2nd Position — Machin-o-Mania</div>
                    <div className="recog-item">#Include&lt;her&gt; Cohort 2.0 Mentee</div>
                    <div className="recog-item">Community Lead, GDSC Poornima — 20+ events, Tier-1 Gen AI Study Jams</div>
                    <div className="recog-item">Publication: "A Heart Rate Monitor Using Wi-Fi Module ESP8266"</div>
                </div>
            </div>
        </section>

        {/* --- CONTACT / CTA SECTION --- */}
        <section id="contact" className="section contact-cta">
            <div className="container">
                <a href="mailto:contact@laveenachetwani.online" className="giant-cta reveal">
                    build<br/>together?
                </a>
                
                <div className="contact-details reveal delay-200">
                    <a href="mailto:contact@laveenachetwani.online">contact@laveenachetwani.online</a>
                    <a href="https://linkedin.com/in/laveena-chetwani" target="_blank" rel="noreferrer">LinkedIn: laveena-chetwani</a>
                </div>
            </div>
        </section>

      </main>

      <footer className="container">
          <div className="footer-minimal reveal delay-300">
              <span>Laveena Chetwani</span>
              <span>2026</span>
          </div>
      </footer>
    </>
  )
}

export default App
