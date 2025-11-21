import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from 'recharts';

const data = [
  { date: '2009', dev: 0.05, tvl: null, vol: null },
  { date: '2012', dev: 0.2, tvl: null, vol: null },
  { date: '2014', dev: 0.8, tvl: null, vol: null },
  { date: '2016', dev: 1.5, tvl: null, vol: null },
  { date: '2018', dev: 9.5, tvl: null, vol: null },
  { date: '2020', dev: 10.3, tvl: null, vol: null },
  { date: '2021', dev: 14, tvl: 0.1, vol: 5 },
  { date: '2022', dev: 23.3, tvl: 0.5, vol: 1.5 },
  { date: '2023', dev: 19.5, tvl: 2.2, vol: 0.8 },
  { date: '2024', dev: 17.5, tvl: 5.5, vol: 6 },
  { date: '2025', dev: 16.5, tvl: 16.5, vol: 34 },
];

const Icon = ({ d, color }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    style={{ width: 30, height: 30 }}
  >
    <path d={d} />
  </svg>
);

const icons = {
  meme: 'M12 3a9 9 0 100 18 9 9 0 000-18zm-4 9h8m-4-4v8',
  rwa: 'M3 6h18v12H3zm0 4h18M7 14h4',
  perp: 'M3 17l6-6 4 4 8-8M17 7h4v4',
  inst: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
  pred: 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 4v5l3 3',
  ai: 'M4 4h16v16H4zM9 10a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zM9 15c1.5 1.5 4.5 1.5 6 0',
  dust: 'M6 6a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zM6 22a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zm-6-9a2 2 0 100-4 2 2 0 000 4z',
  key: 'M8 18a5 5 0 100-10 5 5 0 000 10zm3.5-6.5L21 2m-3 3l3 3',
  link: 'M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.7 1.7m4.2 4.3a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7l1.7-1.7',
  rpc: 'M2 3h20v14H2zm6 18h8m-4-4v4M6 8h4m-4 3h8',
  mev: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  permit: 'M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7',
  contract:
    'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 13h6m-6 4h6',
  zkp: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',
  multi:
    'M9 7a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6zM6 18v2h12v-2c0-2-2-4-6-4s-6 2-6 4z',
  ring: 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 4a5 5 0 100 10 5 5 0 000-10zm0 4a1 1 0 100 2 1 1 0 000-2z',
  stealth:
    'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm11-3a3 3 0 100 6 3 3 0 000-6zM3 3l18 18',
  hlf: 'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z',
  zkevm: 'M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zm0 20v-6.5m10-7L12 15.5 2 8.5',
  prep: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 3h6v4H9zM9 12h6m-6 4h4',
  dev: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  release: 'M5 12h14m-7-7l7 7-7 7',
  runtime: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v6l4 2',
  aware:
    'M12 2a7 7 0 017 7c0 5-7 11-7 11S5 14 5 9a7 7 0 017-7zm0 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5z',
};

const Item = ({ icon, label, color }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 58,
      margin: 2,
    }}
  >
    <Icon d={icons[icon]} color={color} />
    <span
      style={{
        fontSize: 11,
        textAlign: 'center',
        color: '#374151',
        marginTop: 2,
      }}
    >
      {label}
    </span>
  </div>
);

const Block = ({ title, items, bg, border, color }) => (
  <div
    style={{
      flex: 1,
      background: bg,
      border: `2px solid ${border}`,
      borderRadius: 8,
      padding: 8,
      minWidth: 130,
    }}
  >
    <div
      style={{
        fontSize: 9,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottom: '1px solid #ccc',
        paddingBottom: 4,
        marginBottom: 6,
        color: '#1f2937',
      }}
    >
      {title}
    </div>
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {items.map((it, i) => (
        <Item key={i} icon={it.icon} label={it.label} color={color} />
      ))}
    </div>
  </div>
);

const Arrow = () => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '0 4px' }}>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#374151"
      strokeWidth="2.5"
      style={{ width: 20, height: 20 }}
    >
      <path d="M5 12h14m-6-6l6 6-6 6" />
    </svg>
  </div>
);

