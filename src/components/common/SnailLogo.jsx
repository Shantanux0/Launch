import React from 'react';

/**
 * Minimal snail mark: yellow disc with a spiral shell + eye stalks. Recognisable at 16px.
 */
export const SnailMark = ({ className = "h-10 w-10", dark = false }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <circle cx="32" cy="32" r="32" fill="#FAE100" />
    <path
      d="M14 44 C 14 40, 18 39, 24 39 L 40 39 C 44 39, 45 36, 45 32 C 45 27, 47 24, 50 24 C 53 24, 55 27, 55 31 C 55 39, 52 45, 46 45 L 16 45 Z"
      fill={dark ? "#232323" : "#fff"}
    />
    <circle cx="29" cy="30" r="11" fill="none" stroke={dark ? "#232323" : "#fff"} strokeWidth="3.4" />
    <path d="M29 30 m-5 0 a 5 5 0 1 0 5 -5" fill="none" stroke={dark ? "#232323" : "#fff"} strokeWidth="3" strokeLinecap="round" />
    <path d="M49 25 L 47 16 M 53 25 L 55 17" stroke={dark ? "#232323" : "#fff"} strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="47" cy="15" r="2.4" fill={dark ? "#232323" : "#fff"} />
    <circle cx="55.4" cy="16" r="2.4" fill={dark ? "#232323" : "#fff"} />
  </svg>
);

/**
 * Humstack Brand Icon: Lemon Yellow Dome Icon company logo
 */
export const HumstackIcon = ({ className = "h-9 w-9" }) => (
  <span className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 select-none ${className} ring-1.5 ring-black/10 shadow-sm`}>
    <img
      src="/img/lemon-yellow-dome-icon.png"
      alt="HumStack"
      className="w-full h-full object-contain rounded-full"
    />
  </span>
);

/**
 * Official Brand Logo:
 * HumStack icon + HumStack
 */
export const BrandLogo = () => (
  <span className="flex items-center gap-2.5 sm:gap-3 text-left select-none group" data-testid="brand-logo">
    <HumstackIcon className="h-9 w-9 md:h-11 md:w-11 transition-transform duration-300 group-hover:scale-105" />
    <span className="font-gilroy text-[20px] md:text-[23px] font-bold tracking-[0.04em] text-ly-black leading-none">
      HumStack
    </span>
  </span>
);

export const SnailLogo = () => (
  <span className="flex items-center gap-2.5 sm:gap-3 select-none group" data-testid="brand-logo-snail">
    <SnailMark className="h-9 w-9 md:h-11 md:w-11 transition-transform duration-300 group-hover:scale-105" />
    <span className="font-gilroy text-[20px] md:text-[23px] font-bold tracking-[0.04em] text-ly-black leading-none">
      HumStack
    </span>
  </span>
);

export default BrandLogo;

