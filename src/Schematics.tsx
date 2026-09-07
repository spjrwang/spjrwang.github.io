import type { ReactNode } from 'react'

export type SchematicId = 'multimodal' | 'alignment' | 'device' | 'omics'

const teal = '#0f766e'
const tealSoft = '#d8efe9'
const blue = '#1d4f91'
const blueSoft = '#e4eef8'
const amber = '#9a6700'
const amberSoft = '#f5edd8'
const ink = '#3d4d5f'
const W = 460
const H = 122
const ICON_Y = 10
const ICON_H = 70
const LABEL_Y = 106
const ARROW_Y = ICON_Y + ICON_H / 2

function Label({ x, children }: { x: number; children: string }) {
  return (
    <text
      x={x}
      y={LABEL_Y}
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
  x2,
  y = ARROW_Y,
  dashed = false,
}: {
  id: string
  x1: number
  x2: number
  y?: number
  dashed?: boolean
}) {
  return (
    <line
      x1={x1}
      y1={y}
      x2={x2}
      y2={y}
      stroke={teal}
      strokeWidth="1.7"
      strokeDasharray={dashed ? '4 3' : undefined}
      markerEnd={`url(#${id})`}
    />
  )
}

function DualH({ id, x1, x2 }: { id: string; x1: number; x2: number }) {
  return (
    <>
      <Arrow id={id} x1={x1} x2={x2} y={ARROW_Y - 6} dashed />
      <Arrow id={id} x1={x2} x2={x1} y={ARROW_Y + 6} dashed />
    </>
  )
}

