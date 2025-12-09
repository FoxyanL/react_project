import { motion } from 'framer-motion';

function AnimatedSpiderLogo({ size = 200 }) {
  return (
    <motion.div
      className="spider-silhouette"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <svg viewBox="0 0 200 200" className="spider-icon" width={size} height={size}>
        <circle cx="100" cy="100" r="30" fill="url(#spiderGradient)" />
        <ellipse cx="100" cy="80" rx="20" ry="25" fill="url(#spiderGradient)" />
        
        {/* Legs */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 100 + Math.cos(rad) * 30;
          const y1 = 100 + Math.sin(rad) * 30;
          const x2 = 100 + Math.cos(rad) * 80;
          const y2 = 100 + Math.sin(rad) * 80;
          return (
            <motion.path
              key={i}
              d={`M ${x1} ${y1} Q ${x1 + Math.cos(rad) * 50} ${y1 + Math.sin(rad) * 50 - 20} ${x2} ${y2}`}
              stroke="url(#spiderGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
            />
          );
        })}
        
        <defs>
          <linearGradient id="spiderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a2be2" />
            <stop offset="50%" stopColor="#dc143c" />
            <stop offset="100%" stopColor="#00ff41" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default AnimatedSpiderLogo;
