import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="spider-container">
      {/* Animated web background */}
      <div className="web-background">
        <svg className="web-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <g className="web-lines">
            {/* Main radial threads - 16 directions */}
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
            
            {/* Circular web threads - 8 concentric circles */}
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
            
            {/* Decorative droplets */}
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
            
            {/* Corner web clusters */}
            <g className="corner-cluster top-left-cluster">
              <path d="M 0 0 Q 50 30 100 0" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 0 0 Q 30 50 0 100" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 0 50 Q 25 50 50 30" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="1" fill="none" />
              <path d="M 50 0 Q 50 25 30 50" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="1" fill="none" />
            </g>
            
            <g className="corner-cluster top-right-cluster">
              <path d="M 1200 0 Q 1150 30 1100 0" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 1200 0 Q 1170 50 1200 100" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 1200 50 Q 1175 50 1150 30" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="1" fill="none" />
              <path d="M 1150 0 Q 1150 25 1170 50" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="1" fill="none" />
            </g>
            
            <g className="corner-cluster bottom-left-cluster">
              <path d="M 0 800 Q 50 770 100 800" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 0 800 Q 30 750 0 700" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 0 750 Q 25 750 50 770" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="1" fill="none" />
              <path d="M 50 800 Q 50 775 30 750" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="1" fill="none" />
            </g>
            
            <g className="corner-cluster bottom-right-cluster">
              <path d="M 1200 800 Q 1150 770 1100 800" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 1200 800 Q 1170 750 1200 700" stroke="rgba(138, 43, 226, 0.4)" strokeWidth="2" fill="none" />
              <path d="M 1200 750 Q 1175 750 1150 770" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="1" fill="none" />
              <path d="M 1150 800 Q 1150 775 1170 750" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="1" fill="none" />
            </g>
          </g>
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Spider silhouette */}
        <motion.div
          className="spider-silhouette"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 200 200" className="spider-icon">
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

        <motion.h1
          className="title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="glitch" data-text="SPIDER">SPIDER</span>
          <span className="glitch" data-text="TASKS">TASKS</span>
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Плети паутину из задач. Управляй как королева пауков.
        </motion.p>

        <motion.p
          className="description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Каждая задача — нить в твоей паутине. Создавай, контролируй, доминируй.
        </motion.p>

        <motion.button
          className="chitin-button"
          onClick={() => navigate('/tasks')}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(138, 43, 226, 0.8), 0 0 60px rgba(220, 20, 60, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="button-text">Войти в логово</span>
          <svg className="button-icon" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </motion.div>

      {/* Corner web decorations */}
      <div className="corner-web top-left"></div>
      <div className="corner-web top-right"></div>
      <div className="corner-web bottom-left"></div>
      <div className="corner-web bottom-right"></div>
    </div>
  );
}

export default HomePage;