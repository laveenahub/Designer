import { useEffect, useState } from 'react'
import ZoomcarCaseStudy from './ZoomcarCaseStudy'
import DesignLinkCaseStudy from './DesignLinkCaseStudy'
import AiInPractice from './AiInPractice'

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
      } else if (window.location.hash === '#designlink' || window.location.hash === '#/designlink') {
        setCurrentPage('designlink')
        window.scrollTo(0,0)
      } else if (window.location.hash === '#ai-in-practice' || window.location.hash === '#/ai-in-practice') {
        setCurrentPage('ai-in-practice')
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

  if (currentPage === 'ai-in-practice') {
    return <AiInPractice />;
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">Lavee.</a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={handleNavClick}>About</a>
            <a href="#work" onClick={handleNavClick}>Work</a>
            <a href="#/ai-in-practice" onClick={handleNavClick}>AI in Practise</a>
            <a href="https://drive.google.com/file/d/1_DaxoUDhjx78x6eKOnqN8CNqCCWAeuUz/view?usp=drive_link" target="_blank" rel="noreferrer" title="Opens PDF ↗">Resume</a>
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
            <div className="reveal" style={{ marginBottom: '2rem' }}>
                <span className="tagline-bracket" style={{ fontFamily: 'monospace', fontSize: '0.85rem', padding: '0.4rem 0.8rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '4px' }}>
                  [ Boosting engagement by 25% through design ]
                </span>
            </div>
          
            <h1 className="hero-title reveal delay-100" style={{ gap: '0.5rem' }}>
              <span className="font-serif" style={{ display: 'block' }}>AI-Powered</span>
              <span className="font-serif" style={{ display: 'block' }}>UI/UX Designer</span>
            </h1>
            
            <h2 className="hero-subtitle reveal delay-200" style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
              I build things that solve and feel right.
            </h2>
            
            <p className="hero-meta reveal delay-300" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              Product Design · UX Research · UI Design
            </p>
            
            <div style={{ marginTop: '2.5rem' }}>
              <a href="#contact" className="hero-cta reveal delay-400" style={{ fontSize: '1.1rem' }}>Open to projects →</a>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="section" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
          <div className="container">
            
            <div className="about-editorial">
              {/* Left Column: Photo */}
              <div className="about-photo-wrapper reveal">
                <div className="about-photo-card">
                  <img src="/profile.jpg" alt="Laveena Chetwani" className="about-img" />
                </div>
              </div>

              {/* Right Column: Editorial Text */}
              <div className="about-content">
                <span className="about-top-label reveal delay-100">About</span>

                <div className="manifesto-row reveal delay-200 manifesto-shift-1">
                  I didn't start with Figma.
                </div>
                <div className="manifesto-row reveal delay-200 manifesto-shift-2" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                  I started with a pencil.
                </div>
                
                <div className="manifesto-row reveal delay-300 manifesto-shift-1" style={{ marginTop: '2rem' }}>
                  Hello, I am Laveena.
                </div>
                <div className="manifesto-row reveal delay-300 manifesto-shift-2" style={{ fontStyle: 'italic', fontWeight: '500' }}>
                  But call me lavee.
                </div>

                <div className="manifesto-row reveal delay-400 manifesto-shift-1" style={{ marginTop: '3rem', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', maxWidth: '95%' }}>
                  Before I knew what design even was - I was drawing characters, doodling art, crafting things with my hands.
                </div>

                <div className="manifesto-row reveal delay-500 manifesto-shift-1" style={{ marginTop: '2.5rem' }}>
                  That love grew into &darr;
                </div>

                <div className="manifesto-arrow-row reveal delay-500">
                  <span>&rarr;</span> <span>Business cards. Banners. Posters.</span>
                </div>
                <div className="manifesto-arrow-row reveal delay-500" style={{ opacity: 0.8 }}>
                  <span>&rarr;</span> <span>Then screens. Flows. Experiences.</span>
                </div>
                <div className="manifesto-arrow-row reveal delay-500" style={{ opacity: 0.6 }}>
                  <span>&rarr;</span> <span>Then a full passion for Product Design.</span>
                </div>

                <div className="manifesto-row reveal delay-500 manifesto-shift-1" style={{ marginTop: '3rem' }}>
                  Computer Science gave me logic.
                </div>
                <div className="manifesto-row reveal delay-500 manifesto-shift-4">
                  Design gave me feeling.
                </div>
                
                <div className="manifesto-row reveal delay-500 manifesto-shift-2" style={{ marginTop: '2rem' }}>
                  Together - I build things that solve AND feel right.
                </div>
                
                <div className="manifesto-row reveal delay-500 manifesto-shift-1" style={{ marginTop: '3rem' }}>
                  Because I believe one thing deeply -
                </div>
                <div className="manifesto-emphasis reveal delay-500 manifesto-shift-2" style={{ marginTop: '0.5rem', fontWeight: '500' }}>
                  Design should solve. Not decorate.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- PREMIUM CASE STUDIES SECTION --- */}
        <section id="work" className="section">
          <div className="container">
            <span className="section-label reveal">Selected Work</span>
            
            <div className="premium-projects">
              
              {/* DESIGNLINK CARD */}
              <a href="#/designlink" className="premium-card reveal">
                <div className="premium-card-left">
                  <span className="premium-label">DesignLink • 2024</span>
                  <h3 className="premium-headline">Connecting designers with real-world opportunities through a seamless platform</h3>
                  
                  <div className="premium-tags">
                    <span className="premium-tag">Design Platform</span>
                    <span className="premium-tag">B2B</span>
                    <span className="premium-tag">Marketplace</span>
                    <span className="premium-tag">UX/UI</span>
                  </div>
                </div>

                <div className="premium-card-right">
                    <div className="premium-mockup-wrapper">
                        <div className="mockup-mobile">
                            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" alt="DesignLink Mobile App" className="mockup-img" />
                        </div>
                    </div>
                </div>
              </a>

              {/* CRAFTCONNECT CARD */}
              <a href="#/craftconnect" className="premium-card reveal delay-100">
                <div className="premium-card-left">
                  <span className="premium-label">CraftConnect • 2024</span>
                  <h3 className="premium-headline">Empowering Rajasthan artisans with direct global market access</h3>
                  
                  <div className="premium-tags">
                    <span className="premium-tag">Social Impact</span>
                    <span className="premium-tag">E-commerce</span>
                    <span className="premium-tag">B2C</span>
                    <span className="premium-tag">Mobile-first</span>
                  </div>
                </div>

                <div className="premium-card-right">
                    <div className="premium-mockup-wrapper">
                        <div className="mockup-mobile">
                            <img src="https://images.unsplash.com/photo-1509391366360-1f9e21ce161c?auto=format&fit=crop&w=800&q=80" alt="CraftConnect Mobile UI" className="mockup-img" />
                        </div>
                    </div>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* --- TESTIMONIAL SECTION --- */}
        <section id="testimonial" className="section" style={{ paddingTop: 'var(--space-md)' }}>
          <div className="container">
            <span className="section-label reveal">Endorsements</span>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-md)' }}>
                <div className="reveal">
                    <p className="manifesto-line" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Laveena transformed our engagement metrics. She doesn't just design screens, she crafts highly thoughtful user journeys that make total aesthetic sense."
                    </p>
                    <p className="project-stat" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
                    — Lead Manager, Socialveins
                    </p>
                </div>

                <div className="reveal delay-100">
                    <p className="manifesto-line" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "An incredible eye for visual hierarchy. What took us weeks to untangle, her interface solved naturally within a single sprint."
                    </p>
                    <p className="project-stat" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
                    — Senior Product Head, Conscent.ai
                    </p>
                </div>

                <div className="reveal delay-200">
                    <p className="manifesto-line" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Our user retention skyrocketed post-launch. Laveena brought a depth of research and structural polish we rarely see from junior talent."
                    </p>
                    <p className="project-stat" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
                    — Director of Experience, Zoomcar
                    </p>
                </div>

                <div className="reveal delay-300">
                    <p className="manifesto-line" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "She treats every user flow like a conversation. Brilliant UX architecture disguised behind completely effortless minimal UI."
                    </p>
                    <p className="project-stat" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
                    — Co-Founder, Designerrs Academy
                    </p>
                </div>
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
