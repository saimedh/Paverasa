import React, { useEffect, useRef, useState, useCallback } from 'react';
import PersonNode from './PersonNode';
import SignalDot from './DeliveryPackage';
import StageNode from './AIToolNode';
import ConnectionPath from './ConnectionLine';

/* ── Desktop Layout (SVG viewBox 700 × 480) ── */
const VB_W = 700;
const VB_H = 480;

// Person nodes
const CREATOR = { cx: 60, cy: 230 };
const USERS   = { cx: 640, cy: 230 };

// Paverasa hub
const HUB = { cx: 260, cy: 230 };
const HUB_W = 90;
const HUB_H = 50;

// Journey stage nodes — fanning out from Paverasa
const STAGES = [
  { label: 'Design',  cx: 400, cy: 130 },
  { label: 'Build',   cx: 420, cy: 230 },
  { label: 'Launch',  cx: 400, cy: 330 },
];

// Idea node (between creator and Paverasa)
const IDEA = { label: 'Idea', cx: 155, cy: 230 };

// Product node (between stages and users)
const PRODUCT = { label: 'Product', cx: 540, cy: 230 };

// Journey waypoints (progress 0–1)
const JOURNEY = [
  { t: 0.00, x: CREATOR.cx, y: CREATOR.cy },
  { t: 0.08, x: 110, y: 230 },
  { t: 0.15, x: IDEA.cx, y: IDEA.cy },
  { t: 0.25, x: 210, y: 230 },
  { t: 0.35, x: HUB.cx, y: HUB.cy },
  { t: 0.45, x: 340, y: 230 },
  { t: 0.50, x: STAGES[0].cx, y: STAGES[0].cy },   // Design
  { t: 0.55, x: 410, y: 180 },
  { t: 0.60, x: STAGES[1].cx, y: STAGES[1].cy },   // Build
  { t: 0.65, x: 410, y: 280 },
  { t: 0.70, x: STAGES[2].cx, y: STAGES[2].cy },   // Launch
  { t: 0.77, x: 470, y: 270 },
  { t: 0.82, x: PRODUCT.cx, y: PRODUCT.cy },        // Product
  { t: 0.90, x: 590, y: 230 },
  { t: 1.00, x: USERS.cx, y: USERS.cy },            // Users
];

/** Interpolate position along the journey */
function getSignalPos(progress: number): { x: number; y: number } {
  const p = Math.max(0, Math.min(1, progress));
  for (let i = 0; i < JOURNEY.length - 1; i++) {
    const a = JOURNEY[i];
    const b = JOURNEY[i + 1];
    if (p >= a.t && p <= b.t) {
      const local = (p - a.t) / (b.t - a.t);
      const eased = local < 0.5
        ? 2 * local * local
        : 1 - Math.pow(-2 * local + 2, 2) / 2;
      return {
        x: a.x + (b.x - a.x) * eased,
        y: a.y + (b.y - a.y) * eased,
      };
    }
  }
  const last = JOURNEY[JOURNEY.length - 1];
  return { x: last.x, y: last.y };
}

/** Connection path strings */
const PATHS = {
  creatorToIdea: `M ${CREATOR.cx + 32} ${CREATOR.cy} L ${IDEA.cx - 38} ${IDEA.cy}`,
  ideaToHub:     `M ${IDEA.cx + 38} ${IDEA.cy} L ${HUB.cx - HUB_W / 2} ${HUB.cy}`,
  hubToDesign:   `M ${HUB.cx + HUB_W / 2} ${HUB.cy} C 360 ${HUB.cy}, 370 ${STAGES[0].cy}, ${STAGES[0].cx - 38} ${STAGES[0].cy}`,
  hubToBuild:    `M ${HUB.cx + HUB_W / 2} ${HUB.cy} L ${STAGES[1].cx - 38} ${STAGES[1].cy}`,
  hubToLaunch:   `M ${HUB.cx + HUB_W / 2} ${HUB.cy} C 360 ${HUB.cy}, 370 ${STAGES[2].cy}, ${STAGES[2].cx - 38} ${STAGES[2].cy}`,
  designToProduct: `M ${STAGES[0].cx + 38} ${STAGES[0].cy} C 480 ${STAGES[0].cy}, 500 ${PRODUCT.cy}, ${PRODUCT.cx - 38} ${PRODUCT.cy}`,
  buildToProduct:  `M ${STAGES[1].cx + 38} ${STAGES[1].cy} L ${PRODUCT.cx - 38} ${PRODUCT.cy}`,
  launchToProduct: `M ${STAGES[2].cx + 38} ${STAGES[2].cy} C 480 ${STAGES[2].cy}, 500 ${PRODUCT.cy}, ${PRODUCT.cx - 38} ${PRODUCT.cy}`,
  productToUsers:  `M ${PRODUCT.cx + 38} ${PRODUCT.cy} L ${USERS.cx - 32} ${USERS.cy}`,
};

