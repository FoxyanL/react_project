function SpiderIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="15" fill="url(#logoGradient)" />
      <ellipse cx="50" cy="40" rx="10" ry="12" fill="url(#logoGradient)" />
      
      {/* лапки */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 50 + Math.cos(rad) * 15;
        const y1 = 50 + Math.sin(rad) * 15;
        const x2 = 50 + Math.cos(rad) * 40;
        const y2 = 50 + Math.sin(rad) * 40;
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} Q ${x1 + Math.cos(rad) * 25} ${y1 + Math.sin(rad) * 25 - 10} ${x2} ${y2}`}
            stroke="url(#logoGradient)"
            strokeWidth="2"
            fill="none"
          />
        );
      })}
      
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a2be2" />
          <stop offset="50%" stopColor="#dc143c" />
          <stop offset="100%" stopColor="#00ff41" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SpiderIcon;
