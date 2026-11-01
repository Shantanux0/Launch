/* Flat-gradient nature landscape, reinterpreting the reference hero backdrop
   (hills, sky-blue clouds, swaying trees, yellow field, little house) with
   snail-garden accents: drifting leaves, a mushroom and tiny flowers. */

const Tree = ({ x, y, w, h, c1, c2, sway = 1 }) => (
  <g className={`tree-sway tree-sway-${sway}`} style={{ transformOrigin: `${x}px ${y}px` }}>
    <defs>
      <linearGradient id={`t-${x}-${y}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={c1} />
        <stop offset="100%" stopColor={c2} />
      </linearGradient>
    </defs>
    <ellipse cx={x} cy={y - h / 2} rx={w / 2} ry={h / 2} fill={`url(#t-${x}-${y})`} />
    <path d={`M${x} ${y + 8} L ${x} ${y - h * 0.55} M ${x} ${y - h * 0.2} L ${x + w * 0.22} ${y - h * 0.45}`} stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
  </g>
);

export const NatureLandscape = ({ className = "" }) => (
  <svg viewBox="0 0 1920 700" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7FD3FB" />
        <stop offset="100%" stopColor="#BDEBFF" />
      </linearGradient>
      <linearGradient id="hillL" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#35C487" />
        <stop offset="100%" stopColor="#0D7A57" />
      </linearGradient>
      <linearGradient id="farHill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8FD9B0" />
        <stop offset="100%" stopColor="#5CBF8E" />
      </linearGradient>
      <linearGradient id="field" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#D8E000" />
        <stop offset="100%" stopColor="#FAE100" />
      </linearGradient>
      <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5DBB3A" />
        <stop offset="100%" stopColor="#1E9A45" />
      </linearGradient>
    </defs>

    {/* cloud-shaped sky */}
    <path d="M760 380 C 800 300, 900 300, 950 340 C 990 290, 1080 280, 1130 330 C 1170 250, 1250 230, 1300 280 C 1340 140, 1480 90, 1580 120 C 1700 150, 1760 220, 1790 300 C 1840 290, 1920 320, 1920 360 L 1920 560 L 760 560 Z" fill="url(#sky)" />
    <path d="M380 420 C 420 380, 480 370, 520 400 C 560 360, 640 350, 700 390 L 760 560 L 380 560 Z" fill="url(#sky)" />

    {/* distant hills */}
    <path d="M300 520 C 500 430, 700 470, 900 450 C 1100 430, 1300 470, 1500 440 C 1700 410, 1850 450, 1920 440 L 1920 600 L 300 600 Z" fill="url(#farHill)" opacity="0.9" />

    {/* tiny drifting leaves (replacing birds) */}
    <g className="leaf-drift">
      <path d="M980 300 c 8 -10 20 -10 24 -6 c -6 10 -18 12 -24 6 z" fill="#2FB36B" />
      <path d="M1100 320 c 6 -8 16 -8 19 -5 c -5 8 -14 10 -19 5 z" fill="#7BCB3A" />
      <path d="M1040 280 c 5 -6 12 -6 15 -4 c -4 6 -11 8 -15 4 z" fill="#2FB36B" />
    </g>

    {/* big left hill */}
    <path d="M0 330 C 200 300, 420 320, 560 560 L 560 620 L 0 620 Z" fill="url(#hillL)" />
    <path d="M0 400 C 120 380, 220 420, 300 560 L 0 600 Z" fill="#13865F" opacity="0.6" />

    <Tree x={1270} y={540} w={140} h={210} c1="#38B37E" c2="#0B6B4C" sway={1} />
    <Tree x={1185} y={555} w={100} h={140} c1="#4CC08A" c2="#0F7A57" sway={2} />
    <Tree x={265} y={640} w={70} h={110} c1="#47B98A" c2="#0D6E50" sway={2} />
    <Tree x={315} y={650} w={50} h={70} c1="#FFD54A" c2="#F28C1E" sway={1} />

    {/* yellow field + ground */}
    <path d="M560 600 C 900 580, 1400 570, 1920 560 L 1920 640 L 560 640 Z" fill="url(#field)" />
    <path d="M0 620 C 500 600, 1200 610, 1920 630 L 1920 700 L 0 700 Z" fill="url(#ground)" />
    <path d="M1300 640 C 1500 630, 1700 632, 1920 628 L 1920 650 C 1700 652, 1500 650, 1300 640 Z" fill="#0E6B4A" opacity="0.8" />

    {/* little house */}
    <path d="M30 640 L 70 600 L 240 600 L 225 640 Z" fill="#6B2635" />
    <rect x="42" y="640" width="185" height="16" fill="#FAE100" />
    <rect x="42" y="652" width="185" height="6" fill="#E3C600" />

    {/* garden accents: mushroom + flowers */}
    <g>
      <rect x="455" y="640" width="10" height="20" rx="4" fill="#FFF3E0" />
      <path d="M440 644 C 440 624, 480 624, 480 644 Z" fill="#F26B5B" />
      <circle cx="452" cy="635" r="3" fill="#fff" />
      <circle cx="466" cy="633" r="2.5" fill="#fff" />
    </g>
    {[[700, 668], [760, 676], [1500, 672], [1620, 680]].map(([x, y]) => (
      <g key={`${x}-${y}`}>
        <path d={`M${x} ${y} L ${x} ${y + 14}`} stroke="#147A4A" strokeWidth="2" />
        <circle cx={x} cy={y} r="5" fill="#fff" />
        <circle cx={x} cy={y} r="2.2" fill="#FAE100" />
      </g>
    ))}
  </svg>
);

export default NatureLandscape;

