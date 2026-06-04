import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  animated?: boolean;
  imgClassName?: string;
}

export default function Logo({ className = '', showSubtitle = true, animated = true, imgClassName = '' }: LogoProps) {
  return (
    <div id="clats-logo-container" className={`flex flex-col items-start ${className}`}>
      <div className="relative flex items-center group select-none">
        {/* Animated Cyber-Orb Aura background */}
        {animated && (
          <div className="absolute -inset-4 bg-teal-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        )}
        
        {/* Beautiful high fidelity logo image with transparent background */}
        <img
          src="/src/assets/images/clats_brand_logo_transparent_1780074814570.png"
          alt="CLATS - Children Learning AI Technology Solution"
          referrerPolicy="no-referrer"
          className={`h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] ${imgClassName}`}
        />
      </div>
    </div>
  );
}
