import { SnailMascot } from "./SnailMascot";

/* Footer scene: rolling hills, tree line, yellow meadow and the little house —
   the snail strolls across the meadow instead of flags and bicycles. */
const Tree = ({ x, y, rx, ry, c1, c2, cls }) => (
  <g className={cls} style={{ transformOrigin: `${x}px ${y + ry}px` }}>
    <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={c1} />
    <ellipse cx={x + rx * 0.25} cy={y + ry * 0.2} rx={rx * 0.7} ry={ry * 0.8} fill={c2} opacity="0.6" />
    <path d={`M${x} ${y + ry + 10} L ${x} ${y - ry * 0.4} M ${x} ${y} L ${x + rx * 0.4} ${y - ry * 0.4}`} stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
  </g>
);

export const FooterLandscape = ({ className = "" }) => (
  <div className="relative">
    <svg viewBox="0 0 1920 620" className={className} preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BEEBFB" />
          <stop offset="100%" stopColor="#9EDFF9" />
        </linearGradient>
        <linearGradient id="fhill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3DB07F" />
          <stop offset="100%" stopColor="#0E7B55" />
        </linearGradient>
        <linearGradient id="fmint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#62DCC6" />
          <stop offset="100%" stopColor="#36B895" />
        </linearGradient>
        <linearGradient id="fmeadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8D624" />
          <stop offset="100%" stopColor="#2E9B3E" />
        </linearGradient>
      </defs>
      <path d="M0 140 C 60 40, 200 20, 300 80 C 380 10, 560 0, 640 60 C 720 0, 900 10, 980 80 C 1060 20, 1200 20, 1280 80 C 1360 30, 1500 40, 1560 100 C 1640 40, 1800 30, 1920 90 L 1920 400 L 0 400 Z" fill="url(#fsky)" />
      <path d="M0 260 C 120 140, 260 120, 380 200 C 460 250, 560 330, 700 340 L 0 380 Z" fill="url(#fhill)" />
      <path d="M520 330 C 620 200, 760 150, 860 200 C 960 250, 1000 320, 1100 330 Z" fill="url(#fmint)" />
      <path d="M1500 300 C 1600 200, 1760 180, 1920 220 L 1920 340 L 1500 340 Z" fill="url(#fmint)" opacity="0.9" />
      <path d="M0 330 C 300 310, 700 320, 1000 330 C 1300 320, 1600 320, 1920 340 L 1920 380 L 0 380 Z" fill="#0F7A4E" />
      <Tree x={150} y={240} rx={60} ry={80} c1="#8BC34A" c2="#4CAF50" cls="tree-sway-1" />
      <Tree x={240} y={270} rx={48} ry={66} c1="#E5DB1C" c2="#9CCC3C" cls="tree-sway-2" />
      <Tree x={1520} y={230} rx={70} ry={100} c1="#E5DB1C" c2="#8BC34A" cls="tree-sway-1" />
      <Tree x={1840} y={190} rx={80} ry={120} c1="#8BC34A" c2="#3DA35D" cls="tree-sway-2" />
      {[820, 880, 940, 1000, 1060].map((x, i) => (
        <Tree key={x} x={x} y={300} rx={34} ry={42} c1={i % 2 ? "#3DB07F" : "#2C9C6A"} c2="#1B7F57" cls={`tree-sway-${(i % 2) + 1}`} />
      ))}
      <path d="M0 370 C 400 350, 900 360, 1920 350 L 1920 620 L 0 620 Z" fill="url(#fmeadow)" />
      <path d="M700 380 C 1000 372, 1300 378, 1600 376 L 1600 386 C 1300 390, 1000 388, 700 390 Z" fill="#FFF8D0" opacity="0.7" />
      <path d="M1600 350 L 1640 320 L 1760 320 L 1780 350 Z" fill="#6B2635" />
      <rect x="1610" y="350" width="160" height="22" fill="#FAE100" />
    </svg>
    <div className="absolute bottom-[14%] left-[42%] w-[90px] md:w-[150px] lg:w-[190px] footer-snail-walk">
      <SnailMascot className="w-full h-auto" trail testId="footer-landscape-snail" />
    </div>
  </div>
);

export default FooterLandscape;

