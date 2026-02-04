
import React from 'react';

interface LogoProps {
  className?: string;
  hideText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-12", hideText = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-full aspect-square relative">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Signal Waves - Left */}
          <path d="M35 25C28 32 28 45 35 52" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28 18C18 28 18 49 28 59" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M21 11C8 24 8 53 21 66" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Signal Waves - Right */}
          <path d="M65 25C72 32 72 45 65 52" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M72 18C82 28 82 49 72 59" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M79 11C92 24 92 53 79 66" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" />

          {/* Tower Structure */}
          <path d="M50 20L35 85H65L50 20Z" stroke="#d4af37" strokeWidth="3" strokeLinejoin="round" />
          
          {/* Horizontal Rungs */}
          <line x1="43.5" y1="48" x2="56.5" y2="48" stroke="#d4af37" strokeWidth="3" />
          <line x1="39" y1="67" x2="61" y2="67" stroke="#d4af37" strokeWidth="3" />
          
          {/* Cross Braces */}
          <line x1="46" y1="35" x2="54" y2="48" stroke="#d4af37" strokeWidth="2" />
          <line x1="54" y1="35" x2="46" y2="48" stroke="#d4af37" strokeWidth="2" />
          
          <line x1="43.5" y1="48" x2="57" y2="67" stroke="#d4af37" strokeWidth="2" />
          <line x1="56.5" y1="48" x2="43" y2="67" stroke="#d4af37" strokeWidth="2" />

          <line x1="39" y1="67" x2="65" y2="85" stroke="#d4af37" strokeWidth="2" />
          <line x1="61" y1="67" x2="35" y2="85" stroke="#d4af37" strokeWidth="2" />

          {/* Top Circle */}
          <circle cx="50" cy="22" r="6" fill="#d4af37" />
        </svg>
      </div>
      {!hideText && (
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black tracking-tight text-gold font-serif">FS SERVIÇOS</span>
          <span className="text-[9px] tracking-[0.25em] text-gold/90 font-bold uppercase mt-1">Serviços em Telecomunicações</span>
        </div>
      )}
    </div>
  );
};