function Frame({ id, children }: { id: string; children: ReactNode }) {
  return (
    <svg className="schematic" viewBox={`0 0 ${W} ${H}`} role="img" aria-hidden="true">
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

/** Uniform card shell */
function Card({
  w,
  fill,
  stroke,
  children,
}: {
  w: number
  fill: string
  stroke: string
  children?: ReactNode
}) {
  return (
    <>
      <rect width={w} height={ICON_H} rx="10" fill={fill} stroke={stroke} strokeWidth="1.5" />
      {children}
    </>
  )
}

function EhrIcon({ x }: { x: number }) {
  const w = 72
  return (
    <g transform={`translate(${x} ${ICON_Y})`}>
      <Card w={w} fill={blueSoft} stroke={blue}>
        <rect x="14" y="14" width="32" height="5" rx="2" fill={blue} opacity="0.35" />
        <rect x="14" y="25" width="26" height="5" rx="2" fill={blue} opacity="0.28" />
        <rect x="14" y="36" width="30" height="5" rx="2" fill={blue} opacity="0.28" />
        <rect x="14" y="47" width="18" height="5" rx="2" fill={teal} opacity="0.5" />
        <circle cx="52" cy="50" r="8" fill={teal} />
        <path d="M49 50h6M52 47v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </Card>
    </g>
  )
}

function GenomeVariantsIcon({ x }: { x: number }) {
  const w = 88
  const bases = [
    { t: 'A', c: blue },
    { t: 'T', c: teal },
    { t: 'G', c: amber },
    { t: 'C', c: blue },
  ]
  return (
    <g transform={`translate(${x} ${ICON_Y})`}>
      <Card w={w} fill={tealSoft} stroke={teal}>
        <text
          x={w / 2}
          y="16"
          textAnchor="middle"
          fill={ink}
          fontSize="9"
          fontFamily="IBM Plex Sans, sans-serif"
          fontWeight="600"
        >
          DNA sequence
        </text>
        {bases.map((b, i) => (
          <g key={i} transform={`translate(${12 + i * 17} 24)`}>
            <rect
              width="14"
              height="17"
              rx="3"
              fill={i === 1 ? '#fff3cd' : '#fff'}
              stroke={i === 1 ? amber : b.c}
              strokeWidth={i === 1 ? 1.5 : 1.2}
            />
            <text
              x="7"
              y="12.5"
              textAnchor="middle"
              fill={i === 1 ? amber : b.c}
              fontSize="10"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="700"
            >
              {i === 1 ? 'A' : b.t}
            </text>
          </g>
        ))}
        <text
          x={w / 2}
          y="58"
          textAnchor="middle"
          fill={amber}
          fontSize="9"
          fontFamily="IBM Plex Sans, sans-serif"
          fontWeight="600"
        >
          ★ variant site
        </text>
      </Card>
    </g>
  )
}

function FusionIcon({ x }: { x: number }) {
  const w = 84
  return (
    <g transform={`translate(${x} ${ICON_Y})`}>
      <Card w={w} fill="#eef6f4" stroke={teal}>
        <rect x="12" y="12" width="24" height="16" rx="3" fill={blueSoft} stroke={blue} strokeWidth="1.1" />
        <rect x="48" y="12" width="24" height="16" rx="3" fill={tealSoft} stroke={teal} strokeWidth="1.1" />
        <path
          d="M24 28v6c0 5 8 9 18 9s18-4 18-9v-6"
          fill="none"
          stroke={teal}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect x="23" y="46" width="38" height="14" rx="4" fill={amber} />
        <text
          x={w / 2}
          y="56"
          textAnchor="middle"
          fill="#fff"
          fontSize="9"
          fontFamily="IBM Plex Sans, sans-serif"
          fontWeight="700"
        >
          merged
        </text>
      </Card>
    </g>
  )
}

function ModelIcon({ x }: { x: number }) {
  const w = 72
  const nodes = [
    [14, 16],
    [14, 35],
    [14, 54],
    [36, 25],
    [36, 45],
    [58, 35],
  ]
  return (
    <g transform={`translate(${x} ${ICON_Y})`}>
      <Card w={w} fill={blueSoft} stroke={blue}>
        <line x1="14" y1="16" x2="36" y2="25" stroke={blue} strokeWidth="1.2" opacity="0.45" />
        <line x1="14" y1="35" x2="36" y2="25" stroke={blue} strokeWidth="1.2" opacity="0.45" />
        <line x1="14" y1="35" x2="36" y2="45" stroke={blue} strokeWidth="1.2" opacity="0.45" />
        <line x1="14" y1="54" x2="36" y2="45" stroke={blue} strokeWidth="1.2" opacity="0.45" />
        <line x1="36" y1="25" x2="58" y2="35" stroke={teal} strokeWidth="1.2" opacity="0.55" />
        <line x1="36" y1="45" x2="58" y2="35" stroke={teal} strokeWidth="1.2" opacity="0.55" />
        {nodes.map(([nx, ny], i) => (
          <circle key={i} cx={nx} cy={ny} r="4.2" fill={i === 5 ? teal : blue} />
        ))}
      </Card>
    </g>
  )
}

/** Side-band smartwatch — bands left/right, dial unobstructed */
function WearableIcon({ x }: { x: number }) {
  const w = 88
  return (
    <g transform={`translate(${x} ${ICON_Y})`}>
      <Card w={w} fill={amberSoft} stroke={amber}>
        {/* left band */}
        <rect x="8" y="28" width="14" height="14" rx="3" fill={ink} opacity="0.28" />
        {/* right band */}
        <rect x="66" y="28" width="14" height="14" rx="3" fill={ink} opacity="0.28" />
        {/* watch case */}
        <rect x="26" y="12" width="36" height="46" rx="9" fill="#fff" stroke={ink} strokeWidth="1.4" />
        {/* dial */}
        <circle cx="44" cy="32" r="12" fill={blueSoft} stroke={blue} strokeWidth="1.2" />
        <path
          d="M44 24v8l5 3"
          fill="none"
          stroke={teal}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* pulse under dial, inside case only */}
        <path
          d="M32 52h4l2-3 3 6 2-3h5"
          fill="none"
          stroke={teal}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Card>
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
      <rect x={x} y={y} width={w} height="18" rx="6" fill={soft} stroke={color} strokeWidth="1.3" />
      <text
        x={x + w / 2}
        y={y + 13}
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

function PhenotypeIcon({ x }: { x: number }) {
  const w = 88
  return (
    <g transform={`translate(${x} ${ICON_Y})`}>
      <Card w={w} fill="#f7e8e8" stroke="#b42318">
        <circle cx="28" cy="24" r="8" fill="#fff" stroke="#b42318" strokeWidth="1.3" />
        <path
          d="M15 52c2-11 7-16 13-16s11 5 13 16"
          fill="#fff"
          stroke="#b42318"
          strokeWidth="1.3"
        />
        <rect x="52" y="14" width="26" height="34" rx="4" fill="#fff" stroke="#b42318" strokeWidth="1.2" />
        <rect x="57" y="34" width="5" height="10" rx="1" fill="#d92d20" opacity="0.7" />
        <rect x="63" y="28" width="5" height="16" rx="1" fill="#d92d20" opacity="0.55" />
        <rect x="69" y="31" width="5" height="13" rx="1" fill="#d92d20" opacity="0.4" />
        <text
          x={w / 2}
          y="62"
          textAnchor="middle"
          fill="#b42318"
          fontSize="8"
          fontFamily="IBM Plex Sans, sans-serif"
          fontWeight="700"
        >
          phenotype
        </text>
      </Card>
    </g>
  )
}

/** Evenly place n cards with equal arrow gaps; returns x positions of card left edges */
function layoutRow(widths: number[], sidePad = 28) {
  const totalW = widths.reduce((a, b) => a + b, 0)
  const gaps = widths.length - 1
  const free = W - sidePad * 2 - totalW
  const gap = free / gaps
  const xs: number[] = []
  let x = sidePad
  for (const w of widths) {
    xs.push(x)
    x += w + gap
  }
  return { xs, gap }
}

export function ResearchSchematic({ id }: { id: SchematicId }) {
  const mid = `m-${id}`

  if (id === 'multimodal') {
    const widths = [72, 84, 88]
    const { xs } = layoutRow(widths)
    return (
      <Frame id={id}>
        <EhrIcon x={xs[0]} />
        <Label x={xs[0] + widths[0] / 2}>EHR</Label>
        <Arrow id={mid} x1={xs[0] + widths[0] + 4} x2={xs[1] - 4} />
        <FusionIcon x={xs[1]} />
        <Label x={xs[1] + widths[1] / 2}>Multimodal Fusion</Label>
        <Arrow id={mid} x1={xs[2] - 4} x2={xs[1] + widths[1] + 4} />
        <GenomeVariantsIcon x={xs[2]} />
        <Label x={xs[2] + widths[2] / 2}>Genome Variants</Label>
      </Frame>
    )
  }

  if (id === 'alignment') {
    const widths = [72, 72, 88]
    const { xs } = layoutRow(widths)
    return (
      <Frame id={id}>
        <EhrIcon x={xs[0]} />
        <Label x={xs[0] + widths[0] / 2}>EHR</Label>
        <DualH id={mid} x1={xs[0] + widths[0] + 4} x2={xs[1] - 4} />
        <ModelIcon x={xs[1]} />
        <Label x={xs[1] + widths[1] / 2}>Foundation Model</Label>
        <DualH id={mid} x1={xs[1] + widths[1] + 4} x2={xs[2] - 4} />
        <GenomeVariantsIcon x={xs[2]} />
        <Label x={xs[2] + widths[2] / 2}>Genome Variants</Label>
      </Frame>
    )
  }

  if (id === 'device') {
    const widths = [72, 88]
    const { xs } = layoutRow(widths, 70)
    return (
      <Frame id={id}>
        <ModelIcon x={xs[0]} />
        <Label x={xs[0] + widths[0] / 2}>Model</Label>
        <DualH id={mid} x1={xs[0] + widths[0] + 4} x2={xs[1] - 4} />
        <WearableIcon x={xs[1]} />
        <Label x={xs[1] + widths[1] / 2}>Wearable Device</Label>
      </Frame>
    )
  }

  // Multi-omics stack + phenotype, horizontally centered as one group
  const stackW = 132
  const phenoW = 88
  const arrowGap = 36
  const groupW = stackW + arrowGap + phenoW
  const origin = (W - groupW) / 2
  const stackX = origin
  const phenoX = origin + stackW + arrowGap

  return (
    <Frame id={id}>
      <OmicsBand x={stackX} y={14} w={stackW} color={teal} soft={tealSoft} label="Genomics" />
      <OmicsBand x={stackX} y={36} w={stackW} color={blue} soft={blueSoft} label="Transcriptomics" />
      <OmicsBand x={stackX} y={58} w={stackW} color={amber} soft={amberSoft} label="Proteomics" />
      <text
        x={stackX + stackW / 2}
        y={88}
        textAnchor="middle"
        fill={ink}
        fontSize="15"
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="700"
        letterSpacing="1.5"
      >
        · · ·
      </text>
      <Label x={stackX + stackW / 2}>Multi-omics</Label>

      <Arrow
        id={mid}
        x1={stackX + stackW + 4}
        x2={phenoX - 4}
        y={ICON_Y + ICON_H / 2}
      />

      <PhenotypeIcon x={phenoX} />
      <Label x={phenoX + phenoW / 2}>Clinical Phenotype</Label>
    </Frame>
  )
}
