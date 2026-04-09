import { useEffect, useState } from 'react';

const Playground = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll handling for animations and navbar
    const handleScroll = () => {
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
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: '#1A1A1A' }}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent' }}>
        <div className="container nav-container">
          <a href="#/" className="logo" style={{ color: '#1A1A1A' }}>Lavee.</a>
          <div className="nav-links active">
            <a href="#/" style={{ color: '#1A1A1A' }}>← Back to Home</a>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '150px' }}>
        {/* --- PAGE HEADER --- */}
        <section className="section" style={{ paddingTop: 0, paddingBottom: 'var(--space-lg)' }}>
          <div className="container">
            <h1 className="hero-title reveal" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '400', fontFamily: 'var(--font-heading)' }}>
              PLAYGROUND
            </h1>
            <p className="hero-subtitle reveal delay-100" style={{ maxWidth: '800px', fontSize: '1.2rem', marginTop: '2rem', fontFamily: 'var(--font-body)', fontStyle: 'normal', color: '#5a5a5a' }}>
              A thoughtful look into how I integrate generative AI into my product design workflow. 
              Not as a replacement for the creative eye, but as a catalyst to build and iterate faster.
            </p>
          </div>
        </section>

        {/* --- USING AI WITH IMAGERY --- */}
        <section className="section">
          <div className="container manifesto-wrap">
            <span className="section-label reveal">Using AI with Imagery</span>

            {/* Google Whisk Subsection */}
            <div className="reveal" style={{ backgroundColor: '#F8F8F8', padding: '4rem 3rem', borderRadius: '16px', marginTop: 'var(--space-md)' }}>
              <div style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', color: '#5a5a5a', marginBottom: '1rem' }}>
                [ Experiment · Google Whisk ]
              </div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '700', marginBottom: '2rem' }}>
                From flat photo to cinematic 3D — in 3 minutes
              </h3>

              <div style={{ fontSize: '1.25rem', color: '#5a5a5a', lineHeight: '1.6', marginBottom: '3rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  I took a boring photo.<br/>And turned it into THIS.
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  No studio. No photographer. No expensive gear.<br/>Just Whisk.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontWeight: '500', color: '#1A1A1A' }}>
                  <div>→ Uploaded my original flat image</div>
                  <div>→ Wrote a simple prompt</div>
                  <div>→ Whisk added cinematic dual lighting</div>
                  <div>→ Then created a 3D transition from it</div>
                </div>
              </div>

              {/* BEFORE / AFTER VISUAL BLOCK */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '1rem' }}>ORIGINAL</div>
                  <div style={{ width: '100%', aspectRatio: '4/5', background: '#E5E5E5', borderRadius: '12px', marginBottom: '1rem' }}></div>
                  <div style={{ fontSize: '0.9rem', color: '#5a5a5a' }}>A flat, ordinary photo</div>
                </div>

                <div style={{ color: '#5a5a5a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', padding: '1rem' }}>
                  → Whisk →
                </div>

                <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '1rem' }}>AFTER WHISK</div>
                  <div style={{ width: '100%', aspectRatio: '4/5', background: '#D1D1D1', borderRadius: '12px', marginBottom: '1rem', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}></div>
                  <div style={{ fontSize: '0.9rem', color: '#5a5a5a' }}>Cinematic dual lighting · 3D transition</div>
                </div>
              </div>

              {/* VIDEO EMBED BLOCK */}
              <div style={{ width: '100%', background: '#111', borderRadius: '16px', overflow: 'hidden', marginBottom: '1rem' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <span style={{ fontSize: '3rem', opacity: '0.5' }}>▶</span>
                </div>
              </div>
              <div style={{ textAlign: 'center', color: '#5a5a5a', fontSize: '0.9rem', marginBottom: '4rem' }}>
                One image. One prompt. One cinematic result.
              </div>

              {/* WHAT USED TO TAKE VS. NOW BLOCK */}
              <div style={{ display: 'flex', borderTop: '1px solid rgba(0,0,0,0.1)', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '2rem 0', marginBottom: '4rem' }}>
                <div style={{ flex: '1' }}>
                  <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '1rem', color: '#5a5a5a' }}>BEFORE AI</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#5a5a5a' }}>
                    <li>A professional studio</li>
                    <li>Expensive lighting setup</li>
                    <li>Hours of post editing</li>
                  </ul>
                </div>
                <div style={{ flex: '1', borderLeft: '1px solid rgba(0,0,0,0.1)', paddingLeft: '2rem' }}>
                  <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '1rem', color: '#5a5a5a' }}>WITH WHISK</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontWeight: '500' }}>
                    <li>→ One uploaded image</li>
                    <li>→ One simple prompt</li>
                    <li>→ 3 minutes total</li>
                  </ul>
                </div>
              </div>

              {/* CLOSING INSIGHT LINE */}
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
                  "That's it."
                </div>
                <div style={{ fontSize: '1.2rem', color: '#5a5a5a' }}>
                  AI didn't replace the creative eye.<br/>
                  It just removed every barrier in the way.
                </div>
              </div>

              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a0a0a0', textAlign: 'center' }}>
                Tool used: Google Whisk · Prompt written by Laveena Chetwaani
              </div>
            </div>
          </div>
        </section>

        {/* --- USING AI FOR PROTOTYPING --- */}
        <section className="section">
          <div className="container manifesto-wrap">
            <span className="section-label reveal">Using AI for Prototyping</span>

            {/* List sequence context */}
            <div className="reveal" style={{ marginBottom: 'var(--space-md)', fontSize: '1.1rem', color: '#5a5a5a' }}>
              <ol style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Delivery tracking states (Figma Make)</li>
                <li style={{ color: '#1A1A1A', fontWeight: '600' }}>✦ Eye button that follows your cursor (Figma Make)</li>
                <li>Scratch card interaction (Claude Sonnet 4 + Figma Make)</li>
              </ol>
            </div>

            {/* Figma Make Eye Button Subsection */}
            <div className="reveal" style={{ marginTop: 'var(--space-md)' }}>
              <div style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', color: '#5a5a5a', marginBottom: '0.5rem' }}>
                [ Experiment · Figma Make · Interactive Components ]
              </div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '700', marginBottom: '2rem' }}>
                What if this button had an eye that watches you?
              </h3>

              <div style={{ fontSize: '1.25rem', color: '#5a5a5a', lineHeight: '1.6', marginBottom: '3rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  A random thought at 2am —<br/>'what if this button had an eye that watches you?'
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  So I built it.
                </p>
                <p style={{ fontSize: '1.1rem' }}>
                  The eye follows your mouse but stays politely in its<br/>own eyeball — because boundaries are important.
                </p>
              </div>

              {/* EXPERIMENT VISUAL BLOCK */}
              <div style={{ width: '100%', background: '#0D0D0D', borderRadius: '16px', padding: '3rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '80%', aspectRatio: '16/9', background: '#FAFAFA', borderRadius: '12px', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', position: 'relative' }}>
                  <div style={{ fontSize: '1.2rem', opacity: '0.5' }}>[ Interactive Prototype Placeholder ]</div>
                  
                  {/* Fake Cursor Overlay */}
                  <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '2rem' }}>🐭</div>
                </div>
                <div style={{ textAlign: 'center', color: '#a0a0a0', fontSize: '0.85rem', marginTop: '1.5rem' }}>
                  Interactive eye that tracks your cursor · Built in Figma Make
                </div>
              </div>

              {/* THOUGHT PROCESS BLOCK */}
              <div style={{ fontFamily: 'monospace', fontSize: '0.95rem', color: '#5a5a5a', lineHeight: '2', marginBottom: '3rem' }}>
                <div style={{ display: 'flex' }}><span style={{ width: '120px' }}>The thought</span> → "What if this button watched you?"</div>
                <div style={{ display: 'flex' }}><span style={{ width: '120px' }}>The build</span> → Figma Make + Interactive Components</div>
                <div style={{ display: 'flex' }}><span style={{ width: '120px' }}>The result</span> → A button with a soul (and good manners)</div>
              </div>

              {/* INSIGHT LINE */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '700', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: '#1A1A1A' }}>
                  "The things you can create with<br/>Figma's interactive components."
                </div>
                <div style={{ fontSize: '1.1rem', color: '#5a5a5a' }}>
                  Curiosity is a design tool.<br/>I just happened to open Figma.
                </div>
              </div>

              {/* FIGMA PROTOTYPE LINK */}
              <a href="#" style={{ display: 'inline-block', fontSize: '1.1rem', fontWeight: '600', textDecoration: 'underline', color: '#1A1A1A', marginBottom: '4rem' }}>
                🔗 View in Figma Make →
              </a>

              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a0a0a0', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem' }}>
                Tool used: Figma Make · Concept & build by Laveena Chetwaani
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
};

export default Playground;
