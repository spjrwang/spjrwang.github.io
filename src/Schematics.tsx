import type { ReactNode } from 'react'

export type SchematicId = 'multimodal' | 'alignment' | 'device' | 'omics'

const teal = '#0f766e'
const tealSoft = '#d8efe9'
const blue = '#1d4f91'
const blueSoft = '#e4eef8'
const amber = '#9a6700'
const amberSoft = '#f5edd8'
const ink = '#3d4d5f'

function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill={ink}
      fontSize="11"
      fontFamily="IBM Plex Sans, Noto Sans SC, sans-serif"
      fontWeight="600"
    >
      {children}
    </text>
  )
}

function Arrow({
  id,
  x1,
  y1,
  x2,
  y2,
  dashed = false,
}: {
  id: string
  x1: number
  y1: number
  x2: number
  y2: number
  dashed?: boolean
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={teal}
      strokeWidth="1.7"
      strokeDasharray={dashed ? '4 3' : undefined}
      markerEnd={`url(#${id})`}
    />
  )
}

function DualH({
  id,
  x1,
  x2,
  y,
}: {
  id: string
  x1: number
  x2: number
  y: number
}) {
  return (
    <>
      <Arrow id={id} x1={x1} y1={y - 5} x2={x2} y2={y - 5} dashed />
      <Arrow id={id} x1={x2} y1={y + 5} x2={x1} y2={y + 5} dashed />
    </>
  )
}

function Frame({
  id,
  height = 128,
  children,
}: {
  id: string
  height?: number
  children: ReactNode
}) {
  return (
    <svg
      className="schematic"
      viewBox={`0 0 460 ${height}`}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <marker
          id={`m-${id}`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill={teal} />
        </marker>
      </defs>
      {children}
    </svg>
  )
}

/** Clinical record / EHR */
function EhrIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="56" height="66" rx="8" fill={blueSoft} stroke={blue} strokeWidth="1.5" />
      <rect x="11" y="12" width="34" height="5" rx="2" fill={blue} opacity="0.35" />
      <rect x="11" y="23" width="28" height="5" rx="2" fill={blue} opacity="0.28" />
      <rect x="11" y="34" width="32" height="5" rx="2" fill={blue} opacity="0.28" />
      <rect x="11" y="45" width="22" height="5" rx="2" fill={teal} opacity="0.5" />
      <circle cx="42" cy="50" r="8" fill={teal} />
      <path d="M39 50h6M42 47v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  )
}

/** Sequence with a highlighted variant base — clearer than abstract helix ticks */
function GenomeVariantsIcon({ x, y }: { x: number; y: number }) {
  const bases = [
    { t: 'A', c: blue },
    { t: 'T', c: teal },
    { t: 'G', c: amber },
    { t: 'C', c: blue },
  ]
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="92" height="66" rx="8" fill={tealSoft} stroke={teal} strokeWidth="1.5" />
      <text
        x="46"
        y="18"
        textAnchor="middle"
        fill={ink}
        fontSize="9"
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="600"
      >
        DNA sequence
      </text>
      {bases.map((b, i) => (
        <g key={i} transform={`translate(${10 + i * 18} 26)`}>
          <rect width="15" height="18" rx="3" fill="#fff" stroke={b.c} strokeWidth="1.2" />
          <text
            x="7.5"
            y="13"
            textAnchor="middle"
            fill={b.c}
            fontSize="10"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="700"
          >
            {b.t}
          </text>
        </g>
      ))}
      {/* mutated position */}
      <g transform="translate(28 48)">
        <rect width="15" height="14" rx="3" fill="#fff3cd" stroke={amber} strokeWidth="1.4" />
        <text
          x="7.5"
          y="11"
          textAnchor="middle"
          fill={amber}
          fontSize="9"
          fontFamily="IBM Plex Sans, sans-serif"
          fontWeight="700"
        >
          A
        </text>
      </g>
      <text
        x="54"
        y="59"
        fill={amber}
        fontSize="9"
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="600"
      >
        variant
      </text>
    </g>
  )
}

