import React from 'react';

interface PersonNodeProps {
  cx: number;
  cy: number;
  label: string;
  active?: boolean;
  /** 'creator' = single person icon, 'users' = multi-person icon */
  type?: 'creator' | 'users';
}

/**
 * Minimal person node — Creator or Users.
 * Simple circle with abstract person icon.
 */
export default function PersonNode({
  cx,
  cy,
  label,
  active = false,
  type = 'creator',
}: PersonNodeProps) {
  const r = 26;

  return (
    <g className={`person-node ${active ? 'person-node--active' : ''}`}>
      <circle cx={cx} cy={cy} r={r + 5} className="person-node__ring" />
      <circle cx={cx} cy={cy} r={r} className="person-node__bg" />
      {type === 'creator' ? (
        <g className="person-node__icon" transform={`translate(${cx - 9}, ${cy - 11})`}>
          <circle cx={9} cy={5} r={4.5} />
          <path d="M0 19 C0 13, 18 13, 18 19" />
        </g>
      ) : (
        /* Multi-person icon */
        <g className="person-node__icon" transform={`translate(${cx - 12}, ${cy - 10})`}>
          <circle cx={8} cy={5} r={4} />
          <path d="M0 17 C0 12, 16 12, 16 17" />
          <circle cx={18} cy={6} r={3} />
          <path d="M14 17 C14 13.5, 22 13.5, 22 17" />
        </g>
      )}
      <text x={cx} y={cy + r + 18} className="person-node__label">
        {label}
      </text>
    </g>
  );
}
