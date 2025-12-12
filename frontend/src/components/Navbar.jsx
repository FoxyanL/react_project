import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpiderIcon from './icons/SpiderIcon';
import HomeIcon from './icons/HomeIcon';
import CheckIcon from './icons/CheckIcon';
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
      <div className="navbar-web-line"></div>

      <div className='navbar-brand'>
        {/* иконка паука */}
        <motion.div 
          className="spider-logo"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          <SpiderIcon className="spider-logo-svg" />
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
            <HomeIcon className="nav-icon" />
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
            <CheckIcon className="nav-icon" />
            Паутина
          </motion.span>
        </Link>
      </div>

      {/* подписка снизу навбара */}
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
