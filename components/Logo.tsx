import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 400 115"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Retubar Logo"
  >
    {/* Top accent line */}
    <path
      d="M2,25 h50 v-10 h60 v10 h60 v-10 h60 v10 h60 v-10 h60 v10 h48"
      stroke="#FBBF24" /* brand-yellow */
      strokeWidth="4"
      fill="none"
    />
    {/* Main Text */}
    <text
      x="50%"
      y="55"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Inter, sans-serif"
      fontWeight="900"
      fontSize="48"
      fill="#E2E8F0" /* brand-lightest-slate */
      letterSpacing="2"
    >
      RETUBAR
    </text>
    {/* Bottom accent line */}
    <path
      d="M2,80 h50 v10 h60 v-10 h60 v10 h60 v-10 h60 v10 h60 v-10 h48"
      stroke="#FBBF24" /* brand-yellow */
      strokeWidth="4"
      fill="none"
    />
    {/* Subtitle */}
    <text
      x="50%"
      y="102"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Inter, sans-serif"
      fontWeight="600"
      fontSize="16"
      fill="#94A3B8" /* brand-light-slate */
      letterSpacing="0.5"
    >
      Serviços Industriais Ltda
    </text>
  </svg>
);

export default Logo;
