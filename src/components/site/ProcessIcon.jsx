/* Small garden icons for each process step — same flat-gradient family as the mascot. */
export const ProcessIcon = ({ name, className = "w-20 h-20" }) => {
  const icons = {
    dew: (
      <>
        <path d="M40 10 C 52 28, 60 40, 60 50 A 20 20 0 0 1 20 50 C 20 40, 28 28, 40 10 Z" fill="#BFE8FF" />
        <path d="M30 48 C 30 42, 33 38, 36 35" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
      </>
    ),
    sprout: (
      <>
        <path d="M40 70 L 40 40" stroke="#147A4A" strokeWidth="4" strokeLinecap="round" />
        <path d="M40 44 C 22 46, 14 32, 16 22 C 30 22, 40 30, 40 44 Z" fill="#3CC48A" />
        <path d="M40 38 C 54 40, 66 30, 66 16 C 50 14, 40 24, 40 38 Z" fill="#7BCB3A" />
        <ellipse cx="40" cy="72" rx="18" ry="4" fill="#8B5E34" opacity="0.5" />
      </>
    ),
    mushroom: (
      <>
        <rect x="33" y="40" width="14" height="28" rx="6" fill="#FFF3E0" />
        <path d="M12 44 C 12 18, 68 18, 68 44 Z" fill="#F26B5B" />
        <circle cx="30" cy="32" r="4" fill="#fff" />
        <circle cx="48" cy="28" r="3" fill="#fff" />
        <circle cx="56" cy="38" r="2.5" fill="#fff" />
      </>
    ),
    clover: (
      <>
        <path d="M22 40 C 8 30, 18 12, 34 22 C 34 30, 30 38, 22 40 Z" fill="#147A4A" />
        <path d="M44 52 C 52 40, 72 40, 72 52 C 64 62, 52 62, 44 52 Z" fill="#7BCB3A" />
        <path d="M30 40 C 38 46, 40 56, 34 66" stroke="#147A4A" strokeWidth="3" fill="none" strokeLinecap="round" />
      </>
    ),
    shell: (
      <>
        <circle cx="40" cy="40" r="26" fill="#FAE100" />
        <path d="M40 40 m-6 0 a 6 6 0 1 0 6 -6 a 12 12 0 1 1 -12 12 a 18 18 0 1 0 18 -18" stroke="#C98F00" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M22 26 C 28 18, 36 16, 42 16" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
      </>
    ),
    flower: (
      <>
        <path d="M40 46 L 40 74" stroke="#147A4A" strokeWidth="3.5" strokeLinecap="round" />
        {[0, 72, 144, 216, 288].map((r) => (
          <ellipse key={r} cx="40" cy="22" rx="9" ry="14" fill="#fff" stroke="#F2F2F2" transform={`rotate(${r} 40 36)`} />
        ))}
        <circle cx="40" cy="36" r="8" fill="#FAE100" />
      </>
    ),
    sparkle: (
      <>
        <path d="M40 10 C 42 30, 50 38, 70 40 C 50 42, 42 50, 40 70 C 38 50, 30 42, 10 40 C 30 38, 38 30, 40 10 Z" fill="#FAE100" />
        <path d="M64 14 C 65 20, 68 23, 74 24 C 68 25, 65 28, 64 34 C 63 28, 60 25, 54 24 C 60 23, 63 20, 64 14 Z" fill="#BFE8FF" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      {icons[name]}
    </svg>
  );
};

export default ProcessIcon;