/** Two inputs merge into one representation — concrete fusion */
function FusionIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="78" height="66" rx="10" fill="#eef6f4" stroke={teal} strokeWidth="1.5" />
      <rect x="10" y="12" width="22" height="16" rx="3" fill={blueSoft} stroke={blue} strokeWidth="1.1" />
      <rect x="46" y="12" width="22" height="16" rx="3" fill={tealSoft} stroke={teal} strokeWidth="1.1" />
      <path
        d="M21 28v8c0 6 8 10 18 10s18-4 18-10v-8"
        fill="none"
        stroke={teal}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="22" y="44" width="34" height="14" rx="4" fill={amber} opacity="0.9" />
      <text
        x="39"
        y="54"
        textAnchor="middle"
        fill="#fff"
        fontSize="8"
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="700"
      >
        merged
      </text>
    </g>
  )
}

function ModelIcon({ x, y }: { x: number; y: number }) {
  const nodes = [
    [12, 16],
    [12, 36],
    [12, 56],
    [36, 26],
    [36, 46],
    [60, 36],
  ]
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="72" height="72" rx="10" fill={blueSoft} stroke={blue} strokeWidth="1.5" />
      <line x1="12" y1="16" x2="36" y2="26" stroke={blue} strokeWidth="1.2" opacity="0.45" />
      <line x1="12" y1="36" x2="36" y2="26" stroke={blue} strokeWidth="1.2" opacity="0.45" />
      <line x1="12" y1="36" x2="36" y2="46" stroke={blue} strokeWidth="1.2" opacity="0.45" />
      <line x1="12" y1="56" x2="36" y2="46" stroke={blue} strokeWidth="1.2" opacity="0.45" />
      <line x1="36" y1="26" x2="60" y2="36" stroke={teal} strokeWidth="1.2" opacity="0.55" />
      <line x1="36" y1="46" x2="60" y2="36" stroke={teal} strokeWidth="1.2" opacity="0.55" />
      {nodes.map(([nx, ny], i) => (
        <circle key={i} cx={nx} cy={ny} r="4.5" fill={i === 5 ? teal : blue} />
      ))}
    </g>
  )
}

/** Smartwatch + wearable cue */
function WearableIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="78" height="72" rx="10" fill={amberSoft} stroke={amber} strokeWidth="1.5" />
      {/* watch band */}
      <rect x="30" y="6" width="18" height="12" rx="3" fill={ink} opacity="0.35" />
      <rect x="30" y="54" width="18" height="12" rx="3" fill={ink} opacity="0.35" />
      {/* watch body */}
      <rect x="22" y="16" width="34" height="40" rx="8" fill="#fff" stroke={ink} strokeWidth="1.4" />
      <circle cx="39" cy="36" r="11" fill={blueSoft} stroke={blue} strokeWidth="1.2" />
      <path
        d="M39 29v7l5 3"
        fill="none"
        stroke={teal}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* small pulse on face */}
      <path
        d="M28 48h4l2-3 2 5 2-2h4"
        fill="none"
        stroke={teal}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </g>
  )
}

function OmicsBand({
  x,
  y,
  w,
  color,
  soft,
  label,
}: {
  x: number
  y: number
  w: number
  color: string
  soft: string
  label: string
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="20" rx="6" fill={soft} stroke={color} strokeWidth="1.3" />
      <text
        x={x + w / 2}
        y={y + 14}
        textAnchor="middle"
        fill={ink}
        fontSize="10"
        fontFamily="IBM Plex Sans, Noto Sans SC, sans-serif"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  )
}

