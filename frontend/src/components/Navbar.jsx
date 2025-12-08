import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <motion.nav 
      className="spider-navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Web decoration line */}
      <div className="navbar-web-line"></div>

      <div className='navbar-brand'>
        {/* Spider icon */}
        <motion.div 
          className="spider-logo"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <svg viewBox="0 0 100 100" className="spider-logo-svg">
            <circle cx="50" cy="50" r="15" fill="url(#logoGradient)" />
            <ellipse cx="50" cy="40" rx="10" ry="12" fill="url(#logoGradient)" />
            
            {/* Spider legs */}
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
        </motion.div>
        
        <h2 className="navbar-title">
          <span className="title-spider">SPIDER</span>
          <span className="title-tasks">TASKS</span>
        </h2>
      </div>

      <div className='navbar-links'>
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Логово
          </motion.span>
        </Link>
        
        <Link 
          to="/tasks" 
          className={`nav-link ${location.pathname === '/tasks' ? 'active' : ''}`}
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
              <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Паутина
          </motion.span>
        </Link>
      </div>

      {/* Animated glowing orb */}
      <motion.div 
        className="navbar-orb"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.nav>
  );
}

export default Navbar;
