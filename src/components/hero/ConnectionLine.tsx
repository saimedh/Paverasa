import React from 'react';

interface ConnectionPathProps {
  pathD: string;
  active?: boolean;
  id?: string;
}

/**
 * Elegant connection path between journey stages.
 * Shows a flowing orange signal when active.
 */
export default function ConnectionPath({ pathD, active = false, id }: ConnectionPathProps) {
  return (
    <g>
      <path
        d={pathD}
        className={`journey-path ${active ? 'journey-path--active' : ''}`}
      />
      <path
        d={pathD}
        className={`journey-path__signal ${active ? 'journey-path__signal--active' : ''}`}
        id={id}
      />
    </g>
  );
}
