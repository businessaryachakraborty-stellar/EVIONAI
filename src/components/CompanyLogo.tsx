import React from "react";

interface CompanyLogoProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export default function CompanyLogo({
  className = "",
  size = "100%",
  color = "#1E60FF" // Modern vibrant electric blue from the official logo
}: CompanyLogoProps) {
  return (
    <svg
      viewBox="0 0 100 73"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300`}
    >
      {/* Top Bar of E */}
      <path
        d="M 12 15 H 48"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
      />
      
      {/* Middle Bar of E */}
      <path
        d="M 12 36.5 H 36"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
      />
      
      {/* Bottom Bar of E bending into the A-frame */}
      <path
        d="M 12 58 H 34 L 55 20 C 57.5 15.5, 62.5 15.5, 65 20 L 86 58"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
