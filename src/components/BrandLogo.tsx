import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'symbol';
  theme?: 'light' | 'dark';
  className?: string;
  size?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 36,
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#111111';
  const pillarColor = isDark ? '#FFFFFF' : '#111111';
  const domeColor = '#D91C35';

  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 753 712"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: size, width: (size * 753) / 712 }}
        className={`inline-block flex-shrink-0 ${className}`}
        aria-label="HumStack Logo Symbol"
      >
        {/* Red Dome */}
        <path d="M 0 340 C 0 152 168 0 376.5 0 C 585 0 753 152 753 340 Z" fill={domeColor} />
        {/* Three Pillars */}
        <rect x="86" y="390" width="136" height="322" rx="10" fill={pillarColor} />
        <rect x="311" y="390" width="136" height="322" rx="10" fill={pillarColor} />
        <rect x="536" y="390" width="136" height="322" rx="10" fill={pillarColor} />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official HumStack Minimalist Dome Symbol */}
      <svg
        viewBox="0 0 753 712"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: size, width: (size * 753) / 712 }}
        className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        <path d="M 0 340 C 0 152 168 0 376.5 0 C 585 0 753 152 753 340 Z" fill={domeColor} />
        <rect x="86" y="390" width="136" height="322" rx="10" fill={pillarColor} />
        <rect x="311" y="390" width="136" height="322" rx="10" fill={pillarColor} />
        <rect x="536" y="390" width="136" height="322" rx="10" fill={pillarColor} />
      </svg>

      {/* Editorial Wordmark */}
      <span
        className="font-heading font-extrabold tracking-tight leading-none text-2xl"
        style={{ color: textColor }}
      >
        Hum
        <span className="font-semibold" style={{ color: textColor }}>
          Stack
        </span>
        <span className="font-bold text-coral">.in</span>
      </span>
    </div>
  );
};
