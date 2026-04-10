import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import DesignLinkCaseStudy from './DesignLinkCaseStudy'
import Playground from './Playground'
import CraftConnectCaseStudy from './CraftConnectCaseStudy'
import LoadingScreen from './LoadingScreen'
import ScrollToTop from './ScrollToTop'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Disable automatic browser scroll memory
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)

  const testimonials = [
    {
      text: "Laveena is fantastic to work with. She is very professional and has great attention to detail. Will definitely use her again in the future.",
      name: "Founder",
      role: "The Half Idea"
    },
    {
      text: "Working with Laveena has been an absolute pleasure! She exceeded our expectations, delivering a professional redesign perfectly aligned with our vision. The timely delivery made the process seamless. We’re VERY HAPPY with the final product.",
      name: "Sanjay",
      role: "Product Manager @ Under Armor"
    },
    {
      text: "Our user retention skyrocketed post-launch. Laveena brought a depth of research and structural polish we rarely see from junior talent.",
      name: "Client",
      role: "Senior UI/UX Designer @ Conscent.ai"
    },
    {
      text: "An absolute lifesaver. Laveena took our convoluted flow and turned it into an elegant, intuitive experience. Highly recommended for any product team.",
      name: "Product Lead",
      role: "Fintech Startup"
    }
  ]

  useEffect(() => {
    // Basic hash routing
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#designlink' || hash === '#/designlink') {
        setCurrentPage('designlink')
        window.scrollTo(0, 0)
      } else if (hash === '#craftconnect' || hash === '#/craftconnect') {
        setCurrentPage('craftconnect')
        window.scrollTo(0, 0)
      } else if (hash === '#playground' || hash === '#/playground') {
        setCurrentPage('playground')
        window.scrollTo(0, 0)
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
        }
      });
    }

    handleScroll()
    setTimeout(() => { handleScroll() }, 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      const target = e.target;
      const isInteractive = target.closest('a') || target.closest('button') || target.tagName === 'A' || target.tagName === 'BUTTON';
      setIsHovering(!!isInteractive);
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const handleNavClick = () => setIsMenuOpen(false)

  const renderContent = () => {
    if (currentPage === 'designlink') return <DesignLinkCaseStudy />;
    if (currentPage === 'craftconnect') {
      return <CraftConnectCaseStudy />;
    }
    if (currentPage === 'playground') return <Playground />;

    return (
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
            <div className="about-photo-column reveal">
              <div className="about-photo-wrapper">
                <img src="/profile.jpg" alt="Laveena Chetwaani" className="about-photo" />
              </div>
            </div>

            <div className="about-text-content">
              <div className="reveal section-label" style={{ marginBottom: '1rem' }}>
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
                Computer Science gave me logic.<br />
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
        {/* --- TESTIMONIAL SECTION --- */}
        <section id="testimonial" className="section reveal">
          <div className="container">
            <div className="testimonial-header-wrapper">
              <span className="section-label" style={{ marginBottom: '0.5rem' }}>WHAT OTHER'S SAY!</span>
              <span className="testimonial-subtitle">I didn't come up with these, I swear</span>
            </div>

            <div className="testimonial-carousel">
              <div className="testimonial-track">
                {testimonials.map((item, idx) => (
                  <div key={idx} className="testimonial-slide">
                    <p className="manifesto-line">
                      "{item.text}"
                    </p>
                    <div className="author-info">
                      <span className="author-name">{item.name}</span>
                      <span className="author-role">{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT / CTA SECTION --- */}
        <section id="contact" className="section contact-cta reveal">
          <div className="contact-pill-container">
            <a href="mailto:contact@laveenachetwani.online" aria-label="Email">
              <span className="icon">✉️</span> contact@laveenachetwani.online
            </a>
            <a href="tel:+910000000000" aria-label="Phone">
              <span className="icon">📞</span> +91 000 000 0000
            </a>
            <a href="https://linkedin.com/in/laveena-chetwani" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <span className="icon">🔗</span> LinkedIn
            </a>
            <a href="https://instagram.com/laveenachetwani" target="_blank" rel="noreferrer" aria-label="Instagram">
              <span className="icon">📸</span> Instagram
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <div 
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: "opacity 0.5s ease-out",
          pointerEvents: isLoading ? 'none' : 'auto'
        }}
      >
        <div
          className={`custom-cursor ${isHovering ? 'hover' : ''}`}
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`
          }}
        />
        {currentPage === 'home' && (
          <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
              <a href="#" className="logo">Lavee.</a>

              <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#about" onClick={handleNavClick}>About</a>
                <a href="#work" onClick={handleNavClick}>Work</a>
                <a href="#/playground" onClick={handleNavClick}>Playground</a>
                <a href="https://drive.google.com/file/d/1_DaxoUDhjx78x6eKOnqN8CNqCCWAeuUz/view?usp=drive_link" target="_blank" rel="noreferrer" title="Opens PDF ↗">Resume</a>
                <a href="#contact" onClick={handleNavClick}>Contact</a>
              </div>

              <div className="mobile-menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
              </div>
            </div>
          </nav>
        )}

        {renderContent()}
        <ScrollToTop />
      </div>
    </>
  )
}

export default App
