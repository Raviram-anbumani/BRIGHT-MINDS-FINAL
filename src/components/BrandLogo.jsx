import React from 'react';
import logoImg from '../assets/images/BM-transparent_LOGO.png';

const BrandLogo = ({ variant = 'full', className = '' }) => {
  const isCompact = variant === 'compact';
  const isIcon = variant === 'icon';

  const BulbIcon = () => (
    <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
      <img 
        src={logoImg} 
        alt="Bright Minds Bulb Logo" 
        className="w-10 h-10 object-contain drop-shadow-sm"
      />
    </div>
  );

  if (isIcon) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img 
          src={logoImg} 
          alt="Bright Minds Logo Icon" 
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <BulbIcon />
      
      <div className="flex flex-col">
        <span className="font-brand font-semibold text-2xl text-primary leading-none tracking-wide pt-1">
          Bright Minds
        </span>
        {!isCompact && (
          <span className="font-body text-[0.65rem] font-medium text-textMuted uppercase tracking-widest leading-none mt-1">
            Pre-Learning Skill Centre
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
