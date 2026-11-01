import React, { useMemo, useId } from "react";

// Archimedean spiral path for the shell pattern
const spiralPath = (cx, cy, turns, maxR) => {
  const pts = [];
  const steps = 220;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * turns * Math.PI * 2;
    const r = (maxR * i) / steps;
    pts.push(`${(cx + r * Math.cos(t + Math.PI)).toFixed(1)},${(cy + r * Math.sin(t + Math.PI)).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
};

/**
 * The humstack snail mascot.
 * `animated` enables blink / stalk wobble / squash-and-stretch breathing.
 * `trail` draws the shimmering slime trail behind it.
 * `interactive` allows clicking or hovering for cute reactions.
 */
export const SnailMascot = ({
  className = "",
  animated = true,
  trail = false,
  testId = "snail-mascot",
  style = {},
  onClick,
}) => {
  const uid = useId().replace(/:/g, "");
  const spiral = useMemo(() => spiralPath(172, 168, 3.1, 86), []);
  const g = (n) => `${n}-${uid}`;

  return (
    <svg
      viewBox="0 0 420 300"
      className={`${className} ${animated ? "snail-animated" : ""}`}
      style={style}
      role="img"
      aria-label="humstack snail mascot"
      data-testid={testId}
      onClick={onClick}
    >
      <defs>
        <linearGradient id={g("shell")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF27A" />
          <stop offset="45%" stopColor="#FAE100" />
          <stop offset="100%" stopColor="#E9B800" />
        </linearGradient>
        <radialGradient id={g("shellShade")} cx="0.35" cy="0.3" r="0.8">
          <stop offset="60%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#8A5A00" stopOpacity="0.22" />
        </radialGradient>
        <linearGradient id={g("body")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE9CF" />
          <stop offset="100%" stopColor="#F5D3B3" />
        </linearGradient>
        <linearGradient id={g("foot")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EDB98C" />
          <stop offset="100%" stopColor="#F6D2AE" />
        </linearGradient>
        <linearGradient id={g("trail")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#BFE8FF" stopOpacity="0" />
          <stop offset="100%" stopColor="#BFE8FF" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {trail && (
        <path
          className="snail-trail"
          d="M-180 284 C -110 280, -40 288, 40 284"
          stroke={`url(#${g("trail")})`}
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
        />
      )}

      {/* soft ground shadow */}
      <ellipse cx="215" cy="288" rx="190" ry="9" fill="#000" opacity="0.08" />

      <g className="snail-body">
        {/* body / foot */}
        <path
          d="M28 286 C 22 268, 70 258, 140 258 L 268 258 C 290 258, 296 236, 294 206 C 292 160, 308 136, 340 136 C 374 136, 392 164, 390 206 C 388 250, 372 286, 336 286 Z"
          fill={`url(#${g("body")})`}
        />
        <path d="M40 284 C 120 290, 260 290, 340 284" stroke={`url(#${g("foot")})`} strokeWidth="6" strokeLinecap="round" fill="none" />
        
        {/* body highlight */}
        <path d="M318 160 C 332 148, 356 148, 368 160" stroke="#fff" strokeOpacity="0.75" strokeWidth="6" strokeLinecap="round" fill="none" />

        {/* eye stalks */}
        <g className="snail-stalk snail-stalk-l">
          <path d="M322 150 C 318 120, 306 96, 300 70" stroke="#F5D3B3" strokeWidth="11" strokeLinecap="round" fill="none" />
          <g className="snail-eye">
            <circle cx="300" cy="64" r="20" fill="#fff" stroke="#F5D3B3" strokeWidth="1.5" />
            <circle className="snail-pupil" cx="304" cy="66" r="10.5" fill="#232323" />
            <circle cx="308" cy="61" r="3.8" fill="#fff" />
          </g>
        </g>
        <g className="snail-stalk snail-stalk-r">
          <path d="M352 150 C 356 120, 366 96, 370 72" stroke="#F5D3B3" strokeWidth="11" strokeLinecap="round" fill="none" />
          <g className="snail-eye">
            <circle cx="370" cy="66" r="20" fill="#fff" stroke="#F5D3B3" strokeWidth="1.5" />
            <circle className="snail-pupil" cx="374" cy="68" r="10.5" fill="#232323" />
            <circle cx="378" cy="63" r="3.8" fill="#fff" />
          </g>
        </g>

        {/* face cheeks and smile */}
        <ellipse cx="331" cy="214" rx="11" ry="6.5" fill="#FF9EA8" opacity="0.8" />
        <ellipse cx="381" cy="212" rx="7" ry="6" fill="#FF9EA8" opacity="0.8" />
        <path d="M344 214 C 350 226, 364 226, 370 213" stroke="#5A3A22" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* shell */}
        <g className="snail-shell">
          <circle cx="172" cy="168" r="104" fill={`url(#${g("shell")})`} />
          <circle cx="172" cy="168" r="104" fill={`url(#${g("shellShade")})`} />
          <path d={spiral} stroke="#C98F00" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.55" />
          <path d={spiral} stroke="#FFF6A8" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.75" transform="translate(-3 -3)" />
          <path d="M100 98 C 120 78, 150 68, 178 68" stroke="#fff" strokeOpacity="0.85" strokeWidth="9" strokeLinecap="round" fill="none" />
          <circle cx="96" cy="118" r="5" fill="#fff" opacity="0.8" />
          
          {/* tiny leaf riding on the shell */}
          <path d="M210 70 C 222 46, 252 44, 262 52 C 252 70, 230 80, 210 70 Z" fill="#2FB36B" />
          <path d="M212 69 C 228 62, 242 56, 258 53" stroke="#147A4A" strokeWidth="2" fill="none" />
        </g>
      </g>
    </svg>
  );
};

export default SnailMascot;