/** Clinical phenotype / patient outcome — clearer than abstract disease blob */
function PhenotypeIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="88" height="78" rx="12" fill="#f7e8e8" stroke="#b42318" strokeWidth="1.5" />
      {/* person */}
      <circle cx="28" cy="28" r="9" fill="#fff" stroke="#b42318" strokeWidth="1.3" />
      <path
        d="M14 58c2-12 8-18 14-18s12 6 14 18"
        fill="#fff"
        stroke="#b42318"
        strokeWidth="1.3"
      />
      {/* clinic chart */}
      <rect x="50" y="18" width="28" height="36" rx="4" fill="#fff" stroke="#b42318" strokeWidth="1.2" />
      <rect x="55" y="40" width="5" height="10" rx="1" fill="#d92d20" opacity="0.7" />
      <rect x="62" y="32" width="5" height="18" rx="1" fill="#d92d20" opacity="0.55" />
      <rect x="69" y="36" width="5" height="14" rx="1" fill="#d92d20" opacity="0.4" />
      <text
        x="44"
        y="70"
        textAnchor="middle"
        fill="#b42318"
        fontSize="8"
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="700"
      >
        phenotype
      </text>
    </g>
  )
}

export function ResearchSchematic({ id }: { id: SchematicId }) {
  const mid = `m-${id}`

  if (id === 'multimodal') {
    // EHR → Fusion ← Genome Variants (Fusion centered, no crossing arrows)
    return (
      <Frame id={id} height={128}>
        <EhrIcon x={28} y={16} />
        <Label x={56} y={102}>
          EHR
        </Label>

        <Arrow id={mid} x1={92} y1={49} x2={168} y2={49} />

        <FusionIcon x={178} y={16} />
        <Label x={217} y={102}>
          Multimodal Fusion
        </Label>

        <Arrow id={mid} x1={350} y1={49} x2={268} y2={49} />

        <GenomeVariantsIcon x={360} y={16} />
        <Label x={406} y={102}>
          Genome Variants
        </Label>
      </Frame>
    )
  }

  if (id === 'alignment') {
    return (
      <Frame id={id} height={128}>
        <EhrIcon x={18} y={20} />
        <Label x={46} y={106}>
          EHR
        </Label>
        <DualH id={mid} x1={82} x2={148} y={52} />
        <ModelIcon x={158} y={16} />
        <Label x={194} y={106}>
          Foundation Model
        </Label>
        <DualH id={mid} x1={240} x2={300} y={52} />
        <GenomeVariantsIcon x={310} y={20} />
        <Label x={356} y={106}>
          Genome Variants
        </Label>
      </Frame>
    )
  }

  if (id === 'device') {
    return (
      <Frame id={id} height={128}>
        <ModelIcon x={90} y={16} />
        <Label x={126} y={108}>
          Model
        </Label>
        <DualH id={mid} x1={172} x2={260} y={52} />
        <WearableIcon x={272} y={16} />
        <Label x={311} y={108}>
          Wearable Device
        </Label>
      </Frame>
    )
  }

  // Centered multi-omics → phenotype, with ellipsis for more omics
  return (
    <Frame id={id} height={128}>
      <g transform="translate(48 0)">
        <OmicsBand x={0} y={14} w={140} color={teal} soft={tealSoft} label="Genomics" />
        <OmicsBand x={0} y={40} w={140} color={blue} soft={blueSoft} label="Transcriptomics" />
        <OmicsBand x={0} y={66} w={140} color={amber} soft={amberSoft} label="Proteomics" />
        <text
          x={70}
          y={108}
          textAnchor="middle"
          fill={ink}
          fontSize="16"
          fontFamily="IBM Plex Sans, sans-serif"
          fontWeight="700"
          letterSpacing="2"
        >
          ···
        </text>
        <Label x={70} y={122}>
          Multi-omics
        </Label>

        <Arrow id={mid} x1={152} y1={52} x2={230} y2={52} />

        <PhenotypeIcon x={242} y={18} />
        <Label x={286} y={114}>
          Clinical Phenotype
        </Label>
      </g>
    </Frame>
  )
}
