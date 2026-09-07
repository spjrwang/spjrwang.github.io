import type { ReactNode } from 'react'

export type SchematicId = 'multimodal' | 'alignment' | 'device' | 'omics'

const stroke = '#0f766e'
const fill = '#e7f4f2'
const ink = '#3d4d5f'

function Box({
  x,
  y,
  w,
  h,
  label,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.6"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fill={ink}
        fontSize="12.5"
        fontFamily="IBM Plex Sans, Noto Sans SC, sans-serif"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  )
}

function Frame({ id, children }: { id: string; children: ReactNode }) {
  const markerId = `arrow-${id}`
  return (
    <svg className="schematic" viewBox="0 0 440 92" role="img" aria-hidden="true">
      <defs>
        <marker
          id={markerId}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={stroke} />
        </marker>
      </defs>
      {children}
    </svg>
  )
}

function Arrow({
  markerId,
  x1,
  y1,
  x2,
  y2,
}: {
  markerId: string
  x1: number
  y1: number
  x2: number
  y2: number
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth="1.8"
      markerEnd={`url(#${markerId})`}
    />
  )
}

function DualArrow({
  markerId,
  x1,
  x2,
  y,
}: {
  markerId: string
  x1: number
  x2: number
  y: number
}) {
  return (
    <>
      <line
        x1={x1}
        y1={y - 6}
        x2={x2}
        y2={y - 6}
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        markerEnd={`url(#${markerId})`}
      />
      <line
        x1={x2}
        y1={y + 6}
        x2={x1}
        y2={y + 6}
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        markerEnd={`url(#${markerId})`}
      />
    </>
  )
}

export function ResearchSchematic({ id }: { id: SchematicId }) {
  const markerId = `arrow-${id}`

  if (id === 'multimodal') {
    return (
      <svg className="schematic" viewBox="0 0 440 110" role="img" aria-hidden="true">
        <defs>
          <marker
            id={markerId}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={stroke} />
          </marker>
        </defs>
        <Box x={24} y={8} w={130} h={38} label="EHR" />
        <Box x={24} y={64} w={130} h={38} label="Genome Variants" />
        <Arrow markerId={markerId} x1={162} y1={27} x2={300} y2={48} />
        <Arrow markerId={markerId} x1={162} y1={83} x2={300} y2={62} />
        <Box x={312} y={33} w={104} h={44} label="Fusion" />
      </svg>
    )
  }

  if (id === 'alignment') {
    return (
      <Frame id={id}>
        <Box x={16} y={24} w={88} h={44} label="EHR" />
        <DualArrow markerId={markerId} x1={112} x2={156} y={46} />
        <Box x={164} y={16} w={124} h={60} label="Foundation Model" />
        <DualArrow markerId={markerId} x1={296} x2={338} y={46} />
        <Box x={346} y={24} w={78} h={44} label="Genome" />
      </Frame>
    )
  }

  if (id === 'device') {
    return (
      <Frame id={id}>
        <Box x={70} y={24} w={110} h={44} label="Model" />
        <DualArrow markerId={markerId} x1={188} x2={248} y={46} />
        <Box x={256} y={24} w={110} h={44} label="Device" />
      </Frame>
    )
  }

  return (
    <Frame id={id}>
      <Box x={10} y={24} w={78} h={44} label="Genomics" />
      <Box x={96} y={24} w={100} h={44} label="Transcriptomics" />
      <Box x={204} y={24} w={86} h={44} label="Proteomics" />
      <Arrow markerId={markerId} x1={298} y1={46} x2={328} y2={46} />
      <Box x={336} y={24} w={92} h={44} label="Disease" />
    </Frame>
  )
}
