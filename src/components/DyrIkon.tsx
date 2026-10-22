import type { DyrId } from "@/lib/dyr";

const INK = "#25301f";
const CREAM = "#fbf7ee";
const HONEY = "#d8a23a";
const BARN = "#b3372a";

// Enkle, flate tegninger i samme stil. Erstattes av ekte bilder når `bilde` er satt på dyret.
export function DyrIkon({ id }: { id: DyrId }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      {tegning[id]}
    </svg>
  );
}

const ben = (x: number, topp: number, bunn: number, farge = HONEY, w = 3) => (
  <path
    d={`M${x} ${topp} L${x} ${bunn}`}
    stroke={farge}
    strokeWidth={w}
    strokeLinecap="round"
  />
);

const tegning: Record<DyrId, React.ReactNode> = {
  hons: (
    <>
      <path d="M28 54 C12 46 8 30 18 20 C22 32 30 40 40 46 Z" fill="#7a4224" />
      <ellipse cx="50" cy="58" rx="27" ry="20" fill="#c27a45" />
      <ellipse cx="46" cy="60" rx="15" ry="9" fill="#a35f30" />
      <path d="M62 52 L66 36 L80 36 L78 56 Z" fill="#c27a45" />
      <circle cx="72" cy="35" r="11" fill="#c27a45" />
      <circle cx="68" cy="24" r="4" fill={BARN} />
      <circle cx="73.5" cy="22" r="4.5" fill={BARN} />
      <circle cx="79" cy="24.5" r="4" fill={BARN} />
      <polygon points="81,33 92,37 81,41" fill={HONEY} />
      <ellipse cx="80" cy="46" rx="3" ry="5" fill={BARN} />
      <circle cx="76" cy="33" r="1.9" fill={INK} />
      {ben(46, 76, 90)}
      {ben(58, 76, 90)}
    </>
  ),
  ender: (
    <>
      <path d="M16 58 L6 44 L24 52 Z" fill="#7d7360" />
      <path
        d="M16 58 C16 46 34 42 50 44 C62 45 68 50 72 54 C74 66 62 76 44 76 C28 76 16 70 16 58 Z"
        fill="#9a8f78"
      />
      <path d="M26 58 C36 52 52 54 60 62 C50 70 34 70 26 58 Z" fill="#7d7360" />
      <path d="M66 52 L67 40 L81 40 L81 56 Z" fill="#2f6b4a" />
      <circle cx="74" cy="36" r="11" fill="#2f6b4a" />
      <rect x="66" y="50" width="15" height="3.2" fill={CREAM} />
      <path d="M84 34 C93 34 96 39 93 41.5 C89 43 85 42 84 40 Z" fill={HONEY} />
      <circle cx="77.5" cy="33.5" r="1.7" fill={INK} />
      <path
        d="M4 82 Q14 75 24 82 T44 82 T64 82 T84 82 T100 82"
        stroke="#5c7f8f"
        strokeWidth="3.4"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  gjess: (
    <>
      <path d="M18 62 L5 54 L22 70 Z" fill={CREAM} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <ellipse cx="46" cy="66" rx="28" ry="17" fill={CREAM} stroke={INK} strokeWidth="2" />
      <path d="M44 66 C54 58 66 60 70 68 C60 76 50 76 44 66 Z" fill="#e6dfcd" />
      <path d="M62 58 C72 56 76 44 70 28" stroke={INK} strokeWidth="13" fill="none" strokeLinecap="round" />
      <path d="M62 58 C72 56 76 44 70 28" stroke={CREAM} strokeWidth="9" fill="none" strokeLinecap="round" />
      <circle cx="71" cy="23" r="8.5" fill={CREAM} stroke={INK} strokeWidth="2" />
      <path d="M78 21 L93 26 L78 31 Z" fill={HONEY} />
      <circle cx="73" cy="21" r="1.7" fill={INK} />
      {ben(42, 82, 92, HONEY, 3.5)}
      {ben(56, 82, 92, HONEY, 3.5)}
    </>
  ),
  kalkun: (
    <>
      <path d="M42 66 L8 46 A40 40 0 0 1 76 46 Z" fill="#7a4224" />
      <path d="M42 66 L16 52 A31 31 0 0 1 68 52 Z" fill="#c27a45" />
      <path d="M42 66 L24 56 A21 21 0 0 1 60 56 Z" fill="#e0a66b" />
      <ellipse cx="52" cy="66" rx="22" ry="16" fill="#5a3a22" />
      <path d="M62 58 L68 42 L77 42 L74 62 Z" fill="#5a3a22" />
      <circle cx="75" cy="36" r="7.5" fill="#5b8fb0" />
      <ellipse cx="81" cy="40" rx="2.6" ry="6" fill={BARN} />
      <polygon points="80,34 89,37 80,40" fill={HONEY} />
      <circle cx="76" cy="34" r="1.6" fill={INK} />
      {ben(46, 80, 92)}
      {ben(58, 80, 92)}
    </>
  ),
  sau: (
    <>
      {ben(38, 70, 90, INK, 5)}
      {ben(48, 72, 90, INK, 5)}
      {ben(62, 72, 90, INK, 5)}
      <g fill={INK} stroke={INK} strokeWidth="5">
        <circle cx="28" cy="52" r="12" />
        <circle cx="42" cy="42" r="14" />
        <circle cx="58" cy="43" r="14" />
        <circle cx="68" cy="56" r="12" />
        <circle cx="40" cy="62" r="13" />
        <circle cx="56" cy="62" r="13" />
      </g>
      <g fill="#f4efe3">
        <circle cx="28" cy="52" r="12" />
        <circle cx="42" cy="42" r="14" />
        <circle cx="58" cy="43" r="14" />
        <circle cx="68" cy="56" r="12" />
        <circle cx="40" cy="62" r="13" />
        <circle cx="56" cy="62" r="13" />
      </g>
      <ellipse cx="82" cy="54" rx="9" ry="12" fill="#3a3a30" />
      <ellipse cx="73" cy="46" rx="7" ry="3.2" fill="#3a3a30" transform="rotate(-25 73 46)" />
      <ellipse cx="90" cy="46" rx="6" ry="3" fill="#3a3a30" transform="rotate(20 90 46)" />
      <circle cx="85" cy="51" r="1.5" fill={CREAM} />
    </>
  ),
  lama: (
    <>
      {ben(30, 66, 92, "#8b6a45", 4.5)}
      {ben(39, 68, 92, "#8b6a45", 4.5)}
      {ben(60, 68, 92, "#8b6a45", 4.5)}
      {ben(69, 66, 92, "#8b6a45", 4.5)}
      <path d="M22 54 C14 52 10 58 14 64" stroke="#c9a77a" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="48" cy="58" rx="29" ry="15" fill="#c9a77a" />
      <ellipse cx="44" cy="62" rx="16" ry="7" fill="#d9bd94" />
      <path d="M60 52 L69 22 L80 24 L76 60 Z" fill="#c9a77a" />
      <ellipse cx="80" cy="19" rx="9.5" ry="7" fill="#c9a77a" transform="rotate(-8 80 19)" />
      <path d="M75 14 L73 2 L81 11 Z" fill="#b8956a" />
      <path d="M82 12 L86 1 L88 13 Z" fill="#b8956a" />
      <ellipse cx="88.5" cy="22" rx="4.5" ry="3.4" fill="#a98a60" />
      <circle cx="82" cy="17" r="1.6" fill={INK} />
    </>
  ),
  gris: (
    <>
      {ben(30, 72, 88, "#e69a92", 7)}
      {ben(44, 72, 88, "#e69a92", 7)}
      {ben(60, 72, 88, "#e69a92", 7)}
      {ben(72, 70, 88, "#e69a92", 7)}
      <path d="M18 54 C8 52 8 40 16 42" stroke="#e69a92" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <ellipse cx="46" cy="58" rx="30" ry="20" fill="#f0b9b0" />
      <circle cx="76" cy="55" r="14" fill="#f0b9b0" />
      <polygon points="64,48 68,32 80,44" fill="#e69a92" />
      <ellipse cx="90" cy="60" rx="6.5" ry="7.5" fill="#e69a92" />
      <circle cx="88" cy="59" r="1.3" fill={INK} />
      <circle cx="92" cy="61" r="1.3" fill={INK} />
      <circle cx="79" cy="51" r="1.8" fill={INK} />
    </>
  ),
  storfe: (
    <>
      {ben(26, 70, 90, "#a35f30", 7)}
      {ben(40, 70, 90, "#a35f30", 7)}
      {ben(60, 70, 90, "#a35f30", 7)}
      {ben(72, 70, 90, "#a35f30", 7)}
      <path d="M16 46 C6 50 6 62 12 72" stroke="#a35f30" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="74" r="3.5" fill="#7a4224" />
      <rect x="14" y="38" width="66" height="36" rx="15" fill="#c27a45" />
      <ellipse cx="44" cy="60" rx="14" ry="8" fill="#d28c57" />
      <rect x="72" y="42" width="24" height="24" rx="11" fill="#c27a45" />
      <path d="M76 44 C71 36 73 31 78 30" stroke={CREAM} strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M92 44 C97 36 95 31 90 30" stroke={CREAM} strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <ellipse cx="70" cy="48" rx="6" ry="3.2" fill="#a35f30" transform="rotate(25 70 48)" />
      <ellipse cx="89" cy="60" rx="9" ry="6.5" fill="#ecd2b0" />
      <circle cx="86" cy="60" r="1.3" fill={INK} />
      <circle cx="92" cy="60" r="1.3" fill={INK} />
      <circle cx="80" cy="50" r="1.7" fill={INK} />
    </>
  ),
};
