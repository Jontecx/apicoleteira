import React from "react";

export function ApicoleteiraLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
    >
      {/* Dynamic interlocking double square modern heritage logo */}
      <rect
        x="15"
        y="25"
        width="50"
        height="50"
        rx="12"
        transform="rotate(-15 40 50)"
        fill="#222222"
        stroke="#ffffff"
        strokeWidth="3"
      />
      <rect
        x="35"
        y="25"
        width="50"
        height="50"
        rx="12"
        transform="rotate(15 60 50)"
        fill="#2563eb"
        stroke="#ffffff"
        strokeWidth="3"
        fillOpacity="0.95"
      />
      {/* Sabor/Ice cream stylized swirl or drop emblem in whitespace */}
      <path
        d="M45 42 C45 35, 55 35, 55 42 C55 50, 45 54, 50 62 C40 62, 41 52, 45 42 Z"
        fill="#ffffff"
      />
    </svg>
  );
}
