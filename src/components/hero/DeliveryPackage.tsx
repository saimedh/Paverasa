import React from 'react';

export type SignalState = 'idea' | 'designing' | 'building' | 'launching' | 'delivered';

interface SignalDotProps {
  cx: number;
  cy: number;
  opacity?: number;
}

/**
 * Moving orange signal dot representing software traveling through the journey.
 * Clean, elegant, digital — not a delivery package.
 */
export default function SignalDot({ cx, cy, opacity = 1 }: SignalDotProps) {
  return (
    <g className="signal-dot" style={{ opacity }}>
      {/* Outer ring pulse */}
      <circle cx={cx} cy={cy} r={18} className="signal-dot__ring">
        <animate
          attributeName="r"
          values="18;22;18"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.1;0.3"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Glow halo */}
      <circle cx={cx} cy={cy} r={12} className="signal-dot__glow">
        <animate
          attributeName="opacity"
          values="0.4;0.7;0.4"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Core dot */}
      <circle cx={cx} cy={cy} r={5} className="signal-dot__core" />
    </g>
  );
}
