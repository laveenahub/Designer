import { useEffect } from 'react';

// Utility for Section Badges
const SectionBadge = ({ children }) => (
  <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
    <span style={{ 
      display: 'inline-block',
      backgroundColor: '#0042D0', 
      color: '#fff', 
      padding: '6px 16px', 
      borderRadius: '20px', 
      fontWeight: 'bold',
      fontSize: '0.85rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }}>
      {children}
    </span>
  </div>
);

const Divider = () => (
  <hr style={{ border: 'none', borderTop: '1px solid #E5E7EB', margin: '4rem 0' }} />
);

const DesignLinkCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#F5F4F1', 
      minHeight: '100vh', 
      color: '#1E293B', 
      fontFamily: "'Inter', sans-serif", // Base font
      padding: 0,
      margin: 0
    }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        padding: '1.5rem 2rem', 
        zIndex: 100,
        backgroundColor: 'rgba(245, 244, 241, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#/" style={{ 
            color: '#0042D0', 
            textDecoration: 'none', 
            fontWeight: '600', 
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ← Back to Portfolio
          </a>
          <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.15em', color: '#1E293B', opacity: 0.5 }}>UX CASE STUDY</span>
        </div>
      </nav>

      <main style={{ 
        maxWidth: '1024px', 
        margin: '0 auto', 
        padding: '10rem 2rem 6rem',
        boxSizing: 'border-box'
      }}>
        
        {/* --- SECTION 1: HERO / TITLE --- */}
        <section style={{ marginBottom: '8rem' }}>
          <h1 style={{ 
            fontFamily: "'Glyseric', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            lineHeight: '1.05',
            fontWeight: 'normal',
            color: '#1E293B',
            marginBottom: '3rem',
            letterSpacing: '-0.02em'
          }}>
            Turning forgotten portfolios into meaningful connections between creative talent and top employers
          </h1>
          
          <hr style={{ border: 'none', borderTop: '2px solid #EF9F27', width: '100px', margin: '0 0 2rem 0' }} />
          
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '0.5rem' }}>Collaboration with</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Designerrs Academy</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '0.5rem' }}>Platform</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Android</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '0.5rem' }}>My Role</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Product Designer</div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PROJECT OVERVIEW --- */}
        <section>
          <SectionBadge>Project Overview</SectionBadge>
          
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
            Traditional hiring platforms are failing creatives. They are built for text-based resumes, which is the wrong tool for evaluating visual talent and showcasing creative portfolios. This creates a frustrating and inefficient process for both sides, leading to three core issues:
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem', fontWeight: '800', color: '#1E293B', fontSize: '1.1rem' }}>
            <span>Portfolio Visibility</span>
            <span style={{ color: '#0042D0' }}>·</span>
            <span>Lack of Transparency</span>
            <span style={{ color: '#0042D0' }}>·</span>
            <span>Hiring Inefficiency</span>
          </div>
          
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#333' }}>
            Employers waste hours trying to find quality portfolios, while talented designers are overlooked by automated systems. Our solution is DesignLink, a portfolio-first hiring platform.
          </p>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontWeight: '800', color: '#0042D0', fontSize: '1.1rem' }}>
            <span>Portfolio-First</span>
            <span style={{ color: '#1E293B' }}>·</span>
            <span>Smart Matching</span>
            <span style={{ color: '#1E293B' }}>·</span>
            <span>Transparency</span>
          </div>
        </section>

        <Divider />

        {/* --- SECTION 3: DESIGN PROCESS --- */}
        <section>
          <SectionBadge>Design Process</SectionBadge>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#555' }}>
            A structured approach was critical to ensuring the platform effectively addresses the nuances of creative hiring.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'stretch' }}>
            {[
              { step: 'Empathize', subs: ['Problem Statement', 'Project Goals', 'Target Audience'] },
              { step: 'Define', subs: ['User Flows', 'Site-Map', 'User Stories'] },
              { step: 'Ideate', subs: ['Wireframes', 'Visual Design'] },
              { step: 'Design', subs: ['Visual Concepts', 'UI Kit', 'Final Mockups'] }
            ].map((item, i) => (
              <div key={i} style={{ flex: '1', minWidth: '180px', backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '1.5rem', position: 'relative' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0042D0', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  {item.step}
                </div>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {item.subs.map((sub, j) => (
                    <li key={j} style={{ fontSize: '0.9rem', color: '#555', fontWeight: '500' }}>{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* --- SECTION 4: SECONDARY RESEARCH --- */}
        <section>
          <SectionBadge>Secondary Research</SectionBadge>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#555' }}>
            To understand the competitive landscape and user sentiment without direct interviews, we analyzed industry discussions and existing platform pain points.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              "Resume-First Culture",
              "Disconnected Platforms",
              "The \"Black Hole\" Effect",
              "Skills vs. Style",
              "Platform Fatigue",
              "\"One-Size-Fits-All\" Fails"
            ].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '4px', backgroundColor: '#0042D0', display: 'flex', flexShrink: 0, opacity: 0.1 }}></div>
                <span style={{ fontWeight: '700', fontSize: '1.05rem', color: '#1E293B' }}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* --- SECTION 5: PRIMARY RESEARCH --- */}
        <section>
          <SectionBadge>Primary Research</SectionBadge>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#555' }}>
            We conducted hypothetical one-on-one interviews with designers and recruiters to uncover specific usability and workflow barriers.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              "\"My portfolio is visual, but platforms only see my text resume. My work gets ignored.\"",
              "\"The 'black hole' is real. A lack of application feedback is my biggest frustration.\"",
              "\"I can't tell if a 'pretty' portfolio means they have real-world skills.\" (Recruiter)",
              "\"I'm tired of juggling 3 platforms just to apply for one job. I want one system.\""
            ].map((quote, i) => (
              <div key={i} style={{ padding: '2rem', backgroundColor: '#1E293B', color: '#fff', borderRadius: '12px', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                {quote}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* --- SECTION 6: USER PERSONAS --- */}
        <section>
          <SectionBadge>User Personas</SectionBadge>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
            {/* Persona 1 */}
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ fontFamily: "'Glyseric', serif", fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>Persona 1 — Riya Sharma</h3>
              <div style={{ color: '#0042D0', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '2rem' }}>Design Student · 21 · Female · Bangalore</div>
              
              <div style={{ fontWeight: '800', marginBottom: '0.8rem', fontSize: '1rem' }}>Goals</div>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                <li style={{ marginBottom: '0.5rem' }}>Showcase portfolio + resume simultaneously.</li>
                <li>Receive clear application status and feedback.</li>
              </ul>
              
              <div style={{ fontWeight: '800', marginBottom: '0.8rem', fontSize: '1rem' }}>Frustrations</div>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                <li style={{ marginBottom: '0.5rem' }}>Doesn't know if applications are actually seen.</li>
                <li>Platforms completely separate her visual work from her experience.</li>
              </ul>

              <div style={{ padding: '1.5rem', backgroundColor: '#F5F4F1', borderRadius: '8px', fontStyle: 'italic', color: '#1E293B', fontWeight: '500' }}>
                "I used both LinkedIn and Behance, but they're not connected."
              </div>
            </div>

            {/* Persona 2 */}
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #E5E7EB' }}>
              <h3 style={{ fontFamily: "'Glyseric', serif", fontSize: '1.8rem', margin: '0 0 0.5rem 0' }}>Persona 2 — Nisha Kapoor</h3>
              <div style={{ color: '#0042D0', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '2rem' }}>Sr. Hiring Manager · 47 · Female · Delhi</div>
              
              <div style={{ fontWeight: '800', marginBottom: '0.8rem', fontSize: '1rem' }}>Goals</div>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                <li style={{ marginBottom: '0.5rem' }}>Streamline evaluation by integrating portfolio with a standard resume.</li>
                <li>Assess candidates through objective skill tests.</li>
              </ul>
              
              <div style={{ fontWeight: '800', marginBottom: '0.8rem', fontSize: '1rem' }}>Frustrations</div>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: '#555', fontSize: '0.95rem', lineHeight: '1.5' }}>
                <li style={{ marginBottom: '0.5rem' }}>Hard to compare scattered portfolios side-by-side.</li>
                <li>Cannot efficiently filter candidates by their specific visual style.</li>
              </ul>

              <div style={{ padding: '1.5rem', backgroundColor: '#F5F4F1', borderRadius: '8px', fontStyle: 'italic', color: '#1E293B', fontWeight: '500' }}>
                "LinkedIn isn't built for visual creatives."
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* --- SECTION 7: COMPETITIVE ANALYSIS --- */}
        <section>
          <SectionBadge>Competitive Analysis</SectionBadge>
          <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '2rem', color: '#1E293B' }}>
            No single competitor solves the whole problem. The market is split into three main categories.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #E5E7EB', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', fontWeight: '800' }}>Portfolio Platforms</div>
            <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #E5E7EB', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', fontWeight: '800' }}>Generalist Job Boards</div>
            <div style={{ flex: 1, backgroundColor: '#fff', border: '1px solid #E5E7EB', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', fontWeight: '800' }}>Project Platforms</div>
          </div>

          <div style={{ overflowX: 'auto', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th style={{ padding: '1rem', borderBottom: '2px solid #1E293B' }}>Feature</th>
                  <th style={{ padding: '1rem', borderBottom: '2px solid #0042D0', color: '#0042D0' }}>DesignLink</th>
                  <th style={{ padding: '1rem', borderBottom: '2px solid #E5E7EB' }}>LinkedIn</th>
                  <th style={{ padding: '1rem', borderBottom: '2px solid #E5E7EB' }}>Behance</th>
                  <th style={{ padding: '1rem', borderBottom: '2px solid #E5E7EB' }}>Krop</th>
                  <th style={{ padding: '1rem', borderBottom: '2px solid #E5E7EB' }}>99designs</th>
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
                    <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB', fontWeight: '600' }}>{row[0]}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB', color: '#0042D0', fontWeight: '800', backgroundColor: '#f0f4ff' }}>{row[1]}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB', color: row[2]==='✓'?'#2EAF77':'#aaa', fontWeight: 'bold' }}>{row[2]}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB', color: row[3]==='✓'?'#2EAF77':'#aaa', fontWeight: 'bold' }}>{row[3]}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB', color: row[4]==='✓'?'#2EAF77':'#aaa', fontWeight: 'bold' }}>{row[4]}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB', color: row[5]==='✓'?'#2EAF77':'#aaa', fontWeight: 'bold' }}>{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Divider />

        {/* --- SECTION 8: WIREFRAMES --- */}
        <section>
          <SectionBadge>Wireframes</SectionBadge>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#555' }}>
            The product evolved significantly through low, mid, and high-fidelity iterations to optimize for visual scanning and usability.
          </p>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <img src="/Sketching.png" alt="Sketching" style={{ width: '100%', borderRadius: '16px', marginBottom: '1rem', border: '1px solid #ccc', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              <div style={{ fontWeight: '700' }}>Sketching</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <img src="/Mid-Fidelity Wireframe.png" alt="Mid-fidelity Wireframe" style={{ width: '100%', borderRadius: '16px', marginBottom: '1rem', border: '1px solid #ccc', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              <div style={{ fontWeight: '700' }}>Mid-fidelity Wireframe</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <img src="/High-fidelity Wireframe.png" alt="High-fidelity Wireframe" style={{ width: '100%', borderRadius: '16px', marginBottom: '1rem', border: '1px solid #002d8f', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              <div style={{ fontWeight: '700' }}>High-fidelity Wireframe</div>
            </div>
          </div>
        </section>

        <Divider />

        {/* --- SECTION 9: FINAL UI MOCKUPS --- */}
        <section>
          <SectionBadge>Final UI Mockups</SectionBadge>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', marginTop: '3rem' }}>
            {/* Screen 1 */}
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
              <div style={{ flex: '0 0 250px' }}>
                <img src="/home-screen.png" alt="Home Screen Mockup" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Glyseric', serif", fontSize: '2rem', marginBottom: '1rem', color: '#1E293B' }}>Home Screen</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Hick's Law:</strong> Streamlined search and category choices to reduce decision fatigue.</div></li>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Easy Scanning (F-Pattern):</strong> Featured jobs aligned left for optimal visual parsing.</div></li>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Social Proof Trust:</strong> Company logos build instant credibility.</div></li>
                </ul>
              </div>
            </div>

            {/* Screen 2 */}
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
              <div style={{ flex: '0 0 250px' }}>
                <img src="/Send-assesment-screen.png" alt="Send Assessment Mockup" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Glyseric', serif", fontSize: '2rem', marginBottom: '1rem', color: '#1E293B' }}>Send Assessment Screen</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Reduced Cognitive Load:</strong> Simple singular action format to guide users quickly without distractions.</div></li>
                </ul>
              </div>
            </div>

            {/* Screen 3 */}
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
              <div style={{ flex: '0 0 250px' }}>
                <img src="/select-your-job%20type.jpg" alt="Select Job Type Mockup" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Glyseric', serif", fontSize: '2rem', marginBottom: '1rem', color: '#1E293B' }}>Select Job Type Screen</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Goal-Gradient Effect:</strong> Progress indicators motivate users to finish setup.</div></li>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Miller's Law:</strong> Options separated into digestible chunks.</div></li>
                </ul>
              </div>
            </div>

            {/* Screen 4 */}
            <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
              <div style={{ flex: '0 0 250px' }}>
                <img src="/employer-hiring%20screen.png" alt="Employer Hiring Screen Mockup" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Glyseric', serif", fontSize: '2rem', marginBottom: '1rem', color: '#1E293B' }}>Employer's Hiring Screen</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Law of Prägnanz:</strong> Organized data simplifies complex candidate comparisons.</div></li>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Serial Position Effect:</strong> Top matches are displayed most prominently.</div></li>
                </ul>
              </div>
            </div>

             {/* Screen 5 */}
             <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
              <div style={{ flex: '0 0 250px' }}>
                <img src="/job-details-screen.png" alt="Job Details Screen Mockup" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Glyseric', serif", fontSize: '2rem', marginBottom: '1rem', color: '#1E293B' }}>Job Details Screen</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Psychology (Scalability/F-Pattern):</strong> Important data placed along the natural eye path.</div></li>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Jacob's Law:</strong> Standardized application buttons matching industry norms.</div></li>
                </ul>
              </div>
            </div>

             {/* Screen 6 */}
             <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
              <div style={{ flex: '0 0 250px' }}>
                <img src="/messages-screen.png" alt="Message Screen Mockup" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Glyseric', serif", fontSize: '2rem', marginBottom: '1rem', color: '#1E293B' }}>Message Screen</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Law of Similarity:</strong> Consistent chat bubbles establish immediate understanding.</div></li>
                  <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: '#0042D0', fontWeight: 'bold' }}>→</span> <div><strong style={{ color: '#1E293B' }}>Jacob's Law:</strong> UI feels instantly familiar to typical messaging platforms.</div></li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <Divider />

        {/* --- SECTION 10: SET YOUR PREFERENCE SCREEN --- */}
        <section>
          <SectionBadge>Set Your Preference Screen</SectionBadge>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#555' }}>
            A modular 6-step onboarding flow guarantees accurate candidate profiling without overwhelming the user during signup.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { step: "Step 1/6", desc: "Select design category (Visual Designer, Graphic Designer, UI Designer, etc.)" },
              { step: "Step 2/6", desc: "Select job type (Full-time, Part-time, Internship, Freelance)" },
              { step: "Step 3/6", desc: "Select job scheme (On-site, Remote, Hybrid)" },
              { step: "Step 4/6", desc: "Industry preference" },
              { step: "Step 5/6", desc: "Location preference (Country + City dropdowns)" },
              { step: "Step 6/6", desc: "Salary range slider (optional)" }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', padding: '1.5rem', borderRadius: '12px' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0042D0', marginBottom: '0.5rem' }}>{item.step}</div>
                <div style={{ color: '#1E293B', fontWeight: '500' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* --- SECTION 11: CANDIDATE PROFILE SCREEN --- */}
        <section>
          <h2 style={{ fontFamily: "'Glyseric', serif", fontSize: '2.5rem', color: '#0042D0', marginBottom: '2rem' }}>
            What these screens tell a recruiter?
          </h2>
          
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '0 0 260px' }}>
               {/* Stand-in for candidate profile */}
               <img src="/Android Compact - 56.png" alt="Candidate profile" style={{ width: '100%', borderRadius: '18px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1E293B' }}>Candidate Profile Highlights</h3>
              <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                The profile view summarizes the candidate (Dhruv Jain, Senior UI/UX Designer) providing a <strong>92% Match Score</strong> immediately.
              </p>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '2rem', color: '#333', fontSize: '1rem', lineHeight: '1.6' }}>
                <li><strong>Stats:</strong> 47 Projects / 4.9 Rating / 12 Reviews</li>
                <li><strong>Sections:</strong> Experience, Certifications & Awards, Languages</li>
                <li><strong>Actions:</strong> Send Message, Save Candidate, Schedule Interview, Send Assessment</li>
              </ul>
              <div style={{ padding: '1.5rem', backgroundColor: '#eef2ff', borderLeft: '4px solid #0042D0', fontSize: '1.1rem', fontStyle: 'italic', fontWeight: '500', color: '#0042D0' }}>
                "Summary and portfolio reveal their proven impact and design process."
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* --- SECTION 12: COLOR PALETTE --- */}
        <section>
          <SectionBadge>Color Palette</SectionBadge>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
            {/* Swatch 1 */}
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff' }}>
              <div style={{ backgroundColor: '#0042D0', height: '120px' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Primary Blue</div>
                <div style={{ color: '#0042D0', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '1rem' }}>#0042D0</div>
                <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>Professional and calm, inspires trust, use for key actions and branding.</p>
              </div>
            </div>

            {/* Swatch 2 */}
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff' }}>
              <div style={{ backgroundColor: '#E5E7EB', height: '120px' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Neutral Gray</div>
                <div style={{ color: '#1E293B', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '1rem', opacity: 0.5 }}>#E5E7EB</div>
                <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>Clean and supportive, use for backgrounds and secondary text.</p>
              </div>
            </div>

            {/* Swatch 3 */}
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff' }}>
              <div style={{ backgroundColor: '#1E293B', height: '120px' }}></div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Dark Charcoal</div>
                <div style={{ color: '#1E293B', fontFamily: 'monospace', fontWeight: 'bold', marginBottom: '1rem' }}>#1E293B</div>
                <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>Strong and clear, excellent contrast, use for all primary text and headlines.</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* --- SECTION 13: TYPOGRAPHY --- */}
        <section>
          <SectionBadge>Typography</SectionBadge>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#555' }}>
            We chose <strong>Inter</strong> for our global interface typography to guarantee professional legibility across devices and dense UI data displays.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Type Scale */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
                <span style={{ fontSize: '24px', fontWeight: '600' }}>Heading</span>
                <span style={{ color: '#888' }}>Semi-bold 24</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
                <span style={{ fontSize: '18px', fontWeight: '400' }}>Sub-Heading</span>
                <span style={{ color: '#888' }}>Regular 18</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>Body text (Primary)</span>
                <span style={{ color: '#888' }}>Semi-bold 16</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '16px', fontWeight: '400' }}>Body text (Secondary)</span>
                <span style={{ color: '#888' }}>Regular 16</span>
              </div>
            </div>

            {/* Display Card */}
            <div style={{ backgroundColor: '#1E293B', color: '#fff', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '8rem', lineHeight: '1', fontWeight: '600', marginBottom: '1rem' }}>Aa</div>
              <div style={{ fontSize: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6 }}>Inter</div>
            </div>
          </div>
        </section>

        <Divider />

        {/* --- SECTION 14: LEARNINGS & TAKEAWAYS --- */}
        <section>
          <SectionBadge>Learnings & Takeaways</SectionBadge>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: '#fff', border: '1px solid #E5E7EB', padding: '3rem', borderRadius: '12px' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#1E293B', margin: 0 }}>
              The creative hiring process is deeply fragmented, forcing users to jump between portfolio sites, job boards, and skill-testing platforms.
            </p>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#1E293B', margin: 0 }}>
              A major white space was identified — no competitor integrates practical skill tests or real-time application tracking. This is the key opportunity.
            </p>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#1E293B', margin: 0 }}>
              Prioritising the core "All-in-One" system is essential. Avoiding feature creep will be critical to solving the main user pain point.
            </p>
          </div>
        </section>

        <Divider />

        {/* --- SECTION 15: THANK YOU --- */}
        <section style={{ textAlign: 'center', paddingBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionBadge>Thank You</SectionBadge>
          </div>
          
          <h2 style={{ fontFamily: "'Glyseric', serif", fontSize: '2.5rem', color: '#1E293B', margin: '2rem 0', lineHeight: '1.2' }}>
            "Thank you for your time. This analysis highlights a clear and exciting opportunity for DesignLink." 
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#0042D0', fontWeight: '600' }}>
            "I'm always open to feedback or conversation — feel free to connect!"
          </p>
        </section>

      </main>
    </div>
  );
};

export default DesignLinkCaseStudy;
