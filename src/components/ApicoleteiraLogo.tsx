/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LogoProps {
  className?: string;
  size?: number | string;
}

export function ApicoleteiraLogo({ className = "", size = "100%" }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`} style={{ width: size, height: "auto" }}>
      <svg
        viewBox="0 0 500 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl filter"
      >
        <defs>
          {/* Top scoop color gradient */}
          <linearGradient id="apico-bell-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4d6d" />
            <stop offset="60%" stopColor="#f77f00" />
            <stop offset="100%" stopColor="#fcbf49" />
          </linearGradient>

          {/* Cone color gradient */}
          <linearGradient id="apico-cone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe494" />
            <stop offset="100%" stopColor="#f3b61f" />
          </linearGradient>

          {/* Core drop shadow */}
          <filter id="logo-shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter="url(#logo-shadow)" className="transition-transform duration-300 hover:scale-105 origin-center">
          {/* 1. BOTTOM: WAFFLE CONE */}
          {/* Yellow triangular cone pointing down */}
          <path
            d="M 180 270 L 320 270 L 250 410 Z"
            fill="url(#apico-cone-grad)"
            stroke="#e09e06"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Waffle crosshatch lines */}
          <path
            d="M 200 270 L 255 380 M 220 270 L 270 370 M 240 270 L 285 360 M 260 270 L 300 350 M 280 270 L 315 340"
            stroke="#ca8a04"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          <path
            d="M 300 270 L 245 380 M 280 270 L 230 370 M 260 270 L 215 360 M 240 270 L 200 350 M 220 270 L 185 340"
            stroke="#ca8a04"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />

          {/* 2. TOP: THE GRADIENT BELL/SCOOP SHAPE */}
          {/* Center position is X: 250, Y: 100 */}
          {/* Scoop base dome */}
          <path
            d="M 180 150 C 180 50, 320 50, 320 150 C 320 170, 310 180, 250 180 C 190 180, 180 170, 180 150 Z"
            fill="url(#apico-bell-grad)"
            stroke="#cc3e28"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Tiny cherry/accent stick or drip on top */}
          <path
            d="M 285 70 L 305 40"
            stroke="#cc3e28"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Highlight/shine on scoop */}
          <path
            d="M 205 110 C 200 130, 210 150, 225 152"
            stroke="#ffffff"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />

          {/* 3. MIDDLE-SIDES: TWO CROSSED CUTE GREEN POPSICLES (PICOLÉS) */}
          {/* Left crossed popsicle */}
          <g transform="translate(190, 155) rotate(-35) scale(0.9)">
            {/* Stick (Pauzinho) */}
            <rect x="25" y="60" width="10" height="25" rx="3" fill="#60a5fa" stroke="#2563eb" strokeWidth="2" />
            {/* Ice block (Picolé verde) */}
            <rect x="10" y="10" width="40" height="55" rx="8" fill="#10b981" stroke="#047857" strokeWidth="3" />
            {/* Shine */}
            <line x1="17" y1="18" x2="17" y2="45" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.4" />
          </g>

          {/* Right crossed popsicle */}
          <g transform="translate(310, 155) rotate(35) scale(0.9) translate(-60, 0)">
            {/* Stick (Pauzinho) */}
            <rect x="25" y="60" width="10" height="25" rx="3" fill="#60a5fa" stroke="#2563eb" strokeWidth="2" />
            {/* Ice block (Picolé verde) */}
            <rect x="10" y="10" width="40" height="55" rx="8" fill="#10b981" stroke="#047857" strokeWidth="3" />
            {/* Shine */}
            <line x1="17" y1="18" x2="17" y2="45" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.4" />
          </g>

          {/* 4. MAIN CENTRAL BANNER (CAPSULE) */}
          {/* Outer blue shadow outline banner */}
          <rect
            x="35"
            y="175"
            width="430"
            height="100"
            rx="50"
            fill="#ffffff"
            stroke="#2563eb"
            strokeWidth="12"
          />
          {/* Inner blue fine border line */}
          <rect
            x="45"
            y="185"
            width="410"
            height="80"
            rx="40"
            fill="transparent"
            stroke="#60a5fa"
            strokeWidth="3.5"
          />

          {/* 5. BRAND TEXT "APICOLETEIRA" */}
          <text
            x="250"
            y="238"
            fontFamily="'Impact', 'Arial Black', 'Trebuchet MS', sans-serif"
            fontSize="45"
            fontWeight="bold"
            fill="#1e3a8a"
            letterSpacing="3"
            textAnchor="middle"
          >
            APICOLETEIRA
          </text>
        </g>
      </svg>
    </div>
  );
}