export default function App() {
  const trends = [
    { icon: 'meme', label: 'Meme Coins' },
    { icon: 'rwa', label: 'RWA Tokens' },
    { icon: 'perp', label: 'Perpetual DEX' },
    { icon: 'inst', label: 'Institutional' },
    { icon: 'pred', label: 'Prediction' },
    { icon: 'ai', label: 'AI Integration' },
  ];
  const threats = [
    { icon: 'dust', label: 'Dust Attacks' },
    { icon: 'key', label: 'Key Mgmt' },
    { icon: 'link', label: 'Tx Linking' },
    { icon: 'rpc', label: 'RPC Exposure' },
    { icon: 'mev', label: 'MEV' },
    { icon: 'permit', label: 'Permit Hijack' },
    { icon: 'contract', label: 'Smart Contract' },
  ];
  const solutions = [
    { icon: 'zkp', label: 'ZK Proofs' },
    { icon: 'multi', label: 'Multi-Sig' },
    { icon: 'ring', label: 'Ring Sig' },
    { icon: 'stealth', label: 'Stealth Addr' },
    { icon: 'hlf', label: 'HLF' },
    { icon: 'zkevm', label: 'zkEVM' },
  ];
  const sdlc = [
    { icon: 'prep', label: 'Preparation' },
    { icon: 'dev', label: 'Development' },
    { icon: 'release', label: 'Release' },
    { icon: 'runtime', label: 'Runtime' },
    { icon: 'aware', label: 'Awareness' },
  ];

  return (
    <div
      style={{
        fontFamily: 'Aptos, Calibri, Segoe UI, sans-serif',
        background: '#fff',
        padding: 16,
        maxWidth: 880,
        margin: '0 auto',
      }}
    >
      {/* Top Row */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
        {/* Key Findings */}
        <div
          style={{
            flex: 1,
            border: '1px solid #9ca3af',
            borderRadius: 8,
            padding: 12,
            background: '#f9fafb',
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 'bold',
              color: '#1f2937',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: 4,
              marginBottom: 8,
            }}
          >
            Key Findings
          </div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1 }}>
            <p>
              • TVL grew from <b>$3M</b> (2021) to <b>$16.7B</b> (2025)
            </p>
            <p>
              • Peak <b>23,343</b> monthly active developers (Dec 2022)
            </p>
            <p>
              • Exploits: <b>$2.36B</b> (2024); <b>$2.47B</b> (H1 2025)
            </p>
            <p>
              • <b>80%+</b> losses from key/signature vulnerabilities
            </p>
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#1f2937',
              borderBottom: '1px solid #d1d5db',
              paddingBottom: 4,
              marginBottom: 8,
              marginTop: 12,
            }}
          >
            Paper Contributions
          </div>
          <div style={{ fontSize: 13, color: '#374151', lineHeight: 1 }}>
            <p>
              • Analysis of <b>6</b> emerging ecosystem trends
            </p>
            <p>
              • <b>7</b> privacy threat categories with forensic evidence
            </p>
            <p>• Privacy-enhancing technology evaluation</p>
            <p>• SDLC framework with measurable controls</p>
          </div>
        </div>

        {/* Chart */}
        <div
          style={{
            flex: 1,
            border: '1px solid #9ca3af',
            borderRadius: 8,
            padding: 8,
            background: '#fff',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 4,
              color: '#1f2937',
            }}
          >
            Permissionless Blockchain Evolution (2009–2025)
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
              data={data}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <ReferenceArea
                x1="2021"
                x2="2025"
                fill="#eef2ff"
                fillOpacity={0.6}
              />
              <XAxis dataKey="date" tick={{ fontSize: 9 }} />
              <YAxis
                yAxisId="l"
                tick={{ fontSize: 11 }}
                domain={[0, 40]}
                label={{
                  value: 'USD(B)',
                  angle: -90,
                  fontSize: 8,
                  position: 'insideLeft',
                }}
              />
              <YAxis
                yAxisId="r"
                orientation="right"
                tick={{ fontSize: 9 }}
                domain={[0, 28]}
                tickFormatter={(v) => `${v}k`}
                label={{
                  value: 'Devs',
                  angle: 90,
                  fontSize: 8,
                  position: 'insideRight',
                }}
              />
              <Bar
                yAxisId="l"
                dataKey="vol"
                fill="url(#vg)"
                barSize={14}
                name="Volume"
              />
              <Line
                yAxisId="l"
                type="monotone"
                dataKey="tvl"
                stroke="#0369a1"
                strokeWidth={2}
                dot={{ r: 2.5, fill: '#0369a1' }}
                name="TVL"
              />
              <Line
                yAxisId="r"
                type="monotone"
                dataKey="dev"
                stroke="#dc2626"
                strokeWidth={2}
                dot={{ r: 2, fill: '#dc2626' }}
                name="Developers"
              />
              <Legend wrapperStyle={{ fontSize: 9 }} iconSize={10} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Flow Blocks */}
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
        <Block
          title="EMERGING TRENDS"
          items={trends}
          bg="#eff6ff"
          border="#3b82f6"
          color="#2563eb"
        />
        <Arrow />
        <Block
          title="PRIVACY THREATS"
          items={threats}
          bg="#fef2f2"
          border="#ef4444"
          color="#dc2626"
        />
        <Arrow />
        <Block
          title="SOLUTIONS"
          items={solutions}
          bg="#f0fdf4"
          border="#22c55e"
          color="#16a34a"
        />
        <Arrow />
        <Block
          title="SECURE DEV LIFECYCLE"
          items={sdlc}
          bg="#faf5ff"
          border="#a855f7"
          color="#7c3aed"
        />
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 12,
          paddingTop: 8,
          borderTop: '1px solid #d1d5db',
          textAlign: 'center',
          fontSize: 8,
          color: '#6b7280',
        }}
      ></div>
    </div>
  );
}
