import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png"
import Arrow_icon from '../Assets/arrow.png'
import Hero_image  from "../Assets/hero_image.png"


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icons">
            <p>new</p>
            <img src={hand_icon} alt="icon"/>
        </div>
        <p>collection</p>
        <p>for everone</p>
      <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={Arrow_icon} alt="arrow" />
      </div>
      </div>
      <div className="hero-right"></div>
      <img src={Hero_image} alt="hero" />
    </div>
  );
};

export default Hero;
