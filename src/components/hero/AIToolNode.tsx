import React from 'react';

/** SVG icon paths for software journey stages */
const STAGE_ICONS: Record<string, string> = {
  Idea:    'M10 2 C10 2 4 8 4 12 C4 16 7 18 10 18 C13 18 16 16 16 12 C16 8 10 2 10 2Z M10 18 L10 22 M7 22 L13 22',
  Design:  'M4 4 L16 4 L16 16 L4 16Z M4 8 L16 8 M8 8 L8 16',
  Build:   'M6 18 L6 10 L10 6 L14 10 L14 18 M6 18 L14 18 M9 18 L9 14 L11 14 L11 18',
  Launch:  'M4 18 L10 4 L16 18 M7 13 L13 13',
  Product: 'M4 6 L16 6 L16 18 L4 18Z M4 9 L16 9 M7 6 L7 9 M13 6 L13 9',
};

interface StageNodeProps {
  cx: number;
  cy: number;
  label: string;
  active?: boolean;
  width?: number;
  height?: number;
}

/**
 * A software journey stage node (Idea, Design, Build, Launch, Product).
 * Rounded rectangle with icon and label. Activates with orange accent.
 */
export default function StageNode({
  cx,
  cy,
  label,
  active = false,
  width = 76,
  height = 60,
}: StageNodeProps) {
  const iconPath = STAGE_ICONS[label] || STAGE_ICONS['Build'];

  return (
    <g className={`stage-node ${active ? 'stage-node--active' : ''}`}>
      <rect
        x={cx - width / 2}
        y={cy - height / 2}
        width={width}
        height={height}
        className="stage-node__bg"
      />
      <g
        className="stage-node__icon"
        transform={`translate(${cx - 10}, ${cy - 15})`}
      >
        <path d={iconPath} />
      </g>
      <text x={cx} y={cy + height / 2 - 6} className="stage-node__label">
        {label}
      </text>
    </g>
  );
}
