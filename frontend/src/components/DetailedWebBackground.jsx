function DetailedWebBackground() {
  return (
    <div className="web-background">
      <svg className="web-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <g className="web-lines">
          {/* 16 нитей */}
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 600 + Math.cos(rad) * 600;
            const y2 = 400 + Math.sin(rad) * 400;
            return (
              <line 
                key={`radial-${i}`}
                x1="600" 
                y1="400" 
                x2={x2} 
                y2={y2} 
                stroke="rgba(138, 43, 226, 0.4)" 
                strokeWidth="1.5"
                className="web-radial"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            );
          })}
          
          {/* 8 кругов */}
          {[60, 100, 150, 200, 260, 320, 390, 470].map((radius, i) => (
            <circle 
              key={`circle-${i}`}
              cx="600" 
              cy="400" 
              r={radius} 
              stroke={i % 2 === 0 ? "rgba(220, 20, 60, 0.3)" : "rgba(0, 255, 65, 0.25)"} 
              strokeWidth="1.5" 
              fill="none"
              className="web-circle"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
          
          {/* капельки */}
          {[
            { cx: 450, cy: 300, r: 3 },
            { cx: 750, cy: 280, r: 2.5 },
            { cx: 520, cy: 500, r: 3.5 },
            { cx: 680, cy: 520, r: 2 },
            { cx: 400, cy: 450, r: 2.8 },
            { cx: 800, cy: 380, r: 3.2 },
          ].map((drop, i) => (
            <circle
              key={`drop-${i}`}
              cx={drop.cx}
              cy={drop.cy}
              r={drop.r}
              fill="rgba(138, 43, 226, 0.6)"
              className="web-droplet"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <animate
                attributeName="r"
                values={`${drop.r};${drop.r * 1.5};${drop.r}`}
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default DetailedWebBackground;
