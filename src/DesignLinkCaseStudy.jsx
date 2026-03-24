import { useEffect, useState } from 'react';

const DesignLinkCaseStudy = () => {
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
    <div style={{ minHeight: '100vh', fontFamily: "'Inter', sans-serif", backgroundColor: '#F5F4F0' }}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ backgroundColor: isScrolled ? 'rgba(245, 244, 240, 0.98)' : 'transparent' }}>
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
              Turning forgotten portfolios into<br/>
              <span className="font-serif" style={{ fontWeight: '400' }}>meaningful connections</span><br/>
              between creative talent<br/>
              and top employers
            </h1>
            
            <hr className="reveal delay-100" style={{ border: 'none', height: '2px', backgroundColor: '#F59E0B', margin: '3rem 0', width: '100%', maxWidth: '1000px' }} />

            <div className="project-info reveal delay-200" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', fontFamily: "'Inter', sans-serif" }}>
              <div>
                <div style={{ color: '#5a5a5a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Collaboration with</div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1A1A1A' }}>Designerrs Academy</div>
              </div>
              <div>
                <div style={{ color: '#5a5a5a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Platform</div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1A1A1A' }}>Android</div>
              </div>
              <div>
                <div style={{ color: '#5a5a5a', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>My Role</div>
                <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1A1A1A' }}>Product Designer</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- HERO IMAGE --- */}
        <section className="section" style={{ padding: '0 0 var(--space-xl) 0' }}>
            <div className="container reveal delay-300">
                <div style={{ width: '100%', aspectRatio: '21/9', backgroundColor: '#0042D0', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div style={{ width: '25%', height: '80%', background: '#fff', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}></div>
                        <div style={{ width: '25%', height: '80%', background: '#fff', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', marginTop: '4rem' }}></div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 1: PROJECT OVERVIEW --- */}
        <section className="section">
          <div className="container manifesto-wrap">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Project Overview
            </span>
            <p className="manifesto-line reveal" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#5a5a5a', fontFamily: "'Inter', sans-serif", fontWeight: '400' }}>
              Traditional hiring platforms are failing creatives. They are built for text-based resumes —<br/>
              <span style={{ color: '#1A1A1A', fontWeight: '600' }}>the wrong tool for visual talent.</span>
            </p>

            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: 'var(--space-md)', fontSize: '1.25rem', fontWeight: '700', color: '#1A1A1A' }}>
              <span>Portfolio Visibility</span>
              <span style={{ color: '#0042D0' }}>·</span>
              <span>Lack of Transparency</span>
              <span style={{ color: '#0042D0' }}>·</span>
              <span>Hiring Inefficiency</span>
            </div>
            <p className="reveal" style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#5a5a5a', maxWidth: '800px' }}>
              Employers waste hours. Talented designers get overlooked by automated systems.
            </p>

            <p className="reveal" style={{ marginTop: 'var(--space-md)', fontSize: '1.5rem', fontWeight: '600', color: '#1A1A1A' }}>
              Our solution is DesignLink — a portfolio-first hiring platform.
            </p>
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1.5rem', fontSize: '1.25rem', fontWeight: '700', color: '#0042D0' }}>
              <span>Portfolio-First</span>
              <span style={{ color: '#1A1A1A' }}>·</span>
              <span>Smart Matching</span>
              <span style={{ color: '#1A1A1A' }}>·</span>
              <span>Transparency</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: DESIGN PROCESS --- */}
        <section className="section">
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Design Process
            </span>
            <p className="reveal" style={{ fontSize: '1.25rem', color: '#5a5a5a', maxWidth: '800px', marginBottom: 'var(--space-md)' }}>
              A comprehensive process to create a seamless hiring experience for both creative professionals and employers.
            </p>

            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
              {[{step: 'Empathize', subs: ['Problem Statement', 'Project Goals', 'Target Audience']},
                {step: 'Define', subs: ['User Flows', 'Site-Map', 'User Stories']},
                {step: 'Ideate', subs: ['Wireframes', 'Visual Design']},
                {step: 'Design', subs: ['Visual Concepts', 'UI Kit', 'Final Mockups']}
              ].map((item, i) => (
                <div key={i} style={{ flex: '1', minWidth: '200px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1A1A1A', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    {item.step}
                    {i < 3 && <span style={{ color: '#F59E0B' }}>&rarr;</span>}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {item.subs.map((sub, j) => (
                      <li key={j} style={{ color: '#0042D0', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: '500' }}>{sub}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: SECONDARY RESEARCH --- */}
        <section className="section">
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Secondary Research
            </span>
            <p className="reveal" style={{ fontSize: '1.25rem', color: '#5a5a5a', maxWidth: '800px', marginBottom: 'var(--space-md)' }}>
              Research into existing platforms revealed recurring themes in platform limitations and user pain points.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {["Resume-First Culture", "Disconnected Platforms", "The \"Black Hole\" Effect", "Skills vs. Style", "Platform Fatigue", "\"One-Size-Fits-All\" Fails"].map((theme, i) => (
                <div key={i} style={{ border: '1px solid rgba(0,0,0,0.1)', padding: '2.5rem 2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', border: '2px solid #0042D0', borderRadius: '8px' }}></div>
                  <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#1A1A1A' }}>{theme}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 4: PRIMARY RESEARCH --- */}
        <section className="section" style={{ backgroundColor: '#f8f9fc', padding: 'var(--space-xl) 0' }}>
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Primary Research
            </span>
            <p className="reveal" style={{ fontSize: '1.25rem', color: '#5a5a5a', maxWidth: '800px', marginBottom: 'var(--space-lg)' }}>
              One-on-one interviews with designers and recruiters revealed four recurring frustrations.
            </p>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', position: 'relative' }}>
              {["\"My portfolio is visual, but platforms only see my text resume. My work gets ignored.\"",
                "\"The 'black hole' is real. A lack of application feedback is my biggest frustration.\"",
                "\"I can't tell if a 'pretty' portfolio means they have real-world skills.\" (Recruiter)",
                "\"I'm tired of juggling 3 platforms just to apply for one job. I want one system.\""].map((quote, i) => (
                <div key={i} style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', fontSize: '1.2rem', color: '#1A1A1A', lineHeight: '1.6' }}>
                  {quote}
                </div>
              ))}
              
              {/* Center Logo Burst */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', backgroundColor: '#0042D0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: '2rem' }}>✦</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 5: USER PERSONAS --- */}
        <section className="section">
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              User Personas
            </span>
            
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-md)' }}>
              <div style={{ padding: '3rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px' }}>
                <div style={{ textTransform: 'uppercase', color: '#0042D0', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Persona 1 — Riya Sharma</div>
                <div style={{ color: '#5a5a5a', fontSize: '0.9rem', marginBottom: '2rem' }}>Design Student · 21 · Female · Bangalore</div>
                <div style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#1A1A1A' }}>"I used both LinkedIn and Behance, but they're not connected."</div>
                
                <div style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Goals</div>
                <ul style={{ color: '#5a5a5a', fontSize: '0.95rem', marginBottom: '1.5rem', listStyle: 'none', paddingLeft: '1rem' }}>
                  <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: '#F59E0B' }}>•</span> Showcase portfolio + resume</li>
                  <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: '#F59E0B' }}>•</span> Receive clear application status</li>
                </ul>

                <div style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Frustrations</div>
                <ul style={{ color: '#5a5a5a', fontSize: '0.95rem', listStyle: 'none', paddingLeft: '1rem' }}>
                  <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: '#0042D0' }}>×</span> Doesn't know if applications are seen</li>
                  <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: '#0042D0' }}>×</span> Platforms separate resume and portfolio</li>
                </ul>
              </div>

              <div style={{ padding: '3rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '16px' }}>
                <div style={{ textTransform: 'uppercase', color: '#0042D0', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Persona 2 — Nisha Kapoor</div>
                <div style={{ color: '#5a5a5a', fontSize: '0.9rem', marginBottom: '2rem' }}>Sr. Hiring Manager · 47 · Female · Delhi</div>
                <div style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#1A1A1A' }}>"LinkedIn isn't built for visual creatives."</div>
                
                <div style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Goals</div>
                <ul style={{ color: '#5a5a5a', fontSize: '0.95rem', marginBottom: '1.5rem', listStyle: 'none', paddingLeft: '1rem' }}>
                  <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: '#F59E0B' }}>•</span> Streamline evaluation via portfolio + resume integration</li>
                  <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: '#F59E0B' }}>•</span> Assess candidates with skill tests</li>
                </ul>

                <div style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Frustrations</div>
                <ul style={{ color: '#5a5a5a', fontSize: '0.95rem', listStyle: 'none', paddingLeft: '1rem' }}>
                  <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: '#0042D0' }}>×</span> Hard to compare portfolios side-by-side</li>
                  <li style={{ position: 'relative' }}><span style={{ position: 'absolute', left: '-1rem', color: '#0042D0' }}>×</span> Can't filter by visual style</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 6: COMPETITIVE ANALYSIS --- */}
        <section className="section">
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Competitive Analysis
            </span>
            <p className="reveal" style={{ fontSize: '2rem', color: '#1A1A1A', maxWidth: '800px', marginBottom: 'var(--space-md)', fontWeight: '600' }}>
              No single competitor solves the whole problem. The market is split into three categories.
            </p>

            <div className="reveal" style={{ display: 'flex', gap: '3rem', marginBottom: 'var(--space-lg)', color: '#0042D0', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
              <span>✦ Portfolio Platforms</span>
              <span>✦ Generalist Job Boards</span>
              <span>✦ Project Platforms</span>
            </div>

            <div className="reveal" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '1.5rem', borderBottom: '2px solid #E5E7EB' }}>Feature</th>
                    <th style={{ padding: '1.5rem', borderBottom: '2px solid #0042D0', color: '#0042D0' }}>DesignLink</th>
                    <th style={{ padding: '1.5rem', borderBottom: '2px solid #E5E7EB', color: '#5a5a5a' }}>LinkedIn</th>
                    <th style={{ padding: '1.5rem', borderBottom: '2px solid #E5E7EB', color: '#5a5a5a' }}>Behance</th>
                    <th style={{ padding: '1.5rem', borderBottom: '2px solid #E5E7EB', color: '#5a5a5a' }}>Krop</th>
                    <th style={{ padding: '1.5rem', borderBottom: '2px solid #E5E7EB', color: '#5a5a5a' }}>99designs</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Unified Portfolio & Resume', '✓', '—', '—', '✓', '—'],
                    ['Smart Job Matching', '✓', '✓', '—', '—', '✓'],
                    ['Practical Skill Assessments', '✓', '✓', '—', '—', '—'],
                    ['Real-Time App Tracking', '✓', '—', '—', '—', '—']
                  ].map((row, idx) => (
                    <tr key={idx}>
                      <td style={{ padding: '1.5rem', borderBottom: '1px solid #E5E7EB', fontWeight: '500' }}>{row[0]}</td>
                      <td style={{ padding: '1.5rem', borderBottom: '1px solid #E5E7EB', color: '#0042D0', fontWeight: '700' }}>{row[1]}</td>
                      <td style={{ padding: '1.5rem', borderBottom: '1px solid #E5E7EB', color: row[2]==='✓'?'green':'#a0a0a0' }}>{row[2]}</td>
                      <td style={{ padding: '1.5rem', borderBottom: '1px solid #E5E7EB', color: row[3]==='✓'?'green':'#a0a0a0' }}>{row[3]}</td>
                      <td style={{ padding: '1.5rem', borderBottom: '1px solid #E5E7EB', color: row[4]==='✓'?'green':'#a0a0a0' }}>{row[4]}</td>
                      <td style={{ padding: '1.5rem', borderBottom: '1px solid #E5E7EB', color: row[5]==='✓'?'green':'#a0a0a0' }}>{row[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- SECTION 7: LEARNINGS --- */}
        <section className="section">
          <div className="container manifesto-wrap">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Learnings & Takeaways
            </span>
            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', fontSize: '1.5rem', color: '#1A1A1A', lineHeight: '1.6' }}>
              <p>The creative hiring process is deeply fragmented — users are forced to jump between portfolio sites, job boards, and skill platforms.</p>
              <p>A major white space was identified. No competitor integrates practical skill tests or real-time application tracking. This is our key opportunity.</p>
              <p>Prioritising the core all-in-one system is essential. Avoiding feature creep is critical to solving the main user pain point.</p>
            </div>
          </div>
        </section>

        {/* --- SECTION 8: WIREFRAMES --- */}
        <section className="section" style={{ backgroundColor: '#f8f9fc', padding: 'var(--space-xl) 0' }}>
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Wireframes
            </span>
            <p className="reveal" style={{ fontSize: '1.25rem', color: '#5a5a5a', maxWidth: '800px', marginBottom: 'var(--space-lg)' }}>
              Several iterations from low to high fidelity before arriving at the final version.
            </p>

            <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center', flex: '1' }}>
                <div style={{ aspectRatio: '9/16', background: '#e0ded8', borderRadius: '16px', marginBottom: '1.5rem' }}></div>
                <div style={{ fontWeight: '600' }}>Sketching</div>
              </div>
              <div style={{ color: '#F59E0B', fontSize: '2rem' }}>&rarr;</div>
              <div style={{ textAlign: 'center', flex: '1' }}>
                <div style={{ aspectRatio: '9/16', background: '#e0ded8', borderRadius: '16px', marginBottom: '1.5rem' }}></div>
                <div style={{ fontWeight: '600' }}>Mid-fidelity Wireframe</div>
              </div>
              <div style={{ color: '#F59E0B', fontSize: '2rem' }}>&rarr;</div>
              <div style={{ textAlign: 'center', flex: '1' }}>
                <div style={{ aspectRatio: '9/16', background: '#0042D0', borderRadius: '16px', marginBottom: '1.5rem' }}></div>
                <div style={{ fontWeight: '600' }}>High-fidelity Wireframe</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 9: FINAL UI MOCKUPS --- */}
        <section className="section" style={{ backgroundColor: '#0042D0', color: '#fff', padding: 'var(--space-xl) 0' }}>
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#fff', color: '#0042D0', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-lg)' }}>
              Final UI Mockups
            </span>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }}>
              
              {/* Screen 1 */}
              <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ width: '300px', aspectRatio: '9/16', background: '#fff', borderRadius: '24px' }}></div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Home Screen</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#E5E7EB' }}>
                    <li>→ Jakub's Law</li>
                    <li>→ Easy Scanning (F-Pattern)</li>
                    <li>→ Social Proof Trust (Netflix/Tesla logos)</li>
                  </ul>
                </div>
              </div>

              {/* Screen 2 */}
              <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
                <div style={{ width: '300px', aspectRatio: '9/16', background: '#fff', borderRadius: '24px' }}></div>
                <div style={{ flex: '1', minWidth: '300px', textAlign: 'right' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send Assessment Screen</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#E5E7EB' }}>
                    <li>→ Reduced Cognitive Load</li>
                  </ul>
                </div>
              </div>

              {/* Add more screens seamlessly following the pattern */}
              <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ width: '300px', aspectRatio: '9/16', background: '#fff', borderRadius: '24px' }}></div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Job Details Screen</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#E5E7EB' }}>
                    <li>→ Psychology</li>
                    <li>→ Scarcity (F-Pattern)</li>
                    <li>→ Jakub's Law</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION 10: ONBOARDING FLOW --- */}
        <section className="section">
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Onboarding Flow
            </span>
            
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
              {[
                { step: "Step 1/6", desc: "Design category selection" },
                { step: "Step 2/6", desc: "Job type (FT, PT, Freelance)" },
                { step: "Step 3/6", desc: "Job scheme (On-site, Remote)" },
                { step: "Step 4/6", desc: "Industry preference" },
                { step: "Step 5/6", desc: "Location preference" },
                { step: "Step 6/6", desc: "Salary range" }
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0042D0', marginBottom: '1rem' }}>{item.step}</div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                    {[...Array(6)].map((_, j) => (
                      <div key={j} style={{ height: '4px', flex: '1', backgroundColor: j <= i ? '#F59E0B' : '#E5E7EB', borderRadius: '2px' }}></div>
                    ))}
                  </div>
                  <div style={{ aspectRatio: '9/16', background: '#f8f9fc', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem' }}></div>
                  <div style={{ color: '#5a5a5a', fontWeight: '500' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 11: DESIGN SYSTEM --- */}
        <section className="section" style={{ backgroundColor: '#f8f9fc', padding: 'var(--space-xl) 0' }}>
          <div className="container">
            <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
              Design System
            </span>
            
            <div className="reveal" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', marginBottom: 'var(--space-lg)' }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <div style={{ height: '100px', backgroundColor: '#0042D0', borderRadius: '12px', marginBottom: '1rem' }}></div>
                <div style={{ fontWeight: '700' }}>Primary Blue</div>
                <div style={{ color: '#5a5a5a', fontSize: '0.9rem' }}>#0042D0 — Professional and calm</div>
              </div>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <div style={{ height: '100px', backgroundColor: '#E5E7EB', borderRadius: '12px', marginBottom: '1rem' }}></div>
                <div style={{ fontWeight: '700' }}>Neutral Gray</div>
                <div style={{ color: '#5a5a5a', fontSize: '0.9rem' }}>#E5E7EB — Clean and supportive</div>
              </div>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <div style={{ height: '100px', backgroundColor: '#1E293B', borderRadius: '12px', marginBottom: '1rem' }}></div>
                <div style={{ fontWeight: '700' }}>Dark Charcoal</div>
                <div style={{ color: '#5a5a5a', fontSize: '0.9rem' }}>#1E293B — Strong and clear</div>
              </div>
            </div>

            <div className="reveal" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 'var(--space-md)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#0042D0' }}>Typography - Inter</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ fontSize: '24px', fontWeight: '600' }}>Heading</span>
                  <span style={{ color: '#5a5a5a' }}>Semi-bold 24</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ fontSize: '18px', fontWeight: '400' }}>Sub-Heading</span>
                  <span style={{ color: '#5a5a5a' }}>Regular 18</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ fontSize: '16px', fontWeight: '600' }}>Body (Primary)</span>
                  <span style={{ color: '#5a5a5a' }}>Semi-bold 16</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ fontSize: '16px', fontWeight: '400' }}>Body (Secondary)</span>
                  <span style={{ color: '#5a5a5a' }}>Regular 16</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 12: CONCLUSION / CTA --- */}
        <section id="contact" className="section contact-cta">
            <div className="container">
                <span className="reveal" style={{ display: 'inline-block', backgroundColor: '#0042D0', color: '#fff', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '20px', marginBottom: 'var(--space-md)' }}>
                  Thank You
                </span>
                <a href="mailto:contact@laveenachetwani.online" className="giant-cta reveal" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: '0.85' }}>
                    design that<br/>
                    <span className="font-serif text-secondary">connects.</span>
                </a>
                
                <p className="reveal delay-100" style={{ fontSize: '1.5rem', color: '#1A1A1A', marginTop: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                  A portfolio-first world is possible. This is what it looks like.
                </p>

                <div className="contact-details reveal delay-200">
                    <a href="mailto:laveenaa.designn@gmail.com">laveenaa.designn@gmail.com</a>
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

export default DesignLinkCaseStudy;
