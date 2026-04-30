import React from 'react';

const OliveLogo = ({ className = '' }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 4 C19 4 22 1 26 2 C26 2 23 5 19 6" fill="#6b8f2a" />
      <ellipse cx="19" cy="24" rx="14" ry="16" fill="#6b8f2a" />
      <ellipse cx="19" cy="22" rx="11" ry="13" fill="#7fa832" />
      <circle cx="15" cy="21" r="2.5" fill="#1a2e05" />
      <circle cx="23" cy="21" r="2.5" fill="#1a2e05" />
      <circle cx="15.8" cy="20.2" r="0.8" fill="white" />
      <circle cx="23.8" cy="20.2" r="0.8" fill="white" />
      <path d="M15 26 Q19 29.5 23 26" stroke="#1a2e05" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="12" cy="24" rx="2" ry="1.2" fill="#8fba3a" opacity="0.5" />
      <ellipse cx="26" cy="24" rx="2" ry="1.2" fill="#8fba3a" opacity="0.5" />
    </svg>
    <span
      style={{
        fontFamily: 'Nunito, sans-serif',
        fontWeight: 800,
        fontSize: '1.6rem',
        color: '#3d5c1a',
        letterSpacing: '-0.02em',
      }}
    >
      live
    </span>
  </div>
);

export default OliveLogo;