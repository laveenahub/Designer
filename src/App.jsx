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
      text: "Laveena is fantastic to work with. She is very professional and has great attention to detail. Will definitely use her again in the future.",
      author: "Founder, The Half Idea"
    },
    {
      text: "Working with Laveena has been an absolute pleasure! She exceeded our expectations, delivering a professional redesign perfectly aligned with our vision. The timely delivery made the process seamless. We’re VERY HAPPY with the final product.",
      author: "Sanjay Product Manager, Under Armor"
    },
    {
      text: "Our user retention skyrocketed post-launch. Laveena brought a depth of research and structural polish we rarely see from junior talent.",
      author: "Senior UI UX Designer, Conscent.ai"
    }
  ]

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    // Basic hash routing
    const handleHashChange = () => {
      if (window.location.hash === '#zoomcar' || window.location.hash === '#/zoomcar') {
        setCurrentPage('zoomcar')
        window.scrollTo(0, 0)
      } else if (window.location.hash === '#designlink' || window.location.hash === '#/designlink') {
        setCurrentPage('designlink')
        window.scrollTo(0, 0)
      } else if (window.location.hash === '#ai-in-practice' || window.location.hash === '#/ai-in-practice') {
        setCurrentPage('ai-in-practice')
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
    setTimeout(() => handleScroll(), 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      
      const target = e.target;
      // "isInteractive" covers links (A), buttons, and elements that look like "folders" or project cards
      const isInteractive = target.closest('a') || 
                            target.closest('button') || 
                            target.closest('.premium-card') || 
                            target.closest('.work-card') ||
                            target.tagName === 'A' || 
                            target.tagName === 'BUTTON';
      setIsHovering(!!isInteractive);
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const handleNavClick = () => setIsMenuOpen(false)

  let mainContent;

  if (currentPage === 'zoomcar') {
    mainContent = <ZoomcarCaseStudy />;
  } else if (currentPage === 'designlink') {
    mainContent = <DesignLinkCaseStudy />;
  } else if (currentPage === 'ai-in-practice') {
    mainContent = <AiInPractice />;
  } else {
    mainContent = (
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

            <div className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
            </div>
          </div>
        </nav>

        <main>
          {/* --- HERO / INTRO SECTION --- */}
          <section id="hero" className="hero">
            <div className="container">
              <div className="hero-content">
                <p className="hero-intro reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: '400', letterSpacing: '0.05em', marginBottom: '2rem' }}>
                  Product Designer — 2026.
                </p>
                <h1 className="hero-title reveal delay-100" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', lineHeight: '0.9', letterSpacing: '-0.03em', fontWeight: '400' }}>
                  Hello, I am<br />
                  <span className="font-serif italic" style={{ paddingLeft: '0.5ch' }}>Laveena.</span>
                </h1>
                
                <p className="hero-subtitle reveal delay-200" style={{ maxWidth: '600px', fontSize: '1.2rem', marginTop: '2.5rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                  A multidisciplinary designer building things that solve problems and feel right. 
                  Focused on creating premium digital experiences with a human touch.
                </p>
                
                <div className="hero-scroll-indicator reveal delay-300" style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '1px', background: 'var(--text-secondary)' }}></div>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)' }}>Scroll to explore</p>
                </div>
              </div>
            </div>
          </section>

          {/* --- ABOUT SECTION --- */}
          <section id="about" className="section bg-white about-section">
            <div className="container manifesto-wrap">
              <span className="section-label reveal">About</span>
              <p className="manifesto-line reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: '1.2' }}>
                I am a lifelong observer, <br/>
                obsessed with finding <br/>
                <span className="font-serif italic">the why </span> behind the what.
              </p>
              <div 
                className="about-image-wrap reveal delay-200"
                style={{
                  width: '300px',
                  height: '400px',
                  background: '#f0f0f0',
                  margin: '4rem 0 4rem auto',
                  padding: '12px 12px 50px 12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                  borderRadius: '2px',
                  transform: 'rotate(2deg)'
                }}
              >
                <img 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" 
                  alt="Portrait" 
                />
              </div>
              <p className="manifesto-line reveal delay-100" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', maxWidth: '800px' }}>
                Currently diving deep into product systems, 
                blending engineering logic with a 
                <span className="font-serif italic"> painter's intuition.</span>
              </p>
              <p className="manifesto-line reveal delay-200" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '2rem', color: 'var(--text-secondary)' }}>
                I started with a pencil. <br />
                Now I use data, pixels, and empathy.
              </p>
            </div>
          </section>

          {/* --- WORK / PROJECTS SECTION --- */}
          <section id="work" className="section" style={{ background: '#000', color: '#fff' }}>
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-xl)' }}>
                <h2 className="section-title reveal" style={{ margin: 0 }}>Selected <span className="font-serif italic">Works</span></h2>
                <div className="small-caps" style={{ color: '#666' }}>[ 2023 — 2026 ]</div>
              </div>

              <div className="work-grid">
                <a href="#/zoomcar" className="work-card premium-card reveal" style={{ gridColumn: 'span 12' }}>
                  <div className="work-info">
                    <span className="project-type">[ CAR MARKETPLACE ]</span>
                    <h3 className="project-name">Zoomcar Host</h3>
                    <div className="project-tags">Product Design / UX Research / Strategy</div>
                  </div>
                  <div className="work-image-wrap" style={{ aspectRatio: '16/9' }}>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Zoomcar Design" />
                  </div>
                </a>

                <a href="#/designlink" className="work-card premium-card reveal delay-100" style={{ gridColumn: 'span 7' }}>
                  <div className="work-info">
                    <span className="project-type">[ SAAS PLATFORM ]</span>
                    <h3 className="project-name">DesignLink</h3>
                    <div className="project-tags">End-to-End Product / Visual Systems</div>
                  </div>
                  <div className="work-image-wrap" style={{ aspectRatio: '4/3' }}>
                    <img src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80" alt="DesignLink" />
                  </div>
                </a>

                <div className="work-card premium-card reveal delay-200" style={{ gridColumn: 'span 5' }}>
                  <div className="work-info">
                    <span className="project-type">[ AI EXPERIMENT ]</span>
                    <h3 className="project-name">CraftConnect</h3>
                    <div className="project-tags">Prototyping / AI Integration</div>
                  </div>
                  <div className="work-image-wrap" style={{ aspectRatio: '4/3' }}>
                    <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80" alt="CraftConnect" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- INITIATIVES / ART SECTION --- */}
          <section id="initiatives" className="section" style={{ background: '#F5F4F0' }}>
            <div className="container">
              <span className="section-label reveal">Initiatives</span>
              <div style={{ maxWidth: '800px' }}>
                <h2 className="section-title reveal" style={{ marginTop: '2rem' }}>Art <span className="font-serif italic">In Practice</span></h2>
                <p className="reveal delay-100" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                  Exploring the intersection of human expression and algorithmic precision. A collection of visual experiments and side pursuits.
                </p>
                <a href="#/ai-in-practice" className="reveal delay-200" style={{ fontSize: '1.5rem', textDecoration: 'underline', textUnderlineOffset: '8px' }}>
                   View the Collection →
                </a>
              </div>
            </div>
          </section>

          {/* --- TESTIMONIALS SECTION --- */}
          <section className="section testimonials-section">
            <div className="container">
              <span className="section-label reveal">Voices</span>
              <div className="testimonial-slider-wrap reveal delay-100">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    "{testimonials[activeTestimonial].text}"
                  </div>
                  <div className="testimonial-meta">
                    <span className="testimonial-author">{testimonials[activeTestimonial].author}</span>
                    <div className="slider-controls">
                      <button onClick={prevTestimonial} aria-label="Previous">←</button>
                      <button onClick={nextTestimonial} aria-label="Next">→</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- CONTACT / CTA SECTION --- */}
          <section id="contact" className="section contact-cta">
            <div className="container">
              <a href="mailto:contact@laveenachetwani.online" className="giant-cta reveal">
                Found this<br />
                <span className="font-serif italic text-secondary">&nbsp;interesting?</span><br />
                Let's talk.
              </a>
              
              <div className="contact-details reveal delay-200">
                <a href="mailto:contact@laveenachetwani.online">contact@laveenachetwani.online</a>
                <a href="https://linkedin.com/in/laveena-chetwani" target="_blank" rel="noreferrer">LinkedIn: laveena-chetwani</a>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`} 
        style={{ 
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)` 
        }} 
      />
      {mainContent}
    </>
  );
}

export default App;
