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
  height = 120,
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

function EhrIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="54" height="64" rx="8" fill={blueSoft} stroke={blue} strokeWidth="1.5" />
      <rect x="10" y="12" width="34" height="5" rx="2" fill={blue} opacity="0.35" />
      <rect x="10" y="23" width="28" height="5" rx="2" fill={blue} opacity="0.28" />
      <rect x="10" y="34" width="32" height="5" rx="2" fill={blue} opacity="0.28" />
      <rect x="10" y="45" width="20" height="5" rx="2" fill={teal} opacity="0.55" />
      <circle cx="40" cy="48" r="7" fill={teal} />
      <path d="M37 48h6M40 45v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  )
}

function GenomeIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="72" height="64" rx="8" fill={tealSoft} stroke={teal} strokeWidth="1.5" />
      <path
        d="M22 12c6 8 6 16 0 24s-6 16 0 24"
        fill="none"
        stroke={teal}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M34 12c6 8 6 16 0 24s-6 16 0 24"
        fill="none"
        stroke={blue}
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <line x1="22" y1="20" x2="34" y2="24" stroke={amber} strokeWidth="1.6" />
      <line x1="22" y1="32" x2="34" y2="28" stroke={amber} strokeWidth="1.6" />
      <line x1="22" y1="44" x2="34" y2="48" stroke={amber} strokeWidth="1.6" />
      <circle cx="54" cy="22" r="3" fill={amber} />
      <circle cx="58" cy="36" r="3" fill={blue} />
      <circle cx="52" cy="50" r="3" fill={teal} />
    </g>
  )
}

function FusionIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="32" cy="32" r="30" fill="#eef6f4" stroke={teal} strokeWidth="1.6" />
      <circle cx="22" cy="28" r="14" fill={blueSoft} stroke={blue} strokeWidth="1.3" opacity="0.9" />
      <circle cx="42" cy="36" r="14" fill={tealSoft} stroke={teal} strokeWidth="1.3" opacity="0.9" />
      <circle cx="32" cy="32" r="7" fill={amber} />
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
        <circle
          key={i}
          cx={nx}
          cy={ny}
          r="4.5"
          fill={i === 5 ? teal : blue}
        />
      ))}
    </g>
  )
}

function DeviceIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="72" height="72" rx="10" fill={amberSoft} stroke={amber} strokeWidth="1.5" />
      <rect x="16" y="14" width="40" height="28" rx="4" fill="#fff" stroke={ink} strokeWidth="1.3" />
      <path
        d="M22 28h6l3-6 4 12 3-6h8"
        fill="none"
        stroke={teal}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="26" y="48" width="20" height="12" rx="3" fill={ink} opacity="0.75" />
      <circle cx="36" cy="54" r="2.2" fill="#fff" />
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
      <rect x={x} y={y} width={w} height="22" rx="6" fill={soft} stroke={color} strokeWidth="1.3" />
      <text
        x={x + w / 2}
        y={y + 15}
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

function DiseaseIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="78" height="78" rx="12" fill="#f7e8e8" stroke="#b42318" strokeWidth="1.5" />
      <circle cx="39" cy="34" r="16" fill="#fff" stroke="#b42318" strokeWidth="1.4" />
      <path
        d="M39 24c-4 6-8 10-8 14a8 8 0 0016 0c0-4-4-8-8-14z"
        fill="#d92d20"
      />
      <rect x="18" y="56" width="42" height="8" rx="3" fill="#b42318" opacity="0.25" />
    </g>
  )
}

export function ResearchSchematic({ id }: { id: SchematicId }) {
  const mid = `m-${id}`

  if (id === 'multimodal') {
    return (
      <Frame id={id} height={132}>
        <EhrIcon x={36} y={18} />
        <Label x={63} y={98}>
          EHR
        </Label>
        <GenomeIcon x={150} y={18} />
        <Label x={186} y={98}>
          Genome Variants
        </Label>
        <Arrow id={mid} x1={98} y1={42} x2={318} y2={52} />
        <Arrow id={mid} x1={230} y1={55} x2={318} y2={60} />
        <FusionIcon x={330} y={20} />
        <Label x={362} y={98}>
          Fusion
        </Label>
      </Frame>
    )
  }

  if (id === 'alignment') {
    return (
      <Frame id={id} height={132}>
        <EhrIcon x={28} y={22} />
        <Label x={55} y={104}>
          EHR
        </Label>
        <DualH id={mid} x1={92} x2={168} y={54} />
        <ModelIcon x={178} y={18} />
        <Label x={214} y={104}>
          Foundation Model
        </Label>
        <DualH id={mid} x1={260} x2={336} y={54} />
        <GenomeIcon x={348} y={22} />
        <Label x={384} y={104}>
          Genome
        </Label>
      </Frame>
    )
  }

  if (id === 'device') {
    return (
      <Frame id={id} height={132}>
        <ModelIcon x={88} y={18} />
        <Label x={124} y={108}>
          Model
        </Label>
        <DualH id={mid} x1={170} x2={268} y={54} />
        <DeviceIcon x={280} y={18} />
        <Label x={316} y={108}>
          Device
        </Label>
      </Frame>
    )
  }

  return (
    <Frame id={id} height={132}>
      <OmicsBand x={20} y={18} w={150} color={teal} soft={tealSoft} label="Genomics" />
      <OmicsBand x={20} y={46} w={150} color={blue} soft={blueSoft} label="Transcriptomics" />
      <OmicsBand x={20} y={74} w={150} color={amber} soft={amberSoft} label="Proteomics" />
      <Arrow id={mid} x1={180} y1={55} x2={286} y2={55} />
      <DiseaseIcon x={300} y={20} />
      <Label x={339} y={114}>
        Disease
      </Label>
    </Frame>
  )
}
