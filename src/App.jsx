import { useEffect, useState } from 'react'
import ZoomcarCaseStudy from './ZoomcarCaseStudy'
import DesignLinkCaseStudy from './DesignLinkCaseStudy'
import AiInPractice from './AiInPractice'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  const testimonials = [
    {
      text: "Laveena transformed our engagement metrics. She doesn't just design screens, she crafts highly thoughtful user journeys that make total aesthetic sense.",
      author: "Lead Manager, Socialveins"
    },
    {
      text: "An incredible eye for visual hierarchy. What took us weeks to untangle, her interface solved naturally within a single sprint.",
      author: "Senior Product Head, Conscent.ai"
    },
    {
      text: "Our user retention skyrocketed post-launch. Laveena brought a depth of research and structural polish we rarely see from junior talent.",
      author: "Director of Experience, Zoomcar"
    }
  ]

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      
      const target = e.target;
      const isInteractive = target.closest('a') || target.closest('button') || target.tagName === 'A' || target.tagName === 'BUTTON';
      setIsHovering(!!isInteractive);
      
      const isSpecialized = target.closest('.premium-card');
      const cursorElement = document.querySelector('.custom-cursor');
      if (cursorElement) {
        if (isSpecialized) {
          cursorElement.classList.add('card-hover');
        } else {
          cursorElement.classList.remove('card-hover');
        }
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`} 
        style={{ 
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)` 
        }} 
      />
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', letterSpacing: '0.1em' }}>
            <span className="seal-stamp">L</span>
            <span>Lavee.</span>
          </a>
          
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
        <section id="about" className="section" style={{ paddingTop: 'var(--space-md)', paddingBottom: 'var(--space-md)' }}>
          <div className="container about-editorial-grid">
            
            {/* Left Column: Portrait */}
            <div className="about-photo-column reveal">
                <div className="about-photo-wrapper">
                    <img src="/profile.jpg" alt="Laveena Chetwani" className="about-photo" />
                </div>
            </div>

            {/* Right Column: Poetic Content */}
            <div className="about-text-content">
                <div className="reveal" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
                    ABOUT
                </div>
                
                <div className="about-editorial-line reveal delay-100">
                    <span style={{ color: 'var(--text-secondary)', display: 'block' }}>I didn't start with Figma.</span>
                    <span style={{ fontWeight: 'bold', display: 'block' }}>I started with a pencil.</span>
                </div>

                <div className="about-editorial-line reveal delay-100" style={{ marginTop: '1rem' }}>
                    <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Hello, I am Laveena.</span>
                    <span style={{ fontWeight: 'bold', display: 'block' }}>But call me lavee.</span>
                </div>

                <div className="about-editorial-line reveal delay-200" style={{ color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                    Before I knew what design even was - I was drawing characters, doodling art, crafting things with my hands.
                </div>

                <div className="about-editorial-line reveal delay-300" style={{ marginTop: '1.5rem' }}>
                    That love grew into &darr;
                </div>

                <div className="about-editorial-line reveal delay-400" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                    <div>&rarr; Business cards. Banners. Posters.</div>
                    <div>&rarr; Then screens. Flows. Experiences.</div>
                    <div style={{ color: 'var(--text-primary)' }}>&rarr; Then a full passion for Product Design.</div>
                </div>

                <div className="about-editorial-line reveal delay-400" style={{ marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
                    Computer Science gave me logic.<br/>
                    Design gave me feeling.
                </div>

                <div className="about-editorial-line reveal delay-500" style={{ marginTop: '1rem' }}>
                    Together - I build things that solve AND feel right.
                </div>
                
                <div className="about-editorial-line reveal delay-500" style={{ marginTop: '1.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)', display: 'block' }}>Because I believe one thing deeply -</span>
                    <span style={{ fontWeight: 'bold', display: 'block' }}>Design should solve. Not decorate.</span>
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
            
            <div className="testimonial-carousel reveal">
                <div className="testimonial-track">
                    {testimonials.map((item, idx) => (
                        <div 
                            key={idx} 
                            className={`testimonial-slide ${idx === activeTestimonial ? 'active' : ''}`}
                            style={{ display: idx === activeTestimonial ? 'block' : 'none' }}
                        >
                            <p className="manifesto-line" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                                "{item.text}"
                            </p>
                            <p className="project-stat" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                                &mdash; {item.author}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="testimonial-controls" style={{ marginTop: '3rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button onClick={prevTestimonial} className="carousel-btn" aria-label="Previous testimonial">&larr;</button>
                    <div className="testimonial-dots">
                        {testimonials.map((_, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => setActiveTestimonial(idx)}
                                className={`testimonial-dot ${idx === activeTestimonial ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextTestimonial} className="carousel-btn" aria-label="Next testimonial">&rarr;</button>
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

      <footer className="footer-section">
        <div className="container footer-grid">
          
          {/* Left Column: Logo & Name */}
          <div className="footer-col footer-left">
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              <span className="seal-stamp">L</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>LAVEENA CHETWANI</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#a0a0a0', maxWidth: '240px' }}>
              Multidisciplinary Designer building things that solve and feel right.
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="footer-col footer-center">
            <h4 className="footer-label">Navigation</h4>
            <div className="footer-nav">
              <a href="#work">Work</a>
              <a href="#/ai-in-practice">Art</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Right Column: Contact & Social */}
          <div className="footer-col footer-right">
            <h4 className="footer-label" style={{ fontWeight: '400', margin: 0 }}>Let's work together!</h4>
            <a href="mailto:contact@laveenachetwani.online" className="footer-email">
              contact@laveenachetwani.online
            </a>
            
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -9.232M13.232 8.232l6.768 -9.232"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="Magic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Built with Anti-gravity & fueled with coffee ☕</p>
        </div>
      </footer>
    </>
  )
}

export default App
