import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function HeroContent() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="hero-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
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
  );
}

export default HeroContent;
