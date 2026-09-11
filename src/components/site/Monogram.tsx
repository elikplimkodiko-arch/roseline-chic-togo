export default function Monogram({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Emblème Roseline VIP Shop"
      className={className}
    >
      <defs>
        <linearGradient id="rvs-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E5C158" />
          <stop offset="45%" stopColor="#F3E3B0" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="none" stroke="url(#rvs-gold)" strokeWidth="1.6" />
      <circle
        cx="32"
        cy="32"
        r="25.5"
        fill="none"
        stroke="url(#rvs-gold)"
        strokeWidth="0.7"
        opacity="0.75"
      />
      <path
        d="M32 6.5 33.6 10.2 37.3 11.8 33.6 13.4 32 17.1 30.4 13.4 26.7 11.8 30.4 10.2Z"
        fill="url(#rvs-gold)"
      />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fill="url(#rvs-gold)"
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "22px",
          fontWeight: 600,
          letterSpacing: "1px",
        }}
      >
        RV
      </text>
      <path d="M22 47h20" stroke="url(#rvs-gold)" strokeWidth="1" />
    </svg>
  );
}
