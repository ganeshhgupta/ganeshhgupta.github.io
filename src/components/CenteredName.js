import React, { useState, useEffect } from 'react';
import './CenteredName.css';

const NAME = 'Ganesh Gupta';
const SUBTITLES = [
  { label: 'Agentic AI',        color: '#4285F4' }, // Google blue
  { label: 'Generative AI',     color: '#EA4335' }, // Google red
  { label: 'Machine Learning',  color: '#FBBC04' }, // Google yellow
  { label: 'Full-Stack',        color: '#34A853' }, // Google green
];

const CHAR_DELAY = 50; // 12 chars × 50 ms = ~600 ms total

const CenteredName = ({ nightMode, onReady }) => {
  const [typed, setTyped]           = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [floated, setFloated]       = useState(false);
  const [showSub, setShowSub]       = useState(false);
  const [subIdx, setSubIdx]         = useState(0);
  const [leaving, setLeaving]       = useState(false);

  // Phase 1: type the name
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(NAME.slice(0, i));
      if (i >= NAME.length) {
        clearInterval(id);
        setTimeout(() => setShowCursor(false), 180);
        setTimeout(() => {
          setFloated(true);
          setShowSub(true);
          if (onReady) onReady();
        }, 320);
      }
    }, CHAR_DELAY);
    return () => clearInterval(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Rotate subtitle every 2.4 s
  useEffect(() => {
    if (!showSub) return;
    const id = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setSubIdx(i => (i + 1) % SUBTITLES.length);
        setLeaving(false);
      }, 300);
    }, 2400);
    return () => clearInterval(id);
  }, [showSub]);

  const nameColor = nightMode ? '#ffffff' : '#000000';

  return (
    <div
      style={{
        // absolute so the element scrolls away with the page
        position: 'absolute',
        left: '50%',
        // 50vh = center of viewport (when page is at top); 10vh = near top after float
        top: floated ? '10vh' : '50vh',
        transform: floated ? 'translate(-50%, 0)' : 'translate(-50%, -50%)',
        transition: 'top 0.45s cubic-bezier(0.4, 0, 0.2, 1), transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 5,
        textAlign: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {/* Name */}
      <div
        style={{
          fontFamily: '"Raleway", serif',
          fontWeight: 400,
          fontSize: 'clamp(1.6rem, 8vw, 5rem)',
          color: nameColor,
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {typed}
        {showCursor && (
          <span
            style={{
              display: 'inline-block',
              width: '0.045em',
              height: '0.82em',
              backgroundColor: nameColor,
              marginLeft: '3px',
              verticalAlign: 'middle',
              animation: 'nameBlink 0.6s step-end infinite',
            }}
          />
        )}
      </div>

      {/* Rotating subtitle — 80% of name size, mixed case, Google colors */}
      {showSub && (
        <div
          key={subIdx}
          style={{
            fontFamily: '"Raleway", serif',
            fontWeight: 300,
            // 60% of the name's clamp
            fontSize: 'clamp(0.96rem, 4.8vw, 3rem)',
            color: SUBTITLES[subIdx].color,
            marginTop: '6px',
            letterSpacing: '0.04em',
            animation: leaving
              ? 'subtitleOut 0.3s ease forwards'
              : 'subtitleIn 0.35s ease forwards',
          }}
        >
          {SUBTITLES[subIdx].label}
        </div>
      )}
    </div>
  );
};

export default CenteredName;
