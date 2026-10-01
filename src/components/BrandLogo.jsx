import React from 'react';

const BrandLogo = ({ variant = 'full', className = '' }) => {
  const isCompact = variant === 'compact';
  const isIcon = variant === 'icon';

  const BulbIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
    >
      {/* Background circle / glow */}
      <circle cx="20" cy="20" r="20" fill="#FFC857" fillOpacity="0.1" />
      
      {/* Main Bulb Body */}
      <path
        d="M20 7C14.477 7 10 11.477 10 17C10 20.671 12.001 23.906 14.869 25.753C15.485 26.15 15.897 26.837 15.981 27.587L16.273 30.158C16.425 31.493 17.551 32.5 18.895 32.5H21.105C22.449 32.5 23.575 31.493 23.727 30.158L24.019 27.587C24.103 26.837 24.515 26.15 25.131 25.753C27.999 23.906 30 20.671 30 17C30 11.477 25.523 7 20 7Z"
        stroke="#FFC857"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFC857"
        fillOpacity="0.15"
      />
      
      {/* Base of the bulb */}
      <path
        d="M17 35.5H23M18.5 38.5H21.5"
        stroke="#1F2937"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Book / Leaf inside the bulb indicating learning */}
      <path
        d="M17 19C17 19 18.5 16 20 16C21.5 16 23 19 23 19C23 19 21.5 22 20 22C18.5 22 17 19 17 19Z"
        stroke="#4F8EF7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#4F8EF7"
      />

      {/* Sparks/Ideas around */}
      <path d="M12 11L14 13M28 11L26 13M20 5V8" stroke="#7C6CE4" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  if (isIcon) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <BulbIcon />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <BulbIcon />
      
      <div className="flex flex-col">
        <span className="font-heading font-bold text-xl text-primary leading-tight tracking-tight">
          Bright Minds
        </span>
        {!isCompact && (
          <span className="font-body text-[0.65rem] font-medium text-textMuted uppercase tracking-wider leading-none mt-0.5">
            Pre-Learning Skill Centre
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
