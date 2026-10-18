/** Единый набор объёмных SVG-иллюстраций для карточек направлений. */

import type { ReactNode } from "react";

type ArtProps = { className?: string };

function Frame({ className, children }: ArtProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="artShine" x1="20" y1="10" x2="140" y2="110" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id="artSoft" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#12141a" floodOpacity="0.16" />
        </filter>
      </defs>
      <g filter="url(#artSoft)">{children}</g>
    </svg>
  );
}

export function ArtLogic({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect x="28" y="50" width="34" height="34" rx="8" fill="#6b8cff" />
      <rect x="28" y="50" width="34" height="34" rx="8" fill="url(#artShine)" />
      <rect x="63" y="34" width="34" height="34" rx="8" fill="#8aa4ff" />
      <rect x="63" y="34" width="34" height="34" rx="8" fill="url(#artShine)" />
      <rect x="98" y="54" width="34" height="34" rx="8" fill="#4f6ef5" />
      <rect x="98" y="54" width="34" height="34" rx="8" fill="url(#artShine)" />
    </Frame>
  );
}

export function ArtObservation({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <ellipse cx="80" cy="60" rx="50" ry="28" fill="#ffb06b" />
      <ellipse cx="80" cy="60" rx="50" ry="28" fill="url(#artShine)" />
      <circle cx="80" cy="60" r="17" fill="#fff7ed" />
      <circle cx="80" cy="60" r="10" fill="#1f2937" />
      <circle cx="84" cy="56" r="3" fill="#fff" opacity="0.9" />
    </Frame>
  );
}

export function ArtPsychology({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <path
        d="M50 70c0-20 13-34 30-34s30 14 30 34c0 9-3 16-9 22l-7 7H66l-7-7c-6-6-9-13-9-22z"
        fill="#b58cff"
      />
      <path
        d="M50 70c0-20 13-34 30-34s30 14 30 34c0 9-3 16-9 22l-7 7H66l-7-7c-6-6-9-13-9-22z"
        fill="url(#artShine)"
      />
      <path d="M68 58c4-6 10-8 16-6" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </Frame>
  );
}

export function ArtMemory({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect x="42" y="30" width="46" height="60" rx="8" fill="#5ecf97" />
      <rect x="42" y="30" width="46" height="60" rx="8" fill="url(#artShine)" />
      <rect x="72" y="38" width="46" height="60" rx="8" fill="#3eb87e" />
      <rect x="72" y="38" width="46" height="60" rx="8" fill="url(#artShine)" />
      <rect x="82" y="52" width="22" height="4" rx="2" fill="#fff" opacity="0.75" />
      <rect x="82" y="62" width="16" height="4" rx="2" fill="#fff" opacity="0.55" />
    </Frame>
  );
}

export function ArtErudition({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <circle cx="80" cy="60" r="34" fill="#6ec0ff" />
      <circle cx="80" cy="60" r="34" fill="url(#artShine)" />
      <ellipse cx="80" cy="60" rx="14" ry="34" stroke="#fff" strokeWidth="3" opacity="0.75" />
      <path d="M48 60h64M50 44h60M50 76h60" stroke="#fff" strokeWidth="2.5" opacity="0.65" />
    </Frame>
  );
}

export function ArtLanguages({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect x="30" y="36" width="58" height="42" rx="16" fill="#4fd1a5" />
      <rect x="30" y="36" width="58" height="42" rx="16" fill="url(#artShine)" />
      <path d="M48 78l8-10h-14l6 10z" fill="#4fd1a5" />
      <rect x="78" y="50" width="52" height="36" rx="14" fill="#2f9f7a" />
      <rect x="78" y="50" width="52" height="36" rx="14" fill="url(#artShine)" />
      <text x="48" y="63" fill="#fff" fontSize="16" fontWeight="700" fontFamily="system-ui,sans-serif">
        A
      </text>
      <text x="96" y="74" fill="#fff" fontSize="14" fontWeight="700" fontFamily="system-ui,sans-serif">
        文
      </text>
    </Frame>
  );
}

export function ArtMath({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <circle cx="80" cy="60" r="36" fill="#7b8cff" />
      <circle cx="80" cy="60" r="36" fill="url(#artShine)" />
      <text
        x="80"
        y="72"
        textAnchor="middle"
        fill="#fff"
        fontSize="42"
        fontWeight="700"
        fontFamily="Georgia,serif"
      >
        π
      </text>
    </Frame>
  );
}

export function ArtSkills({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <path d="M78 88c-18-4-28-22-22-40 4-12 16-20 28-18 10 2 18 10 20 20" fill="#9adf6a" />
      <path d="M78 88c-18-4-28-22-22-40 4-12 16-20 28-18 10 2 18 10 20 20" fill="url(#artShine)" />
      <ellipse cx="96" cy="42" rx="14" ry="18" fill="#7bc94a" />
      <ellipse cx="96" cy="42" rx="14" ry="18" fill="url(#artShine)" />
      <rect x="74" y="78" width="10" height="18" rx="4" fill="#c4a574" />
    </Frame>
  );
}
