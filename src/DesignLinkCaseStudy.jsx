import { useEffect } from 'react';

const DesignLinkCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#fff', 
      minHeight: '100vh', 
      color: 'var(--color-text-primary, #1A1A1A)', 
      fontFamily: "'Glyseric', 'Inter', sans-serif",
      padding: 0,
      margin: 0,
      cursor: 'default'
    }}>
      {/* Navigation - Minimal back link */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        padding: '1.5rem 2rem', 
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '0.5px solid rgba(0,0,0,0.05)'
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#/" style={{ 
            color: 'var(--color-primary, #0042D0)', 
            textDecoration: 'none', 
            fontWeight: '600', 
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ← Back
          </a>
          <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.15em', opacity: 0.4, color: 'var(--color-text-primary)' }}>CASE STUDY: DESIGNLINK</span>
        </div>
      </nav>

      <main style={{ 
        maxWidth: '860px', 
        margin: '0 auto', 
        padding: '10rem 2rem 8rem',
        boxSizing: 'border-box'
      }}>
        
        {/* 1. Hero Section — 2-column grid */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)', 
          gap: '4rem', 
          marginBottom: '8rem',
          alignItems: 'start'
        }}>
          <div>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', 
              lineHeight: '1.1', 
              fontWeight: '700', 
              margin: 0,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)'
            }}>
              DesignLink is a <span style={{ color: 'var(--color-primary, #0042D0)' }}>portfolio-first hiring platform</span> designed to connect creative talent and top employers with a totally new mobile experience.
            </h1>
          </div>
          <div style={{ paddingTop: '0.6rem' }}>
            <span style={{ 
              display: 'block', 
              fontSize: '0.7rem', 
              fontWeight: '800', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'var(--color-text-secondary)',
              marginBottom: '1rem' 
            }}>Project Overview</span>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              color: 'var(--color-text-secondary)',
              margin: 0 
            }}>
              Connecting designers with top employers without resume filtering, focusing instead on visual evidence of skill and professional impact.
            </p>
          </div>
        </section>

        {/* 2. Three Screen Mockups — 3-column grid */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1.5rem', 
          marginBottom: '10rem'
        }}>
          
          {/* Card 1: Home Screen (light blue bg #f0f4ff) */}
          <div style={{ 
            backgroundColor: '#f0f4ff', 
            borderRadius: '12px', 
            padding: '2rem 1.25rem',
            border: '0.5px solid rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Phone Frame */}
            <div style={{ 
              width: '100%', 
              maxWidth: '220px',
              aspectRatio: '9/18.5', 
              backgroundColor: '#fff', 
              borderRadius: '18px', 
              boxShadow: '0 12px 35px rgba(0,66,208,0.06)',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              border: '0.5px solid rgba(0,0,0,0.05)'
            }}>
              {/* Status Bar */}
              <div style={{ height: '24px', padding: '4px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '9px', fontWeight: '600' }}>
                <span>9:41</span>
                <span>📶 🪫</span>
              </div>
              
              {/* App Content */}
              <div style={{ padding: '0.8rem', flex: 1, textAlign: 'left', overflow: 'hidden' }}>
                {/* Logo */}
                <div style={{ color: 'var(--color-primary, #0042D0)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.8rem' }}>✦</div>
                
                {/* Search */}
                <div style={{ backgroundColor: '#f0f0f4', borderRadius: '8px', padding: '0.65rem', fontSize: '0.6rem', color: '#999', marginBottom: '1rem' }}>
                  Search jobs, companies, skills...
                </div>
                
                {/* Stats */}
                <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.2rem' }}>
                   <div style={{ backgroundColor: '#eef2ff', color: 'var(--color-primary, #0042D0)', padding: '3px 6px', borderRadius: '4px', fontSize: '0.52rem', fontWeight: '800' }}>247 Active Jobs</div>
                   <div style={{ backgroundColor: '#eefcf6', color: 'var(--color-accent-green, #2EAF77)', padding: '3px 6px', borderRadius: '4px', fontSize: '0.52rem', fontWeight: '800' }}>89 New Today</div>
                   <div style={{ backgroundColor: '#f5f3ff', color: 'var(--color-accent-purple, #7C6EE0)', padding: '3px 6px', borderRadius: '4px', fontSize: '0.52rem', fontWeight: '800' }}>1.2k Companies</div>
                </div>

                <div style={{ fontSize: '0.75rem', fontWeight: '800', marginBottom: '0.6rem', color: '#1A1A1A' }}>Featured Jobs</div>
                
                {/* Job Card */}
                <div style={{ border: '0.5px solid #f0f0f0', borderRadius: '8px', padding: '0.65rem', backgroundColor: '#fff' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#1A1A1A' }}>Senior UX Designer</div>
                  <div style={{ fontSize: '0.55rem', color: '#666', marginTop: '1px' }}>TechFlow Inc. · $120k–$150k</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', marginTop: '6px' }}>
                     <span style={{ fontSize: '0.45rem', backgroundColor: '#f5f5f7', padding: '1px 4px', borderRadius: '2px', fontWeight: '600' }}>Full-time</span>
                     <span style={{ fontSize: '0.45rem', backgroundColor: '#f5f5f7', padding: '1px 4px', borderRadius: '2px', fontWeight: '600' }}>Remote</span>
                     <span style={{ fontSize: '0.45rem', backgroundColor: '#f5f5f7', padding: '1px 4px', borderRadius: '2px', fontWeight: '600' }}>Senior</span>
                     <span style={{ fontSize: '0.45rem', backgroundColor: '#eefcf6', color: 'var(--color-accent-green, #2EAF77)', padding: '1px 4px', borderRadius: '2px', fontWeight: '800' }}>92% Match</span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div style={{ height: '44px', borderTop: '0.5px solid #f0f0f0', display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff', paddingBottom: '4px' }}>
                <span style={{ fontSize: '12px', color: '#0042D0' }}>🏠</span>
                <span style={{ fontSize: '12px', opacity: 0.15 }}>💼</span>
                <span style={{ fontSize: '12px', opacity: 0.15 }}>💬</span>
                <span style={{ fontSize: '12px', opacity: 0.15 }}>👤</span>
              </div>
            </div>

            {/* Below Phone Stats */}
            <div style={{ marginTop: '1.5rem' }}>
               <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: '#eefcf6', color: '#2EAF77', padding: '4px 10px', borderRadius: '20px', fontSize: '0.65rem', fontWeight: '800', marginBottom: '8px' }}>
                  <span style={{ width: '5px', height: '5px', backgroundColor: '#2EAF77', borderRadius: '50%' }}></span> Online
               </div>
               <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#0042D0', marginBottom: '4px' }}>designlink.com</div>
               <p style={{ fontSize: '0.7rem', color: '#666', margin: 0, lineHeight: '1.4', maxWidth: '160px' }}>
                 We have more than 100+ active jobs for creatives this year!
               </p>
            </div>
          </div>

          {/* Card 2: Status Screen (white bg) */}
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '12px', 
            padding: '2rem 1.25rem',
            border: '0.5px solid rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ 
              width: '100%', 
              maxWidth: '220px',
              aspectRatio: '9/18.5', 
              backgroundColor: '#fff', 
              borderRadius: '18px', 
              boxShadow: '0 15px 45px rgba(0,0,0,0.04)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              border: '0.5px solid #eee'
            }}>
              <div style={{ height: '24px', padding: '4px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '9px', fontWeight: '600' }}>
                <span>9:41</span>
                <span>🔋</span>
              </div>
              <div style={{ padding: '0.8rem', flex: 1 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#1A1A1A' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>←</span> Application Status
                </div>
                
                <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '0.8rem', marginBottom: '1.2rem', border: '0.5px solid #f0f0f0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#1A1A1A' }}>TechFlow Inc.</div>
                  <div style={{ fontSize: '0.55rem', color: '#666', marginTop: '1px' }}>Senior UI/UX Designer</div>
                  <div style={{ fontSize: '0.55rem', color: '#0042D0', marginTop: '1px', fontWeight: 'bold' }}>$85K–$120K</div>
                  <div style={{ fontSize: '0.55rem', color: '#aaa', marginTop: '8px' }}>Applied 5 days ago</div>
                </div>

                {/* Vertical Timeline */}
                <div style={{ position: 'relative', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                  <div style={{ position: 'absolute', left: '6px', top: '8px', bottom: '8px', width: '1px', backgroundColor: '#f0f0f0' }}></div>
                  
                  {/* Step 1 */}
                  <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-1.25rem', top: '2px', width: '7px', height: '7px', backgroundColor: '#2EAF77', borderRadius: '50%', zIndex: 1 }}></div>
                    <div style={{ fontSize: '0.68rem', fontWeight: '800', color: '#1A1A1A' }}>Application Submitted</div>
                    <div style={{ fontSize: '0.55rem', color: '#2EAF77', fontWeight: '700', marginTop: '1px' }}>Completed</div>
                  </div>

                  {/* Step 2 */}
                  <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-1.25rem', top: '2px', width: '7px', height: '7px', backgroundColor: '#2EAF77', borderRadius: '50%', zIndex: 1 }}></div>
                    <div style={{ fontSize: '0.68rem', fontWeight: '800', color: '#1A1A1A' }}>Application Under Review</div>
                    <div style={{ fontSize: '0.55rem', color: '#2EAF77', fontWeight: '700', marginTop: '1px' }}>Completed</div>
                  </div>

                  {/* Step 3 */}
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-1.25rem', top: '2px', width: '7px', height: '7px', backgroundColor: '#EF9F27', borderRadius: '50%', zIndex: 1 }}></div>
                    <div style={{ fontSize: '0.68rem', fontWeight: '800', color: '#1A1A1A' }}>Interview Scheduled</div>
                    <div style={{ fontSize: '0.55rem', color: '#EF9F27', fontWeight: '700', marginTop: '1px' }}>In Progress</div>
                  </div>
                </div>
              </div>

               {/* Bottom Nav Jobs Active */}
               <div style={{ height: '44px', borderTop: '0.5px solid #f0f0f0', display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#fff', paddingBottom: '4px' }}>
                <span style={{ fontSize: '12px', opacity: 0.15 }}>🏠</span>
                <span style={{ fontSize: '12px', color: '#0042D0', fontWeight: 'bold' }}>💼</span>
                <span style={{ fontSize: '12px', opacity: 0.15 }}>💬</span>
                <span style={{ fontSize: '12px', opacity: 0.15 }}>👤</span>
              </div>
            </div>
            
            <div style={{ marginTop: '1.5rem', color: '#aaa', fontSize: '0.7rem', fontWeight: '700' }}>
               [20+] real-time tracked applications
            </div>
          </div>

          {/* Card 3: Dark Mode Experience (dark #111 bg) */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '12px', 
            padding: '2rem 1.25rem',
            border: '0.5px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#fff'
          }}>
             <div style={{ 
              width: '100%', 
              maxWidth: '220px',
              aspectRatio: '9/18.5', 
              backgroundColor: '#000', 
              borderRadius: '18px', 
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1.5rem',
              border: '0.5px solid rgba(255,255,255,0.1)'
            }}>
              {/* App Icon */}
              <div style={{ width: '56px', height: '56px', backgroundColor: 'var(--color-primary, #0042D0)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '0.8rem', boxShadow: '0 8px 16px rgba(0,66,208,0.3)' }}>
                ✦
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.3rem' }}>DesignLink</div>
              <div style={{ fontSize: '0.6rem', opacity: 0.4, textAlign: 'center', maxWidth: '120px', lineHeight: '1.3' }}>Portfolio-first. Talent, unfiltered.</div>
              
              {/* App Grid (iOS style container) */}
              <div style={{ marginTop: '2.5rem', width: '100%', backgroundColor: '#1c1c1e', borderRadius: '15px', padding: '1.2rem 0.6rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                 {[
                   { icon: '✦', color: '#0042D0', label: 'DesignLink' },
                   { icon: '📷', color: '#333', label: 'Camera' },
                   { icon: '👤', color: 'transparent', label: 'Contacts', border: '1px solid #444' },
                   { icon: '☁️', color: '#0ea5e9', label: 'Weather' },
                   { icon: '📝', color: '#eab308', label: 'Notes' },
                   { icon: '➗', color: '#f97316', label: 'Calculator' }
                 ].map((app, i) => (
                   <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '28px', height: '28px', backgroundColor: app.color, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', border: app.border }}>
                        {app.icon}
                      </div>
                      <span style={{ fontSize: '6px', color: '#777', marginTop: '5px', fontWeight: '700' }}>{app.label}</span>
                   </div>
                 ))}
              </div>
            </div>
            
            <div style={{ marginTop: '1.5rem', opacity: 0.3, fontSize: '0.7rem', fontWeight: '800' }}>
               Dark mode experience
            </div>
          </div>

        </section>

        {/* 3. Context + Facts Section — 3-column with top border */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 0.8fr 1fr', 
          gap: '2rem', 
          paddingTop: '3rem',
          borderTop: '0.5px solid #eee'
        }}>
          {/* Left: Context */}
          <div>
            <span style={{ 
              display: 'block', 
              fontSize: '0.7rem', 
              fontWeight: '800', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'var(--color-primary, #0042D0)',
              marginBottom: '1rem' 
            }}>Key Task</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>Context</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-text-secondary)', margin: 0 }}>
                The current creative hiring landscape is fragmented. Designers are forced to jump between portfolio hosting sites, professional networking platforms, and complex application portals that often fail to value visual work and actual craftsmanship.
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--color-text-secondary)', margin: 0 }}>
                DesignLink bridges this gap by offering a singular mobile-first home where talent can showcase their portfolios, apply for roles, track statuses in real-time, and undergo verified skill assessments in one seamless app experience.
              </p>
            </div>
          </div>

          {/* Middle: Whitespace */}
          <div></div>

          {/* Right: Facts */}
          <div>
            <span style={{ 
              display: 'block', 
              fontSize: '0.7rem', 
              fontWeight: '800', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'var(--color-text-secondary)',
              marginBottom: '1.5rem' 
            }}>Facts</span>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>2025</span>
                  <span style={{ fontSize: '0.7rem', color: '#aaa', textTransform: 'uppercase', lineHeight: '1.2', fontWeight: '700', letterSpacing: '0.05em' }}>Year<br/>Founded</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>50k+</span>
                  <span style={{ fontSize: '0.7rem', color: '#aaa', textTransform: 'uppercase', lineHeight: '1.2', fontWeight: '700', letterSpacing: '0.05em' }}>Total<br/>Students</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>55+</span>
                  <span style={{ fontSize: '0.7rem', color: '#aaa', textTransform: 'uppercase', lineHeight: '1.2', fontWeight: '700', letterSpacing: '0.05em' }}>Countries</span>
               </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer Branding */}
      <footer style={{ paddingBottom: '5rem', textAlign: 'center' }}>
         <div style={{ fontSize: '0.7rem', opacity: 0.2, letterSpacing: '0.2em', fontWeight: '800', color: 'var(--color-text-primary)' }}>DESIGNLINK CASE STUDY • PRESENTATION 2024</div>
      </footer>
    </div>
  );
};

export default DesignLinkCaseStudy;
