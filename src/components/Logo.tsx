import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Crisp Circular Smiley Badge */}
      <div
        className={`${currentSize} relative shrink-0 rounded-full shadow-md shadow-pink-500/10 transition-transform duration-300 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* White circular face with crisp subtle border */}
          <circle cx="256" cy="256" r="240" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="6" />

          {/* Left Eye: Fresh Light Green (#88D12A) */}
          <circle cx="166" cy="122" r="42" fill="#88D12A" />

          {/* Right Eye: Vibrant Hot Pink (#E61D79) */}
          <circle cx="346" cy="122" r="42" fill="#E61D79" />

          {/* Smile Mouth: Cheerful curved teal arc */}
          <path
            d="M 124 256 C 128 385, 384 385, 388 256"
            stroke="#00A896"
            strokeWidth="52"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-black tracking-tight leading-none text-2xl">
            <span className="text-pink-600">Ever</span>
            <span className="text-emerald-500">Smile</span>
            <span className="text-slate-800 ml-1.5 font-bold text-lg">Dental</span>
          </span>
          <span className="text-[11px] text-slate-500 font-medium tracking-wider uppercase mt-0.5">
            Garden City • Nairobi
          </span>
        </div>
      )}
    </div>
  );
};