interface JourneyNetworkProps {
  progress: number;
  revealed: boolean;
  isMobile?: boolean;
}

/**
 * Software journey network visualization.
 * Creator → Idea → PAVERASA → Design/Build/Launch → Product → Users
 */
export default function JourneyNetwork({
  progress,
  revealed,
  isMobile = false,
}: JourneyNetworkProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle parallax on desktop
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x: mx * 4, y: my * 3 });
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove, isMobile]);

  const pos = getSignalPos(progress);

  // Determine which stages are active based on progress
  const ideaActive = progress >= 0.12;
  const hubActive = progress >= 0.30;
  const designActive = progress >= 0.47;
  const buildActive = progress >= 0.57;
  const launchActive = progress >= 0.67;
  const productActive = progress >= 0.78;
  const usersActive = progress >= 0.92;

  // ─── Mobile: vertical layout ───
  if (isMobile) {
    const MOB_W = 360;
    const MOB_H = 580;
    const MX = 180; // center X

    const mobileNodes = [
      { label: 'Creator', y: 50, type: 'person' as const },
      { label: 'Idea',    y: 130, type: 'stage' as const },
      { label: 'PAVERASA', y: 220, type: 'hub' as const },
      { label: 'Design',  y: 305, type: 'stage' as const },
      { label: 'Build',   y: 370, type: 'stage' as const },
      { label: 'Launch',  y: 435, type: 'stage' as const },
      { label: 'Product', y: 500, type: 'stage' as const },
      { label: 'Users',   y: 560, type: 'person' as const },
    ];

    // Mobile waypoints
    const MOB_JOURNEY = [
      { t: 0.00, x: MX, y: 50 },
      { t: 0.12, x: MX, y: 130 },
      { t: 0.30, x: MX, y: 220 },
      { t: 0.47, x: MX, y: 305 },
      { t: 0.57, x: MX, y: 370 },
      { t: 0.67, x: MX, y: 435 },
      { t: 0.80, x: MX, y: 500 },
      { t: 1.00, x: MX, y: 560 },
    ];

    function getMobilePos(p: number) {
      const clamped = Math.max(0, Math.min(1, p));
      for (let i = 0; i < MOB_JOURNEY.length - 1; i++) {
        const a = MOB_JOURNEY[i];
        const b = MOB_JOURNEY[i + 1];
        if (clamped >= a.t && clamped <= b.t) {
          const local = (clamped - a.t) / (b.t - a.t);
          const eased = local < 0.5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2;
          return { x: a.x + (b.x - a.x) * eased, y: a.y + (b.y - a.y) * eased };
        }
      }
      return { x: MX, y: 560 };
    }

    const mPos = getMobilePos(progress);
    const thresholds = [0, 0.12, 0.30, 0.47, 0.57, 0.67, 0.80, 1.00];

    return (
      <svg
        ref={svgRef}
        viewBox={`0 0 ${MOB_W} ${MOB_H}`}
        className="journey-network-svg"
        aria-label="Paverasa software journey — from idea to impact"
        role="img"
        style={{ opacity: revealed ? 1 : 0, transition: 'opacity 0.6s ease' }}
      >
        {/* Vertical connection lines */}
        {mobileNodes.slice(0, -1).map((node, i) => (
          <ConnectionPath
            key={`mob-path-${i}`}
            pathD={`M ${MX} ${node.y + 25} L ${MX} ${mobileNodes[i + 1].y - 25}`}
            active={progress >= thresholds[i + 1]}
          />
        ))}

        {/* Nodes */}
        {mobileNodes.map((node, i) => {
          const isActive = progress >= thresholds[i];
          if (node.type === 'person') {
            return (
              <PersonNode
                key={node.label}
                cx={MX}
                cy={node.y}
                label={node.label === 'Creator' ? 'Creator' : 'Users'}
                type={node.label === 'Creator' ? 'creator' : 'users'}
                active={isActive}
              />
            );
          }
          if (node.type === 'hub') {
            return (
              <g key="hub-mobile">
                <rect
                  x={MX - 50}
                  y={node.y - 22}
                  width={100}
                  height={44}
                  className="paverasa-hub__bg"
                />
                <text x={MX} y={node.y + 5} className="paverasa-hub__label">
                  PAVERASA
                </text>
              </g>
            );
          }
          return (
            <StageNode
              key={node.label}
              cx={MX}
              cy={node.y}
              label={node.label}
              active={isActive}
              width={100}
              height={44}
            />
          );
        })}

        {/* Signal dot */}
        <SignalDot cx={mPos.x} cy={mPos.y} opacity={progress > 0.01 ? 1 : 0} />
      </svg>
    );
  }

  // ─── Desktop Layout ───
  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="journey-network-svg"
      aria-label="Paverasa software journey — from idea to impact"
      role="img"
      style={{
        opacity: revealed ? 1 : 0,
        transition: 'opacity 0.8s ease',
        transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
      }}
    >
      {/* ── Connection Paths ── */}
      <ConnectionPath pathD={PATHS.creatorToIdea} active={progress > 0.05} />
      <ConnectionPath pathD={PATHS.ideaToHub} active={progress > 0.18} />
      <ConnectionPath pathD={PATHS.hubToDesign} active={progress > 0.38} />
      <ConnectionPath pathD={PATHS.hubToBuild} active={progress > 0.38} />
      <ConnectionPath pathD={PATHS.hubToLaunch} active={progress > 0.38} />
      <ConnectionPath pathD={PATHS.designToProduct} active={designActive} />
      <ConnectionPath pathD={PATHS.buildToProduct} active={buildActive} />
      <ConnectionPath pathD={PATHS.launchToProduct} active={launchActive} />
      <ConnectionPath pathD={PATHS.productToUsers} active={productActive} />

      {/* ── Paverasa Hub ── */}
      <g>
        <ellipse
          cx={HUB.cx}
          cy={HUB.cy}
          rx={HUB_W / 2 + 20}
          ry={HUB_H / 2 + 18}
          className="paverasa-hub__orbit"
        />
        <rect
          x={HUB.cx - HUB_W / 2}
          y={HUB.cy - HUB_H / 2}
          width={HUB_W}
          height={HUB_H}
          className="paverasa-hub__bg"
        />
        <text x={HUB.cx} y={HUB.cy + 5} className="paverasa-hub__label">
          PAVERASA
        </text>
      </g>

      {/* ── Stage Nodes ── */}
      <StageNode cx={IDEA.cx} cy={IDEA.cy} label="Idea" active={ideaActive} />
      <StageNode cx={STAGES[0].cx} cy={STAGES[0].cy} label="Design" active={designActive} />
      <StageNode cx={STAGES[1].cx} cy={STAGES[1].cy} label="Build" active={buildActive} />
      <StageNode cx={STAGES[2].cx} cy={STAGES[2].cy} label="Launch" active={launchActive} />
      <StageNode cx={PRODUCT.cx} cy={PRODUCT.cy} label="Product" active={productActive} />

      {/* ── Person Nodes ── */}
      <PersonNode
        cx={CREATOR.cx}
        cy={CREATOR.cy}
        label="Creator"
        type="creator"
        active={progress < 0.1 || progress > 0.95}
      />
      <PersonNode
        cx={USERS.cx}
        cy={USERS.cy}
        label="Users"
        type="users"
        active={usersActive}
      />

      {/* ── Signal Dot ── */}
      <SignalDot cx={pos.x} cy={pos.y} opacity={progress > 0.01 ? 1 : 0} />
    </svg>
  );
}
