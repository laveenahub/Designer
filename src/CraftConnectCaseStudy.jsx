import React from 'react';

const CraftConnectCaseStudy = () => {
  return (
    <div className="craft-connect-page">
      <style dangerouslySetInnerHTML={{ __html: `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

.craft-connect-page {
  --saffron: #E8621A;
  --saffron-light: #F5A057;
  --terracotta: #C4472A;
  --sand: #F7F0E6;
  --sand-dark: #EDE4D4;
  --ink: #1A1208;
  --ink-mid: #4A3728;
  --ink-light: #7A6555;
  --gold: #D4A017;
  --teal: #1A6E6E;
  --white: #FFFFFF;
}

.craft-connect-page * { margin: 0; padding: 0; box-sizing: border-box; }

.craft-connect-page {
  background: var(--white);
  font-family: 'DM Sans', sans-serif;
  color: var(--ink);
  font-size: 16px;
  line-height: 1.7;
}

/* ── NAV ── */
.craft-connect-page nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--sand-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 60px;
}
.craft-connect-page .nav-name {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.3px;
}
.craft-connect-page .nav-links { display: flex; gap: 36px; }
.craft-connect-page .nav-links a {
  text-decoration: none;
  color: var(--ink-light);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: color 0.2s;
}
.craft-connect-page .nav-links a:hover { color: var(--saffron); }

/* ── LAYOUT ── */
.craft-connect-page .container { max-width: 1000px; margin: 0 auto; padding: 0 40px; }

.craft-connect-page section { padding: 80px 0; }

/* ── HERO BANNER ── */
.craft-connect-page .hero-banner {
  width: 100%;
  height: 480px;
  background: linear-gradient(135deg, #1A0A02 0%, #3D1A0A 30%, #E8621A 70%, #D4A017 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.craft-connect-page .hero-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(212,160,23,0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(232,98,26,0.2) 0%, transparent 40%),
    repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 41px);
}
.craft-connect-page .hero-mandala {
  position: absolute;
  width: 500px;
  height: 500px;
  right: -60px;
  top: -60px;
  opacity: 0.06;
}
.craft-connect-page .hero-content {
  position: relative;
  text-align: center;
  color: white;
  padding: 40px;
}
.craft-connect-page .hero-tag {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  color: #FFD580;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 24px;
}
.craft-connect-page .hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.craft-connect-page .hero-title em {
  font-style: italic;
  color: #FFD580;
}
.craft-connect-page .hero-subtitle {
  font-size: 17px;
  color: rgba(255,255,255,0.75);
  max-width: 520px;
  margin: 0 auto;
}
.craft-connect-page .hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 36px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.2);
}
.craft-connect-page .hero-stat .num {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #FFD580;
  display: block;
}
.craft-connect-page .hero-stat .label {
  font-size: 12px;
  color: rgba(255,255,255,0.65);
  letter-spacing: 0.5px;
}

/* ── PROJECT INTRO ── */
.craft-connect-page .project-intro {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 60px;
  align-items: start;
}
.craft-connect-page .project-title {
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}
.craft-connect-page .project-title em {
  font-style: italic;
  color: var(--saffron);
}
.craft-connect-page .overview-text {
  color: var(--ink-mid);
  font-size: 16px;
  line-height: 1.8;
}
.craft-connect-page .meta-block { display: flex; flex-direction: column; gap: 28px; padding-top: 8px; }
.craft-connect-page .meta-item label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--saffron);
  margin-bottom: 6px;
}
.craft-connect-page .meta-item span {
  font-size: 15px;
  color: var(--ink-mid);
}

/* ── SCREEN CAROUSEL ── */
.craft-connect-page .carousel-wrap {
  width: 100%;
  overflow: hidden;
  padding: 20px 0 32px;
}
.craft-connect-page .carousel-track {
  display: flex;
  gap: 20px;
  animation: scroll-left 30s linear infinite;
  width: max-content;
}
.craft-connect-page .carousel-track:hover { animation-play-state: paused; }
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.craft-connect-page .carousel-screen {
  width: 200px;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--sand-dark);
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  position: relative;
}
.craft-connect-page .screen-mock {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
/* SCREEN 1 — Artisan Registration */
.craft-connect-page .s1 { background: linear-gradient(180deg, #FFF8F2 0%, #FFF3E8 100%); padding: 16px; }
.craft-connect-page .s1 .topbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }
.craft-connect-page .s1 .topbar span { font-size:10px; color:#999; }
.craft-connect-page .s1 h4 { font-size:13px; font-weight:700; color:var(--ink); margin-bottom:4px; font-family:'Playfair Display',serif; }
.craft-connect-page .s1 p { font-size:9px; color:var(--ink-light); margin-bottom:14px; }
.craft-connect-page .s1 .avatar-upload {
  width:70px; height:70px; border-radius:50%; border:2px dashed var(--saffron);
  display:flex; align-items:center; justify-content:center; margin:0 auto 14px;
  background:#FFF3E8; font-size:22px;
}
.craft-connect-page .s1 .field {
  background:white; border-radius:8px; padding:8px 10px; margin-bottom:8px;
  border:1px solid #EDD; font-size:9px; color:#999;
}
.craft-connect-page .s1 .field strong { display:block; color:var(--ink); font-size:8px; margin-bottom:2px; }
.craft-connect-page .s1 .craft-tags { display:flex; flex-wrap:wrap; gap:4px; margin-bottom:10px; }
.craft-connect-page .s1 .tag {
  background:#FFF3E8; border:1px solid var(--saffron-light); color:var(--saffron);
  font-size:8px; padding:3px 8px; border-radius:100px;
}
.craft-connect-page .s1 .tag.active { background:var(--saffron); color:white; }
.craft-connect-page .s1 .wa-btn {
  background:#25D366; color:white; border-radius:8px; padding:9px;
  text-align:center; font-size:9px; font-weight:600; margin-top:6px;
}
/* SCREEN 2 — Product Listing */
.craft-connect-page .s2 { background:#FFF; padding:16px; }
.craft-connect-page .s2 .header { font-size:12px; font-weight:700; color:var(--ink); margin-bottom:12px; font-family:'Playfair Display',serif; }
.craft-connect-page .s2 .photo-zone {
  width:100%; height:130px; background:linear-gradient(135deg,#F5A05720,#E8621A20);
  border-radius:10px; border:1.5px dashed var(--saffron-light);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  font-size:22px; margin-bottom:10px;
}
.craft-connect-page .s2 .photo-zone span { font-size:8px; color:var(--saffron); margin-top:4px; }
.craft-connect-page .s2 .price-row { display:flex; gap:6px; margin-bottom:8px; }
.craft-connect-page .s2 .price-box {
  flex:1; background:#F7F0E6; border-radius:7px; padding:8px;
  font-size:8px; color:var(--ink-light);
}
.craft-connect-page .s2 .price-box strong { display:block; font-size:11px; color:var(--ink); }
.craft-connect-page .s2 .story-box {
  background:#FFFDF5; border:1px solid #EDD; border-radius:8px; padding:8px;
  font-size:8px; color:#999; margin-bottom:8px;
}
.craft-connect-page .s2 .submit-btn {
  background:var(--saffron); color:white; border-radius:8px; padding:9px;
  text-align:center; font-size:9px; font-weight:600;
}
/* SCREEN 3 — Product Page */
.craft-connect-page .s3 { background:#FFF; overflow:hidden; }
.craft-connect-page .s3 .prod-img {
  width:100%; height:160px;
  background:linear-gradient(135deg,#E8621A,#D4A017);
  display:flex; align-items:center; justify-content:center;
  font-size:48px;
}
.craft-connect-page .s3 .prod-info { padding:12px 14px; }
.craft-connect-page .s3 .prod-name { font-size:12px; font-weight:700; color:var(--ink); font-family:'Playfair Display',serif; }
.craft-connect-page .s3 .prod-craft { font-size:9px; color:var(--saffron); margin-bottom:6px; }
.craft-connect-page .s3 .prod-price { font-size:16px; font-weight:700; color:var(--terracotta); margin-bottom:8px; }
.craft-connect-page .s3 .artisan-row {
  display:flex; align-items:center; gap:8px; padding:8px;
  background:#FFF8F2; border-radius:8px; margin-bottom:8px;
}
.craft-connect-page .s3 .art-avatar {
  width:30px; height:30px; border-radius:50%;
  background:linear-gradient(135deg,var(--saffron),var(--gold));
  display:flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0;
}
.craft-connect-page .s3 .art-name { font-size:9px; font-weight:600; color:var(--ink); }
.craft-connect-page .s3 .art-loc { font-size:8px; color:var(--ink-light); }
.craft-connect-page .s3 .verified { font-size:8px; color:#25D366; font-weight:600; }
.craft-connect-page .s3 .stars { color:#F5A057; font-size:10px; }
.craft-connect-page .s3 .buy-btn {
  background:var(--saffron); color:white; border-radius:8px; padding:9px;
  text-align:center; font-size:9px; font-weight:600; margin-top:4px;
}
/* SCREEN 4 — Trust / Dashboard */
.craft-connect-page .s4 { background:#FFF; padding:14px; }
.craft-connect-page .s4 .header { font-size:12px; font-weight:700; color:var(--ink); margin-bottom:12px; font-family:'Playfair Display',serif; }
.craft-connect-page .s4 .badge-card {
  background:linear-gradient(135deg,#1A6E6E,#0D4444);
  border-radius:10px; padding:12px; color:white; margin-bottom:10px;
  display:flex; align-items:center; gap:10px;
}
.craft-connect-page .s4 .badge-icon { font-size:24px; }
.craft-connect-page .s4 .badge-title { font-size:10px; font-weight:700; }
.craft-connect-page .s4 .badge-sub { font-size:8px; opacity:0.75; }
.craft-connect-page .s4 .cert-card {
  background:#FFFDF5; border:1px solid #EDD; border-radius:8px; padding:10px;
  margin-bottom:8px;
}
.craft-connect-page .s4 .cert-title { font-size:9px; font-weight:700; color:var(--ink); margin-bottom:2px; }
.craft-connect-page .s4 .cert-id { font-size:8px; color:var(--ink-light); }
.craft-connect-page .s4 .stats-row { display:flex; gap:6px; }
.craft-connect-page .s4 .stat-box {
  flex:1; background:var(--sand); border-radius:8px; padding:8px; text-align:center;
}
.craft-connect-page .s4 .stat-num { font-size:16px; font-weight:700; color:var(--saffron); display:block; font-family:'Playfair Display',serif; }
.craft-connect-page .s4 .stat-label { font-size:7px; color:var(--ink-light); }
/* SCREEN 5 — Discovery / Browse */
.craft-connect-page .s5 { background:#FFF; padding:0; overflow:hidden; }
.craft-connect-page .s5 .top { padding:14px; }
.craft-connect-page .s5 .search-bar {
  background:#F5F5F5; border-radius:10px; padding:9px 12px;
  font-size:9px; color:#999; display:flex; align-items:center; gap:6px;
  margin-bottom:12px;
}
.craft-connect-page .s5 .filter-chips { display:flex; gap:6px; overflow:hidden; margin-bottom:12px; }
.craft-connect-page .s5 .chip {
  white-space:nowrap; background:var(--sand); border:1px solid #DDD;
  color:var(--ink-mid); font-size:8px; padding:4px 10px; border-radius:100px;
}
.craft-connect-page .s5 .chip.active { background:var(--saffron); color:white; border-color:var(--saffron); }
.craft-connect-page .s5 .grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:0 14px; }
.craft-connect-page .s5 .prod-card { border-radius:10px; overflow:hidden; background:var(--sand); }
.craft-connect-page .s5 .card-img {
  height:80px; display:flex; align-items:center; justify-content:center; font-size:28px;
}
.craft-connect-page .s5 .card-info { padding:7px; }
.craft-connect-page .s5 .card-name { font-size:8px; font-weight:600; color:var(--ink); }
.craft-connect-page .s5 .card-price { font-size:9px; color:var(--saffron); font-weight:700; }
.craft-connect-page .s5 .card-city { font-size:7px; color:var(--ink-light); }

/* ── BADGE ── */
.craft-connect-page .badge {
  display: inline-block;
  background: var(--saffron);
  color: white;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 7px 18px;
  border-radius: 6px;
  margin-bottom: 28px;
}

/* ── SECTION HEADINGS ── */
.craft-connect-page .section-h2 {
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 32px;
  color: var(--ink);
  letter-spacing: -0.3px;
}

/* ── ICON CARD GRID ── */
.craft-connect-page .card-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.craft-connect-page .card-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.craft-connect-page .card-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.craft-connect-page .info-card { padding: 28px 24px; }
.craft-connect-page .info-card .icon { font-size: 28px; margin-bottom: 14px; }
.craft-connect-page .info-card .card-title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
.craft-connect-page .info-card .card-text { font-size: 14px; color: var(--ink-light); line-height: 1.7; }

/* ── PROBLEM SECTION ── */
.craft-connect-page .problem-bg { background: var(--sand); }
.craft-connect-page .problem-text { font-size: 17px; color: var(--ink-mid); line-height: 1.85; margin-bottom: 28px; }
.craft-connect-page .problem-text strong { color: var(--terracotta); }
.craft-connect-page .pain-points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 36px;
}
.craft-connect-page .pain-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border-left: 4px solid var(--saffron);
}
.craft-connect-page .pain-card .pain-title { font-weight: 700; font-size: 15px; color: var(--ink); margin-bottom: 8px; }
.craft-connect-page .pain-card .pain-desc { font-size: 13px; color: var(--ink-light); line-height: 1.7; }

/* ── NUMBERED CHALLENGES ── */
.craft-connect-page .challenges { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.craft-connect-page .challenge-card { border-top: 2px solid var(--sand-dark); padding-top: 24px; }
.craft-connect-page .challenge-num { font-size: 52px; font-weight: 700; color: var(--sand-dark); line-height: 1; font-family: 'Playfair Display', serif; margin-bottom: 8px; }
.craft-connect-page .challenge-title { font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
.craft-connect-page .challenge-text { font-size: 14px; color: var(--ink-light); line-height: 1.75; }

/* ── PERSONA ── */
.craft-connect-page .persona-wrap { display: grid; grid-template-columns: 180px 1fr; gap: 48px; align-items: start; margin-bottom: 56px; }
.craft-connect-page .persona-wrap.reverse { grid-template-columns: 1fr 180px; }
.craft-connect-page .persona-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  border: 3px solid var(--saffron);
}
.craft-connect-page .persona-avatar.artisan { background: linear-gradient(135deg, #FFF3E8, #F5A057); }
.craft-connect-page .persona-avatar.customer { background: linear-gradient(135deg, #E8F4F0, #1A6E6E); }
.craft-connect-page .persona-quote {
  background: var(--sand);
  border-left: 3px solid var(--saffron);
  padding: 12px 16px;
  font-size: 13px;
  font-style: italic;
  color: var(--ink-mid);
  border-radius: 0 8px 8px 0;
  margin-top: 16px;
  max-width: 260px;
}
.craft-connect-page .persona-name { font-size: 20px; font-weight: 700; color: var(--ink); font-family: 'Playfair Display', serif; margin-bottom: 4px; }
.craft-connect-page .persona-tag { font-size: 13px; color: var(--saffron); font-weight: 600; margin-bottom: 16px; }
.craft-connect-page .persona-bio { font-size: 14px; color: var(--ink-mid); margin-bottom: 20px; line-height: 1.7; }
.craft-connect-page .persona-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.craft-connect-page .persona-col h5 { font-size: 12px; font-weight: 700; color: var(--saffron); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
.craft-connect-page .persona-col ul { list-style: none; }
.craft-connect-page .persona-col ul li { font-size: 13px; color: var(--ink-mid); padding: 4px 0; padding-left: 14px; position: relative; }
.craft-connect-page .persona-col ul li::before { content: '•'; position: absolute; left: 0; color: var(--saffron); }

/* ── COMPETITOR TABLE ── */
.craft-connect-page .comp-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
.craft-connect-page .comp-table th {
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  color: var(--saffron);
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 12px 16px;
  background: var(--sand);
  border-bottom: 2px solid var(--sand-dark);
}
.craft-connect-page .comp-table th:first-child { border-radius: 8px 0 0 0; }
.craft-connect-page .comp-table th:last-child { border-radius: 0 8px 0 0; }
.craft-connect-page .comp-table td {
  padding: 14px 16px;
  font-size: 14px;
  color: var(--ink-mid);
  border-bottom: 1px solid var(--sand-dark);
  vertical-align: middle;
}
.craft-connect-page .comp-table tr:hover td { background: #FFFAF5; }
.craft-connect-page .check { color: #22C55E; font-size: 16px; }
.craft-connect-page .cross { color: #EF4444; font-size: 16px; }
.craft-connect-page .dash { color: #9CA3AF; }
.craft-connect-page .highlight-col { font-weight: 700; color: var(--saffron); }

/* ── DESIGN PROCESS ── */
.craft-connect-page .process-steps { display: flex; align-items: flex-start; gap: 0; margin-top: 8px; }
.craft-connect-page .process-step { flex: 1; text-align: center; position: relative; }
.craft-connect-page .process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 28px;
  right: -50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--saffron), var(--saffron-light));
  z-index: 0;
}
.craft-connect-page .step-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--saffron), var(--saffron-light));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin: 0 auto 14px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 16px rgba(232,98,26,0.3);
}
.craft-connect-page .step-title { font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: 6px; }
.craft-connect-page .step-items { font-size: 11px; color: var(--ink-light); line-height: 1.8; }

/* ── WIREFRAMES ── */
.craft-connect-page .wireframe-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.craft-connect-page .wf-item { text-align: center; }
.craft-connect-page .wf-frame {
  border: 2px solid var(--sand-dark);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 14px;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
.craft-connect-page .wf-phone {
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
  min-height: 240px;
}
.craft-connect-page .wf-bar { background: var(--sand-dark); border-radius: 4px; }
.craft-connect-page .wf-label { font-size: 13px; color: var(--ink-light); font-weight: 500; }
/* Low-fi */
.craft-connect-page .lf { border-style: dashed; border-color: #CCC; background: #FAFAFA; }
.craft-connect-page .lf .wf-phone { opacity: 0.5; filter: grayscale(0.8); }

/* ── METRICS ── */
.craft-connect-page .metrics-bg { background: linear-gradient(135deg, #1A0A02 0%, #3D1A0A 100%); color: white; }
.craft-connect-page .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
.craft-connect-page .metric-card { text-align: center; padding: 32px 20px; background: rgba(255,255,255,0.06); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
.craft-connect-page .metric-num { font-family: 'Playfair Display', serif; font-size: 44px; font-weight: 700; color: #FFD580; display: block; line-height: 1; margin-bottom: 8px; }
.craft-connect-page .metric-label { font-size: 14px; color: rgba(255,255,255,0.7); }
.craft-connect-page .metrics-title { color: white; text-align: center; margin-bottom: 40px; }

/* ── SOLUTION CARDS ── */
.craft-connect-page .solution-card {
  background: white;
  border: 1px solid var(--sand-dark);
  border-radius: 16px;
  padding: 28px 24px;
  position: relative;
  transition: box-shadow 0.2s, transform 0.2s;
}
.craft-connect-page .solution-card:hover { box-shadow: 0 8px 32px rgba(232,98,26,0.12); transform: translateY(-2px); }
.craft-connect-page .sol-num {
  font-family: 'Playfair Display', serif;
  font-size: 13px;
  font-weight: 700;
  color: var(--saffron);
  letter-spacing: 1px;
  margin-bottom: 12px;
}
.craft-connect-page .sol-title { font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
.craft-connect-page .sol-text { font-size: 14px; color: var(--ink-light); line-height: 1.75; }

/* ── DIVIDER ── */
.craft-connect-page .divider { border: none; border-top: 1px solid var(--sand-dark); margin: 0; }

/* ── COLOR PALETTE ── */
.craft-connect-page .color-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.craft-connect-page .color-card { border: 1px solid var(--sand-dark); border-radius: 14px; overflow: hidden; }
.craft-connect-page .color-swatch { height: 100px; }
.craft-connect-page .color-info { padding: 16px; }
.craft-connect-page .color-hex { font-size: 12px; font-weight: 700; color: var(--ink); font-family: monospace; margin-bottom: 4px; }
.craft-connect-page .color-name { font-size: 13px; font-weight: 700; color: var(--saffron); margin-bottom: 6px; }
.craft-connect-page .color-use { font-size: 12px; color: var(--ink-light); line-height: 1.6; }

/* ── TYPOGRAPHY ── */
.craft-connect-page .typo-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.craft-connect-page .typo-card { border: 1px solid var(--sand-dark); border-radius: 14px; padding: 28px; }
.craft-connect-page .typo-scale { list-style: none; }
.craft-connect-page .typo-scale li { padding: 10px 0; border-bottom: 1px solid var(--sand-dark); font-size: 14px; color: var(--ink-mid); }
.craft-connect-page .typo-scale li:last-child { border: none; }
.craft-connect-page .font-display { font-family: 'Playfair Display', serif; font-size: 72px; color: var(--sand-dark); line-height: 1; margin-bottom: 8px; }

/* ── LEARNINGS ── */
.craft-connect-page .learning-cards { display: flex; flex-direction: column; gap: 20px; }
.craft-connect-page .learning-card { border-radius: 12px; padding: 28px 32px; display: flex; gap: 24px; align-items: flex-start; }
.craft-connect-page .learning-card.lc1 { background: var(--sand); }
.craft-connect-page .learning-card.lc2 { background: #FFF3E8; }
.craft-connect-page .learning-card.lc3 { background: #E8F4F0; }
.craft-connect-page .lc-icon { font-size: 28px; flex-shrink: 0; margin-top: 2px; }
.craft-connect-page .lc-text { font-size: 15px; color: var(--ink-mid); line-height: 1.8; }
.craft-connect-page .lc-text strong { color: var(--ink); }

/* ── CLOSING ── */
.craft-connect-page .closing { text-align: center; padding: 100px 0; }
.craft-connect-page .closing-title { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 700; color: var(--ink); margin-bottom: 16px; }
.craft-connect-page .closing-sub { font-size: 17px; color: var(--ink-light); max-width: 540px; margin: 0 auto; }

/* ── QUOTE CARDS ── */
.craft-connect-page .quotes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.craft-connect-page .quote-card {
  background: white;
  border: 1px solid var(--sand-dark);
  border-radius: 14px;
  padding: 28px 24px;
}
.craft-connect-page .quote-num {
  width: 28px; height: 28px; border-radius: 50%;
  background: var(--saffron); color: white;
  font-size: 12px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 14px;
}
.craft-connect-page .quote-text { font-size: 14px; color: var(--ink-mid); line-height: 1.8; font-style: italic; }
.craft-connect-page .quote-attr { margin-top: 10px; font-size: 12px; color: var(--ink-light); font-style: normal; font-weight: 600; }

/* Fade in */
@keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
.craft-connect-page .container { animation: fadeUp 0.6s ease both; }

` }} />

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
