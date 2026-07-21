import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 540 100" 
      className={className} 
      fill="none" 
      strokeWidth="9" 
      strokeLinecap="square" 
      strokeLinejoin="bevel"
    >
      {/* P - Black */}
      <path d="M15,15 L40,15 A 16.25 16.25 0 0 1 40 47.5 L15,47.5 L15,80" stroke="#000000" />
      {/* A - Orange */}
      <path d="M70,80 L95,15 L120,80" stroke="#F97316" />
      {/* V - Black */}
      <path d="M140,15 L165,80 L190,15" stroke="#000000" />
      {/* E - Orange */}
      <path d="M210,15 L250,15 M210,47.5 L240,47.5 M210,80 L250,80" stroke="#F97316" />
      {/* R - Black */}
      <path d="M270,47.5 L270,15 L295,15 A 16.25 16.25 0 0 1 295 47.5 Z M270,47.5 L310,80" stroke="#000000" />
      {/* A - Orange */}
      <path d="M340,80 L365,15 L390,80" stroke="#F97316" />
      {/* S - Black */}
      <path d="M445,15 L425,15 A 16.25 16.25 0 0 0 425 47.5 L 435 47.5 A 16.25 16.25 0 0 1 435 80 L 410 80" stroke="#000000" />
      {/* A - Orange */}
      <path d="M470,80 L495,15 L520,80" stroke="#F97316" />
    </svg>
  );
}
