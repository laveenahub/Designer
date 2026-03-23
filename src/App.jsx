import { useEffect, useState } from 'react'
import ZoomcarCaseStudy from './ZoomcarCaseStudy'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Basic hash routing
    const handleHashChange = () => {
      if (window.location.hash === '#zoomcar' || window.location.hash === '#/zoomcar') {
        setCurrentPage('zoomcar')
        window.scrollTo(0,0)
      } else {
        setCurrentPage('home')
      }
    }
    
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // check on mount

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (currentPage !== 'home') return;

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
  }, [currentPage]) // Added currentPage to dependency array for clarity, though it's checked at the start

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  if (currentPage === 'zoomcar') {
    return <ZoomcarCaseStudy />;
  }
  
  if (currentPage === 'designlink') {
    return <DesignLinkCaseStudy />;
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">Lavee.</a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={handleNavClick}>About</a>
            <a href="#work" onClick={handleNavClick}>Work</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
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
        <section id="about" className="section" style={{ paddingTop: 'var(--space-md)', paddingBottom: 'var(--space-md)' }}>
          <div className="container manifesto-wrap">
            <span className="section-label reveal">About</span>
            
            <p className="manifesto-line reveal">
              I didn't start with Figma.<br/>
              I started with a pencil.
            </p>

            <p className="manifesto-line reveal">
              Hello, I am Laveena.<br/>
              But call me lavee.
            </p>

            <p className="manifesto-line reveal" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}>
              Before I knew what design even was - I was drawing characters, doodling art, crafting things with my hands.
            </p>
            
            <p className="manifesto-line reveal">
              That love grew into ↓
            </p>

            <p className="manifesto-line reveal" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}>
              &rarr; Business cards. Banners. Posters.<br/>
              &rarr; Then screens. Flows. Experiences.<br/>
              <span className="font-serif italic text-secondary">&rarr; Then a full passion for Product Design.</span>
            </p>
            
            <p className="manifesto-line reveal">
              Computer Science gave me logic.<br/>
              Design gave me feeling.
            </p>

            <p className="manifesto-line reveal">
              Together - I build things that solve AND feel right.
            </p>
            
            <p className="manifesto-line reveal">
              Because I believe one thing deeply -<br/>
              <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>Design should solve. Not decorate.</span>
            </p>
          </div>
        </section>

        {/* --- CASE STUDIES SECTION --- */}
        <section id="work" className="section">
          <div className="container">
            <span className="section-label reveal">Work</span>
            
            <div className="projects-grid">
              
              <a href="#/designlink" className="project-item reveal">
                <div className="project-image-wrap">
                    <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&q=80" alt="DesignLink Interface" className="project-image" />
                </div>
                <div className="project-info">
                  <div className="project-title" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      DesignLink Platform <span>(Designerrs Academy)</span>
                      <span className="small-caps" style={{ border: '1px solid currentColor', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.7rem', opacity: 0.8 }}>Read Case Study &rarr;</span>
                  </div>
                  <div className="project-stat">Simplifying job matching for creative professionals</div>
                </div>
              </a>

              <a href="#/zoomcar" className="project-item reveal">
                <div className="project-image-wrap">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" alt="Zoomcar Case Study" className="project-image" />
                </div>
                <div className="project-info">
                  <div className="project-title" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      Zoomcar Host App <span>(Conscent.ai Internship)</span>
                      <span className="small-caps" style={{ border: '1px solid currentColor', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.7rem', opacity: 0.8 }}>Read Case Study &rarr;</span>
                  </div>
                  <div className="project-stat">Driving a 40% Listing Extension Rate</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIAL SECTION --- */}
        <section id="testimonial" className="section" style={{ paddingTop: 'var(--space-md)' }}>
          <div className="container manifesto-wrap">
            <span className="section-label reveal">Endorsement</span>
            
            <p className="manifesto-line reveal" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontStyle: 'italic', marginBottom: 'var(--space-sm)' }}>
              "Laveena transformed our engagement metrics. She doesn't just design screens, she crafts highly thoughtful user journeys that make total aesthetic sense."
            </p>
            
            <p className="project-stat reveal delay-100" style={{ fontFamily: 'var(--font-body)' }}>
              — Lead Manager, Socialveins
            </p>
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
