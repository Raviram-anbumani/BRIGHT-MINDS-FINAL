import React from 'react';
import logoImg from '../assets/images/bright-minds-logo-transparent.png';

const BrandLogo = ({ variant = 'full', className = '', invertText = false }) => {
  const isCompact = variant === 'compact';
  const isIcon = variant === 'icon';

  const BulbIcon = () => (
    <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
      <img 
        src={logoImg} 
        alt="Bright Minds Bulb Logo" 
        className="w-10 h-10 md:w-[50px] md:h-[50px] object-contain drop-shadow-sm"
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
    <div className={`flex items-center gap-3 md:gap-4 cursor-pointer group ${className}`}>
      <BulbIcon />
      
      <div className="flex flex-col">
        <span className={`font-brand font-semibold text-2xl md:text-[32px] leading-none tracking-wide pt-1 pb-1 ${invertText ? 'text-white' : 'text-primary'}`}>
          Bright Minds
        </span>
        {!isCompact && (
          <span className={`font-body text-[0.65rem] md:text-[13px] font-medium uppercase tracking-[0.15em] leading-none ${invertText ? 'text-[#B8C3D4]' : 'text-textMuted'}`}>
            Pre-Learning Skill Centre
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
