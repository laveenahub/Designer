import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ isScrolled, activeSection }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-expand when scrolled past hero
  useEffect(() => {
    if (isScrolled) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [isScrolled]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Determine avatar based on active section
  let avatarSrc = '/profile.jpg';
  if (activeSection === 'work') avatarSrc = '/1.jpg';
  if (activeSection === 'playground') avatarSrc = '/2.jpg';
  if (activeSection === 'contact') avatarSrc = '/3.jpg';

  // Navigation items
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Playground', href: '#/playground' },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1_DaxoUDhjx78x6eKOnqN8CNqCCWAeuUz/view?usp=drive_link', target: '_blank' },
    { name: 'Contact', href: '#contact' },
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
                    fontFamily: 'var(--font-body)',
                    opacity: 0.7,
                    whiteSpace: 'nowrap',
                    fontWeight: activeSection === item.name.toLowerCase() ? '700' : '400',
                    borderBottom: activeSection === item.name.toLowerCase() ? '1px solid #fff' : 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = 0.7}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          layout
          onClick={toggleExpand}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'pointer',
            flexShrink: 0,
            marginLeft: isExpanded ? '10px' : 'auto'
          }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? '✕' : '☰'}
        </motion.button>
      </motion.div>
    </div>
  );
}
