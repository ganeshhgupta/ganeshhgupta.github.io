import React from 'react';

const NAME = 'Ganesh Gupta';
const ROLE = 'Software Engineer — AI Systems & Infrastructure';

const CenteredName = ({ nightMode }) => {
  const nameColor = nightMode ? '#EDEEF2' : '#14171F';
  const roleColor = nightMode ? '#9AA0AC' : '#565B66';

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '18vh',
        transform: 'translate(-50%, 0)',
        zIndex: 5,
        textAlign: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
        width: '100%',
        padding: '0 24px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(2rem, 7vw, 3.4rem)',
          color: nameColor,
          letterSpacing: '-0.01em',
        }}
      >
        {NAME}
      </div>
      <div
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 400,
          fontSize: 'clamp(0.72rem, 2.1vw, 0.95rem)',
          color: roleColor,
          marginTop: '10px',
          letterSpacing: '0.02em',
        }}
      >
        {ROLE}
      </div>
    </div>
  );
};

export default CenteredName;
