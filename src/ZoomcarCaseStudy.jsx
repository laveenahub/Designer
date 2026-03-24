import { useEffect, useState } from 'react';

const ZoomcarCaseStudy = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll handling for animations and navbar
    const handleScroll = () => {
      // Navbar scroll effect
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Reveal elements
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
           element.classList.add('active');
        }
      });
    };

    handleScroll();
    setTimeout(() => { handleScroll(); }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#FDF8F0', minHeight: '100vh' }}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ backgroundColor: isScrolled ? 'rgba(253, 248, 240, 0.95)' : 'transparent' }}>
        <div className="container nav-container">
          <a href="#/" className="logo">Lavee.</a>
          <div className="nav-links active">
            <a href="#/">← Back to Home</a>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '150px' }}>
        {/* --- PAGE HEADER --- */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <h1 className="hero-title reveal" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '1' }}>
              Widget That Drove a<br/>
              <span className="font-serif" style={{ color: '#2E7D32' }}>40% Listing Extension</span><br/>
              Rate at Zoomcar
            </h1>
            
            <p className="hero-subtitle reveal delay-100" style={{ maxWidth: '900px', fontSize: '1.2rem', marginTop: '2rem' }}>
              Many hosts miss bookings because they don't realize listings need timely creation or renewal. This project explores clarity to keep hosts active and in control.
            </p>

            <div className="project-info reveal delay-200" style={{ marginTop: '4rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Client</div>
                <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>Zoomcar Host</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>My Role</div>
                <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>Product Designer</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Industry</div>
                <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>Travel Marketplace</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Platform</div>
                <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>Mobile Application</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- HERO IMAGE --- */}
        <section className="section" style={{ padding: '0 0 var(--space-xl) 0' }}>
            <div className="container reveal delay-300">
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#f5efe6', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" alt="Zoomcar Mobile Mockup" />
                </div>
            </div>
        </section>

        {/* --- SECTION 1: CONTEXT --- */}
        <section className="section">
          <div className="container manifesto-wrap">
            <span className="section-label reveal">Context</span>
            <p className="manifesto-line reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              A listing = car availability dates.<br/>
              <span className="font-serif" style={{ color: '#2E7D32' }}>No listing = no bookings.</span>
            </p>
          </div>
        </section>

        {/* --- SECTION 2: PROBLEM --- */}
        <section className="section">
          <div className="container manifesto-wrap">
            <span className="section-label reveal">Problem</span>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#555', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: '1.6' }}>
              <div>— Hosts don't know they need to create a listing to get bookings</div>
              <div>— First-timers stop receiving bookings without knowing why</div>
              <div>— No awareness of pause, auto-extend, or late-night booking controls</div>
              <div>— Hosts workaround by declining bookings — hurting ratings</div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: GOAL --- */}
        <section className="section">
          <div className="container manifesto-wrap">
            <span className="section-label reveal">Goal</span>
            <p className="manifesto-line reveal font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text-primary)' }}>
              Empower hosts with clearer visibility and control — so they earn more, lose less, and stay on the platform.
            </p>
            <div className="reveal small-caps" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <span style={{ border: '1px solid #2E7D32', color: '#2E7D32', padding: '0.5rem 1rem', borderRadius: '20px' }}>[ Booking Fulfilment ↑ ]</span>
              <span style={{ border: '1px solid #2E7D32', color: '#2E7D32', padding: '0.5rem 1rem', borderRadius: '20px' }}>[ Ratings ↑ ]</span>
              <span style={{ border: '1px solid #2E7D32', color: '#2E7D32', padding: '0.5rem 1rem', borderRadius: '20px' }}>[ Host Retention ↑ ]</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: CURRENT FLOW --- */}
        <section className="section">
          <div className="container">
            <span className="section-label reveal">Current Flow</span>
            <div className="reveal project-image-wrap" style={{ aspectRatio: '21/9', background: '#e0ded8', borderRadius: '16px' }}></div>
            <p className="reveal" style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
              The Manage Your Cars tab buried listing controls with no status visibility.
            </p>
          </div>
        </section>

        {/* --- SECTION 5: DESIGN ITERATIONS --- */}
        <section className="section">
          <div className="container">
            <span className="section-label reveal">Iterations</span>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div>
                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Iteration</div>
                <div className="project-image-wrap" style={{ aspectRatio: '9/16', background: '#e0ded8', borderRadius: '16px' }}></div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Final Design</div>
                <div className="project-image-wrap" style={{ aspectRatio: '9/16', background: '#e0ded8', borderRadius: '16px' }}></div>
                <ul style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <li>· Redesigned header — Logo, greeting, car selector</li>
                  <li>· Your Listing widget — live status with color-coded tags</li>
                  <li>· Redirection box — state-aware guidance and CTAs</li>
                  <li>· Education component — onboarding tour for new hosts</li>
                  <li>· Things To Do — personalized action carousel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 6: LISTING STATES WIDGET --- */}
        <section className="section">
          <div className="container">
            <span className="section-label reveal">States & Tags</span>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
              {['ENDS SOON (orange)', 'LIVE (green)', 'UPCOMING (blue)', 'PAUSED (yellow)', 'ENDED (red)'].map((state, i) => (
                <div key={i} style={{ minWidth: '250px', background: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>{state}</div>
                  <div style={{ background: '#f5f5f5', height: '60px', borderRadius: '6px' }}></div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
              40+ permutations mapped. Each state shows dynamic controls relevant to the host's current situation.
            </p>
          </div>
        </section>

        {/* --- SECTION 7: ONBOARDING TOUR --- */}
        <section className="section">
          <div className="container">
            <span className="section-label reveal">Education Tour</span>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
              {[
                "1/3 — What is Listing?",
                "2/3 — Your listing is now on home screen!",
                "3/3 — Create, Pause or Extend your listing!"
              ].map((step, i) => (
                <div key={i}>
                  <div className="project-image-wrap" style={{ aspectRatio: '9/16', background: '#e0ded8', borderRadius: '16px' }}></div>
                  <div className="small-caps" style={{ textAlign: 'center', marginTop: '1rem' }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 8: IMPACT --- */}
        <section className="section">
          <div className="container">
            <span className="section-label reveal">Impact</span>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
              <div>
                <div className="font-serif" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', color: '#2E7D32', lineHeight: '0.9' }}>35%</div>
                <div style={{ fontSize: '1.2rem', marginTop: '1rem' }}>hosts interacted with the widget & controls</div>
              </div>
              <div>
                <div className="font-serif" style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', color: '#2E7D32', lineHeight: '0.9' }}>40%</div>
                <div style={{ fontSize: '1.2rem', marginTop: '1rem' }}>of hosts extended their listings via auto-extension</div>
              </div>
            </div>
            <p className="reveal manifesto-line" style={{ fontSize: '1.5rem' }}>
              Launched to new and existing FTU hosts via coach marks.
            </p>
          </div>
        </section>

        {/* --- SECTION 9: CONCLUSION --- */}
        <section className="section" style={{ paddingBottom: 'var(--space-xl)' }}>
          <div className="container manifesto-wrap">
            <span className="section-label reveal">Takeaway</span>
            <p className="reveal" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              This project began with a clear goal but evolved as we uncovered deeper insights. Each discussion challenged us to think creatively, leading to a more intuitive design that strengthens communication and support for Hosts.
            </p>
          </div>
        </section>

        {/* --- CONTACT / CTA SECTION --- */}
        <section id="contact" className="section contact-cta" style={{ background: '#f5efe6' }}>
            <div className="container">
                <a href="mailto:contact@laveenachetwani.online" className="giant-cta reveal">
                    Found this<br/>
                    <span className="font-serif text-secondary">interesting?</span><br/>
                    Let's talk.
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
    </div>
  );
};

export default ZoomcarCaseStudy;
