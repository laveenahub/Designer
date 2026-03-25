import { useEffect, useState } from 'react';

const CraftConnectCaseStudy = () => {
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
    <div style={{ minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#FCFAF7' }}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ backgroundColor: isScrolled ? 'rgba(252, 250, 247, 0.98)' : 'transparent' }}>
        <div className="container nav-container">
          <a href="#/" className="logo" style={{ color: 'var(--text-primary)' }}>Lavee.</a>
          <div className="nav-links active">
            <a href="#/" style={{ color: 'var(--text-primary)' }}>← Back to Home</a>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '150px' }}>
        {/* --- PAGE HEADER --- */}
        <section className="section" style={{ paddingTop: 0, paddingBottom: 'var(--space-md)' }}>
          <div className="container">
            <h1 className="hero-title reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.05', color: '#1A1A1A', fontFamily: "'Inter', sans-serif", fontWeight: '700' }}>
              Crafting global pathways for<br/>
              <span className="font-serif" style={{ fontWeight: '400' }}>Rajasthan artisans</span><br/>
              through direct digital<br/>
              market access
            </h1>
            
            <hr className="reveal delay-100" style={{ border: 'none', height: '2px', backgroundColor: '#E11D48', margin: '3rem 0', width: '100%', maxWidth: '1000px' }} />

            <div className="project-info reveal delay-200" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', fontFamily: "'Inter', sans-serif" }}>
              <div>
                <div style={{ color: '#5a5a5a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Project Category</div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1A1A1A' }}>Social Impact / E-commerce</div>
              </div>
              <div>
                <div style={{ color: '#5a5a5a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Platform</div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1A1A1A' }}>Mobile Application (iOS/Android)</div>
              </div>
              <div>
                <div style={{ color: '#5a5a5a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>My Role</div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1A1A1A' }}>Lead Product Designer</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- HERO IMAGE --- */}
        <section className="section" style={{ padding: '0 0 var(--space-xl) 0' }}>
            <div className="container reveal delay-300">
                <div style={{ width: '100%', aspectRatio: '21/9', backgroundColor: '#E11D48', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div style={{ width: '25%', height: '80%', background: '#fff', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}></div>
                        <div style={{ width: '25%', height: '80%', background: '#fff', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', marginTop: '4rem', opacity: 0.8 }}></div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- PROJECT OVERVIEW --- */}
        <section className="section">
          <div className="container manifesto-wrap">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#E11D48', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Project Overview
            </span>
            <p className="manifesto-line reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#5a5a5a', fontFamily: "'Inter', sans-serif", fontWeight: '400' }}>
              Handicraft artisans in Rajasthan are losing their livelihood to middle-men and lack of technical knowledge —<br/>
              <span style={{ color: '#1A1A1A', fontWeight: '600' }}>CraftConnect bridges that gap.</span>
            </p>

            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: 'var(--space-md)', fontSize: '1.25rem', fontWeight: '700', color: '#1A1A1A' }}>
              <span>Direct Sales</span>
              <span style={{ color: '#E11D48' }}>·</span>
              <span>Fair Trade</span>
              <span style={{ color: '#E11D48' }}>·</span>
              <span>Heritage Preservation</span>
            </div>
          </div>
        </section>

        {/* --- CONCLUSION / CTA --- */}
        <section id="contact" className="section contact-cta">
            <div className="container">
                <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#E11D48', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
                  Thank You
                </span>
                <a href="mailto:contact@laveenachetwani.online" className="giant-cta reveal" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: '0.85' }}>
                    build<br/>
                    <span className="font-serif" style={{ color: '#E11D48' }}>together.</span>
                </a>
                
                <p className="reveal delay-100" style={{ fontSize: '1.5rem', color: '#1A1A1A', marginTop: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                  Empowering artisans, one screen at a time.
                </p>

                <div className="contact-details reveal delay-200">
                    <a href="mailto:contact@laveenachetwani.online">contact@laveenachetwani.online</a>
                    <a href="https://linkedin.com/in/laveena-chetwani" target="_blank" rel="noreferrer">LinkedIn: laveena-chetwani</a>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default CraftConnectCaseStudy;
