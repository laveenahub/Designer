import { useEffect } from 'react';

const DesignLinkCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = {
    container: {
      backgroundColor: '#FFFFFF',
      minHeight: '100vh',
      color: '#000000',
      fontFamily: "'Glyseric', serif",
      padding: 0,
      margin: 0,
      lineHeight: '1.6',
    },
    navLink: {
      color: '#000',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '10rem 2rem',
    },
    hero: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center',
      marginBottom: '36px',
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 6vw, 5rem)',
      lineHeight: '1.1',
      fontWeight: 'bold',
      marginBottom: '2rem',
      letterSpacing: '-0.03em',
    },
    heroSubtext: {
      fontSize: '1.25rem',
      maxWidth: '500px',
      opacity: 0.8,
    },
    section: {
      marginBottom: '36px',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      marginBottom: '3rem',
      borderBottom: '1px solid #000',
      display: 'inline-block',
      paddingBottom: '0.5rem',
    },
    grid12: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: '2rem',
    },
    card: {
      border: '1px solid #000',
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    metric: {
      fontSize: '5rem',
      fontWeight: 'bold',
      lineHeight: '1',
      marginBottom: '1rem',
    },
    divider: {
      height: '1px',
      backgroundColor: '#000',
      width: '100%',
      margin: '4rem 0',
      opacity: 0.2,
    },
    testimonial: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      fontSize: '2.5rem',
      fontStyle: 'italic',
      lineHeight: '1.4',
    },
    flowBlock: {
      padding: '2rem',
      border: '1px solid #000',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }
  };

  return (
    <div style={styles.container}>

      <main style={styles.main}>
        
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <div>
            <h1 style={styles.heroTitle}>DesignLink — <br />Connecting Design, Experience & Innovation</h1>
            <p style={styles.heroSubtext}>
              A professional social ecosystem designed to bridge the gap between emerging creative talent and leading industry opportunities through portfolio-first intelligence.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <img src="/hero.png" alt="Primary Interface" style={{ width: '100%', height: 'auto', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>01 / PROJECT OVERVIEW</h2>
          <div style={styles.grid12}>
            <div style={{ gridColumn: 'span 4' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>THE PROBLEM</h3>
              <p style={{ opacity: 0.7 }}>Creative hiring is fragmented. Resumes fail to convey visual competence, and portfolio sites lack standardized data for employers to filter talent effectively.</p>
            </div>
            <div style={{ gridColumn: 'span 4' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>THE GOAL</h3>
              <p style={{ opacity: 0.7 }}>Build a unified platform where portfolios are the primary currency, integrated with a verification system to streamline the hiring experience.</p>
            </div>
            <div style={{ gridColumn: 'span 4' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>MY ROLE</h3>
              <p style={{ opacity: 0.7 }}>Lead Product Designer focusing on UX Strategy, Information Architecture, and High-Fidelity Design Systems.</p>
            </div>
          </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>02 / DESIGN SHOWCASE</h2>
          <div style={styles.grid12}>
            <div style={{ gridColumn: 'span 12' }}>
              <img src="/home.png" alt="Home" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <img src="/Send assesment.png" alt="Send Assessment" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <img src="/job-details.png" alt="Job Details" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ gridColumn: 'span 8' }}>
              <img src="/candinate-profile.png" alt="Candidate Profile" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ gridColumn: 'span 4' }}>
               <img src="/messages.png" alt="Messages" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <img src="/applicant-list.png" alt="Applicant List" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <img src="/employer-flow.png" alt="Employer Flow" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>03 / THE PROCESS</h2>
          <div style={{ ...styles.grid12 }}>
            <div style={{ gridColumn: 'span 3', ...styles.flowBlock }}>
              <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>PHASE 01</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>RESEARCH</h4>
              <p style={{ fontSize: '0.85rem' }}>User interviews and competitive teardowns to identify market gaps.</p>
            </div>
            <div style={{ gridColumn: 'span 3', ...styles.flowBlock }}>
              <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>PHASE 02</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>DEFINE</h4>
              <p style={{ fontSize: '0.85rem' }}>Mapping user journeys and defining the core "Portfolio Intelligence" features.</p>
            </div>
            <div style={{ gridColumn: 'span 3', ...styles.flowBlock }}>
              <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>PHASE 03</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>DESIGN</h4>
              <p style={{ fontSize: '0.85rem' }}>Creating a scalable design system using strict accessibility guidelines.</p>
            </div>
            <div style={{ gridColumn: 'span 3', ...styles.flowBlock }}>
              <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>PHASE 04</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>TESTING</h4>
              <p style={{ fontSize: '0.85rem' }}>Iterating based on recruiter feedback and usability heuristics.</p>
            </div>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>04 / IMPACT</h2>
          <div style={styles.grid12}>
            <div style={{ gridColumn: 'span 6' }}>
              <div style={styles.metric}>92%</div>
              <p style={{ fontSize: '1.5rem', maxWidth: '400px' }}>Increase in hiring manager confidence when assessing visual skills.</p>
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <div style={styles.metric}>25%</div>
              <p style={{ fontSize: '1.5rem', maxWidth: '400px' }}>Reduced time-to-hire for junior creative roles through verified portfolios.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section style={styles.section}>
          <blockquote style={styles.testimonial}>
            "DesignLink didn't just give us portfolios; it gave us a language to understand design potential at scale."
          </blockquote>
          <p style={{ textAlign: 'center', marginTop: '2rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
            — SENIOR UX LEAD, DESIGNERRS ACADEMY
          </p>
        </section>

        {/* FEATURES SECTION */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>05 / SYSTEM FEATURES</h2>
          <div style={styles.grid12}>
            {[
              { title: 'Portfolio AI', desc: 'Summarizes key project outcomes into readable recruiter stats.' },
              { title: 'Smart Search', desc: 'Filter talent by specific visual styles, tools, or industry experience.' },
              { title: 'Task modules', desc: 'Integrated skill assessments that reside within the candidate profile.' },
              { title: 'Verified Badge', desc: 'A trust layer indicating the project was peer-reviewed or industry-backed.' }
            ].map((feature, i) => (
              <div key={i} style={{ gridColumn: 'span 3', border: '1px solid #eee', padding: '2rem', backgroundColor: '#fcfcfc' }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>{feature.title}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING SECTION */}
        <section style={{ ...styles.section, textAlign: 'center', marginBottom: '4rem' }}>
          <div style={styles.divider} />
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>Ready for the next link?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="#/" style={{ color: '#000', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid #000', paddingBottom: '0.5rem' }}>GET IN TOUCH</a>
            <a href="#work" style={{ color: '#000', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', textDecoration: 'none', opacity: 0.4 }}>VIEW MORE WORK</a>
          </div>
        </section>

      </main>
    </div>
  );
};

export default DesignLinkCaseStudy;
