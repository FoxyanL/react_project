function WebBackground({ opacity = 0.1 }) {
  return (
    <svg className="background-web" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <g opacity={opacity}>
        {/* Radial threads */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
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
              stroke="rgba(138, 43, 226, 0.5)" 
              strokeWidth="1"
            />
          );
        })}
        
        {/* Circular threads */}
        <circle cx="600" cy="400" r="200" stroke="rgba(138, 43, 226, 0.5)" strokeWidth="1" fill="none" />
        <circle cx="600" cy="400" r="350" stroke="rgba(138, 43, 226, 0.5)" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
}

export default WebBackground;
