import DetailedWebBackground from '../components/DetailedWebBackground';
import AnimatedSpiderLogo from '../components/AnimatedSpiderLogo';
import HeroContent from '../components/HeroContent';
import './HomePage.css';

function HomePage() {
  return (
    <div className="spider-container">
      <DetailedWebBackground />
      
      <div className="hero-content">
        <AnimatedSpiderLogo size={200} />
        <HeroContent />
      </div>

      {/* паутина по углам */}
      <div className="corner-web top-left"></div>
      <div className="corner-web top-right"></div>
      <div className="corner-web bottom-left"></div>
      <div className="corner-web bottom-right"></div>
    </div>
  );
}

export default HomePage;