import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

export default function Navbar({ activeSection }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollYProgress } = useScroll();

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Always use profile image
  const avatarSrc = '/profile.jpg';

  // Navigation items capitalized, and Resume removed
  const navItems = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'PLAYGROUND', href: '#/playground' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: '30px',
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 9999,
      pointerEvents: 'none' // Allow clicking through outside
    }}>
      <motion.div
        layout
        initial={{ borderRadius: 999 }}
        animate={{
          width: isExpanded ? 'auto' : '180px',
          padding: isExpanded ? '10px 20px 10px 10px' : '10px 20px 10px 10px'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          borderRadius: 999,
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          pointerEvents: 'auto',
          minHeight: '60px',
          gap: '20px'
        }}
      >
        {/* Profile Section (always visible) */}
        <motion.div layout style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <img 
            src={avatarSrc} 
            alt="Laveena" 
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
            key={avatarSrc}
          />
          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: '500', lineHeight: 1 }}>Laveena</span>
              <span style={{ fontSize: '0.75rem', color: '#888' }}>Designer</span>
            </motion.div>
          )}
        </motion.div>

        {/* Navigation Links */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '24px', overflow: 'hidden' }}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.target || '_self'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-heading)',
                    opacity: 0.7,
                    whiteSpace: 'nowrap',
                    fontWeight: activeSection?.toLowerCase() === item.name.toLowerCase() ? '700' : '400',
                    borderBottom: activeSection?.toLowerCase() === item.name.toLowerCase() ? '1px solid #fff' : 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = 0.7}
                  onClick={() => setIsExpanded(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle / Progress Button */}
        <motion.button
          layout
          onClick={toggleExpand}
          style={{
            background: 'transparent',
            border: 'none', // Removed solid outline as we have SVG progress
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'pointer',
            flexShrink: 0,
            marginLeft: isExpanded ? '10px' : 'auto',
            position: 'relative'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? (
            <span style={{ fontSize: '1.2rem' }}>✕</span>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
              <motion.circle
                cx="12" cy="12" r="10"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}
