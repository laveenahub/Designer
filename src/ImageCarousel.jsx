import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Pulling images 1 through 11 as per instructions
const images = Array.from({ length: 11 }, (_, i) => `/${i + 1}.jpg`);

const CARD_OFFSET = 15;
const SCALE_FACTOR = 0.05;

export default function ImageCarousel() {
  const [cards, setCards] = useState(images);
  
  // Auto-cycle when idle
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const first = newCards.shift();
        newCards.push(first);
        return newCards;
      });
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [cards]);

  const handleDragEnd = (event, info) => {
    // If dragged sufficiently horizontally
    if (Math.abs(info.offset.x) > 50 || Math.abs(info.offset.y) > 50) {
      setCards((prev) => {
        const newCards = [...prev];
        const first = newCards.shift();
        newCards.push(first);
        return newCards;
      });
    }
  };

  return (
    <div className="carousel-container" style={{ position: 'relative', width: '100%', maxWidth: '380px', aspectRatio: '3/4', margin: '0 auto' }}>
      {cards.map((src, index) => {
        const isFront = index === 0;
        const isVisible = index < 4;
        
        // Slight alternating rotation for depth
        const rotation = index === 0 ? 0 : index % 2 === 0 ? 4 : -4;

        if (!isVisible) return null;

        return (
          <motion.div
            key={src}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              backgroundColor: '#f5f5f5',
              boxShadow: isFront ? '0 20px 50px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.03)',
              transformOrigin: 'bottom center',
              cursor: isFront ? 'grab' : 'auto',
              overflow: 'hidden',
              willChange: 'transform'
            }}
            animate={{
              top: index * CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              rotate: rotation,
              zIndex: cards.length - index,
              opacity: 1 - (index * 0.15)
            }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={isFront ? { scale: 1.02 } : {}}
            whileTap={isFront ? { cursor: 'grabbing' } : {}}
            drag={isFront}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
          >
            <img 
              src={src} 
              alt={`Carousel Item ${src}`} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                pointerEvents: 'none',
                filter: isFront ? 'none' : 'blur(2px)' // Optional blur behind
              }} 
            />
          </motion.div>
        );
      })}
      <div style={{ position: 'absolute', bottom: '-40px', left: 0, right: 0, textAlign: 'center', color: '#999', fontSize: '0.85rem', fontFamily: 'var(--font-body)' }}>
        (Drag image to interact)
      </div>
    </div>
  );
}
