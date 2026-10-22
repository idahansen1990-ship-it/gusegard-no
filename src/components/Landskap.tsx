// Dekorativt landskap: fjord, åkre, låve og sau. Himmelen ligger i CSS, så den kan fortone seg bak teksten.
export function Landskap({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 600"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      {/* fjell */}
      <path
        d="M0 300 L110 238 L215 282 L340 188 L470 268 L560 228 L700 304 L826 214 L960 290 L1100 196 L1232 280 L1342 226 L1460 290 L1600 236 L1600 600 L0 600 Z"
        fill="#a8bec4"
      />
      <path
        d="M0 340 L150 290 L260 322 L400 262 L520 318 L650 276 L780 332 L930 270 L1060 326 L1210 262 L1350 322 L1480 282 L1600 318 L1600 600 L0 600 Z"
        fill="#8fa9ae"
      />
      {/* fjorden */}
      <rect x="0" y="356" width="1600" height="244" fill="#a7c3ca" />
      <g stroke="#ffffff" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round">
        <path d="M180 392 h90" />
        <path d="M420 410 h140" />
        <path d="M900 396 h110" />
        <path d="M1180 414 h150" />
        <path d="M640 424 h70" />
      </g>
      {/* andre siden av fjorden */}
      <path
        d="M0 424 C220 392 420 410 640 402 C900 394 1200 418 1600 388 L1600 600 L0 600 Z"
        fill="#6f8f6c"
      />
      {/* åkrene rundt gården */}
      <path
        d="M0 478 C250 436 500 446 760 454 C1050 464 1300 424 1600 446 L1600 600 L0 600 Z"
        fill="#93ac66"
      />
      <path
        d="M0 506 C260 470 520 478 780 486 C1060 494 1320 462 1600 478 L1600 600 L0 600 Z"
        fill="#7d9a56"
      />
      {/* gårdsbygninger */}
      <g>
        <rect x="684" y="420" width="82" height="46" fill="#a23f2b" />
        <polygon points="674,422 725,386 776,422" fill="#5c2418" />
        <rect x="712" y="436" width="28" height="30" fill="#f4efe3" />
        <path d="M712 436 L740 466 M740 436 L712 466" stroke="#a23f2b" strokeWidth="2.5" />
        <rect x="790" y="432" width="60" height="36" fill="#f4efe3" />
        <polygon points="782,434 820,404 858,434" fill="#7a4a35" />
        <rect x="802" y="444" width="11" height="12" fill="#d8a23a" />
        <rect x="828" y="444" width="11" height="12" fill="#d8a23a" />
        <rect x="838" y="402" width="8" height="18" fill="#7a4a35" />
      </g>
      {/* sau på jordet */}
      <g>
        <ellipse cx="300" cy="494" rx="13" ry="9" fill="#fbf7ee" />
        <circle cx="312" cy="492" r="5" fill="#3a3a30" />
        <ellipse cx="360" cy="503" rx="11" ry="8" fill="#fbf7ee" />
        <circle cx="371" cy="501" r="4.5" fill="#3a3a30" />
        <ellipse cx="1120" cy="480" rx="12" ry="8.5" fill="#fbf7ee" />
        <circle cx="1131" cy="478" r="4.5" fill="#3a3a30" />
        <ellipse cx="1190" cy="490" rx="13" ry="9" fill="#fbf7ee" />
        <circle cx="1202" cy="488" r="5" fill="#3a3a30" />
        <ellipse cx="1060" cy="494" rx="10" ry="7.5" fill="#fbf7ee" />
        <circle cx="1070" cy="492" r="4" fill="#3a3a30" />
      </g>
      {/* skogen */}
      <path
        d="M0 548 C300 516 620 530 920 532 C1200 534 1400 514 1600 530 L1600 600 L0 600 Z"
        fill="#4f6b45"
      />
      <g fill="#2f4a36">
        <polygon points="1320,540 1346,470 1372,540" />
        <polygon points="1362,544 1396,452 1430,544" />
        <polygon points="1414,540 1440,476 1466,540" />
        <polygon points="1458,546 1488,462 1518,546" />
        <polygon points="1512,542 1536,484 1560,542" />
        <polygon points="70,548 96,486 122,548" />
        <polygon points="112,552 144,468 176,552" />
        <polygon points="164,548 188,494 212,548" />
      </g>
      <path
        d="M0 584 C420 564 1020 572 1600 566 L1600 600 L0 600 Z"
        fill="#2f4a36"
      />
    </svg>
  );
}
