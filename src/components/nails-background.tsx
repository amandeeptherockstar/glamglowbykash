import { cn } from "@/lib/utils";

type Nail = {
  left: string;
  top: string;
  size: number;
  from: string;
  to: string;
  dur: number;
  spin: number;
  delay: number;
  peak: number;
};

/* Deterministic layout (no Math.random) so SSR and client markup match. */
const NAILS: Nail[] = [
  { left: "6%", top: "18%", size: 46, from: "#f7b9d8", to: "#c084fc", dur: 24, spin: 11, delay: 0, peak: 0.8 },
  { left: "16%", top: "62%", size: 34, from: "#a78bfa", to: "#7c3aed", dur: 27, spin: 9, delay: 3, peak: 0.7 },
  { left: "27%", top: "30%", size: 58, from: "#f0abfc", to: "#a855f7", dur: 21, spin: 13, delay: 6, peak: 0.85 },
  { left: "38%", top: "74%", size: 40, from: "#bae6fd", to: "#a78bfa", dur: 26, spin: 8, delay: 1.5, peak: 0.65 },
  { left: "48%", top: "14%", size: 30, from: "#fbcfe8", to: "#c084fc", dur: 29, spin: 10, delay: 9, peak: 0.6 },
  { left: "57%", top: "52%", size: 52, from: "#d8b4fe", to: "#7c3aed", dur: 22, spin: 12, delay: 4.5, peak: 0.85 },
  { left: "66%", top: "26%", size: 38, from: "#f5d0fe", to: "#9333ea", dur: 25, spin: 9, delay: 7.5, peak: 0.7 },
  { left: "74%", top: "70%", size: 44, from: "#c4b5fd", to: "#8b5cf6", dur: 23, spin: 11, delay: 2, peak: 0.75 },
  { left: "83%", top: "40%", size: 56, from: "#f9a8d4", to: "#a21caf", dur: 20, spin: 14, delay: 5.5, peak: 0.8 },
  { left: "90%", top: "16%", size: 32, from: "#ddd6fe", to: "#7c3aed", dur: 28, spin: 8, delay: 10, peak: 0.6 },
  { left: "93%", top: "66%", size: 42, from: "#f0abfc", to: "#9333ea", dur: 24, spin: 12, delay: 8, peak: 0.72 },
  { left: "10%", top: "88%", size: 36, from: "#bfdbfe", to: "#a78bfa", dur: 30, spin: 9, delay: 6.5, peak: 0.6 },
  { left: "45%", top: "92%", size: 48, from: "#f5d0fe", to: "#c026d3", dur: 21, spin: 13, delay: 3.8, peak: 0.7 },
  { left: "70%", top: "6%", size: 34, from: "#fbcfe8", to: "#8b5cf6", dur: 26, spin: 10, delay: 11, peak: 0.6 },
];

function NailShape({ from, to, size }: { from: string; to: string; size: number }) {
  const gid = `nail-${from.slice(1)}-${to.slice(1)}`;
  return (
    <svg
      width={size}
      height={size * 1.45}
      viewBox="0 0 40 58"
      fill="none"
      className="nail-spin drop-shadow-[0_8px_16px_rgba(124,58,237,0.28)]"
    >
      <defs>
        <linearGradient id={gid} x1="8" y1="2" x2="34" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      {/* almond / squoval press-on nail */}
      <path
        d="M20 1C29 1 34 8 34 20c0 14-2 24-6 31-2 3.6-5 5-8 5s-6-1.4-8-5c-4-7-6-17-6-31C6 8 11 1 20 1Z"
        fill={`url(#${gid})`}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="0.8"
      />
      {/* glossy highlight */}
      <path
        d="M15 8C12.5 12 11.5 20 12 32"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* French tip smile line */}
      <path d="M8 15C12 12 28 12 32 15" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function NailsBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "nails-scene pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {NAILS.map((n, i) => (
        <div
          key={i}
          className="nail-floater"
          style={
            {
              left: n.left,
              top: n.top,
              "--dur": `${n.dur}s`,
              "--spin": `${n.spin}s`,
              "--delay": `${n.delay}s`,
              "--peak": n.peak,
            } as React.CSSProperties
          }
        >
          <NailShape from={n.from} to={n.to} size={n.size} />
        </div>
      ))}
    </div>
  );
}
