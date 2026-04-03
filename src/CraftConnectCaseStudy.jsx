import React from 'react';
import './CraftConnectCaseStudy.css';

const CraftConnectCaseStudy = () => {
  return (
    <div className="craft-connect-page">
      {/* ── NAV ── */}
      <nav>
        <span className="nav-name">Laveena Chetwaani</span>
        <div className="nav-links">
          <a href="#/">← Back to Home</a>
        </div>
      </nav>

      {/* ── HERO BANNER ── */}
      <div className="hero-banner">
        <div className="hero-pattern"></div>
        <svg className="hero-mandala" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1"/>
          <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="1"/>
          <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1"/>
          <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="1"/>
          <circle cx="200" cy="200" r="20" stroke="white" strokeWidth="1"/>
          <line x1="200" y1="20" x2="200" y2="380" stroke="white" strokeWidth="0.5"/>
          <line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.5"/>
          <line x1="73" y1="73" x2="327" y2="327" stroke="white" strokeWidth="0.5"/>
          <line x1="327" y1="73" x2="73" y2="327" stroke="white" strokeWidth="0.5"/>
          <line x1="137" y1="20" x2="263" y2="380" stroke="white" strokeWidth="0.3"/>
          <line x1="263" y1="20" x2="137" y2="380" stroke="white" strokeWidth="0.3"/>
          <line x1="20" y1="137" x2="380" y2="263" stroke="white" strokeWidth="0.3"/>
          <line x1="20" y1="263" x2="380" y2="137" stroke="white" strokeWidth="0.3"/>
          <circle cx="200" cy="20" r="4" fill="white"/>
          <circle cx="200" cy="380" r="4" fill="white"/>
          <circle cx="20" cy="200" r="4" fill="white"/>
          <circle cx="380" cy="200" r="4" fill="white"/>
          <circle cx="73" cy="73" r="4" fill="white"/>
          <circle cx="327" cy="73" r="4" fill="white"/>
          <circle cx="73" cy="327" r="4" fill="white"/>
          <circle cx="327" cy="327" r="4" fill="white"/>
        </svg>
        <div className="hero-content">
          <div className="hero-tag">UX Case Study · Android App</div>
          <div className="hero-title">CraftConnect<br/><em>Rajasthan</em></div>
          <div className="hero-subtitle">Connecting 20,000+ artisans directly to global customers — eliminating middlemen, preserving heritage</div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="num">20K+</span><span className="label">Target Artisans</span></div>
            <div className="hero-stat"><span className="num">60–70%</span><span className="label">Middleman Cut Eliminated</span></div>
            <div className="hero-stat"><span className="num">30%</span><span className="label">Income Increase Goal</span></div>
          </div>
        </div>
      </div>

      {/* ── PROJECT INTRO ── */}
      <div className="container">
      <section>
        <div className="project-intro">
          <div>
            <h1 className="project-title">Turning forgotten crafts into <em>thriving livelihoods</em></h1>
            <p className="overview-text"> Rajasthan's artisans — masters of blue pottery, tie-dye, block print, and miniature painting — have spent generations perfecting their craft. Yet today, middlemen capture 60–70% of profits while artisans struggle to earn a living wage. CraftConnect Rajasthan is a portfolio-first Android platform that gives artisans a direct digital storefront, verified identity, and transparent pricing — so their work can reach global customers without compromise. </p>
          </div>
          <div className="meta-block">
            <div className="meta-item"><label>My Role</label><span>UX Designer (End-to-End)</span></div>
            <div className="meta-item"><label>Platform</label><span>Android Mobile App</span></div>
            <div className="meta-item"><label>Focus Area</label><span>Artisan Empowerment & Trust Design</span></div>
            <div className="meta-item"><label>Tools</label><span>Figma, Miro, FigJam</span></div>
          </div>
        </div>
      </section>
      </div>

      {/* ── SCREEN CAROUSEL ── */}
      <div className="carousel-wrap">
        <div className="carousel-track">
          {/* Screen 1 */}
          <div className="carousel-screen">
            <div className="screen-mock s1">
              <div className="topbar"><span>9:41</span><span>▲▲■</span></div>
              <h4>Artisan Registration</h4>
              <p>Join 5,000+ verified artisans</p>
              <div className="avatar-upload">🧑🎨</div>
              <div className="field"><strong>Full Name / पूरा नाम</strong>Ram Lal Kumawat</div>
              <div className="field"><strong>Village / गाँव</strong>Sanganer, Jaipur</div>
              <div className="field"><strong>Select Your Craft</strong></div>
              <div className="craft-tags">
                <span className="tag active">Blue Pottery</span>
                <span className="tag">Block Print</span>
                <span className="tag">Tie-Dye</span>
                <span className="tag">Miniature</span>
              </div>
              <div className="wa-btn">✓ Verify via WhatsApp</div>
            </div>
          </div>
          {/* Screen 2 */}
          <div className="carousel-screen">
            <div className="screen-mock s2">
              <div className="header">📦 Add Your Product</div>
              <div className="photo-zone">📷<span>Upload Photo (Auto BG Remove)</span></div>
              <div className="price-row">
                <div className="price-box"><strong>₹1,200</strong>Your Price</div>
                <div className="price-box"><strong>₹2,800</strong>Suggested MRP</div>
              </div>
              <div className="story-box">✍️ Tell your craft story...<br/>"This vase took 3 days..."</div>
              <div className="field"><strong>Materials Used</strong>Kaolinite clay, natural dyes</div>
              <div className="field"><strong>Craft Technique</strong>Traditional Jaipur method</div>
              <div className="submit-btn">List Product →</div>
            </div>
          </div>
          {/* Screen 3 */}
          <div className="carousel-screen">
            <div className="screen-mock s3">
              <div className="prod-img">🏺</div>
              <div className="prod-info">
                <div className="prod-name">Jaipur Blue Pottery Vase</div>
                <div className="prod-craft">Blue Pottery · Jaipur</div>
                <div className="prod-price" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--terracotta)', marginBottom: '8px' }}>
                  ₹2,800 <span style={{ fontSize: '11px', color: '#999', fontWeight: '400' }}>Free Shipping</span>
                </div>
                <div className="artisan-row">
                  <div className="art-avatar">🧑🎨</div>
                  <div>
                    <div className="art-name">Ram Lal Kumawat</div>
                    <div className="art-loc">📍 Sanganer, Jaipur · 32 yrs exp</div>
                    <div className="verified">✓ Verified Artisan</div>
                  </div>
                </div>
                <div className="stars">★★★★★ <span style={{ fontSize: '9px', color: '#999' }}>4.9 (142 reviews)</span></div>
                <div className="buy-btn" style={{ marginTop: '8px' }}>Add to Cart</div>
              </div>
            </div>
          </div>
          {/* Screen 4 */}
          <div className="carousel-screen">
            <div className="screen-mock s4">
              <div className="header">🏆 Your Artisan Profile</div>
              <div className="badge-card">
                <div className="badge-icon">✅</div>
                <div><div className="badge-title">Verified Artisan Badge</div><div className="badge-sub">Certificate ID: RAJ-2024-1847</div></div>
              </div>
              <div className="cert-card">
                <div className="cert-title">🎨 Craft Authenticity Certificate</div>
                <div className="cert-id">Issued by: Rajasthan Craft Board · 2024</div>
              </div>
              <div className="stats-row">
                <div className="stat-box"><span className="stat-num">47</span><span className="stat-label">Products</span></div>
                <div className="stat-box"><span className="stat-num">312</span><span className="stat-label">Sales</span></div>
                <div className="stat-box"><span className="stat-num">4.9★</span><span className="stat-label">Rating</span></div>
              </div>
            </div>
          </div>
          {/* Screen 5 */}
          <div className="carousel-screen">
            <div className="screen-mock s5">
              <div className="top">
                <div className="search-bar">🔍 Search crafts, artisans, regions...</div>
                <div className="filter-chips">
                  <span className="chip active">All</span>
                  <span className="chip">Jaipur</span>
                  <span className="chip">Pottery</span>
                  <span className="chip">Textile</span>
                </div>
              </div>
              <div className="grid">
                <div className="prod-card"><div className="card-img" style={{ background: '#FFF3E8' }}>🏺</div><div className="card-info"><div className="card-name">Blue Pottery Bowl</div><div className="card-price">₹850</div><div className="card-city">Jaipur</div></div></div>
                <div className="prod-card"><div className="card-img" style={{ background: '#E8F4F0' }}>🧣</div><div className="card-info"><div className="card-name">Bandhani Dupatta</div><div className="card-price">₹1,400</div><div className="card-city">Jodhpur</div></div></div>
                <div className="prod-card"><div className="card-img" style={{ background: '#F5F0FF' }}>🖼️</div><div className="card-info"><div className="card-name">Miniature Art</div><div className="card-price">₹3,200</div><div className="card-city">Udaipur</div></div></div>
                <div className="prod-card"><div className="card-img" style={{ background: '#FFFBEA' }}>🛍️</div><div className="card-info"><div className="card-name">Block Print Tote</div><div className="card-price">₹680</div><div className="card-city">Sanganer</div></div></div>
              </div>
            </div>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="carousel-screen">
            <div className="screen-mock s1">
              <div className="topbar"><span>9:41</span><span>▲▲■</span></div>
              <h4>Artisan Registration</h4>
              <p>Join 5,000+ verified artisans</p>
              <div className="avatar-upload">🧑🎨</div>
              <div className="field"><strong>Full Name / पूरा नाम</strong>Ram Lal Kumawat</div>
              <div className="field"><strong>Village / गाँव</strong>Sanganer, Jaipur</div>
              <div className="field"><strong>Select Your Craft</strong></div>
              <div className="craft-tags">
                <span className="tag active">Blue Pottery</span>
                <span className="tag">Block Print</span>
                <span className="tag">Tie-Dye</span>
                <span className="tag">Miniature</span>
              </div>
              <div className="wa-btn">✓ Verify via WhatsApp</div>
            </div>
          </div>
          <div className="carousel-screen">
            <div className="screen-mock s2">
              <div className="header">📦 Add Your Product</div>
              <div className="photo-zone">📷<span>Upload Photo (Auto BG Remove)</span></div>
              <div className="price-row">
                <div className="price-box"><strong>₹1,200</strong>Your Price</div>
                <div className="price-box"><strong>₹2,800</strong>Suggested MRP</div>
              </div>
              <div className="story-box">✍️ Tell your craft story...</div>
              <div className="field"><strong>Materials Used</strong>Kaolinite clay, natural dyes</div>
              <div className="field"><strong>Craft Technique</strong>Traditional Jaipur method</div>
              <div className="submit-btn">List Product →</div>
            </div>
          </div>
          <div className="carousel-screen">
            <div className="screen-mock s3">
              <div className="prod-img">🏺</div>
              <div className="prod-info">
                <div className="prod-name">Jaipur Blue Pottery Vase</div>
                <div className="prod-craft">Blue Pottery · Jaipur</div>
                <div className="prod-price">₹2,800</div>
                <div className="artisan-row">
                  <div className="art-avatar">🧑🎨</div>
                  <div><div className="art-name">Ram Lal Kumawat</div><div className="verified">✓ Verified Artisan</div></div>
                </div>
                <div className="buy-btn" style={{ marginTop: '8px' }}>Add to Cart</div>
              </div>
            </div>
          </div>
          <div className="carousel-screen">
            <div className="screen-mock s4">
              <div className="header">🏆 Your Artisan Profile</div>
              <div className="badge-card">
                <div className="badge-icon">✅</div>
                <div><div className="badge-title">Verified Artisan Badge</div><div className="badge-sub">Certificate ID: RAJ-2024-1847</div></div>
              </div>
              <div className="cert-card">
                <div className="cert-title">🎨 Craft Authenticity Certificate</div>
                <div className="cert-id">Issued by: Rajasthan Craft Board</div>
              </div>
              <div className="stats-row">
                <div className="stat-box"><span className="stat-num">47</span><span className="stat-label">Products</span></div>
                <div className="stat-box"><span className="stat-num">312</span><span className="stat-label">Sales</span></div>
                <div className="stat-box"><span className="stat-num">4.9★</span><span className="stat-label">Rating</span></div>
              </div>
            </div>
          </div>
          <div className="carousel-screen">
            <div className="screen-mock s5">
              <div className="top">
                <div className="search-bar">🔍 Search crafts, artisans, regions...</div>
                <div className="filter-chips">
                  <span className="chip active">All</span>
                  <span className="chip">Jaipur</span>
                  <span className="chip">Pottery</span>
                </div>
              </div>
              <div className="grid">
                <div className="prod-card"><div className="card-img" style={{ background: '#FFF3E8' }}>🏺</div><div className="card-info"><div className="card-name">Blue Pottery Bowl</div><div className="card-price">₹850</div></div></div>
                <div className="prod-card"><div className="card-img" style={{ background: '#E8F4F0' }}>🧣</div><div className="card-info"><div className="card-name">Bandhani Dupatta</div><div className="card-price">₹1,400</div></div></div>
                <div className="prod-card"><div className="card-img" style={{ background: '#F5F0FF' }}>🖼️</div><div className="card-info"><div className="card-name">Miniature Art</div><div className="card-price">₹3,200</div></div></div>
                <div className="prod-card"><div className="card-img" style={{ background: '#FFFBEA' }}>🛍️</div><div className="card-info"><div className="card-name">Block Print Tote</div><div className="card-price">₹680</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p style={{ fontSize: '14px', color: 'var(--ink-light)', fontStyle: 'italic', marginTop: '-16px', marginBottom: '0' }}>5 core screens — Artisan Registration, Product Listing, Customer Discovery, Trust Profile, and Browse.</p>
      </div>

      <hr className="divider" />

      {/* ── PROJECT OVERVIEW ── */}
      <div className="container">
      <section className="problem-bg" style={{ borderRadius: '20px', padding: '60px', margin: '0' }}>
        <div className="badge">Project Overview</div>
        <p className="problem-text">Traditional platforms are <strong>failing Rajasthan's artisans</strong>. They are built for text-based product listings, which is the wrong tool for celebrating the visual richness and human stories behind handmade crafts. Middlemen currently capture <strong>60–70% of profits</strong>, while artisans with no digital presence remain invisible to the global market.</p>
        <p className="problem-text" style={{ marginBottom: '0' }}>This creates a frustrating, exploitative cycle. Our solution — <strong>CraftConnect Rajasthan</strong> — addresses three core problems:</p>
        <div className="pain-points">
          <div className="pain-card">
            <div className="pain-title">🔒 No Market Access</div>
            <div className="pain-desc">20,000+ artisans have no direct digital presence, making them entirely dependent on middlemen to sell their work.</div>
          </div>
          <div className="pain-card">
            <div className="pain-title">💰 Middleman Exploitation</div>
            <div className="pain-desc">Intermediaries take 60–70% commission while artisans earn only ₹8,000–20,000/month for highly skilled craft work.</div>
          </div>
          <div className="pain-card">
            <div className="pain-title">🌐 Trust Gap</div>
            <div className="pain-desc">Customers can't verify authenticity or connect with the artisan's story — reducing willingness to pay premium prices.</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" style={{ marginTop: '80px' }} />

      {/* ── DESIGN PROCESS ── */}
      <div className="container">
      <section>
        <div className="badge">Design Process</div>
        <h2 className="section-h2">A human-centered approach for a complex ecosystem</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-icon">🤝</div>
            <div className="step-title">Empathize</div>
            <div className="step-items">Problem Statement<br/>Project Goals<br/>Target Audience</div>
          </div>
          <div className="process-step">
            <div className="step-icon">🎯</div>
            <div className="step-title">Define</div>
            <div className="step-items">User Flows<br/>Site-Map<br/>User Stories</div>
          </div>
          <div className="process-step">
            <div className="step-icon">💡</div>
            <div className="step-title">Ideate</div>
            <div className="step-items">Wireframes<br/>Visual Design<br/>Prototyping</div>
          </div>
          <div className="process-step">
            <div className="step-icon">✏️</div>
            <div className="step-title">Design</div>
            <div className="step-items">Visual Concepts<br/>UI Kit<br/>Final Mockups</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── SECONDARY RESEARCH ── */}
      <div className="container">
      <section>
        <div className="badge">Secondary Research</div>
        <h2 className="section-h2">What did the existing landscape reveal?</h2>
        <p style={{ color: 'var(--ink-mid)', fontSize: '16px', maxWidth: '700px', marginBottom: '40px', lineHeight: '1.8' }}>Research into government platforms, existing marketplaces, and artisan community reports revealed six consistent, recurring pain points across the creative hiring and selling landscape.</p>
        <div className="card-grid">
          <div className="info-card">
            <div className="icon">📄</div>
            <div className="card-title">Text-First Platforms</div>
            <div className="card-text">Amazon Karigar and GeM treat crafts like commodities — no story, no visual richness.</div>
          </div>
          <div className="info-card">
            <div className="icon">🔗</div>
            <div className="card-title">Disconnected Tools</div>
            <div className="card-text">Artisans manage inventory on WhatsApp, sell through local fairs, and get paid via cash — no unified system.</div>
          </div>
          <div className="info-card">
            <div className="icon">⏳</div>
            <div className="card-title">Payment Delays</div>
            <div className="card-text">Government platforms take 45–90 days to settle payments, creating severe cash-flow problems.</div>
          </div>
          <div className="info-card">
            <div className="icon">📱</div>
            <div className="card-title">Tech Literacy Gap</div>
            <div className="card-text">Most artisans are WhatsApp users but unfamiliar with e-commerce interfaces and online listing flows.</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── PRIMARY RESEARCH ── */}
      <div className="container">
      <section>
        <div className="badge">Primary Research</div>
        <h2 className="section-h2">Voices from the craft clusters</h2>
        <p style={{ color: 'var(--ink-mid)', fontSize: '16px', maxWidth: '700px', marginBottom: '40px', lineHeight: '1.8' }}>Interviews with artisans from Jaipur's blue pottery clusters and customers from metro cities revealed four recurring frustrations that shaped the entire design direction.</p>
        <div className="quotes-grid">
          <div className="quote-card">
            <div className="quote-num">1</div>
            <div className="quote-text">"I make each piece with my hands for 3 days. By the time it reaches the shop, I get only ₹200. The shop sells it for ₹1,500."</div>
            <div className="quote-attr">— Ram Lal Kumawat, Blue Potter, Sanganer</div>
          </div>
          <div className="quote-card">
            <div className="quote-num">2</div>
            <div className="quote-text">"No one tells me when my product is sold or where it went. I feel like I'm shouting into an empty room."</div>
            <div className="quote-attr">— Geeta Devi, Bandhani Artisan, Jodhpur</div>
          </div>
          <div className="quote-card">
            <div className="quote-num">3</div>
            <div className="quote-text">"I want to buy authentic Rajasthani handicrafts but how do I know it's real? Any factory can print 'handmade' on a label."</div>
            <div className="quote-attr">— Priya Sharma, Customer, Delhi</div>
          </div>
          <div className="quote-card">
            <div className="quote-num">4</div>
            <div className="quote-text">"I use WhatsApp, Instagram, and a local fair. Three places to manage. I just want one app to handle everything."</div>
            <div className="quote-attr">— Suresh Meena, Block Printer, Bagru</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── USER PERSONAS ── */}
      <div className="container">
      <section>
        <div className="badge">User Personas</div>

        {/* Persona 1 */}
        <div className="persona-wrap">
          <div>
            <div className="persona-avatar artisan">🧑🎨</div>
            <div className="persona-quote">"Mera kaam sundar hai, but koi dekh nahi pata online."</div>
          </div>
          <div>
            <div className="persona-name">Ram Lal Kumawat</div>
            <div className="persona-tag">Artisan · 45 · Male · Sanganer, Jaipur</div>
            <div className="persona-bio">Ram Lal has been a blue pottery artisan for 28 years. He uses a basic Android phone primarily for WhatsApp and occasional YouTube. He has never listed a product online and relies entirely on a local wholesaler who takes 65% of the price.</div>
            <div className="persona-cols">
              <div className="persona-col">
                <h5>Goals</h5>
                <ul>
                  <li>Sell directly to customers without middlemen</li>
                  <li>Get paid on time through UPI</li>
                  <li>Have his craft story told to buyers</li>
                </ul>
              </div>
              <div className="persona-col">
                <h5>Frustrations</h5>
                <ul>
                  <li>No digital presence or skills</li>
                  <li>Payment delays of 2–3 months</li>
                  <li>Cannot communicate with end buyers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="divider" style={{ margin: '48px 0' }} />

        {/* Persona 2 */}
        <div className="persona-wrap">
          <div>
            <div className="persona-name">Priya Sharma</div>
            <div className="persona-tag">Customer · 28 · Female · Delhi</div>
            <div className="persona-bio">Priya is a design-conscious professional who loves decorating her home with authentic regional crafts. She has been burned by fake "handmade" products on generic e-commerce sites and now only trusts platforms that clearly show the artisan behind the product.</div>
            <div className="persona-cols">
              <div className="persona-col">
                <h5>Goals</h5>
                <ul>
                  <li>Find genuinely handmade, certified crafts</li>
                  <li>Know the artisan's story and process</li>
                  <li>Support rural livelihoods directly</li>
                </ul>
              </div>
              <div className="persona-col">
                <h5>Frustrations</h5>
                <ul>
                  <li>Can't verify product authenticity</li>
                  <li>No artisan context on current platforms</li>
                  <li>Premium prices with no transparency</li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="persona-avatar customer">👩💼</div>
            <div className="persona-quote" style={{ maxWidth: '200px', textAlign: 'center' }}>"I pay premium only when I trust the story."</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── COMPETITIVE ANALYSIS ── */}
      <div className="container">
      <section>
        <div className="badge">Competitive Analysis</div>
        <h2 className="section-h2">No single competitor solves the whole problem</h2>
        <p style={{ color: 'var(--ink-mid)', fontSize: '16px', maxWidth: '700px', marginBottom: '36px', lineHeight: '1.8' }}>The market is fragmented across three categories — portfolio platforms, generalist marketplaces, and government boards. None integrate artisan verification, storytelling, and real-time UPI settlement together.</p>
        <table className="comp-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th className="highlight-col">CraftConnect</th>
              <th>Amazon Karigar</th>
              <th>Craftsvilla</th>
              <th>India Handloom</th>
              <th>Jaypore</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Artisan Verification</td><td className="highlight-col check">✓</td><td className="cross">✗</td><td className="cross">✗</td><td className="dash">—</td><td className="cross">✗</td></tr>
            <tr><td>Artisan Story & Bio</td><td className="highlight-col check">✓</td><td className="cross">✗</td><td className="dash">—</td><td className="cross">✗</td><td className="check">✓</td></tr>
            <tr><td>WhatsApp Onboarding</td><td className="highlight-col check">✓</td><td className="cross">✗</td><td className="cross">✗</td><td className="cross">✗</td><td className="cross">✗</td></tr>
            <tr><td>Instant UPI Settlement</td><td className="highlight-col check">✓</td><td className="cross">✗</td><td className="cross">✗</td><td className="cross">✗</td><td className="cross">✗</td></tr>
            <tr><td>Hindi / Rajasthani UI</td><td className="highlight-col check">✓</td><td className="dash">—</td><td className="cross">✗</td><td className="dash">—</td><td className="cross">✗</td></tr>
            <tr><td>Commission Rate</td><td className="highlight-col">10–15%</td><td>25–30%</td><td>25%</td><td>Govt.</td><td>30%+</td></tr>
          </tbody>
        </table>
      </section>
      </div>

      <hr className="divider" />

      {/* ── DESIGN CHALLENGES ── */}
      <div className="container">
      <section>
        <div className="badge">Design Challenges</div>
        <h2 className="section-h2">Four tensions that shaped every design decision</h2>
        <div className="challenges">
          <div className="challenge-card">
            <div className="challenge-num">01</div>
            <div className="challenge-title">Artisan Tech Literacy</div>
            <div className="challenge-text">Many artisans have never used an app beyond WhatsApp and calls. Every screen had to be navigable without prior e-commerce experience — using voice guidance, Hindi labels, and visual-first flows.</div>
          </div>
          <div className="challenge-card">
            <div className="challenge-num">02</div>
            <div className="challenge-title">Building Customer Trust</div>
            <div className="challenge-text">Customers are skeptical of "handmade" labels on generic platforms. The solution required a verified artisan system, a craft certificate, and transparent pricing to justify premium cost.</div>
          </div>
          <div className="challenge-card">
            <div className="challenge-num">03</div>
            <div className="challenge-title">Visual Quality at Scale</div>
            <div className="challenge-text">Artisans don't have professional photography equipment. Auto background removal, guided lighting tips, and photo templates were designed into the product listing flow itself.</div>
          </div>
          <div className="challenge-card">
            <div className="challenge-num">04</div>
            <div className="challenge-title">Rural Logistics</div>
            <div className="challenge-text">Delivery to and from remote villages is complex. The solution used local pickup points, tiered shipping options, and a simple packaging guide displayed during checkout.</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── WIREFRAMES ── */}
      <div className="container">
      <section>
        <div className="badge">Wireframes</div>
        <h2 className="section-h2">From rough sketches to high-fidelity screens</h2>
        <p style={{ color: 'var(--ink-mid)', fontSize: '16px', marginBottom: '48px', lineHeight: '1.8' }}>Several iterations were developed, moving from low-fidelity sketches to mid-fidelity wireframes before arriving at polished final screens.</p>
        <div className="wireframe-row">
          {/* Sketching */}
          <div className="wf-item">
            <div className="wf-frame lf">
              <div className="wf-phone" style={{ fontFamily: 'monospace', gap: '6px', padding: '14px' }}>
                <div className="wf-bar" style={{ height: '10px', width: '60%', opacity: 0.4 }}></div>
                <div style={{ border: '1.5px dashed #CCC', height: '80px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>✏️</div>
                <div className="wf-bar" style={{ height: '8px', width: '80%', opacity: 0.3 }}></div>
                <div className="wf-bar" style={{ height: '8px', width: '60%', opacity: 0.25 }}></div>
                <div className="wf-bar" style={{ height: '8px', width: '70%', opacity: 0.3 }}></div>
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                  <div className="wf-bar" style={{ height: '22px', flex: 1, opacity: 0.2, borderRadius: '4px' }}></div>
                  <div className="wf-bar" style={{ height: '22px', flex: 1, opacity: 0.2, borderRadius: '4px' }}></div>
                </div>
                <div className="wf-bar" style={{ height: '30px', width: '100%', opacity: 0.15, borderRadius: '6px', marginTop: 'auto' }}></div>
              </div>
            </div>
            <div className="wf-label">Sketching</div>
          </div>
          {/* Mid-fi */}
          <div className="wf-item">
            <div className="wf-frame">
              <div className="wf-phone" style={{ background: '#F9F9F9', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 2px' }}>
                  <div className="wf-bar" style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#DDD' }}></div>
                  <div className="wf-bar" style={{ height: '10px', flex: 1, background: '#DDD', borderRadius: '4px' }}></div>
                </div>
                <div style={{ height: '100px', background: '#E8E8E8', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#AAA', fontSize: '11px' }}>Product Image</div>
                <div className="wf-bar" style={{ height: '10px', width: '70%', background: '#DDD', borderRadius: '3px' }}></div>
                <div className="wf-bar" style={{ height: '8px', width: '50%', background: '#DDD', borderRadius: '3px' }}></div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div className="wf-bar" style={{ background: '#DDD', borderRadius: '6px', padding: '8px', flex: 1, height: '40px' }}></div>
                  <div className="wf-bar" style={{ background: '#DDD', borderRadius: '6px', padding: '8px', flex: 1, height: '40px' }}></div>
                </div>
                <div className="wf-bar" style={{ background: '#E0E0E0', borderRadius: '8px', height: '36px', marginTop: 'auto' }}></div>
              </div>
            </div>
            <div className="wf-label">Mid-fidelity Wireframe</div>
          </div>
          {/* High-fi */}
          <div className="wf-item">
            <div className="wf-frame">
              <div className="screen-mock s3" style={{ height: '260px' }}>
                <div className="prod-img" style={{ height: '100px', fontSize: '36px' }}>🏺</div>
                <div className="prod-info" style={{ padding: '10px' }}>
                  <div className="prod-name">Jaipur Blue Pottery Vase</div>
                  <div className="prod-craft">Blue Pottery · Jaipur</div>
                  <div className="prod-price">₹2,800</div>
                  <div className="artisan-row">
                    <div className="art-avatar">🧑🎨</div>
                    <div><div className="art-name">Ram Lal Kumawat</div><div className="verified">✓ Verified Artisan</div></div>
                  </div>
                  <div className="buy-btn">Add to Cart</div>
                </div>
              </div>
            </div>
            <div className="wf-label">High-fidelity Mockup</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── SOLUTION FEATURES ── */}
      <div className="container">
      <section>
        <div className="badge">Core Solution Design</div>
        <h2 className="section-h2">Five features that eliminate the middleman</h2>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px' }}>
          <div className="solution-card">
            <div className="sol-num">FEATURE 01</div>
            <div className="sol-title">🧑🎨 Artisan Onboarding</div>
            <div className="sol-text">WhatsApp-verified registration with photo upload, craft category selection, and village location — all in Hindi/Rajasthani. Voice guidance available throughout.</div>
          </div>
          <div className="solution-card">
            <div className="sol-num">FEATURE 02</div>
            <div className="sol-title">📦 Guided Product Listing</div>
            <div className="sol-text">Auto background removal, price guidance showing market MRP, and a "craft story" prompt to add narrative — making every listing professional without expertise.</div>
          </div>
          <div className="solution-card">
            <div className="sol-num">FEATURE 03</div>
            <div className="sol-title">🔍 Customer Discovery</div>
            <div className="sol-text">Filter by craft type, region, price, and artisan rating. Rich product pages with artisan bios, process photos, and direct messaging capability.</div>
          </div>
          <div className="solution-card">
            <div className="sol-num">FEATURE 04</div>
            <div className="sol-title">✅ Trust & Verification</div>
            <div className="sol-text">Verified Artisan badge, Craft Authenticity Certificate issued by Rajasthan Craft Board, and publicly visible artisan history — building buyer confidence.</div>
          </div>
          <div className="solution-card">
            <div className="sol-num">FEATURE 05</div>
            <div className="sol-title">💸 Secure Payments</div>
            <div className="sol-text">UPI integration with instant settlement (vs. 45–90 day government delays). Transparent commission of only 10–15% vs. competitors' 25–30%.</div>
          </div>
          <div className="solution-card" style={{ background: 'linear-gradient(135deg,var(--saffron),var(--terracotta))', border: 'none' }}>
            <div className="sol-num" style={{ color: 'rgba(255,255,255,0.7)' }}>IMPACT</div>
            <div className="sol-title" style={{ color: 'white' }}>30% Artisan Income Increase</div>
            <div className="sol-text" style={{ color: 'rgba(255,255,255,0.8)' }}>By eliminating middlemen and enabling direct sales at full market price, artisans can increase monthly income from ₹12,000 to ₹18,000+.</div>
          </div>
        </div>
      </section>
      </div>

      {/* ── IMPACT METRICS ── */}
      <section className="metrics-bg" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-h2 metrics-title">Designed for measurable social impact</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <span className="metric-num">5,000+</span>
              <div className="metric-label">Artisan Registrations Target (Year 1)</div>
            </div>
            <div className="metric-card">
              <span className="metric-num">₹10Cr</span>
              <div className="metric-label">Monthly GMV Goal (6 months)</div>
            </div>
            <div className="metric-card">
              <span className="metric-num">70%</span>
              <div className="metric-label">Reduction in Middlemen Dependency</div>
            </div>
            <div className="metric-card">
              <span className="metric-num">30%</span>
              <div className="metric-label">Artisan Income Increase</div>
            </div>
            <div className="metric-card">
              <span className="metric-num">25%</span>
              <div className="metric-label">Endangered Crafts Preserved</div>
            </div>
            <div className="metric-card">
              <span className="metric-num">50K+</span>
              <div className="metric-label">Active Customers (Global)</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── COLOR PALETTE ── */}
      <div className="container">
      <section>
        <div className="badge">Color Palette</div>
        <p style={{ color: 'var(--ink-mid)', fontSize: '16px', maxWidth: '700px', marginBottom: '36px', lineHeight: '1.8' }}>The palette draws directly from Rajasthan's landscape — saffron sunsets, terracotta forts, sand dunes, and teal palace pools. Warm, trustworthy, and distinctly regional.</p>
        <div className="color-cards">
          <div className="color-card">
            <div className="color-swatch" style={{ background: '#E8621A' }}></div>
            <div className="color-info">
              <div className="color-hex">#E8621A</div>
              <div className="color-name">Rajasthan Saffron</div>
              <div className="color-use">Primary actions, badges, key highlights</div>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{ background: '#C4472A' }}></div>
            <div className="color-info">
              <div className="color-hex">#C4472A</div>
              <div className="color-name">Terracotta</div>
              <div className="color-use">Prices, alerts, accent emphasis</div>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{ background: '#F7F0E6', borderTop: '1px solid #EDD' }}></div>
            <div className="color-info">
              <div className="color-hex">#F7F0E6</div>
              <div className="color-name">Desert Sand</div>
              <div className="color-use">Backgrounds, card surfaces</div>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{ background: '#1A6E6E' }}></div>
            <div className="color-info">
              <div className="color-hex">#1A6E6E</div>
              <div className="color-name">Palace Teal</div>
              <div className="color-use">Trust badges, verified indicators</div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── TYPOGRAPHY ── */}
      <div className="container">
      <section>
        <div className="badge">Typography</div>
        <p style={{ color: 'var(--ink-mid)', fontSize: '16px', maxWidth: '680px', marginBottom: '36px', lineHeight: '1.8' }}>The typeface pairing needed to honor tradition while remaining crisp and legible on small Android screens used in bright sunlight. <strong style={{ color: 'var(--ink)' }}>Playfair Display</strong> brings editorial warmth to headings; <strong style={{ color: 'var(--ink)' }}>DM Sans</strong> ensures clear, accessible body reading at any size.</p>
        <div className="typo-cards">
          <div className="typo-card">
            <ul className="typo-scale">
              <li>Heading — Playfair Display Bold 24</li>
              <li>Sub-Heading — DM Sans Medium 18</li>
              <li>Body (Primary) — DM Sans SemiBold 16</li>
              <li>Body (Secondary) — DM Sans Regular 14</li>
              <li>Caption — DM Sans Regular 12</li>
            </ul>
          </div>
          <div className="typo-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
            <div className="font-display">Aa</div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--ink-mid)' }}>Playfair Display + DM Sans</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── LEARNINGS ── */}
      <div className="container">
      <section>
        <div className="badge">Learnings & Takeaways</div>
        <h2 className="section-h2">What this project taught me about designing for underserved users</h2>
        <div className="learning-cards">
          <div className="learning-card lc1">
            <div className="lc-icon">🔍</div>
            <div className="lc-text">The creative and artisan economy is <strong>deeply fragmented</strong>. Artisans use WhatsApp for orders, cash for payment, and local fairs for discovery — three separate systems that create daily friction and data loss. A truly unified platform is the actual unlock, not just better UI.</div>
          </div>
          <div className="learning-card lc2">
            <div className="lc-icon">🚀</div>
            <div className="lc-text">A major <strong>white space</strong> was identified: no competitor integrates artisan identity verification, guided product photography, real-time UPI settlement, and regional language support in a single app. This is the key differentiator and market opportunity for CraftConnect.</div>
          </div>
          <div className="learning-card lc3">
            <div className="lc-icon">⚖️</div>
            <div className="lc-text">Designing for <strong>low-tech users</strong> requires stripping away assumptions. Voice guidance, emoji-based navigation aids, and WhatsApp as the trust anchor completely changed how onboarding was structured. Simplicity here isn't aesthetic — it's a matter of inclusion.</div>
          </div>
        </div>
      </section>
      </div>

      <hr className="divider" />

      {/* ── CLOSING ── */}
      <div className="container">
      <section className="closing">
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>🙏</div>
        <h2 className="closing-title">Thank you for reading!</h2>
        <p className="closing-sub">CraftConnect Rajasthan represents a genuine opportunity to preserve cultural heritage while creating real economic uplift for 20,000+ artisans. I'm always open to feedback — feel free to connect.</p>
        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#/" style={{ background: 'var(--saffron)', color: 'white', textDecoration: 'none', padding: '14px 32px', borderRadius: '100px', fontWeight: '600', fontSize: '14px' }}>Back to Home Portfolio</a>
          <a href="mailto:contact@laveenachetwani.online" style={{ border: '1.5px solid var(--sand-dark)', color: 'var(--ink-mid)', textDecoration: 'none', padding: '14px 32px', borderRadius: '100px', fontWeight: '600', fontSize: '14px' }}>Get in Touch</a>
        </div>
      </section>
      </div>
    </div>
  );
};

export default CraftConnectCaseStudy;
